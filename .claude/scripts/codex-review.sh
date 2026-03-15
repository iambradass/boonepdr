#!/usr/bin/env bash
#
# Codex Review Script for Claude Code Hook
#
# Triggered after Claude Code edits/writes files related to website
# components and tool designs. Sends the diff to OpenAI Codex/GPT
# for an independent review focusing on UI/UX, accessibility,
# performance, and code quality.
#
# Requirements:
#   - OPENAI_API_KEY environment variable set
#   - curl and jq available
#
# Usage: Called automatically by Claude Code hooks, or manually:
#   .claude/scripts/codex-review.sh [file_path]

set -euo pipefail

REVIEW_LOG=".claude/reviews/$(date +%Y%m%d-%H%M%S).md"
OPENAI_MODEL="${CODEX_REVIEW_MODEL:-gpt-4o}"
OPENAI_API_URL="https://api.openai.com/v1/chat/completions"

# File patterns that trigger review (website & tool design files)
REVIEW_PATTERNS=(
  "src/components/"
  "src/app/"
  "src/lib/"
  "*.tsx"
  "*.ts"
  "*.css"
)

# Check if file matches review patterns
should_review() {
  local file="$1"
  for pattern in "${REVIEW_PATTERNS[@]}"; do
    if [[ "$file" == *"$pattern"* ]] || [[ "$file" == $pattern ]]; then
      return 0
    fi
  done
  return 1
}

# Get the changes to review
get_diff() {
  local file="${1:-}"
  if [[ -n "$file" && -f "$file" ]]; then
    git diff HEAD -- "$file" 2>/dev/null || git diff --cached -- "$file" 2>/dev/null || cat "$file"
  else
    git diff HEAD 2>/dev/null || git diff --cached 2>/dev/null || echo "No diff available"
  fi
}

# Send to OpenAI for review
call_codex_review() {
  local diff_content="$1"
  local file_path="${2:-unknown}"

  if [[ -z "${OPENAI_API_KEY:-}" ]]; then
    echo "⚠ OPENAI_API_KEY not set. Skipping Codex review."
    echo "  Set it with: export OPENAI_API_KEY=your-key"
    exit 0
  fi

  local system_prompt
  system_prompt=$(cat <<'SYSPROMPT'
You are a senior frontend engineer and UX designer reviewing code changes for a Next.js website (Boone PDR - a paintless dent repair business site). Review the diff and provide concise, actionable feedback.

Focus your review on:
1. **UI/UX Quality**: Layout, spacing, visual hierarchy, user flow
2. **Accessibility**: ARIA labels, semantic HTML, keyboard navigation, color contrast
3. **Performance**: Bundle size impact, unnecessary re-renders, image optimization, lazy loading
4. **Mobile Responsiveness**: Touch targets, breakpoints, viewport handling
5. **SEO Impact**: Meta tags, heading hierarchy, structured data, semantic markup
6. **Code Quality**: TypeScript best practices, component composition, prop handling
7. **Design Consistency**: Tailwind class usage, color palette adherence, spacing system

Format your response as:
## Codex Review Summary
**File**: [filename]
**Risk Level**: Low / Medium / High

### Issues Found
- [List specific issues with line references if possible]

### Suggestions
- [Actionable improvements]

### Approval
✅ LGTM — or — ⚠️ Changes Requested — or — ❌ Needs Rework

Keep it brief and actionable. Skip praise — focus on what needs fixing.
SYSPROMPT
)

  local payload
  payload=$(jq -n \
    --arg model "$OPENAI_MODEL" \
    --arg system "$system_prompt" \
    --arg user "Review this code change for file \`$file_path\`:\n\n\`\`\`diff\n$diff_content\n\`\`\`" \
    '{
      model: $model,
      messages: [
        { role: "system", content: $system },
        { role: "user", content: $user }
      ],
      temperature: 0.3,
      max_tokens: 1500
    }')

  local response
  response=$(curl -s -w "\n%{http_code}" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -H "Content-Type: application/json" \
    -d "$payload" \
    "$OPENAI_API_URL" 2>/dev/null)

  local http_code
  http_code=$(echo "$response" | tail -1)
  local body
  body=$(echo "$response" | sed '$d')

  if [[ "$http_code" != "200" ]]; then
    echo "⚠ Codex review API returned HTTP $http_code"
    echo "  Response: $(echo "$body" | jq -r '.error.message // .error // "Unknown error"' 2>/dev/null || echo "$body")"
    exit 0
  fi

  echo "$body" | jq -r '.choices[0].message.content // "No review content returned"'
}

# Save review to log
save_review() {
  local review="$1"
  local file_path="${2:-unknown}"

  mkdir -p "$(dirname "$REVIEW_LOG")"

  cat > "$REVIEW_LOG" <<EOF
# Codex Review — $(date '+%Y-%m-%d %H:%M:%S')
**Reviewed file**: \`$file_path\`
**Model**: $OPENAI_MODEL

---

$review
EOF

  echo "📝 Review saved to: $REVIEW_LOG"
}

# Main
main() {
  local target_file="${1:-}"

  # If a specific file was passed, check if it should be reviewed
  if [[ -n "$target_file" ]]; then
    if ! should_review "$target_file"; then
      exit 0
    fi
  fi

  local diff
  diff=$(get_diff "$target_file")

  # Skip if no meaningful changes
  if [[ -z "$diff" || "$diff" == "No diff available" ]]; then
    exit 0
  fi

  # Truncate very large diffs to avoid token limits
  if [[ ${#diff} -gt 12000 ]]; then
    diff="${diff:0:12000}

... [diff truncated — showing first 12000 chars]"
  fi

  echo ""
  echo "🔍 Running Codex review on: ${target_file:-staged changes}..."
  echo ""

  local review
  review=$(call_codex_review "$diff" "$target_file")

  echo "$review"
  save_review "$review" "$target_file"
}

main "$@"

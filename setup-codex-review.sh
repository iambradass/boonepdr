#!/usr/bin/env bash
#
# Codex Review Setup for Claude Code (Mac)
#
# Downloads and installs the global Codex review hook so that
# OpenAI reviews Claude Code's work on website & tool files.
#
# Usage:
#   chmod +x setup-codex-review.sh
#   ./setup-codex-review.sh
#

set -euo pipefail

echo ""
echo "==================================="
echo "  Codex Review Setup for Claude Code"
echo "==================================="
echo ""

# --- 1. Create directories ---
echo "📁 Creating directories..."
mkdir -p ~/.claude/scripts
mkdir -p ~/.claude/reviews
echo "   ✅ ~/.claude/scripts/"
echo "   ✅ ~/.claude/reviews/"

# --- 2. Create the review script ---
echo ""
echo "📝 Installing codex-review.sh..."
cat > ~/.claude/scripts/codex-review.sh << 'REVIEWSCRIPT'
#!/usr/bin/env bash
set -euo pipefail

if [[ "${CODEX_REVIEW_ENABLED:-true}" == "false" ]]; then
  exit 0
fi

REVIEW_DIR="$HOME/.claude/reviews"
REVIEW_LOG="$REVIEW_DIR/$(date +%Y%m%d-%H%M%S).md"
OPENAI_MODEL="${CODEX_REVIEW_MODEL:-gpt-4o}"
OPENAI_API_URL="https://api.openai.com/v1/chat/completions"

REVIEW_EXTENSIONS=("tsx" "ts" "jsx" "js" "css" "scss" "html" "svelte" "vue")

should_review() {
  local file="$1"
  local ext="${file##*.}"
  for e in "${REVIEW_EXTENSIONS[@]}"; do
    if [[ "$ext" == "$e" ]]; then
      return 0
    fi
  done
  return 1
}

get_diff() {
  local file="${1:-}"
  if [[ -n "$file" && -f "$file" ]]; then
    git diff HEAD -- "$file" 2>/dev/null || git diff --cached -- "$file" 2>/dev/null || cat "$file"
  else
    git diff HEAD 2>/dev/null || git diff --cached 2>/dev/null || echo "No diff available"
  fi
}

call_codex_review() {
  local diff_content="$1"
  local file_path="${2:-unknown}"

  if [[ -z "${OPENAI_API_KEY:-}" ]]; then
    echo "⚠ OPENAI_API_KEY not set. Skipping Codex review."
    exit 0
  fi

  local system_prompt
  system_prompt=$(cat <<'SYSPROMPT'
You are a senior frontend engineer, UX designer, and tool architect reviewing code changes. You are acting as an independent reviewer for work done by another AI (Claude Code). Provide concise, actionable feedback.

Focus your review on:
1. **UI/UX Quality**: Layout, spacing, visual hierarchy, user flow, interaction design
2. **Accessibility**: ARIA labels, semantic HTML, keyboard navigation, color contrast
3. **Performance**: Bundle size impact, unnecessary re-renders, image optimization, lazy loading
4. **Mobile Responsiveness**: Touch targets, breakpoints, viewport handling
5. **SEO Impact**: Meta tags, heading hierarchy, structured data, semantic markup
6. **Code Quality**: TypeScript best practices, component composition, prop handling
7. **Design Consistency**: CSS/utility class usage, color palette, spacing system
8. **Tool Design** (if applicable): API design, error handling, input validation, extensibility

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

save_review() {
  local review="$1"
  local file_path="${2:-unknown}"
  local project_name
  project_name=$(basename "$(git rev-parse --show-toplevel 2>/dev/null || pwd)")
  mkdir -p "$REVIEW_DIR"
  cat > "$REVIEW_LOG" <<EOF
# Codex Review — $(date '+%Y-%m-%d %H:%M:%S')
**Project**: $project_name
**Reviewed file**: \`$file_path\`
**Model**: $OPENAI_MODEL

---

$review
EOF
  echo "📝 Review saved to: $REVIEW_LOG"
}

main() {
  local target_file="${1:-}"
  if [[ -n "$target_file" ]]; then
    if ! should_review "$target_file"; then
      exit 0
    fi
  fi
  local diff
  diff=$(get_diff "$target_file")
  if [[ -z "$diff" || "$diff" == "No diff available" ]]; then
    exit 0
  fi
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
REVIEWSCRIPT
chmod +x ~/.claude/scripts/codex-review.sh
echo "   ✅ ~/.claude/scripts/codex-review.sh installed"

# --- 3. Update settings.json ---
echo ""
echo "⚙️  Configuring Claude Code hooks..."

if [[ -f ~/.claude/settings.json ]]; then
  # Back up existing settings
  cp ~/.claude/settings.json ~/.claude/settings.json.backup
  echo "   📋 Backed up existing settings to ~/.claude/settings.json.backup"

  # Check if PostToolUse hooks already exist
  if grep -q "PostToolUse" ~/.claude/settings.json 2>/dev/null; then
    echo "   ⚠️  PostToolUse hooks already exist in settings.json"
    echo "   Please manually merge the Codex review hooks."
    echo "   See ~/.claude/settings.json.codex-example for the hook config."
    cat > ~/.claude/settings.json.codex-example << 'EXAMPLEEOF'
Add these entries inside your existing "hooks" object in ~/.claude/settings.json:

"PostToolUse": [
    {
        "matcher": "Edit",
        "hooks": [
            {
                "type": "command",
                "command": "~/.claude/scripts/codex-review.sh \"$CLAUDE_FILE_PATH\""
            }
        ]
    },
    {
        "matcher": "Write",
        "hooks": [
            {
                "type": "command",
                "command": "~/.claude/scripts/codex-review.sh \"$CLAUDE_FILE_PATH\""
            }
        ]
    }
]
EXAMPLEEOF
  else
    # Add PostToolUse hooks to existing settings using jq if available
    if command -v jq &> /dev/null; then
      jq '.hooks.PostToolUse = [
        {
          "matcher": "Edit",
          "hooks": [{"type": "command", "command": "~/.claude/scripts/codex-review.sh \"$CLAUDE_FILE_PATH\""}]
        },
        {
          "matcher": "Write",
          "hooks": [{"type": "command", "command": "~/.claude/scripts/codex-review.sh \"$CLAUDE_FILE_PATH\""}]
        }
      ]' ~/.claude/settings.json > ~/.claude/settings.json.tmp && mv ~/.claude/settings.json.tmp ~/.claude/settings.json
      echo "   ✅ PostToolUse hooks added to existing settings.json"
    else
      echo "   ⚠️  jq not found — writing example file instead."
      echo "   Please manually add the hooks from ~/.claude/settings.json.codex-example"
    fi
  fi
else
  # No existing settings — create fresh
  cat > ~/.claude/settings.json << 'SETTINGSEOF'
{
    "hooks": {
        "PostToolUse": [
            {
                "matcher": "Edit",
                "hooks": [
                    {
                        "type": "command",
                        "command": "~/.claude/scripts/codex-review.sh \"$CLAUDE_FILE_PATH\""
                    }
                ]
            },
            {
                "matcher": "Write",
                "hooks": [
                    {
                        "type": "command",
                        "command": "~/.claude/scripts/codex-review.sh \"$CLAUDE_FILE_PATH\""
                    }
                ]
            }
        ]
    }
}
SETTINGSEOF
  echo "   ✅ ~/.claude/settings.json created"
fi

# --- 4. Set up API key ---
echo ""
echo "🔑 OpenAI API Key Setup"

SHELL_RC="$HOME/.zshrc"
if [[ ! -f "$SHELL_RC" ]]; then
  SHELL_RC="$HOME/.bashrc"
fi

if grep -q "OPENAI_API_KEY" "$SHELL_RC" 2>/dev/null; then
  echo "   ✅ OPENAI_API_KEY already found in $SHELL_RC"
else
  echo ""
  read -rp "   Enter your OpenAI API key (or press Enter to skip): " api_key
  if [[ -n "$api_key" ]]; then
    echo "" >> "$SHELL_RC"
    echo "# OpenAI API key for Codex review" >> "$SHELL_RC"
    echo "export OPENAI_API_KEY=$api_key" >> "$SHELL_RC"
    echo "   ✅ API key added to $SHELL_RC"
    echo "   Run: source $SHELL_RC"
  else
    echo "   ⏭️  Skipped. Add it later with:"
    echo "   echo 'export OPENAI_API_KEY=sk-your-key' >> $SHELL_RC"
  fi
fi

# --- Done ---
echo ""
echo "==================================="
echo "  ✅ Setup Complete!"
echo "==================================="
echo ""
echo "  Next steps:"
echo "  1. Run: source $SHELL_RC"
echo "  2. Start Claude Code in any project"
echo "  3. When Claude edits web/tool files, Codex will auto-review"
echo ""
echo "  Controls:"
echo "  • export CODEX_REVIEW_MODEL=gpt-4o-mini  (cheaper reviews)"
echo "  • export CODEX_REVIEW_ENABLED=false       (disable temporarily)"
echo "  • Review logs: ~/.claude/reviews/"
echo ""

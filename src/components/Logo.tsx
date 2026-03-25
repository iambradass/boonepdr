interface LogoProps {
  size?: number;
  className?: string;
  variant?: "dark" | "light";
}

export default function Logo({
  size = 160,
  className = "",
  variant = "dark",
}: LogoProps) {
  const isDark = variant === "light";
  const textColor = isDark ? "#FFFFFF" : "#1A2744";
  const pdrColor = "#C41E3A";

  // Unique gradient IDs to avoid collisions when multiple logos render
  const uid = isDark ? "l" : "d";

  // Responsive scaling
  const scale = size / 160;
  const iconW = Math.round(120 * scale);
  const iconH = Math.round(52 * scale);
  const booneSize = Math.round(26 * scale);
  const pdrSize = Math.round(13 * scale);
  const pdrGap = Math.round(3 * scale);

  return (
    <span
      className={`inline-flex flex-col items-center select-none ${className}`}
      aria-label="Boone PDR"
    >
      {/* Combined PDR tool icon — hockey stick rod + knockdown hammer */}
      <svg
        width={iconW}
        height={iconH}
        viewBox="0 0 120 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" }}
      >
        <defs>
          {/* Metallic shaft gradient — steel/chrome feel */}
          <linearGradient id={`shaft-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={isDark ? "#E8E8E8" : "#A0A8B8"} />
            <stop offset="30%" stopColor={isDark ? "#C8CCD4" : "#7A8494"} />
            <stop offset="50%" stopColor={isDark ? "#F0F0F0" : "#B8BCC8"} />
            <stop offset="70%" stopColor={isDark ? "#C8CCD4" : "#7A8494"} />
            <stop offset="100%" stopColor={isDark ? "#A0A4AC" : "#5C6474"} />
          </linearGradient>

          {/* Red accent gradient for tool tips — 3D depth */}
          <linearGradient id={`tip-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E84040" />
            <stop offset="40%" stopColor="#C41E3A" />
            <stop offset="100%" stopColor="#8B1A2B" />
          </linearGradient>

          {/* Grip texture gradient — dark rubber feel */}
          <linearGradient id={`grip-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3A3A3A" />
            <stop offset="30%" stopColor="#1A1A1A" />
            <stop offset="50%" stopColor="#2E2E2E" />
            <stop offset="70%" stopColor="#1A1A1A" />
            <stop offset="100%" stopColor="#3A3A3A" />
          </linearGradient>

          {/* Highlight for chrome edge */}
          <linearGradient id={`hi-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Knockdown hammer gold accent */}
          <linearGradient id={`gold-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4A84B" />
            <stop offset="40%" stopColor="#B8922E" />
            <stop offset="60%" stopColor="#E0BC5A" />
            <stop offset="100%" stopColor="#9A7A20" />
          </linearGradient>
        </defs>

        {/* === LEFT: Hockey stick rod curve === */}

        {/* Shadow of the curved tip */}
        <path
          d="M8 42 C8 36, 10 28, 16 22"
          stroke="#000"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          opacity="0.08"
          transform="translate(1, 2)"
        />

        {/* Curved rod tip — the J-hook */}
        <path
          d="M8 42 C8 35, 10 27, 16 22"
          stroke={`url(#shaft-${uid})`}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Red tip cap on the hook end */}
        <circle cx="8" cy="42" r="3.5" fill={`url(#tip-${uid})`} />
        <circle cx="8" cy="42" r="1.5" fill="#E84040" opacity="0.6" />

        {/* === CENTER: Main shaft === */}

        {/* Shadow */}
        <line
          x1="16" y1="22" x2="100" y2="22"
          stroke="#000"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.06"
          transform="translate(0, 2)"
        />

        {/* Main shaft — metallic */}
        <line
          x1="16" y1="22" x2="100" y2="22"
          stroke={`url(#shaft-${uid})`}
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Chrome highlight stripe along shaft */}
        <line
          x1="20" y1="20.5" x2="96" y2="20.5"
          stroke={`url(#hi-${uid})`}
          strokeWidth="0.8"
        />

        {/* Grip section — dark rubber in the middle */}
        <rect
          x="44" y="19" width="28" height="6" rx="2.5"
          fill={`url(#grip-${uid})`}
        />
        {/* Grip texture lines */}
        {[0, 4, 8, 12, 16, 20, 24].map((offset) => (
          <line
            key={offset}
            x1={46 + offset}
            y1="19.5"
            x2={46 + offset}
            y2="24.5"
            stroke="#444"
            strokeWidth="0.5"
            opacity="0.4"
          />
        ))}

        {/* === RIGHT: Knockdown hammer head === */}

        {/* Gold ferrule (connector ring) */}
        <rect
          x="97" y="18.5" width="6" height="7" rx="1.5"
          fill={`url(#gold-${uid})`}
        />
        {/* Ferrule detail lines */}
        <line x1="98.5" y1="19" x2="98.5" y2="25" stroke="#9A7A20" strokeWidth="0.4" opacity="0.5" />
        <line x1="101.5" y1="19" x2="101.5" y2="25" stroke="#E0BC5A" strokeWidth="0.4" opacity="0.5" />

        {/* Hammer head — flat wide tip */}
        <rect
          x="103" y="14" width="5" height="16" rx="1.5"
          fill={`url(#tip-${uid})`}
        />

        {/* Hammer face — the flat striking surface */}
        <rect
          x="108" y="12" width="4" height="20" rx="1"
          fill={`url(#tip-${uid})`}
        />

        {/* Hammer highlight edge */}
        <rect
          x="108.5" y="13" width="1" height="18" rx="0.5"
          fill="#E84040"
          opacity="0.5"
        />

        {/* Hammer shadow on right edge */}
        <rect
          x="111" y="13" width="1" height="18" rx="0.5"
          fill="#6B0F1F"
          opacity="0.4"
        />
      </svg>

      {/* Wordmark — centered below the tool */}
      <span style={{ lineHeight: 1, textAlign: "center", marginTop: `${Math.round(4 * scale)}px` }}>
        <span
          style={{
            display: "block",
            fontSize: `${booneSize}px`,
            fontWeight: 800,
            letterSpacing: "0.08em",
            color: textColor,
            lineHeight: 1,
            fontFamily:
              "var(--font-sans, var(--font-inter), Inter, system-ui, sans-serif)",
          }}
        >
          BOONE
        </span>
        <span
          style={{
            display: "block",
            fontSize: `${pdrSize}px`,
            fontWeight: 600,
            letterSpacing: "0.35em",
            color: pdrColor,
            lineHeight: 1,
            marginTop: `${pdrGap}px`,
            fontFamily:
              "var(--font-sans, var(--font-inter), Inter, system-ui, sans-serif)",
          }}
        >
          PDR
        </span>
      </span>
    </span>
  );
}

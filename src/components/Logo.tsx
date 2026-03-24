interface LogoProps {
  size?: number;
  className?: string;
  variant?: "dark" | "light";
}

export default function Logo({
  size = 140,
  className = "",
  variant = "dark",
}: LogoProps) {
  const textColor = variant === "light" ? "#FFFFFF" : "#1A1A1A";
  const swooshDark = "#8B1A2B";
  const swooshMid = "#C41E3A";
  const swooshLight = "#E84040";

  const iconW = Math.round(size * 0.28);
  const iconH = Math.round(iconW * 0.5);
  const gap = Math.round(size * 0.04);
  const booneSize = Math.round(size * 0.155);
  const pdrSize = Math.round(size * 0.085);
  const pdrGap = Math.round(booneSize * 0.15);

  return (
    <span
      className={`inline-flex items-center select-none ${className}`}
      style={{ gap: `${gap}px` }}
      aria-label="Boone PDR"
    >
      {/* Swoosh mark — stylized PDR rod tip curve with 3D depth */}
      <svg
        width={iconW}
        height={iconH}
        viewBox="0 0 56 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ filter: "drop-shadow(0 1px 2px rgba(196,30,58,0.3))" }}
      >
        <defs>
          {/* 3D gradient — dark base to bright highlight */}
          <linearGradient id="swoosh-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={swooshDark} />
            <stop offset="40%" stopColor={swooshMid} />
            <stop offset="100%" stopColor={swooshLight} />
          </linearGradient>
          {/* Highlight stroke for top edge — gives the 3D lit-edge feel */}
          <linearGradient id="swoosh-hi" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={swooshLight} stopOpacity="0" />
            <stop offset="50%" stopColor="#FF6B6B" stopOpacity="0.8" />
            <stop offset="100%" stopColor={swooshLight} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Shadow layer — offset down for depth */}
        <path
          d="M4 22 C12 22, 20 18, 28 13 C36 8, 44 5, 52 7"
          stroke={swooshDark}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          opacity="0.25"
          transform="translate(0, 2)"
        />

        {/* Main swoosh — thick curved stroke with gradient */}
        <path
          d="M4 20 C12 20, 20 16, 28 11 C36 6, 44 3, 52 5"
          stroke="url(#swoosh-grad)"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Highlight edge — thin bright line on top for 3D bevel */}
        <path
          d="M6 18.5 C14 18.5, 21 15, 28 10.5 C35 6, 43 3.5, 51 5"
          stroke="url(#swoosh-hi)"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Tip flare — small bright dot at the trailing tip */}
        <circle cx="52" cy="5" r="1.8" fill={swooshLight} opacity="0.6" />
      </svg>

      {/* Wordmark */}
      <span style={{ lineHeight: 1 }}>
        <span
          style={{
            display: "block",
            fontSize: `${booneSize}px`,
            fontWeight: 800,
            letterSpacing: "-0.02em",
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
            fontWeight: 500,
            letterSpacing: "0.28em",
            color: swooshMid,
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

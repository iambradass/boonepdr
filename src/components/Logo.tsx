interface LogoProps {
  size?: number; // controls overall width
  className?: string;
  variant?: "dark" | "light"; // dark = navy on white | light = white on dark
}

export default function Logo({
  size = 130,
  className = "",
  variant = "dark",
}: LogoProps) {
  const iconColor = variant === "light" ? "#FFFFFF" : "#1A1A1A";
  const textColor = variant === "light" ? "#FFFFFF" : "#1A1A1A";

  // Proportions derived from size (width-based)
  const iconW = Math.round(size * 0.225);
  const iconH = Math.round(iconW * 1.45);
  const gap = Math.round(size * 0.065);
  const booneSize = Math.round(size * 0.142);
  const pdrSize = Math.round(size * 0.072);
  const pdrGap = Math.round(booneSize * 0.22);

  return (
    <span
      className={`inline-flex items-center select-none ${className}`}
      style={{ gap: `${gap}px` }}
      aria-label="Boone PDR"
    >
      {/* Icon: stylized PDR rod — J-curve silhouette */}
      <svg
        width={iconW}
        height={iconH}
        viewBox="0 0 36 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Handle grip — red accent, rounded ends */}
        <rect x="10" y="0" width="16" height="8" rx="4" fill="#E84040" />
        {/* Shaft: straight down, then smooth J-curve to the right */}
        <path
          d="M18 8 L18 32 C18 44 28 48 33 48"
          stroke={iconColor}
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Working tip — red accent dot */}
        <circle cx="33" cy="48" r="3" fill="#E84040" />
      </svg>

      {/* Wordmark */}
      <span style={{ lineHeight: 1 }}>
        <span
          style={{
            display: "block",
            fontSize: `${booneSize}px`,
            fontWeight: 800,
            letterSpacing: "-0.025em",
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
            fontWeight: 700,
            letterSpacing: "0.22em",
            color: "#E84040",
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

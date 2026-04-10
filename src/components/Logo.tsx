import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
  variant?: "dark" | "light";
}

// Logo PNG aspect ratio: 1200x407 ≈ 2.95:1
const LOGO_ASPECT = 1200 / 407;

export default function Logo({
  size = 200,
  className = "",
  variant = "dark",
}: LogoProps) {
  const height = Math.round(size / LOGO_ASPECT);
  return (
    <Image
      src="/images/boone-pdr-logo.png"
      alt="Boone PDR — Paintless Dent Repair"
      width={size}
      height={height}
      className={`object-contain ${variant === "light" ? "brightness-110" : ""} ${className}`}
      priority
    />
  );
}
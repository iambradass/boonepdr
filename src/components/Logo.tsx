import Image from "next/image";

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
  return (
    <Image
      src="/images/boone-pdr-logo.png"
      alt="Boone PDR — Paintless Dent Repair"
      width={size}
      height={Math.round(size * 0.6)}
      className={`object-contain ${variant === "light" ? "brightness-125" : ""} ${className}`}
      priority
    />
  );
}
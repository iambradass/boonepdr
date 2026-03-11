import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 40, className = "" }: LogoProps) {
  return (
    <Image
      src="/images/boone-pdr-logo.png"
      alt="Boone PDR logo"
      width={size}
      height={Math.round(size * 0.545)}
      className={className}
      priority
    />
  );
}

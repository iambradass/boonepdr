import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import type { IconType } from "react-icons";

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div className="card-glow bg-white rounded-2xl border border-border p-7 h-full flex flex-col transition-all duration-300 hover:border-steel/30 hover:-translate-y-1.5 relative overflow-hidden">
        {/* Top accent line — grows on hover */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-steel via-accent to-steel scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        <div className="w-14 h-14 bg-gradient-to-br from-steel/10 to-steel/5 rounded-xl flex items-center justify-center mb-5 group-hover:from-accent/20 group-hover:to-steel/15 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <Icon className="w-7 h-7 text-steel group-hover:text-accent transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-steel transition-colors duration-300">
          {title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-5 flex-1">
          {description}
        </p>
        <span className="inline-flex items-center gap-1.5 text-steel font-semibold text-sm group-hover:gap-3 transition-all duration-300 mt-auto">
          Learn More
          <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

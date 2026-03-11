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
      <div className="bg-white rounded-2xl border border-border p-7 h-full flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-steel/30 hover:-translate-y-1.5">
        <div className="w-14 h-14 bg-gradient-to-br from-steel/10 to-steel/5 rounded-xl flex items-center justify-center mb-5 group-hover:from-steel/20 group-hover:to-steel/10 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-7 h-7 text-steel" />
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

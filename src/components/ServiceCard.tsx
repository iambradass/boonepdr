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
    <Link href={href} className="group block">
      <div className="bg-white rounded-xl border border-border p-6 h-full transition-all duration-300 hover:shadow-xl hover:border-steel/30 hover:-translate-y-1">
        <div className="w-14 h-14 bg-steel/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-steel/20 transition-colors">
          <Icon className="w-7 h-7 text-steel" />
        </div>
        <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
        <p className="text-text-muted text-sm leading-relaxed mb-4">
          {description}
        </p>
        <span className="inline-flex items-center gap-1.5 text-steel font-semibold text-sm group-hover:gap-2.5 transition-all">
          Learn More
          <HiArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}

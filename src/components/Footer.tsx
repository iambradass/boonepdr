import Link from "next/link";
import { HiPhone, HiMail, HiLocationMarker, HiClock } from "react-icons/hi";
import { BUSINESS, SERVICE_CITIES, NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo size={200} variant="light" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Professional paintless dent repair serving the entire Dallas-Fort
              Worth metroplex. Hail damage, door dings, and dent removal with
              satisfaction guaranteed on every repair.
            </p>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-2 text-white font-bold text-lg hover:text-accent transition-colors"
            >
              <HiPhone className="w-5 h-5 text-accent" />
              {BUSINESS.phone}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-start gap-3 text-white/70 hover:text-accent text-sm transition-colors"
                >
                  <HiPhone className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-3 text-white/70 hover:text-accent text-sm transition-colors"
                >
                  <HiMail className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <HiLocationMarker className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                <span>
                  {BUSINESS.address}
                  <br />
                  <span className="text-white/65">Mobile Service — We Come to You</span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <HiClock className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                <span>
                  {BUSINESS.hours.weekdays}
                  <br />
                  {BUSINESS.hours.saturday}
                  <br />
                  {BUSINESS.hours.sunday}
                </span>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Service Area</h3>
            <p className="text-white/70 text-sm mb-3">
              Proudly serving the entire DFW metroplex:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {SERVICE_CITIES.slice(0, 16).map((city) => (
                <span
                  key={city}
                  className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded"
                >
                  {city}
                </span>
              ))}
              <Link
                href="/service-area"
                className="text-xs text-accent hover:text-accent-hover px-2 py-1 transition-colors"
              >
                + {SERVICE_CITIES.length - 16} more cities
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/65 text-sm">
            &copy; {currentYear} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/65">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Business information — update these when Boone provides real details
export const BUSINESS = {
  name: "Boone Sanders PDR",
  tagline: "DFW's Trusted Paintless Dent Repair Experts",
  phone: "(817) 555-0199",
  phoneRaw: "+18175550199",
  email: "info@boonesanderspdr.com",
  address: "Fort Worth, TX",
  serviceArea: "Dallas-Fort Worth Metroplex",
  hours: {
    weekdays: "Mon–Fri: 8:00 AM – 6:00 PM",
    saturday: "Sat: 9:00 AM – 3:00 PM",
    sunday: "Sun: Closed",
  },
  social: {
    facebook: "https://facebook.com/boone.sanders",
    google: "#",
    yelp: "#",
  },
  yearsExperience: 10,
  reviewCount: 150,
  rating: 4.9,
} as const;

// Cities served in DFW
export const SERVICE_CITIES = [
  "Fort Worth",
  "Dallas",
  "Arlington",
  "Mansfield",
  "Burleson",
  "Keller",
  "Hurst",
  "Bedford",
  "Euless",
  "Grapevine",
  "Southlake",
  "Colleyville",
  "North Richland Hills",
  "Haltom City",
  "Crowley",
  "Benbrook",
  "Weatherford",
  "Cleburne",
  "Granbury",
  "Azle",
  "Watauga",
  "Saginaw",
  "Lake Worth",
  "White Settlement",
  "Richland Hills",
  "Kennedale",
  "Everman",
  "Forest Hill",
  "Flower Mound",
  "Lewisville",
  "Denton",
  "McKinney",
  "Frisco",
  "Plano",
  "Irving",
  "Grand Prairie",
  "Garland",
  "Mesquite",
  "Richardson",
  "Carrollton",
] as const;

// Navigation links
export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Hail Damage Repair", href: "/services/hail-damage-repair" },
      { label: "Door Ding & Dent Repair", href: "/services/door-ding-dent-repair" },
      { label: "Lease Return / Dealer Services", href: "/services/lease-return" },
    ],
  },
  { label: "Insurance", href: "/insurance" },
  { label: "Service Area", href: "/service-area" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const BUSINESS = {
  name: "Boone PDR",
  nameFull: "Boone Paintless Dent Repair",
  tagline: "DFW's Trusted Paintless Dent Repair Experts",
  phone: "(817) 228-0050",
  phoneRaw: "+18172280050",
  email: "mbs0785@gmail.com",
  domain: "boonepdr.com",
  url: "https://boonepdr.com",
  address: "Fort Worth, TX",
  serviceArea: "Dallas-Fort Worth Metroplex",
  hours: {
    weekdays: "Mon–Fri: 8:00 AM – 6:00 PM",
    saturday: "Sat: 9:00 AM – 3:00 PM",
    sunday: "Sun: Closed",
  },
  social: {
    facebook: "https://facebook.com/boonepdr",
    instagram: "https://instagram.com/boonepdr",
    google: "#",
    yelp: "#",
  },
  yearsExperience: 10,
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

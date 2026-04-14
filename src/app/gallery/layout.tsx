import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before & After Gallery | PDR Results in DFW",
  description:
    "See real paintless dent repair results from Boone PDR in Dallas-Fort Worth. Drag the sliders to compare before and after photos of hail damage, door dings, and more.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Before & After Gallery | Boone PDR",
    description:
      "Real PDR results from the Dallas-Fort Worth area. Drag the sliders to compare before and after photos.",
    url: "https://boonepdr.com/gallery",
    type: "website",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

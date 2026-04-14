import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { getLocalBusinessSchema } from "@/lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Paintless Dent Repair Fort Worth & Dallas | Boone PDR",
    template: "%s | Boone PDR",
  },
  description:
    "Professional paintless dent repair in the DFW metroplex. Hail damage repair, door ding removal, and insurance claims assistance. Free estimates. Satisfaction guaranteed on every repair.",
  keywords: [
    "paintless dent repair",
    "PDR",
    "hail damage repair",
    "dent removal",
    "Fort Worth",
    "Dallas",
    "DFW",
    "door ding repair",
    "auto dent repair",
  ],
  authors: [{ name: "Boone PDR" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://boonepdr.com",
    siteName: "Boone PDR",
    title: "Paintless Dent Repair Fort Worth & Dallas | Boone PDR",
    description:
      "Professional paintless dent repair in the DFW metroplex. Hail damage, door dings, and dent removal. Free estimates & satisfaction guaranteed.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Boone PDR — Professional Paintless Dent Repair",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paintless Dent Repair Fort Worth & Dallas | Boone PDR",
    description:
      "Professional paintless dent repair in the DFW metroplex. Free estimates & satisfaction guaranteed.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://boonepdr.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <FloatingCTA />
        <Analytics />
      </body>
    </html>
  );
}

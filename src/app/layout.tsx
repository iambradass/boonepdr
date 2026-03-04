import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
    default: "Paintless Dent Repair Fort Worth & Dallas | Boone Sanders PDR",
    template: "%s | Boone Sanders PDR",
  },
  description:
    "Professional paintless dent repair in the DFW metroplex. Hail damage repair, door ding removal, and insurance claims assistance. Free estimates. Lifetime warranty on all repairs.",
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
  authors: [{ name: "Boone Sanders PDR" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://boonesanderspdr.com",
    siteName: "Boone Sanders PDR",
    title: "Paintless Dent Repair Fort Worth & Dallas | Boone Sanders PDR",
    description:
      "Professional paintless dent repair in the DFW metroplex. Hail damage, door dings, and dent removal. Free estimates & lifetime warranty.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://boonesanderspdr.com"),
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
        <main className="pt-16 md:pt-[calc(4rem+2.25rem)]">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}

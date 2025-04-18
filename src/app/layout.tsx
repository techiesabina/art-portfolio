import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Anzhelika Bashirova Portfolio | Illustrations, Graphic Design, Art and more",
  description:
    "Anzhelika Bashirova creative portfolio website with illustrations,graphic design, art and more",
  keywords: [
    "portfolio",
    "creative",
    "design",
    "illustration",
    "art",
    "graphic design",
    "digital art",
    "artwork",
    "UI/UX",
    "Anzhelika Bashirova",
    "Anzhelika Bashirova portfolio",
    "Anzhelika Bashirova creative",
    "Anzhelika Bashirova design",
    "Anzhelika Bashirova illustrator",
    "Anzhelika Bashirova graphic design",
    "Anzhelika Bashirova art",
    "Anzhelika Bashirova digital art",
    "bashirova",
    "mebashirova",
    "Bashirova",
    "mebashirova.com",
    "Anzhelika Bashirova, Illustration, Character Design, Comic, Animation",
  ],
  authors: [{ name: "Anzhelika Bashirova" }],
  creator: "Anzhelika Bashirova",
  publisher: "Anzhelika Bashirova",
  metadataBase: new URL("https://mebashirova.com"),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Anzhelika Bashirova | Creative Portfolio",
    description:
      "Anzhelika Bashirova creative portfolio website with illustrations, graphic design, art and more",
    siteName: "Anzhelika Bashirova",
    url: "https://mebashirova.com",
    images: [
      {
        url: "/assets/og-images/nina-og.png",
        width: 1200,
        height: 630,
        alt: "Anzhelika Bashirova | Creative Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anzhelika Bashirova | Creative Portfolio",
    description:
      "Anzhelika Bashirova creative portfolio website with illustrations, graphic design, art and more",
    images: [
      {
        url: "/assets/og-images/nina-og.png",
        width: 1200,
        height: 630,
        alt: "Anzhelika Bashirova | Creative Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="bg-white">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

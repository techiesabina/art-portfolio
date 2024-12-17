import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Anzhelika Bashirova Portfolio",
  description:
    "Learn more about Anzhelika Bashirova - Illustrator and Graphic Artist based in Warsaw, Poland",
  keywords: [
    "portfolio",
    "creative",
    "design",
    "illustration",
    "art",
    "graphic design",
    "Anzhelika Bashirova",
    "Anzhelika Bashirova portfolio",
    "Anzhelika Bashirova creative",
    "Anzhelika Bashirova design",
    "Anzhelika Bashirova illustrator",
    "Anzhelika Bashirova graphic design",
    "Anzhelika Bashirova art",
    "Anzhelika Bashirova digital art",
    "Anzhelika Bashirova about me",
  ],
  openGraph: {
    title: "About | Anzhelika Bashirova Portfolio",
    description:
      "Learn more about Anzhelika Bashirova - Illustrator and Graphic Artist based in Warsaw, Poland",
    images: [
      {
        url: "/og-images/nina-og.png",
        width: 1200,
        height: 630,
        alt: "Anzhelika Bashirova Portfolio",
      },
    ],
    siteName: "Anzhelika Bashirova",
    url: "https://mebashirova.com/info",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Anzhelika Bashirova Portfolio",
    description:
      "Learn more about Anzhelika Bashirova - Illustrator and Graphic Artist based in Warsaw, Poland",
    images: [
      {
        url: "/og-images/nina-og.png",
        width: 1200,
        height: 630,
        alt: "Anzhelika Bashirova Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/info",
  },
};

export default function InfoPage() {
  return (
    <>
      <main className="container mx-auto px-4 pt-44 pb-12 sm:px-6 lg:px-8 max-w-3xl">
        <div className="space-y-12">
          <section>
            <p className="text-gray-800 text-base">
              Hi! I&apos;m Anzhelika. I&apos;m an illustrator and graphic artist
              based in Warsaw, Poland.
            </p>
            <p className="text-gray-800 text-base">
              I am open for a part-time/full-time work.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

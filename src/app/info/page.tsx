import type { Metadata } from "next";
import Image from "next/image";
import AnjiBio from "@/assets/anji-bio.png";

export const metadata: Metadata = {
  title: "About me | Anzhelika Bashirova Portfolio",
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
    title: "About me | Anzhelika Bashirova Portfolio",
    description:
      "Learn more about Anzhelika Bashirova - Illustrator and Graphic Artist based in Warsaw, Poland",
    images: [
      {
        url: "/assets/anji-bio.png",
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
    title: "About me | Anzhelika Bashirova Portfolio",
    description:
      "Learn more about Anzhelika Bashirova - Illustrator and Graphic Artist based in Warsaw, Poland",
    images: [
      {
        url: "/assets/anji-bio.png",
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
};

export default function InfoPage() {
  return (
    <>
      <main className="container mx-auto px-4 pt-28 sm:pt-36 pb-12 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* left column*/}
          <div className="flex justify-center items-center">
            <Image
              src={AnjiBio}
              alt="Anzhelika Bashirova profile picture"
              width={500}
              height={500}
              placeholder="blur"
              className="rounded-lg w-full"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          {/* right column*/}
          <div className="space-y-12">
            <section className="space-y-6">
              <p className="text-gray-800 text-base">
                Hi! I&apos;m Anzhelika. I&apos;m an illustrator and graphic
                artist based in Warsaw, Poland
              </p>
              <p className="text-gray-800 text-base">
                I am open for a part-time/full-time work
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

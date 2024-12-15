import { notFound } from "next/navigation";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import Girl1 from "@/assets/girl1.png";
import Girl2 from "@/assets/girl2.png";
import Girl3 from "@/assets/girl3.png";

import gm1 from "@/assets/gm1.png";
import gm2 from "@/assets/gm2.png";
import gm3 from "@/assets/gm3.png";
import gm4 from "@/assets/gm4.png";
import gm5 from "@/assets/gm5.png";

import VectorGirlCover from "@/assets/v9.jpg";
import VectorGirl1 from "@/assets/v1.jpg";
import VectorGirl2 from "@/assets/v2.jpg";
import VectorGirl3 from "@/assets/v3.jpg";
import VectorGirl4 from "@/assets/v4.jpg";
import VectorGirl5 from "@/assets/v5.jpg";
import VectorGirl6 from "@/assets/v6.jpg";
import VectorGirl7 from "@/assets/v7.jpg";
import VectorGirl8 from "@/assets/v8.jpg";
import VectorGirl9 from "@/assets/v9.jpg";
import VectorGirl10 from "@/assets/v10.jpg";
import VectorGirl11 from "@/assets/v11.jpg";
import VectorGirl12 from "@/assets/v12.jpg";
import VectorGirl13 from "@/assets/v13.jpg";
import VectorGirl14 from "@/assets/v14.png";
import VectorGirl15 from "@/assets/v15.png";
import VectorGirl16 from "@/assets/v16.png";
import type { PORTFOLIO_ITEMS } from "@/app/consts";

type PortfolioSlugKeys = (typeof PORTFOLIO_ITEMS)[number]["slug"];

const projects = {
  "character-design-sasha": {
    title: "Character Design Sasha",
    images: [Girl1, Girl2],
    // description: "A series of illustrations depicting school life.",
  },
  "character-design-nina": {
    title: "Character Design Nina",
    images: [Girl3],
    // description: "An adventure through the city.",
  },
  "game-cards": {
    title: "Game cards",
    images: [gm1, gm2, gm3, gm5, gm4],
    // description: "A collection of friendship moments.",
  },
  "vector-pack": {
    title: "Vector Pack",
    images: [
      VectorGirlCover,
      VectorGirl1,
      VectorGirl2,
      VectorGirl3,
      VectorGirl4,
      VectorGirl5,
      VectorGirl6,
      VectorGirl7,
      VectorGirl8,
      VectorGirl9,
      VectorGirl10,
      VectorGirl11,
      VectorGirl12,
      VectorGirl13,
      VectorGirl14,
      VectorGirl15,
      VectorGirl16,
    ],
    // description: "Vector illustrations collection",
  },
} as const satisfies {
  [key in PortfolioSlugKeys]: {
    title: string;
    images: StaticImageData[];
    // description: string;
  };
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug as keyof typeof projects;

  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <>
      <main className="container mx-auto px-4 pt-24 pb-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
          >
            ← Back to main page
          </Link>
        </div>

        <h1 className="mb-12 text-3xl font-bold uppercase text-center">
          {project.title}
        </h1>
        {/* <p className="mb-8 text-gray-600">{project.description}</p> */}

        <div className="grid gap-8 justify-center">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="rounded-lg w-full md:w-[800px] block relative"
            >
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                placeholder="blur"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          ))}
        </div>
        <div className="my-8">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
          >
            ← Back to main page
          </Link>
        </div>
      </main>
    </>
  );
}

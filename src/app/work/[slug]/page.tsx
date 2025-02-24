import { type Metadata } from "next";
import { notFound } from "next/navigation";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import SashaGirl1 from "@/assets/sasha/girl1.png";
import SashaGirl2 from "@/assets/sasha/girl2.png";
import NinaGirl from "@/assets/nina/girl3.png";

import GameCardsCover from "@/assets/game-cards/gm1.png";
import GameCards1 from "@/assets/game-cards/gm2.png";
import GameCards2 from "@/assets/game-cards/gm3.png";
import GameCards3 from "@/assets/game-cards/gm4.png";
import GameCards4 from "@/assets/game-cards/gm5.png";

import VectorGirlCover from "@/assets/vector-pack/v9.jpg";
import VectorGirl1 from "@/assets/vector-pack/v1.jpg";
import VectorGirl2 from "@/assets/vector-pack/v2.jpg";
import VectorGirl3 from "@/assets/vector-pack/v3.jpg";
import VectorGirl4 from "@/assets/vector-pack/v4.jpg";
import VectorGirl5 from "@/assets/vector-pack/v5.jpg";
import VectorGirl6 from "@/assets/vector-pack/v6.jpg";
import VectorGirl7 from "@/assets/vector-pack/v7.jpg";
import VectorGirl8 from "@/assets/vector-pack/v8.jpg";
import VectorGirl10 from "@/assets/vector-pack/v10.jpg";
import VectorGirl11 from "@/assets/vector-pack/v11.jpg";
import VectorGirl12 from "@/assets/vector-pack/v12.jpg";
import VectorGirl13 from "@/assets/vector-pack/v13.jpg";
import VectorGirl14 from "@/assets/vector-pack/v14.png";
import VectorGirl15 from "@/assets/vector-pack/v15.png";
import VectorGirl16 from "@/assets/vector-pack/v16.png";

import HowToFindFriendsCover from "@/assets/how-to-find-friends-book/0.png";
import HowToFindFriends1 from "@/assets/how-to-find-friends-book/1.png";
import HowToFindFriends2 from "@/assets/how-to-find-friends-book/2.png";
import HowToFindFriends3 from "@/assets/how-to-find-friends-book/3.png";
import HowToFindFriends4 from "@/assets/how-to-find-friends-book/4.png";
import HowToFindFriends5 from "@/assets/how-to-find-friends-book/5.png";
import HowToFindFriends6 from "@/assets/how-to-find-friends-book/6.png";
import HowToFindFriends7 from "@/assets/how-to-find-friends-book/7.png";
import HowToFindFriends8 from "@/assets/how-to-find-friends-book/8.png";
import HowToFindFriends9 from "@/assets/how-to-find-friends-book/9.png";
import HowToFindFriends10 from "@/assets/how-to-find-friends-book/10.png";
import HowToFindFriends11 from "@/assets/how-to-find-friends-book/11.png";
import HowToFindFriends12 from "@/assets/how-to-find-friends-book/12.png";
import HowToFindFriends13 from "@/assets/how-to-find-friends-book/13.png";
import HowToFindFriends14 from "@/assets/how-to-find-friends-book/14.png";
import HowToFindFriends15 from "@/assets/how-to-find-friends-book/15.png";
import HowToFindFriends16 from "@/assets/how-to-find-friends-book/16.png";
import HowToFindFriends17 from "@/assets/how-to-find-friends-book/17.png";
import HowToFindFriends18 from "@/assets/how-to-find-friends-book/18.png";
import HowToFindFriends19 from "@/assets/how-to-find-friends-book/19.png";

import SelfPortrait from "@/assets/self-portrait/self-portrait.png";

import Fam1 from "@/assets/fam/fam1.webp";
import Fam2 from "@/assets/fam/fam2.webp";

import type { PORTFOLIO_ITEMS } from "@/app/consts";

type PortfolioSlugKeys = (typeof PORTFOLIO_ITEMS)[number]["slug"];

const projects = {
  "character-design-sasha": {
    title: "Character Design Sasha",
    images: [SashaGirl1, SashaGirl2],
    ogImageUrl: "/assets/og-images/sasha-og.png",
  },
  "character-design-nina": {
    title: "Character Design Nina",
    images: [NinaGirl],
    ogImageUrl: "/assets/og-images/nina-og.png",
  },
  "game-cards": {
    title: "Game cards",
    images: [GameCardsCover, GameCards1, GameCards2, GameCards4, GameCards3],
    ogImageUrl: "/assets/og-images/game-card-og.png",
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
      VectorGirl10,
      VectorGirl11,
      VectorGirl12,
      VectorGirl13,
      VectorGirl14,
      VectorGirl15,
      VectorGirl16,
    ],
    ogImageUrl: "/assets/og-images/vector-pack-og.png",
  },
  "how-to-find-friends": {
    title: "How to find friends?",
    images: [
      HowToFindFriendsCover,
      HowToFindFriends1,
      HowToFindFriends2,
      HowToFindFriends3,
      HowToFindFriends4,
      HowToFindFriends5,
      HowToFindFriends6,
      HowToFindFriends7,
      HowToFindFriends8,
      HowToFindFriends9,
      HowToFindFriends10,
      HowToFindFriends11,
      HowToFindFriends12,
      HowToFindFriends13,
      HowToFindFriends14,
      HowToFindFriends15,
      HowToFindFriends16,
      HowToFindFriends17,
      HowToFindFriends18,
      HowToFindFriends19,
    ],
    ogImageUrl: "/assets/og-images/how-to-find-friends-og.png",
  },
  "self-portrait": {
    title: "Self-portrait",
    images: [SelfPortrait],
    ogImageUrl: "/assets/og-images/self-portrait.png",
  },
  "girl-boy-and-the-cat": {
    title: "Girl, boy, and the cat",
    images: [Fam1, Fam2],
    ogImageUrl: "/assets/og-images/fam-og.png",
  },
} as const satisfies {
  [key in PortfolioSlugKeys]: {
    title: string;
    images: StaticImageData[];
    ogImageUrl: string;
  };
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug as keyof typeof projects;

  const project = projects[slug];

  if (!project) {
    throw new Error("Project not found");
  }

  return {
    title: `${project.title} | Anzhelika Bashirova | Portfolio`,
    description: `View "${project.title}" project details and illustrations by Anzhelika Bashirova`,
    openGraph: {
      title: `${project.title} | Anzhelika Bashirova | Portfolio`,
      description: `View "${project.title}" project details and illustrations by Anzhelika Bashirova`,
      images: [
        {
          url: project?.ogImageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: "website",
      siteName: "Anzhelika Bashirova | Portfolio",
      url: `https://mebashirova.com/work/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Anzhelika Bashirova | Portfolio`,
      description: `View "${project.title}" project details and illustrations by Anzhelika Bashirova`,
      images: [
        {
          url: project?.ogImageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
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
      <main className="container mx-auto px-4 pt-24 sm:px-6 lg:px-8">
        <BackToMainPage />

        <h1 className="mb-16 mt-10 text-3xl font-bold uppercase text-center">
          {project.title}
        </h1>
        {/* <p className="mb-8 text-gray-600">{project.description}</p> */}

        <div className="grid gap-8 justify-center pb-14">
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
        <BackToMainPage />
      </main>
    </>
  );
}

const BackToMainPage = () => {
  return (
    <div className="mx-auto px-0 xs:px-4 sm:px-6 lg:px-8 sm:pt-8 max-w-3xl">
      <Link
        href="/"
        className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
      >
        ← Back to main page
      </Link>
    </div>
  );
};

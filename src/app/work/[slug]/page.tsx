import { type Metadata } from "next";
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

import type { PORTFOLIO_ITEMS } from "@/app/consts";

type PortfolioSlugKeys = (typeof PORTFOLIO_ITEMS)[number]["slug"];

const projects = {
  "character-design-sasha": {
    title: "Character Design Sasha",
    images: [Girl1, Girl2],
    ogImageUrl:
      "https://mebashirova.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgirl1.413430dd.png&w=750&q=75",
    // description: "A series of illustrations ",
  },
  "character-design-nina": {
    title: "Character Design Nina",
    images: [Girl3],
    ogImageUrl:
      "https://mebashirova.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgirl3.de503e13.png&w=1080&q=75",
    // description: "An adventure through the city.",
  },
  "game-cards": {
    title: "Game cards",
    images: [gm1, gm2, gm3, gm5, gm4],
    ogImageUrl:
      "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgm1.a11eee29.png&w=1080&q=75",
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
    ogImageUrl:
      "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fv9.9ba21868.jpg&w=1080&q=75",
    // description: "Vector illustrations collection",
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
    ogImageUrl:
      "https://mebashirova.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F0.3ce74e82.png&w=1080&q=75",
    // description: "A book about how to find friends.",
  },
} as const satisfies {
  [key in PortfolioSlugKeys]: {
    title: string;
    images: StaticImageData[];
    // description: string;
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
      title: project.title,
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
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
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
    alternates: {
      canonical: `/work/${slug}`,
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

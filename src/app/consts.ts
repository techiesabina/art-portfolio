import Girl1 from "@/assets/girl1.png";
import Girl3 from "@/assets/girl3.png";
import gm1 from "@/assets/gm1.png";
import VectorGirlCover from "@/assets/v9.jpg";
import { type StaticImageData } from "next/image";

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Character Design Sasha",
    src: Girl1,
    alt: "Character Design Sasha",
    slug: "character-design-sasha",
  },
  {
    id: 2,
    title: "Character Design Nina",
    src: Girl3,
    alt: "Character Design Nina",
    slug: "character-design-nina",
  },
  {
    id: 3,
    title: "Game cards",
    src: gm1,
    alt: "Game cards",
    slug: "game-cards",
  },
  {
    id: 4,
    title: "Vector Pack",
    src: VectorGirlCover,
    alt: "Vector Pack",
    slug: "vector-pack",
  },
] as const satisfies {
  id: number;
  title: string;
  src: StaticImageData;
  alt: string;
  slug: string;
}[];

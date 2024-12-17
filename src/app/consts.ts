import Girl1 from "@/assets/girl1.png";
import Girl3 from "@/assets/girl3.png";
import gm1 from "@/assets/gm1.png";
import VectorGirlCover from "@/assets/v9.jpg";
import HowToFindFriends from "@/assets/how-to-find-friends-book/0.png";
import { type StaticImageData } from "next/image";

export const PORTFOLIO_ITEMS = [
  {
    id: Math.floor(Math.random() * 1000000),
    title: "How to find friends?",
    src: HowToFindFriends,
    alt: "Cover illustration for children's book 'How to find friends?' featuring colorful characters",
    slug: "how-to-find-friends",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    title: "Character Design Sasha",
    src: Girl1,
    alt: "Digital illustration of Sasha character design showing a young girl with unique personality traits",
    slug: "character-design-sasha",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    title: "Character Design Nina",
    src: Girl3,
    alt: "Digital illustration of Nina character design depicting a stylized female character with distinctive features",
    slug: "character-design-nina",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    title: "Game cards",
    src: gm1,
    alt: "Custom designed game cards featuring original artwork and illustrations for tabletop gaming",
    slug: "game-cards",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    title: "Vector Pack",
    src: VectorGirlCover,
    alt: "Collection of vector illustrations featuring stylized female characters and design elements",
    slug: "vector-pack",
  },
] as const satisfies {
  id: number;
  title: string;
  src: StaticImageData;
  alt: string;
  slug: string;
}[];

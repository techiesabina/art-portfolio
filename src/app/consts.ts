import SashaCover from "@/assets/sasha/girl1.png";
import NinaCover from "@/assets/nina/girl3.png";
import GameCardsCover from "@/assets/game-cards/gm1.png";
import HowToFindFriends from "@/assets/how-to-find-friends-book/0.png";
import SelfPortrait from "@/assets/self-portrait/self-portrait.png";
import Fam1 from "@/assets/fam/fam1.webp";

import { type StaticImageData } from "next/image";

const getRandomId = () => Math.floor(Math.random() * 1000000);

export const PORTFOLIO_ITEMS = [
  {
    id: getRandomId(),
    title: "How to find friends?",
    src: HowToFindFriends,
    alt: "Cover illustration for children's book 'How to find friends?' featuring colorful characters",
    slug: "how-to-find-friends",
    type: "image",
  },
  {
    id: getRandomId(),
    title: "Game cards",
    src: GameCardsCover,
    alt: "Custom designed game cards featuring original artwork and illustrations for tabletop gaming",
    slug: "game-cards",
    type: "image",
  },
  {
    id: getRandomId(),
    title: "Girl, boy, and the cat",
    src: Fam1,
    alt: "Digital illustration featuring a girl, boy and cat in a cozy scene showcasing family relationships and companionship",
    slug: "girl-boy-and-the-cat",
    type: "image",
  },
  {
    id: getRandomId(),
    title: "Character Design Sasha",
    src: SashaCover,
    alt: "Digital illustration of Sasha character design showing a young girl with unique personality traits",
    slug: "character-design-sasha",
    type: "image",
  },
  {
    id: getRandomId(),
    title: "Vector Pack",
    src: "/vector-pack-gif.mp4",
    fallbackImg: "/assets/vector-pack/v9.jpg",
    alt: "Collection of vector illustrations featuring stylized female characters and design elements",
    slug: "vector-pack",
    type: "video",
  },
  {
    id: getRandomId(),
    title: "Self-portrait",
    src: SelfPortrait,
    alt: "Self-portrait illustration by Anzhelika Bashirova",
    slug: "self-portrait",
    type: "image",
  },
  {
    id: getRandomId(),
    title: "Character Design Nina",
    src: NinaCover,
    alt: "Digital illustration of Nina character design depicting a stylized female character with distinctive features",
    slug: "character-design-nina",
    type: "image",
  },
] as const satisfies readonly (ImageType | VideoType)[];

type ImageType = {
  id: number;
  title: string;
  src: StaticImageData;
  alt: string;
  slug: string;
  type: "image";
};

type VideoType = {
  id: number;
  title: string;
  src: string;
  fallbackImg: string;
  alt: string;
  slug: string;
  type: "video";
};

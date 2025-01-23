export type podcastListType = {
  id: number;
  title: string;
  description: string;
  pubDate: string;
  category: string;
  href: string;
  slug: string;
  slogan: string;
};

export const podcastList: podcastListType[] = [
  {
    id: 1,
    title: "Future of Quantum Chips",
    description:
      "Dive into the groundbreaking world of quantum chips, where cutting-edge technology meets limitless potential. Explore how these revolutionary innovations are reshaping computing, solving complex problems, and driving advancements across industries like AI, cryptography, and more. With expert insights, learn about the challenges and opportunities ahead as quantum chips redefine the boundaries of what's possible in technology. Get ready to unlock the future of innovation and computation.",
    pubDate: "2025-02-15",
    category: "Semiconductor",
    href: "/podcast/future-of-quantum-chips",
    slug: "future-of-quantum-chips",
    slogan: "Quantum Chips: Unlocking Tomorrow's Technology Today.",
  },
  {
    id: 2,
    title: "Investing in Semiconductors",
    description:
      "Dive into the groundbreaking world of quantum chips, where cutting-edge technology meets limitless potential. Explore how these revolutionary innovations are reshaping computing, solving complex problems, and driving advancements across industries like AI, cryptography, and more. With expert insights, learn about the challenges and opportunities ahead as quantum chips redefine the boundaries of what's possible in technology. Get ready to unlock the future of innovation and computation.",
    pubDate: "2025-01-30",
    category: "Semiconductor",
    href: "/podcast/investing-in-semiconductors",
    slug: "investing-in-semiconductors",
    slogan: "Your Guide to the Future of Smart Investments in Semiconductors.",
  },
  {
    id: 3,
    title: "Chip Design Innovations",
    description:
      "Dive into the groundbreaking world of quantum chips, where cutting-edge technology meets limitless potential. Explore how these revolutionary innovations are reshaping computing, solving complex problems, and driving advancements across industries like AI, cryptography, and more. With expert insights, learn about the challenges and opportunities ahead as quantum chips redefine the boundaries of what's possible in technology. Get ready to unlock the future of innovation and computation.",
    pubDate: "2025-03-10",
    category: "Semiconductor",
    href: "/podcast/chip-design-innovations",
    slug: "chip-design-innovations",
    slogan: "Pioneering the Blueprint for Smarter, Faster Chips.",
  },
];

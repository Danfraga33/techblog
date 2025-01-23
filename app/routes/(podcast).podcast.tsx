import LatestPodcastCard from "~/components/LatestPodcastCard";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import { Fragment } from "react";
import SearchBar from "~/components/Dashboard/SearchBar";
import ContentLayout from "~/components/Dashboard/ContentLayout";
import { useParams } from "@remix-run/react";

type podcastListType = {
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

export default function Podcasts() {
  const { id } = useParams();
  return (
    <>
      <ContentLayout
        title="Podcasts"
        description="New product features, the latest in technology, solutions, and
       updates."
      >
        <section className="container flex min-h-[400px] w-3/4 flex-col">
          <section className="flex items-center gap-8 py-8">
            {podcastList.map((podcast) => (
              <Fragment key={podcast.id}>
                <LatestPodcastCard
                  title={podcast.title}
                  description={podcast.description}
                  category={podcast.category}
                  href={podcast.href}
                  slogan={podcast.slogan}
                />
              </Fragment>
            ))}
          </section>
        </section>

        {/* Recently Added Section */}

        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
          Recently Added
        </h1>
        <SearchBar />
        <section className="flex items-center gap-8 py-8">
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>Date Published</TableColumn>
              <TableColumn>Title</TableColumn>
              <TableColumn>Description</TableColumn>
              <TableColumn>Listen</TableColumn>
            </TableHeader>
            <TableBody>
              {podcastList.map((podcast) => (
                <Fragment key={podcast.id}>
                  <TableRow>
                    <TableCell>January 1, 2025</TableCell>
                    <TableCell>The Semiconductor Supply Chain Crisis</TableCell>
                    <TableCell>
                      An in-depth analysis of the global semiconductor supply
                      chain issues.
                    </TableCell>
                    <TableCell>
                      <button>Listen</button>
                    </TableCell>
                  </TableRow>
                </Fragment>
              ))}
            </TableBody>
          </Table>
        </section>
      </ContentLayout>
    </>
  );
}

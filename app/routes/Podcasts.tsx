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
import Header from "~/components/Dashboard/Header";
import SearchBar from "~/components/Dashboard/Search";

type podcastListType = {
  id: number;
  title: string;
  description: string;
  pubDate: string;
  category: string;
  href: string;
};

export const podcastList: podcastListType[] = [
  {
    id: 1,
    title: "Future of Quantum Chips",
    description:
      "A brief look at how quantum chips are shaping the future of technology.",
    pubDate: "2025-02-15",
    category: "Semiconductor",
    href: "/podcasts/future-of-quantum-chips",
  },
  {
    id: 2,
    title: "Investing in Semiconductors",
    description:
      "Key trends and opportunities in the evolving semiconductor market.",
    pubDate: "2025-01-30",
    category: "Semiconductor",
    href: "/podcasts/investing-in-semiconductors",
  },
  {
    id: 3,
    title: "Chip Design Innovations",
    description:
      "How cutting-edge technologies are driving the next wave of chip design.",
    pubDate: "2025-03-10",
    category: "Semiconductor",
    href: "/podcasts/chip-design-innovations",
  },
];

export default function Podcasts() {
  return (
    <>
      <Header />

      <div className="px-4 py-8 sm:px-6 lg:px-8">
        {/* Latest News & Podcasts Section */}
        <section className="container flex min-h-[400px] w-3/4 flex-col">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">Latest News</h1>
            <p className="text-lg text-muted-foreground">
              New product features, the latest in technology, solutions, and
              updates.
            </p>
          </div>
          <section className="flex items-center gap-8 py-8">
            <LatestPodcastCard
              title="The Semiconductor Supply Chain Crisis"
              description="An in-depth analysis of the global semiconductor supply chain issues and how companies are responding to the ongoing shortages."
              category="Semiconductor"
              href="/podcasts/future-of-quantum-chips"
            />
            <LatestPodcastCard
              title="AI in Semiconductor Manufacturing"
              description="Exploring how AI is enhancing efficiency and cutting costs in chip production."
              category="Semiconductor"
              href="/podcasts/future-of-quantum-chips"
            />
            <LatestPodcastCard
              title="AI's Role in Revolutionizing Chip Design"
              description="Explore how artificial intelligence is transforming the design and manufacturing of semiconductor chips for modern applications."
              category="Semiconductor"
              href="/podcasts/future-of-quantum-chips"
            />
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
      </div>
    </>
  );
}

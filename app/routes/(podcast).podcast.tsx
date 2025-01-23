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
import { podcastList } from "~/data/podcasts";

export default function Podcasts() {
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

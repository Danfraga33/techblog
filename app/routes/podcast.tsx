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
import { Button } from "~/components/ui/button";
import { Play } from "lucide-react";
import { Link, useLoaderData } from "@remix-run/react";
import { getPodcasts } from "~/.server/podcasts";

export async function loader() {
  return await getPodcasts();
}

export default function Podcasts() {
  const podcasts = useLoaderData<typeof loader>();

  return (
    <>
      <ContentLayout
        title="Podcasts"
        description="Deep dives into emerging technology, covering AI, quantum computing, semiconductors, and trends shaping the future."
      >
        <section className="container flex min-h-[400px] w-3/4 flex-col">
          <section className="flex items-center gap-8 py-8">
            {podcasts.map((podcast) => (
              <Fragment key={podcast.frontmatter.title}>
                <LatestPodcastCard
                  title={podcast.frontmatter.title}
                  description={podcast.frontmatter.description}
                  category={podcast.frontmatter.category}
                  slug={podcast.slug}
                />
              </Fragment>
            ))}
          </section>
        </section>

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
            <TableBody className="overflow-scroll">
              {podcasts.map((podcast) => (
                <Fragment key={podcast.frontmatter.title}>
                  <TableRow className="transition-all hover:bg-stone-50">
                    <TableCell>
                      {new Date(podcast.frontmatter.date).toDateString()}
                    </TableCell>
                    <TableCell>{podcast.frontmatter.title}</TableCell>
                    <TableCell>{podcast.frontmatter.description}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        className="flex items-center"
                        asChild
                      >
                        <Link to={podcast.slug}>
                          <Play />
                          Listen
                        </Link>
                      </Button>
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

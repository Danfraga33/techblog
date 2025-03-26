import { Link, useLoaderData } from "@remix-run/react";
import { Play, Search } from "lucide-react";
import { getPodcasts } from "~/.server/podcasts";
import PodcastCard from "~/components/PodcastCard";
export async function loader() {
  return await getPodcasts();
}
// Helper function to capitalize words
function capitalizeWords(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function PodcastsPage() {
  const podcasts = useLoaderData<typeof loader>();

  return (
    <main>
      <section className="container mx-auto px-4 py-16">
        <div className="mb-16 text-black">
          <h1 className="mb-4 font-heading text-7xl font-bold">
            PODCAST<span className="text-primary">.</span>
          </h1>
          <p className="max-w-3xl text-xl">
            Deep dives into emerging art and culture, covering contemporary
            movements, artistic expression, cultural phenomena, and trends
            shaping the future.
          </p>
        </div>

        <section className="mb-16 text-black">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {podcasts.slice(0, 3).map((podcast, i) => (
              <PodcastCard key={i} podcast={podcast} />
            ))}
          </div>
        </section>

        <section className="mt-24">
          <h2 className="mb-8 text-5xl font-bold">Recently Added</h2>

          <div className="relative mb-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="search"
              className="block w-full border border-black p-4 pl-10 focus:outline-none"
              placeholder="Search podcasts..."
            />
          </div>

          {/* Podcasts Table */}
          <div className="border border-black text-black">
            <table className="w-full">
              <thead>
                <tr className="border-b border-black">
                  <th className="p-4 text-left">Date Published</th>
                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Title</th>
                  <th className="p-4 text-left">Description</th>
                  <th className="p-4 text-left">Listen</th>
                </tr>
              </thead>
              <tbody>
                {podcasts.map((podcast, i: number) => (
                  <tr
                    key={i}
                    className="border-b border-black transition-colors hover:bg-gray-50"
                  >
                    <td className="p-4">
                      {new Date(podcast.frontmatter.date).toDateString()}
                    </td>
                    <td className="p-4">
                      {capitalizeWords(podcast.frontmatter.subject)}
                    </td>
                    <td className="p-4 font-medium">
                      {podcast.frontmatter.title}
                    </td>
                    <td className="max-w-md truncate p-4">
                      {podcast.frontmatter.description}
                    </td>
                    <td className="p-4">
                      <Link
                        to={`/podcasts/${podcast.slug}`}
                        className="inline-flex items-center gap-2 border border-black px-4 py-2 transition-colors hover:bg-black hover:text-white"
                      >
                        <Play size={16} />
                        Listen
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  );
}

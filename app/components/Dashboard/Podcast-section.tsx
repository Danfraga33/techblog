import { Link } from "@remix-run/react";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { formatDate } from "~/lib/utils";
import { Podcast } from "~/utils/types";
import { Badge } from "../ui/badge";

export default function PodcastSection({ podcasts }: { podcasts: Podcast[] }) {
  return (
    <section className="container mx-auto border-t border-black px-4 py-16">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-6xl font-bold text-black">PODCAST</h2>
        <Link
          to="/podcasts"
          className="flex items-center gap-2 whitespace-nowrap font-bold text-black hover:text-primary hover:decoration-primary hover:transition-all"
        >
          ALL PODCASTS <ArrowRight size={20} />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-0 border border-black text-black md:grid-cols-3">
        {podcasts.map((podcast, index) => (
          <Link
            to={`podcasts/${podcast.slug}`}
            key={index}
            className="group border-r border-black p-6 last:border-r-0"
          >
            <div className={`relative mb-4 bg-blue-300`}>
              <div className="absolute bottom-0 right-2 z-10 text-white group-hover:text-primary group-hover:transition-all">
                <ArrowDownRight size={50} />
              </div>
              <img
                src={podcast.frontmatter.coverImage}
                alt={`Episode ${podcast.frontmatter.id}`}
                width={400}
                height={400}
                className="h-auto w-full mix-blend-multiply"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Badge className="inline bg-gray-300 font-heading text-black">
                {podcast.frontmatter.subject}
              </Badge>
              <span className="mb-8 font-heading text-xl font-bold text-black">
                {podcast.frontmatter.title}
              </span>
            </div>

            <div className="flex gap-8">
              <div>
                <span className="text-sm font-semibold text-black text-primary">
                  Date
                </span>
                <p className="text-black">
                  {formatDate(podcast.frontmatter.date)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

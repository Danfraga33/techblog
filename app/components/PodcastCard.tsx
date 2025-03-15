import { Link } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";
import UnderlineAnimation from "./Dashboard/UnderlineAnimation";

export default function PodcastCard({ podcast }: { podcast: any }) {
  return (
    <div className="group">
      <Link to={`/podcasts/${podcast.slug}`}>
        <div className={`relative mb-4 overflow-hidden bg-primary`}>
          <div className="absolute left-4 top-4 z-10 font-bold uppercase text-white">
            Next Frontier
            <br />
            PODCAST
          </div>

          <div className="absolute bottom-4 right-4 z-10 transform text-white transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
            <ArrowUpRight size={24} />
          </div>
          <img
            src={podcast.frontmatter.coverImage}
            alt={`Episode ${1}`}
            width={400}
            height={400}
            className="h-auto w-full mix-blend-multiply transition-transform group-hover:scale-105"
          />
        </div>

        <UnderlineAnimation className="mb-4 text-2xl font-bold">
          {podcast.frontmatter.title}
        </UnderlineAnimation>
        <p className="mb-4 line-clamp-2">{podcast.frontmatter.description}</p>

        <div className="flex gap-8">
          <div>
            <span className="text-sm font-medium">Date</span>
            <p>
              {new Date(podcast.frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div>
            <span className="text-sm font-medium">Duration</span>
            <p>{podcast.duration}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

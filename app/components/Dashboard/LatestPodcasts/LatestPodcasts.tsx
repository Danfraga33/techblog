import Link from "next/link";
import { getPodcasts } from "@/app/functions/getPodcasts";
import Image from "next/image";

export default async function LatestPodcasts() {
  const data = await getPodcasts();
  return (
    <div className="mx-auto grid w-full max-w-[95rem] border-collapse grid-cols-1 border border-black md:grid-cols-3 xl:grid-cols-3">
      {data
        .map((podcast) => (
          <article className="border border-black p-4 md:p-12" key={podcast.id}>
            <Link href={`/podcasts/${podcast.slug}`}>
              <Image
                className="transition hover:scale-105"
                src={podcast.img}
                alt={podcast.imgAlt}
                width={920}
                height={920}
              />
            </Link>
            <h2 className="heading3-title mb-12 mt-8">
              <Link href={`/podcasts/${podcast.slug}`}>{podcast.title}</Link>
            </h2>
            <div className="flex flex-wrap gap-4">
              <span className="flex">
                <p className="pr-2 font-semibold">Date</p>
                <time dateTime={podcast.date}>{podcast.date}</time>
              </span>
              <span className="flex">
                <p className="pr-2 font-semibold">Duration</p>
                <p>{podcast.duration}</p>
              </span>
            </div>
          </article>
        ))
        .slice(0, 3)}
    </div>
  );
}

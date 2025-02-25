import { Button } from "~/components/ui/button";
import { sortByDate } from "~/lib/utils";
import { useState } from "react";
import Header from "~/components/Dashboard/Header";
import RecentBlogs from "~/components/Dashboard/RecentBlogs";
import { author } from "~/data/constant/author";
import { resources } from "~/data/constant/recommendedResources";
import { Smile } from "lucide-react";

import { getPosts } from "~/.server/posts";
import { Link, json, useLoaderData } from "@remix-run/react";
import { getPodcasts } from "~/.server/podcasts";
import { Card } from "~/components/ui/card";
import ComingSoon from "~/components/Dashboard/ComingSoon";

export type NewsArticleType = {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
  relevance_score: number;
  locale: string;
};

export async function loader() {
  const blogPosts = await getPosts();
  const podcasts = await getPodcasts();
  return json({ blogPosts, podcasts });
}

export default function Home() {
  const { blogPosts, podcasts } = useLoaderData<typeof loader>();
  const totalContent = [...blogPosts, ...podcasts];

  const sortedData = sortByDate(totalContent);

  return (
    <div className="min-h-screen bg-zinc-200">
      <Header />

      <main className="px-4">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-3">
            <div className="col-span-3 py-6">
              <div className="grid gap-8 lg:grid-cols-3 lg:gap-16">
                <div className="relative lg:col-span-3">
                  <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl sm:h-[500px] lg:h-[600px]">
                    <img
                      src="chip.jpg"
                      alt="Chip"
                      className="absolute inset-0 h-full w-full rounded-2xl object-cover"
                    />

                    <div className="absolute inset-0 bg-black/60"></div>
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-center space-y-8 px-4 sm:px-8 lg:px-16">
                    <div className="space-y-4">
                      <h1 className="text-6xl font-bold tracking-tight text-white sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                        Emerging
                        <br />
                        Technology
                      </h1>
                      <p className="max-w-[600px] text-lg text-white/80">
                        Unprecedented innovation, unparalleled returns.
                        Capitalizing on the future of technology.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button variant="default" asChild>
                        <Link
                          to="/blog"
                          className="font-semibold text-white hover:text-stone-700"
                        >
                          Explore
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="text-stone-700"
                        asChild
                      >
                        <Link to="/podcast">Listen</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 grid gap-8 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-2 gap-8 p-4">
            <RecentBlogs blogPosts={sortedData} />
          </Card>
          <Card className="col-span-2 space-y-8 p-4 shadow-xl lg:col-span-1">
            <section>
              <div>
                <h2 className="mb-4 text-xl font-semibold">Trending News</h2>
              </div>
              <div className="flex items-center gap-2">
                Coming soon... <Smile color="red" />
              </div>
            </section>
            <section className="pr-2">
              <h2 className="mb-4 text-xl font-semibold">
                Small Caps Riding the Wave
              </h2>
              <div className="space-y-4">
                <ComingSoon />
              </div>
            </section>
            <section>
              <h2 className="mb-4 text-xl font-semibold">
                Recommended Resources
              </h2>
              <div className="space-y-4">
                {resources.map((resource, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={resource.avatarImg}
                        alt={resource.name}
                        height={6}
                        width={6}
                        className="rounded-full"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <div className="flex flex-col">
                        <span className="font-medium">{resource.name}</span>
                        <span className="text-xs font-light">
                          {resource.category}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={resource.link}>View</a>
                    </Button>
                  </div>
                ))}
              </div>
            </section>
          </Card>
        </div>
      </main>
    </div>
  );
}

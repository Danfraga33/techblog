import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";
import { useState } from "react";
import { Separator } from "~/components/ui/separator";
import Header from "~/components/Dashboard/Header";
import RecentBlogs from "~/components/Dashboard/RecentBlogs";
import { author } from "~/data/constant/author";
import { resources } from "~/data/constant/recommendedResources";
import { Smile } from "lucide-react";

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

// const cacheTTL = 24 * 60 * 60 * 1000; // 24 hours
// let cache = new Map();
// export async function loader() {
//   const cacheKey = "semiconductorNews";
//   const currentTime = Date.now();

//   // Try to get the cached data from Redis

//   try {
//     const limit = 3;
//     const search = "Semiconductor";
//     const pub_after = "2025-01-20";
//     const response = await fetch(
//       `https://api.thenewsapi.com/v1/news/top?api_token=${process.env.THENEWSAPI_API_KEY}&locale=us&limit=${limit}&exclude_domains=seekingalpha.com&search=${search}&published_after=${pub_after}`,
//     );

//     // Check if the API response is successful
//     if (!response.ok) {
//       throw new Error(
//         `Failed to fetch news: ${response.status} ${response.statusText}`,
//       );
//     }

//     // Parse the response as JSON
//     const news = await response.json();

//     // Store the fetched news and the timestamp in Redis

//     cache.set(cacheKey, { news });
//     console.log("Fetching new data from API and updating cache");
//     return json(news);
//   } catch (error) {
//     console.error("Error fetching semiconductor news:", error);
//     throw new Error("Could not load semiconductor news.");
//   }
// }

export default function Home() {
  const [category, setCategory] = useState("Most Recent");
  // const news = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Navigation */}
      <div className="border-b">
        <div className="px-4">
          <div className="no-scrollbar flex gap-4 overflow-x-auto py-4">
            <Badge variant="secondary"> Data Centre's</Badge>
            <Badge variant="secondary"> Algorithims</Badge>
            <Badge variant="secondary"> Photolithography</Badge>
            <Badge variant="secondary"> TSMC</Badge>
          </div>
          <div className="flex gap-8 py-4">
            <button
              className={cn(
                "text-muted-foreground",
                category === "Most Recent" && "border-b-2 border-primary",
              )}
              onClick={() => setCategory("Most Recent")}
            >
              Most Recent
            </button>
            <button
              className={cn(
                "text-muted-foreground",
                category === "AI" && "border-b-2 border-primary",
              )}
              onClick={() => setCategory("AI")}
            >
              AI
            </button>
            <button
              className={cn(
                "text-muted-foreground",
                category === "Semiconductors" && "border-b-2 border-primary",
              )}
              onClick={() => setCategory("Semiconductors")}
            >
              Semiconductors
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Feed */}
          <div className="space-y-6 lg:col-span-2">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Trending #1 */}
              <div className="group relative">
                <div className="absolute left-4 top-4 z-10">
                  <Badge className="bg-white/90 text-foreground">Blog</Badge>
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="chip.jpg"
                    alt="Fashion"
                    width={600}
                    height={400}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <div className="mb-2 flex items-center gap-2">
                    <img
                      src="chip.jpg"
                      alt="Author"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="font-medium">Esther Howard</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">Fashion</span>
                  </div>
                  <h2 className="mb-2 text-xl font-semibold">
                    Fashion Icon's New Collection Embraces Nature Elegance
                  </h2>
                  <p className="line-clamp-2 text-muted-foreground">
                    Renowned for pushing the boundaries of fashion, the latest
                    collection captures the serene beauty of nature.
                  </p>
                </div>
              </div>

              {/* Trending #2 */}
              <div className="group relative">
                <div className="absolute left-4 top-4 z-10">
                  <Badge className="bg-white/90 text-foreground">Podcast</Badge>
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="chip.jpg"
                    alt="Environment"
                    width={600}
                    height={400}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <div className="mb-2 flex items-center gap-2">
                    <img
                      src="chip.jpg"
                      alt="Author"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="font-medium">Corey Rhiel Madsen</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">Environment</span>
                  </div>
                  <h2 className="mb-2 text-xl font-semibold">
                    Endangered Orangutan Population Shows Signs of Recovery in
                    Borneo
                  </h2>
                  <p className="line-clamp-2 text-muted-foreground">
                    In a heartening development, conservation efforts in Borneo
                    have begun to show positive results.
                  </p>
                </div>
              </div>
            </div>

            <Separator />
            {/* Regular Articles */}
            <RecentBlogs />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <section>
              <div className="flex gap-2">
                <h2 className="mb-4 text-xl font-semibold">Recent News</h2>
                Coming soon... <Smile color="red" />
              </div>
              {/* <div className="space-y-4">
                {news.data.map((article: NewsArticleType, i: number) => (
                  <article key={i} className="flex gap-4">
                    <a
                      href={article.url}
                      className="flex flex-1 items-center gap-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <img
                            src={article.image_url}
                            alt="Author"
                            width={20}
                            height={20}
                            className="rounded-full"
                          />
                          <span className="text-sm font-medium">
                            {article.source}
                          </span>
                          <span className="text-sm text-green-600">•</span>
                          <span className="text-sm text-muted-foreground">
                            {new Date(article.published_at).toDateString()}
                          </span>
                        </div>
                        <h3 className="mb-1 line-clamp-2 font-medium">
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>5 min read</span>
                        </div>
                      </div>

                      <div className="h-20 w-20">
                        <img
                          src={article.image_url}
                          alt="Article"
                          className="h-full w-full rounded-lg object-cover"
                        />
                      </div>
                    </a>
                  </article>
                ))}
              </div> */}
            </section>
            <section>
              <h2 className="mb-4 text-xl font-semibold">Semiconductor</h2>
              <div className="space-y-4">
                {[
                  {
                    author: author.name,
                    avatarImg: author.avatarImage,

                    category: "Semiconductor",
                    title:
                      "New Solar Panel Technology Increases Efficiency by 30%",
                    date: "11 July 2024",
                    readTime: "2 min read",
                  },
                  {
                    author: author.name,
                    avatarImg: author.avatarImage,
                    category: "Aritificial Intelligence",
                    title: "World's Oldest Known Tree Discovered in Australia",
                    date: "12 July 2024",
                    readTime: "4 min read",
                  },
                ].map((article, i) => (
                  <article key={i} className="flex gap-4">
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <img
                          src={article.avatarImg}
                          alt={article.author}
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                        <span className="text-sm font-medium">
                          {article.author}
                        </span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="mb-1 line-clamp-2 font-medium">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <div className="h-20 w-20">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1JzbrAiPjEYkAmhWeldOz8tVOO2pdU.png"
                        alt="Article"
                        width={80}
                        height={80}
                        className="h-full w-full rounded-lg object-cover"
                      />
                    </div>
                  </article>
                ))}
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
          </div>
        </div>
      </main>
    </div>
  );
}

import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Image } from "@heroui/react";
import { cn } from "~/lib/utils";
import { useState } from "react";
import { Separator } from "~/components/ui/separator";
import Header from "~/components/Dashboard/Header";

export default function Home() {
  const [category, setCategory] = useState("Most Recent");
  console.log("category: ", category);

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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1JzbrAiPjEYkAmhWeldOz8tVOO2pdU.png"
                    alt="Fashion"
                    width={600}
                    height={400}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <div className="mb-2 flex items-center gap-2">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1JzbrAiPjEYkAmhWeldOz8tVOO2pdU.png"
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1JzbrAiPjEYkAmhWeldOz8tVOO2pdU.png"
                    alt="Environment"
                    width={600}
                    height={400}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <div className="mb-2 flex items-center gap-2">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1JzbrAiPjEYkAmhWeldOz8tVOO2pdU.png"
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
            <div className="space-y-6">
              <article className="flex gap-4">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <img
                      src="/water.jpg"
                      alt="Tech"
                      className="h-60 w-64 rounded-lg object-cover" // Set both width and height to the same value (e.g., 16rem)
                    />
                    <div>
                      <span className="text-muted-foreground">Fabless</span>
                      <h3 className="mb-2 text-xl font-semibold">
                        Tech Giant Unveils Revolutionary AI Chip
                      </h3>
                      <p className="line-clamp-2 text-muted-foreground">
                        Renowned for pushing the boundaries of technology, the
                        latest innovation promises unprecedented performance.
                      </p>
                      <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <span>10 July 2024</span>
                        <span>•</span>
                        <span>2 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <section>
              <h2 className="mb-4 text-xl font-semibold">
                Artificial Intelligence
              </h2>
              <div className="space-y-4">
                {[
                  {
                    author: "Alfredo Lubin",
                    category: "Technology",
                    title:
                      "New Solar Panel Technology Increases Efficiency by 30%",
                    date: "11 July 2024",
                    readTime: "2 min read",
                  },
                  {
                    author: "Justin Levin",
                    category: "Environment",
                    title: "World's Oldest Known Tree Discovered in Australia",
                    date: "12 July 2024",
                    readTime: "4 min read",
                  },
                ].map((article, i) => (
                  <article key={i} className="flex gap-4">
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1JzbrAiPjEYkAmhWeldOz8tVOO2pdU.png"
                          alt="Author"
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
              <h2 className="mb-4 text-xl font-semibold">Semiconductor</h2>
              <div className="space-y-4">
                {[
                  {
                    author: "Alfredo Lubin",
                    category: "Technology",
                    title:
                      "New Solar Panel Technology Increases Efficiency by 30%",
                    date: "11 July 2024",
                    readTime: "2 min read",
                  },
                  {
                    author: "Justin Levin",
                    category: "Environment",
                    title: "World's Oldest Known Tree Discovered in Australia",
                    date: "12 July 2024",
                    readTime: "4 min read",
                  },
                ].map((article, i) => (
                  <article key={i} className="flex gap-4">
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1JzbrAiPjEYkAmhWeldOz8tVOO2pdU.png"
                          alt="Author"
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
                {[{ name: "Haylie Botosh" }, { name: "Emerson Dias" }].map(
                  (user, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1JzbrAiPjEYkAmhWeldOz8tVOO2pdU.png"
                          alt={user.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <span className="font-medium">{user.name}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Follow
                      </Button>
                    </div>
                  ),
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

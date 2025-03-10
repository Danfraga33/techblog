import { Button } from "~/components/ui/button";
import { formatDate, sortByDate } from "~/lib/utils";
import Header from "~/components/Dashboard/Header";
import RecentBlogs from "~/components/Dashboard/RecentBlogs";
import { resources } from "~/data/constant/recommendedResources";
import { ArrowRight, Search, Smile } from "lucide-react";

import { getPosts } from "~/.server/posts";
import { Link, json, useLoaderData } from "@remix-run/react";
import { getPodcasts } from "~/.server/podcasts";
import { Card, CardContent } from "~/components/ui/card";
import ComingSoon from "~/components/Dashboard/ComingSoon";
import SmallComingSoon from "~/components/SmallComingSoon";
import hero from "../../public/hero.svg";
import { Fragment } from "react";
import { Badge } from "~/components/ui/badge";

export async function loader() {
  const blogPosts = await getPosts();
  const podcasts = await getPodcasts();
  return json({ blogPosts, podcasts });
}

function NavItem({ label }: { label: string }) {
  return (
    <div className="group relative">
      <button className="flex items-center px-2 py-1 text-sm font-medium text-gray-700 hover:text-gray-900">
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1 h-4 w-4"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
    </div>
  );
}

export default function Home() {
  const { blogPosts, podcasts } = useLoaderData<typeof loader>();
  const totalContent = [...blogPosts, ...podcasts];
  const mostRecent = totalContent[0];
  const secondRecent = totalContent[1];

  const sortedData = sortByDate(totalContent);

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="h-screen">
        <div className="flex h-full flex-col p-6">
          {/* Header */}
          <Header />

          {/* Main Article Section */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid h-full grid-cols-10 rounded-xl shadow-sm">
              {/* Left Column (Main Content) */}
              <div className="col-span-7 flex h-full flex-col justify-between p-3">
                {/* Hero Section */}
                <div className="flex h-full flex-col gap-6 pt-16 md:flex-row">
                  <div className="flex flex-1 flex-col gap-8">
                    <Badge className="mb-4 inline w-fit rounded-md bg-gradient-to-r from-[#8670DB] via-purple-200 to-white py-1 text-sm font-semibold text-[#1a1a1a]">
                      BEST OF THE WEEK
                    </Badge>
                    <div className="mb-2 flex items-center space-x-2">
                      <span className="text-sm font-medium text-blue-600">
                        {mostRecent.frontmatter.subject}
                      </span>
                      <span className="text-xs text-gray-500">
                        • {formatDate(mostRecent.frontmatter.date)}
                      </span>
                    </div>
                    <h1 className="mb-4 text-2xl font-bold md:text-8xl">
                      {mostRecent.frontmatter.title}
                    </h1>
                    <div className="mb-6 flex items-center space-x-2">
                      <span className="text-md rounded bg-gray-100 px-2 py-1 text-gray-800">
                        {mostRecent.frontmatter.description}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      className="w-1/2 rounded-2xl text-lg"
                    >
                      Read more
                    </Button>
                  </div>
                  <img
                    className="hidden object-contain lg:block lg:w-96 xl:w-[800px]"
                    src="/herr.png"
                    alt="hero_img"
                  />
                </div>
                <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
                {/* Article Cards */}
                <div className="flex gap-6">
                  {podcasts.map((podcast, i) => (
                    <Fragment key={i}>
                      <ArticleCard
                        title={podcast.frontmatter.title}
                        category={podcast.frontmatter.subject}
                        time={formatDate(podcast.frontmatter.date)}
                      />
                    </Fragment>
                  ))}
                </div>
              </div>

              {/* Right Column (Recommended Section) */}
              <div className="col-span-3 h-full overflow-y-auto p-3">
                <Card className="mb-4 flex h-full w-full flex-col p-3">
                  <div className="flex justify-between py-4 md:mx-0 lg:px-2 xl:px-8">
                    <h2 className="text-lg font-semibold lg:text-2xl">
                      Recent
                    </h2>
                    <Link to="#" className="flex text-sm text-gray-600">
                      View all
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                  <Card className="p relative h-52 w-full overflow-hidden">
                    <CardContent className="h-full w-full p-0">
                      {/* Image */}
                      <img
                        src={secondRecent.frontmatter.coverImage}
                        className="h-full w-full object-cover"
                        alt="articleImage"
                      />

                      {/* Gradient Overlay */}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-[#8670DB] to-transparent opacity-50"
                        aria-hidden="true"
                      />

                      {/* Content */}
                      <div className="absolute bottom-14 left-2 rounded px-2 py-1 text-black">
                        <span className="text-xs font-medium">
                          {secondRecent.frontmatter.date}
                        </span>
                        <div className="mb-2 flex w-3/4 flex-wrap items-center space-x-2">
                          <span className="text-md font-medium">
                            {secondRecent.frontmatter.description}
                          </span>
                        </div>
                      </div>
                      <h1 className="absolute bottom-0 left-2 w-1/2 rounded px-2 py-1 text-lg text-black">
                        {secondRecent.frontmatter.title}
                      </h1>
                    </CardContent>
                  </Card>
                  <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
                  {totalContent.map((content) => (
                    <RecommendedArticle
                      key={content.frontmatter.title} // Add a unique key
                      title={content.frontmatter.title}
                      category={content.frontmatter.subject}
                      time={formatDate(content.frontmatter.date)}
                      imageUrl={content.frontmatter.coverImage}
                    />
                  ))}
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ArticleCard({
  title,
  category,
  time,
}: {
  title: string;
  category: string;
  time: string;
}) {
  return (
    <div className="overflow-hidden bg-transparent p-4">
      <div className="mb-2 flex items-center space-x-2">
        <span className="text-xl font-medium text-blue-600">{category}</span>
        <span className="text-lg text-gray-500">• {time}</span>
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    </div>
  );
}
function RecommendedArticle({
  title,
  category,
  time,
  imageUrl,
}: {
  title: string;
  category: string;
  time: string;
  imageUrl: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm">
      <div className="flex gap-8 p-4">
        <div className="flex flex-1 flex-col gap-4">
          <div className="mb-2 flex items-center space-x-2">
            <span className="text-md font-medium text-blue-600">
              {category}
            </span>
            <span className="text-md text-gray-500">• {time}</span>
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <Button variant="outline" asChild>
            <Link to="/">Read More</Link>
          </Button>
        </div>
        <div className="relative h-32 w-40 flex-shrink-0">
          <img
            src={imageUrl || hero.png}
            alt={title}
            className="rounded-lg object-contain"
          />
        </div>
      </div>
      <hr className="my-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
    </div>
  );
}

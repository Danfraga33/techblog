import { Link, json } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";
import { resources } from "~/data/constant/recommendedResources";
import { formatDate } from "~/lib/utils";
import { magazine } from "~/data/constant/magazine";
import UnderlineAnimation from "./Dashboard/UnderlineAnimation";
import { Newsletter } from "~/utils/types";

export default function BlogSection({
  blogPosts,
  newsletters,
}: {
  blogPosts: any;
  newsletters: Newsletter[];
}) {
  const monthlyReport = newsletters[0];
  console.log("monthlyReport: ", monthlyReport);
  console.log("blogPosts: ", blogPosts);
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Left Column: Blog Posts */}
        <div className="md:col-span-2">
          {blogPosts.map((post, index) => (
            <Link
              to={`blog/${post.slug}`}
              key={post.id}
              className={` ${index > 0 ? "mt-8 border-t border-black pt-8" : ""}`}
            >
              <div className="grid grid-cols-1 gap-6 pb-4 md:grid-cols-4">
                <div className="md:col-span-1">
                  <img
                    src={
                      post.frontmatter.image_url || post.frontmatter.coverImage
                    }
                    alt={post.title}
                    width={300}
                    height={300}
                    className="h-auto w-full"
                  />
                </div>
                <div className="md:col-span-3">
                  <UnderlineAnimation className="mb-4 pb-1 text-xl font-bold lg:text-3xl">
                    <span> {post.frontmatter.title}</span>
                  </UnderlineAnimation>
                  <p className="mb-4 text-black">
                    {post.frontmatter.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-8">
                      <div className="text-xs text-black">
                        <span className="font-medium">Reading Time</span>
                        <p className="text-primary">
                          {formatDate(post.frontmatter.date)}
                        </p>
                      </div>
                      <div className="text-xs text-black">
                        <span className="font-medium">Reading Time</span>
                        <p className="text-primary">
                          {post.frontmatter.estimatedReadingTime} min
                        </p>
                      </div>
                    </div>
                    {post.frontmatter.subject && (
                      <div className="max-w-[120px] truncate whitespace-nowrap rounded-full border border-black px-4 py-2 text-center text-primary">
                        {post.frontmatter.subject}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <div className="mt-8 flex justify-center">
            <Link
              to="/blog"
              className="rounded bg-black px-8 py-3 uppercase text-white hover:bg-gray-800"
            >
              All Blogs
            </Link>
          </div>
        </div>

        {/* Right Column: Newsletter and Resources */}
        <div className="md:col-span-1">
          <div className="mb-8">
            <div className="mb-2 text-right uppercase text-black">
              EmergingMonthly
            </div>
          </div>

          <div className="relative mb-8">
            <div className="bg-[#C4846A] p-4 text-white md:p-6">
              <div className="mb-16 text-2xl font-bold uppercase text-black md:text-xl lg:text-3xl xl:text-4xl">
                {monthlyReport.title}
                <br />
                Newsletter
              </div>
              <div className="flex items-end justify-between">
                <div className="rounded-full bg-yellow-300 px-4 py-1 text-xs uppercase text-black">
                  EXCLUSIVE
                </div>
                <div>
                  <div className="mb-1 text-center uppercase text-black">
                    {magazine.author.firstName}
                  </div>
                  <div className="text-center font-bold uppercase text-black">
                    {magazine.author.lastName}
                  </div>
                </div>
              </div>

              <div className="mt-16 font-semibold text-black">
                {formatDate(monthlyReport.uploadDate)}
              </div>
              <div className="absolute bottom-4 right-4 text-black hover:text-primary hover:transition-all">
                <Link to="/newsletter">
                  <ArrowUpRight size={24} />
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-4 text-center">
            <button className="rounded bg-black px-8 py-3 uppercase text-white">
              Coming soon
            </button>
          </div>

          <div className="mt-16">
            <h3 className="group mb-8 inline-block text-xl font-bold uppercase text-black">
              Recommended Resources
            </h3>

            <div className="space-y-6">
              {resources.map((post) => (
                <div key={post.id} className="text-md flex gap-4">
                  <div className="font-bold text-black">
                    {post.id.toString().padStart(2, "0")}
                  </div>
                  <Link to={post.link}>
                    <UnderlineAnimation className="font-semibold">
                      {post.name}
                    </UnderlineAnimation>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

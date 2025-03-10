import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Link, json, useLoaderData } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import { Fragment, useState } from "react";
import { getPosts } from "~/.server/posts";
import FilterTags from "~/components/Dashboard/FilterTags";
import Header from "~/components/Dashboard/Header";
import { SmallSignup } from "~/components/Dashboard/SmallSignup";
import FadedDivider from "~/components/Dashboard/StyleComponents.tsx/FadedDivider";
import { filterMenu } from "~/data/constant/filterMenu";
import { cn } from "~/lib/utils";

export async function loader() {
  const blogPosts = await getPosts();
  return json({ blogPosts });
}
const Blog = () => {
  const { blogPosts } = useLoaderData<typeof loader>();
  const [subject, setSubject] = useState("View all");
  const [tags, setTags] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const subjectFilter =
      subject === "View all" ||
      post.frontmatter.subject.toLowerCase() === subject.toLowerCase();

    const tagFilter = tags === "" || post.frontmatter.tags.includes(tags);

    return subjectFilter && tagFilter;
  });
  return (
    <>
      <div className="min-w-screen container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-8">
          <nav className="border-b">
            <div className="px-4">
              <div className="no-scrollbar flex cursor-pointer flex-wrap gap-4 overflow-x-auto py-4">
                <FilterTags blogPosts={blogPosts} setTags={setTags} />
              </div>
            </div>

            <ul className="-mb-px flex gap-8">
              {filterMenu.map((item) => (
                <Fragment key={item}>
                  <li>
                    <button
                      onClick={() => {
                        setSubject(item);
                      }}
                      className={cn(
                        "inline-block py-3 font-medium text-white",
                        subject === item && "border-b-3 border-b-stone-300",
                      )}
                    >
                      {item}
                    </button>
                  </li>
                </Fragment>
              ))}
            </ul>
          </nav>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts &&
            filteredPosts.map((post) => (
              <Fragment key={post.frontmatter.id}>
                <Card className="bg-stacked group">
                  <Link to={`/blog/${post.slug}`} className="block space-y-4">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.frontmatter.coverImage}
                        alt={post.frontmatter.title}
                        className="relative rounded-xl object-cover"
                      />
                      <div className="p-3">
                        <div className="mb-2 text-sm font-semibold text-white">
                          Daniel Fraga
                        </div>
                        <div className="text-sm text-gray-100 opacity-70">
                          {post.frontmatter.date}
                        </div>
                      </div>
                      <FadedDivider />
                      <div className="p-2">
                        <h2 className="text-xl font-semibold text-white transition-colors">
                          {post.frontmatter.title}
                        </h2>
                        <p className="mt-2 text-white">
                          {post.frontmatter.description}
                        </p>
                        <Button
                          variant="flat"
                          className="mt-4 flex items-center gap-2 text-sm font-medium text-primary hover:transition-all"
                        >
                          Read post
                          <ArrowRight />
                        </Button>
                      </div>
                    </div>
                  </Link>
                </Card>
              </Fragment>
            ))}
        </div>
      </div>
    </>
  );
};

export default Blog;

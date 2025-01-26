import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import { Fragment, useState } from "react";
import Header from "~/components/Dashboard/Header";
import { SmallSignup } from "~/components/Dashboard/SmallSignup";
import FadedDivider from "~/components/Dashboard/StyleComponents.tsx/FadedDivider";
import { blogPost } from "~/data/blogPosts";
import { cn } from "~/lib/utils";

const Blog = () => {
  const [filter, setFilter] = useState("View all");

  return (
    <>
      <Header />
      <div className="min-w-screen px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-8">
          <SmallSignup />
          <nav className="border-b">
            <ul className="-mb-px flex gap-8">
              {["View all", "Artificial Intelligence", "Semiconductor"].map(
                (item) => (
                  <Fragment key={item}>
                    <li>
                      <button
                        onClick={() => setFilter(item)}
                        className={cn(
                          "inline-block py-3 font-medium",
                          filter === item && "border-b-3 border-b-stone-300",
                        )}
                      >
                        {item}
                      </button>
                    </li>
                  </Fragment>
                ),
              )}
            </ul>
          </nav>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {blogPost.map((post) => (
            <Card className="group" key={post.id}>
              <Link to={`/blog/${post.title}`} className="block space-y-4">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image.url}
                    alt={post.image.alt}
                    className="relative rounded-xl object-cover"
                  />
                  <div className="p-3">
                    <div className="mb-2 text-sm font-semibold">
                      {post.author}
                    </div>
                    <div className="text-sm opacity-70">{post.date}</div>
                  </div>
                  <FadedDivider />
                  <div className="p-2">
                    <h2 className="text-xl font-semibold transition-colors group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      {post.description}
                    </p>
                    <Button
                      variant="flat"
                      className="mt-4 flex items-center gap-2 text-sm font-medium"
                    >
                      Read post
                      <ArrowRight />
                    </Button>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;

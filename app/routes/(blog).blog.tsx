import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import { Fragment, useState } from "react";
import Header from "~/components/Dashboard/Header";
import { SmallSignup } from "~/components/Dashboard/SmallSignup";
import Title from "~/components/Dashboard/Title";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";

export const blogPost = [
  {
    id: 1,
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers? Look no further.",
    image: {
      url: "/chip.jpg",
      alt: "Person holding a camera",
    },
    author: "Daniel Fraga",
    date: "20 Jan 2022",
    link: "/blog/one",
    tags: ["UX Design", "Presentation Tips", "Creative Storytelling"],
  },
];

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
                      <Link
                        to="#"
                        onClick={() => setFilter(item)}
                        className={cn(
                          "inline-block py-3 font-medium",
                          filter === item && "border-b-3 border-b-stone-300",
                        )}
                      >
                        {item}
                      </Link>
                    </li>
                  </Fragment>
                ),
              )}
            </ul>
          </nav>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Changed to 3 columns */}
          {blogPost.map((post) => (
            <article className="group" key={post.id}>
              <Link to={`/blog/${post.title}`} className="block space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={post.image.url}
                    alt={post.image.alt}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="mb-2 text-sm">{post.author}</div>
                    <div className="text-sm opacity-70">{post.date}</div>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium">
                    Read post
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
      {/* <section className="flex items-center justify-center pt-8">
        <Button>
        <span>
        <ArrowDown />
        </span>
        Lead more
        </Button>
      </section> */}
    </>
  );
};

export default Blog;

import { Link } from "@remix-run/react";
import { Calendar } from "lucide-react";
import React, { Fragment } from "react";
import { author } from "~/data/constant/author";
import FadedDivider from "./StyleComponents.tsx/FadedDivider";
import { Badge } from "../ui/badge";
import { capitalizeWords } from "~/lib/utils";

const RecentBlogList = ({ blogPosts, subject, tags }) => {
  const filteredPosts = blogPosts.filter((post) => {
    const subjectFilter =
      subject === "View all" ||
      post.frontmatter.subject.toLowerCase() === subject.toLowerCase();

    const tagFilter = tags === "" || post.frontmatter.tags.includes(tags);

    return subjectFilter && tagFilter;
  });

  return (
    <>
      {filteredPosts.map((blog) => (
        <Fragment key={blog.frontmatter.id}>
          <Link
            to={
              blog.frontmatter.type === "blog"
                ? `blog/${blog.slug}`
                : `podcast/${blog.slug}`
            }
            className="mb-2 flex gap-4 py-4 transition-all hover:bg-stone-100/50"
          >
            <img
              src={blog.frontmatter.coverImage}
              alt={blog.frontmatter.coverImageAlt}
              className="h-36 w-40 rounded-3xl object-cover md:h-44 md:w-48"
            />
            <div className="flex flex-col justify-evenly">
              <div className="flex items-center gap-1">
                <span>{author.name}</span> <span>•</span>
                <span className="text-muted-foreground">
                  <Badge variant="default" className="text-stone-200">
                    {capitalizeWords(blog.frontmatter.type)}
                  </Badge>
                </span>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold leading-tight tracking-tight md:text-xl md:tracking-normal">
                  {blog.frontmatter.title}
                </h3>
                <p className="line-clamp-2 text-muted-foreground">
                  {blog.frontmatter.description}
                </p>
              </div>
              <div>
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {blog.frontmatter.date}
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <FadedDivider className="my-2" />
        </Fragment>
      ))}
    </>
  );
};

export default RecentBlogList;

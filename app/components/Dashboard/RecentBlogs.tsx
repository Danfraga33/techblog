import { Fragment } from "react";
import { Link } from "@remix-run/react";
import { Badge } from "../ui/badge";
import { Calendar, Eye } from "lucide-react";
import FadedDivider from "./StyleComponents.tsx/FadedDivider";
import { author } from "~/data/constant/author";
import CatFilter from "../CatFilter";

const RecentBlogs = ({ blogPosts }) => {
  return (
    <article className="flex gap-4">
      <div className="flex-1">
        <h1 className="text-3xl">Recent</h1>
        <CatFilter />
        {blogPosts.map((blog) => (
          <Fragment key={blog.frontmatter.id}>
            <Link
              to={
                blog.frontmatter.type === "Blog"
                  ? `blog/${blog.slug}`
                  : `podcast/${blog.slug}`
              }
              className="mb-2 flex gap-4 py-4 transition-all hover:bg-stone-100/50"
            >
              <img
                src={blog.frontmatter.coverImage}
                alt={blog.frontmatter.coverImageAlt}
                className="h-44 w-48 rounded-3xl object-cover"
              />
              <div className="flex flex-col justify-evenly">
                <div className="flex items-center gap-1">
                  <span>{author.name}</span> <span>•</span>
                  <span className="text-muted-foreground">
                    <Badge>{blog.frontmatter.type}</Badge>
                  </span>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
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

                    <span className="flex items-center gap-1">
                      <Eye size={16} />2 min read
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <FadedDivider className="my-2" />
          </Fragment>
        ))}
      </div>
    </article>
  );
};

export default RecentBlogs;

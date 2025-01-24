import React, { Fragment } from "react";
import { Separator } from "../ui/separator";
import { blogPost } from "~/data/blogPosts";
import { Link } from "@remix-run/react";
import { Badge } from "../ui/badge";
import { Calendar, Eye } from "lucide-react";
import FadedDivider from "./StyleComponents.tsx/FadedDivider";

const RecentBlogs = () => {
  return (
    <div className="space-y-6">
      <article className="flex gap-4">
        <div className="flex-1">
          <h1 className="pb-1 text-3xl font-bold tracking-tight">
            Recent Blogs
          </h1>
          <Separator />
          {blogPost.map((blog) => (
            <Fragment key={blog.id}>
              <Link
                to={blog.link}
                className="mb-2 flex gap-4 py-4 transition-all hover:bg-stone-100/50"
              >
                <img
                  src={blog.image.url}
                  alt={blog.image.alt}
                  className="h-44 w-48 rounded-3xl object-cover"
                />
                <div className="flex flex-col justify-evenly">
                  <div className="flex items-center gap-1">
                    <span>{blog.author}</span> <span>•</span>
                    <span className="text-muted-foreground">
                      <Badge>{blog.topic}</Badge>
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{blog.title}</h3>
                    <p className="line-clamp-2 text-muted-foreground">
                      {blog.description}
                    </p>
                  </div>
                  <div>
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {blog.date}
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
    </div>
  );
};

export default RecentBlogs;

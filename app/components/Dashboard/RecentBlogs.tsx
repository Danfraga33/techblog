import { useState } from "react";
import { filterMenu } from "~/data/constant/filterMenu";
import { cn } from "~/lib/utils";
import RecentBlogList from "./RecentBlogList";
import FilterTags from "./FilterTags";
import { BlogPost } from "~/utils/types";

const RecentBlogs = ({ blogPosts }: { blogPosts: BlogPost }) => {
  const [subject, setSubject] = useState("View all");
  const [tags, setTags] = useState("");

  return (
    <article className="flex gap-4">
      <div className="flex-1">
        <h1 className="text-3xl">Recent</h1>
        <div className="border-b">
          <div className="px-4">
            <div className="no-scrollbar flex cursor-pointer flex-wrap gap-4 overflow-x-auto py-4">
              <FilterTags blogPosts={blogPosts} setTags={setTags} />
            </div>
          </div>
        </div>
        <div className="flex gap-8 py-4">
          {filterMenu.map((item, index) => (
            <button
              className={cn(
                "text-muted-foreground",
                subject === item && "border-b-2 border-primary",
              )}
              onClick={() => setSubject(item)}
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
        <RecentBlogList blogPosts={blogPosts} tags={tags} subject={subject} />
      </div>
    </article>
  );
};

export default RecentBlogs;

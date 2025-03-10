import React, { Dispatch, SetStateAction } from "react";
import { Badge } from "../ui/badge";
import { BlogPost } from "~/utils/types";

const FilterTags = ({
  setTags,
  blogPosts,
}: {
  setTags: Dispatch<SetStateAction<string>>;
  blogPosts: BlogPost;
}) => {
  const blogTags: string[] = [
    ...new Set(blogPosts.flatMap((post) => post.frontmatter.tags || [])),
  ];
  return (
    <>
      <Badge
        variant="outline"
        className="hover:bg-stacked text-sm text-white shadow-md transition-all hover:text-white"
        onClick={() => setTags("")}
      >
        Clear
      </Badge>

      {blogTags.map((tag) => (
        <Badge
          key={tag}
          className="bg-background text-sm text-stone-100 text-white shadow-md transition-all hover:bg-stone-300"
          onClick={() => setTags(tag)}
        >
          {tag}
        </Badge>
      ))}
    </>
  );
};

export default FilterTags;

import React, { Dispatch, SetStateAction } from "react";
import { Badge } from "../ui/badge";

const FilterTags = ({
  setTags,
  blogPosts,
}: {
  setTags: Dispatch<SetStateAction<string>>;
}) => {
  const blogTags: string[] = [
    ...new Set(blogPosts.flatMap((post) => post.frontmatter.tags || [])),
  ];
  return (
    <>
      <Badge
        variant="secondary"
        className="text-sm text-stone-100 shadow-md transition-all hover:bg-stone-300"
        onClick={() => setTags("")}
      >
        Clear
      </Badge>
      {blogTags.map((tag) => (
        <Badge
          key={tag}
          variant="default"
          className="text-sm text-stone-100 shadow-md transition-all hover:bg-stone-300"
          onClick={() => setTags(tag)}
        >
          {tag}
        </Badge>
      ))}
    </>
  );
};

export default FilterTags;

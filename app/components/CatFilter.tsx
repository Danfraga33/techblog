import React from "react";
import { Badge } from "./ui/badge";

type TagsTypes = {
  tags: string[];
};

const CatFilter = ({ tags }: TagsTypes) => {
  return (
    <div className="border-b">
      <div className="px-4">
        <div className="no-scrollbar flex cursor-pointer flex-wrap gap-4 overflow-x-auto py-4">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="default"
              className="text-sm text-secondary transition-all hover:bg-stone-300"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatFilter;

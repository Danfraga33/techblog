import React, { useState } from "react";
import { filterMenu } from "~/data/constant/filterMenu";
import { cn } from "~/lib/utils";

const FilterMenu = () => {
  const [category, setCategory] = useState("View all");
  return (
    <div className="flex gap-8 py-4">
      {filterMenu.map((item, index) => (
        <button
          className={cn(
            "text-muted-foreground",
            category === item && "border-b-2 border-primary",
          )}
          onClick={() => setCategory(item)}
          key={index}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FilterMenu;

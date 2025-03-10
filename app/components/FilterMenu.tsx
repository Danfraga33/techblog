import React, { useState } from "react";
import { filterMenu } from "~/data/constant/filterMenu";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";

const FilterMenu = () => {
  const [category, setCategory] = useState("View all");
  return (
    <div className="mb-8 flex items-center justify-between">
      <div className="flex gap-4 overflow-x-auto pb-2">
        {filterMenu.map((item, index) => (
          <Button
            variant="ghost"
            className={cn(
              "rounded-full font-medium text-white",
              category === item && "border-b-2 border-primary",
            )}
            onClick={() => setCategory(item)}
            key={index}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FilterMenu;

import React, { useState } from "react";
import { cn } from "~/lib/utils";
import { Badge } from "./ui/badge";

const CatFilter = () => {
  const [category, setCategory] = useState("AI");
  return (
    <div className="border-b">
      <div className="px-4">
        <div className="no-scrollbar flex cursor-pointer gap-4 overflow-x-auto py-4">
          <Badge
            variant="secondary"
            className="transition-all hover:bg-stone-200"
          >
            Data Centre's
          </Badge>
          <Badge
            variant="secondary"
            className="transition-all hover:bg-stone-200"
          >
            Algorithims
          </Badge>
          <Badge
            variant="secondary"
            className="transition-all hover:bg-stone-200"
          >
            Photolithography
          </Badge>
          <Badge
            variant="secondary"
            className="transition-all hover:bg-stone-200"
          >
            TSMC
          </Badge>
        </div>
        <div className="flex gap-8 py-4">
          <button
            className={cn(
              "text-muted-foreground",
              category === "AI" && "border-b-2 border-primary",
            )}
            onClick={() => setCategory("AI")}
          >
            AI
          </button>
          <button
            className={cn(
              "text-muted-foreground",
              category === "Semiconductors" && "border-b-2 border-primary",
            )}
            onClick={() => setCategory("Semiconductors")}
          >
            Semiconductors
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatFilter;

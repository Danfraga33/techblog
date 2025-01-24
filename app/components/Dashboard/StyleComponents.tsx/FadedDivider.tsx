import React from "react";
import { cn } from "~/lib/utils";

const FadedDivider = ({ className }: { className?: string }) => {
  return (
    <hr
      className={cn(
        "h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-25 dark:via-neutral-400",
        className,
      )}
    />
  );
};

export default FadedDivider;

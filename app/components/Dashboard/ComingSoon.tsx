import { Timer } from "lucide-react";
import React from "react";

const ComingSoon = () => {
  return (
    <h1 className="flex scroll-m-20 items-center gap-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Coming soon...
      <Timer />
    </h1>
  );
};

export default ComingSoon;

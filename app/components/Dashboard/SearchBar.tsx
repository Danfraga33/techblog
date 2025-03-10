import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2">
      <Search color="white" />
      <Input
        type="text"
        placeholder="Search..."
        className="w-full rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
      />
    </div>
  );
};

export default SearchBar;

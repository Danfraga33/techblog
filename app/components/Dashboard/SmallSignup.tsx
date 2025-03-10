import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Title from "./Title";

export const SmallSignup = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="relative hidden items-center overflow-hidden rounded-full border border-gray-300 md:flex">
          <Input
            type="email"
            placeholder="Email "
            className="bg-transparent py-2 pl-4 pr-24 text-xs text-white focus:outline-none"
          />
          <button className="absolute right-0 rounded-full bg-black px-4 py-2 text-xs font-medium uppercase text-white">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

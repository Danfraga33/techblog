import { Form } from "@remix-run/react";
import { Input } from "../ui/input";

export const SmallSignup = () => {
  return (
    <>
      <div className="flex items-center">
        <Form className="relative items-center overflow-hidden rounded-full border border-gray-300 md:flex">
          <Input
            type="email"
            placeholder="Email "
            className="bg-transparent py-2 pl-4 pr-24 text-xs text-white focus:outline-none"
          />
          <button className="absolute right-0 rounded-full bg-black px-4 py-2 text-xs font-medium uppercase text-white">
            Subscribe
          </button>
        </Form>
      </div>
    </>
  );
};

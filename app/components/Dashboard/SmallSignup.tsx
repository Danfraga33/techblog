import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Title from "./Title";

export const SmallSignup = () => {
  return (
    <>
      <Title
        title="Blog"
        description="New product features, the latest in technology, solutions, and
        updates."
      />
      <div className="flex max-w-md gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          className="rounded-full"
        />
        <Button className="rounded-full px-6">Subscribe</Button>
      </div>
    </>
  );
};

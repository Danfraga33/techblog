import { Form } from "@remix-run/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Title from "./Title";

export const SmallSignup = () => {
  return (
    <>
      <Title
        title="Blog"
        description=" Insightful analysis on emerging technology, exploring AI, quantum computing, semiconductors, and industry advancements."
      />
      <Form method="post" className="flex flex-col gap-2">
        <div className="flex max-w-md gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="rounded-full border-secondary-50 shadow-md"
            name="email"
          />
          <Button
            type="submit"
            variant="default"
            className="rounded-full px-6 text-muted shadow-md"
          >
            Subscribe
          </Button>
        </div>
      </Form>
    </>
  );
};

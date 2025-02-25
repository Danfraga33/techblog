import React, { Dispatch, SetStateAction } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Newsletter } from "~/utils/types";

interface NewsletterCardProps {
  newsletter: Newsletter;
  setSelectedNewsletter: Dispatch<SetStateAction<string>>;
}

const NewsletterCard = ({
  newsletter,
  setSelectedNewsletter,
}: NewsletterCardProps) => {
  const uploadDate = new Date(newsletter.uploadDate).toDateString();
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex min-w-fit flex-col items-start justify-between p-3">
          <span className="text-xs">{uploadDate}</span>
          <CardTitle className="text-md mb-2 w-full lg:text-xl">
            {newsletter.title}
          </CardTitle>
          <Badge
            variant={newsletter.topic === "AI" ? "default" : "secondary"}
            className="font-semibold text-muted hover:bg-gray-600 hover:transition-all"
          >
            {newsletter.topic}
          </Badge>
        </div>
        <CardDescription>{newsletter.description}</CardDescription>
        <p className="mt-2 text-sm text-muted-foreground">{uploadDate}</p>
      </CardHeader>

      <CardFooter className="mt-auto">
        <Button
          onClick={() => setSelectedNewsletter(newsletter._id)}
          className="w-full"
        >
          View PDF
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewsletterCard;

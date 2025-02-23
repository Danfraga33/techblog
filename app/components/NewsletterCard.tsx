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
export interface Newsletter {
  _id: string;
  title: string;
  date: string;
  description: string;
  category: "AI" | "Semiconductor";
}
interface NewsletterCardProps {
  newsletter: Newsletter;
  setSelectedNewsletter: Dispatch<SetStateAction<string>>;
}

const NewsletterCard = ({
  newsletter,
  setSelectedNewsletter,
}: NewsletterCardProps) => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex min-w-fit flex-col items-start justify-between p-3">
          <CardTitle className="text-md mb-2 w-full lg:text-xl">
            {newsletter.title}
          </CardTitle>
          <Badge
            variant={newsletter.category === "AI" ? "default" : "secondary"}
            className="font-semibold text-muted hover:bg-gray-600 hover:transition-all"
          >
            {newsletter.category}
          </Badge>
        </div>
        <CardDescription>{newsletter.description}</CardDescription>
        <p className="mt-2 text-sm text-muted-foreground">{newsletter.date}</p>
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

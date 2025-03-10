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
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

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
    <Card className="bg-stacked m-0 flex flex-col items-start rounded-none border-0 p-0 shadow-lg transition-all hover:shadow-xl hover:transition-all">
      <CardHeader>
        <div className="flex min-w-fit flex-col items-start justify-between p-0 lg:p-3">
          <span className="w-1/2 text-xs text-gray-100 md:w-full">
            {uploadDate}
          </span>
          <CardTitle className="md:text-md mb-2 text-sm text-white md:min-h-fit md:w-full lg:text-xl">
            {newsletter.title}
          </CardTitle>
          <Badge
            variant={newsletter.topic === "AI" ? "default" : "secondary"}
            className="bg-background font-semibold text-primary hover:transition-all"
          >
            {newsletter.topic}
          </Badge>
          <CardDescription className="w-1/2 text-xs text-white md:min-h-fit">
            {newsletter.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="mt-auto">
        <DialogTrigger>
          <Button
            onClick={() => setSelectedNewsletter(newsletter._id)}
            className="w-full bg-background text-xs text-primary md:text-sm"
          >
            View
          </Button>
        </DialogTrigger>
      </CardFooter>
    </Card>
  );
};

export default NewsletterCard;

import { Card } from "@heroui/card";
import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";

import React from "react";
import { CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const NewsletterCard = ({
  title,
  createdAt,
  link,
}: {
  title: string;
  createdAt: any;
  link: string;
}) => {
  function cutTitle(fileName: string) {
    const title = fileName.split(".")[0];
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  }
  return (
    <Card className="group relative w-[400px] space-y-4 overflow-hidden bg-white py-3 shadow-lg transition-all hover:bg-stone-50 hover:shadow-xl hover:transition-all">
      <figure className="transition-all group-hover:opacity-90">
        <img
          className="w-full"
          src={"/newsletter_cover.jpg"}
          width={200}
          height={200}
          alt={title}
        />
      </figure>
      <CardContent className="px-4 py-0 transition-all">
        <div className="flex h-[20rem] flex-col justify-between">
          <div>
            <h3 className="text-lg">
              <a
                href={`/newsletter/${link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span aria-hidden="true" className="absolute inset-0" />
              </a>
            </h3>
            <Badge className="text-xs text-muted">{cutTitle(title)}</Badge>
          </div>
          <p className="text-2xl font-medium">{createdAt}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsletterCard;

import React from "react";
import { Card } from "./card";
import { json, useLoaderData } from "@remix-run/react";
import { getPodcasts } from "~/.server/podcasts";
import { getPosts } from "~/.server/posts";

const TotalContent = ({ totalContent }: any) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {totalContent.map((content) => (
        <Card className="overflow-hidden border-none shadow-lg">
          <div className="relative h-60">
            <img
              src={content.frontmatter.coverImage}
              alt="Desert landscape with rock formations"
              className="h-full w-full object-cover"
            />
            <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              {content.frontmatter.subject}
            </div>
          </div>
          <div className="p-6">
            <h3 className="mb-2 text-xl font-bold hover:underline hover:decoration-primary">
              {content.frontmatter.title}
            </h3>
            <p className="mb-4 line-clamp-2 text-muted-foreground">
              {content.frontmatter.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm">{content.frontmatter.subject}</span>
              </div>
              <span className="text-xs text-muted-foreground">
                {content.frontmatter.date}
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TotalContent;

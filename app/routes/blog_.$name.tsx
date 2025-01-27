import { json, useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import { Chip } from "@heroui/react";
import { Separator } from "~/components/ui/separator";
import { SidebarTrigger } from "~/components/ui/sidebar";
import Example from "./content/example.mdx";

import { read } from "to-vfile";
import { matter } from "vfile-matter";

export interface FrontmatterTypes {
  title: string;
  description: string;
  tags: string[];
  author: string;
  authorImg: string;
  coverImage: string;
  date: string;
  toc?: { title: string; id: string }[];
}

export async function loader() {
  const frontmatter = await read("./app/routes/content/example.mdx");
  matter(frontmatter);

  return json({ frontmatter });
}

const DynamicBlog = () => {
  const { frontmatter } = useLoaderData<typeof loader>();
  const { title, description, tags, author, coverImage, toc } = frontmatter.data
    .matter as FrontmatterTypes;

  return (
    <section className="relative flex flex-col justify-center rounded-2xl p-4">
      {/* Image Container */}
      <div className="relative flex h-[75vh] justify-center overflow-hidden">
        {/* Set height to 50% of viewport height */}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 rounded-b-xl bg-gradient-to-t from-black to-transparent"></div>
        {/* Image */}
        <img
          src={coverImage}
          className={cn(
            "h-full w-full rounded-2xl object-cover", // Ensure the image covers the container
            "mask-image: linear-gradient(to top, transparent, black 50%)", // Fade-out effect
          )}
          alt="Image of a chip"
        />
        {/* Sidebar Trigger */}
        <div className="absolute left-4 top-5 z-20 rounded-xl bg-stone-400/50 p-1">
          <SidebarTrigger />
        </div>
        {/* Text Overlay */}
        <div className="absolute bottom-8 left-4 z-20 w-4/5 rounded-lg bg-stone-400/70 px-4 py-2 text-white lg:w-1/2">
          <div className="flex flex-col gap-2">
            <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl">{title}</h1>
            <p className="text-sm lg:text-sm">{description}</p>
            <ul className="flex flex-wrap gap-1.5">
              {tags.map((tag: string) => (
                <li key={tag}>
                  <Chip size="sm">{tag}</Chip>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Content Below the Image */}
      <div className="px-2 py-12">
        <div className="grid grid-cols-1 gap-12 px-10 md:grid-cols-10">
          {/* Blog Content - Takes up 3 columns */}
          <div className="prose flex max-w-full flex-col items-end md:col-start-2 md:col-end-8">
            <Example />

            <div className="mt-4">
              <Separator />
            </div>
          </div>

          {/* Sidebar - Takes up 1 column */}
          <div className="space-y-8 md:col-start-8 md:col-end-10">
            <div className="space-y-4">
              <h3 className="font-medium">Table of Contents</h3>
              <ul className="space-y-2">
                {toc.map((item: { id: string; title: string }) => (
                  <li
                    className="block text-sm text-gray-600 hover:text-gray-900"
                    key={item.id}
                  >
                    <a href={`#${item.id}`}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Written by</h3>
              <div className="flex items-center space-x-3">
                <img
                  src={"/AvatarImg.jpg"}
                  alt={author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">{author}</p>
                  <p className="text-sm text-gray-600">AI Engineer</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Subscribe to our newsletter</h3>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full"
                />
                <Button className="w-full">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicBlog;

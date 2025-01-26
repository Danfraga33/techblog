import { json, useLoaderData, useParams } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { PageTitle, cn } from "~/lib/utils";
import { Chip } from "@heroui/react";
import { Separator } from "~/components/ui/separator";
import { SidebarTrigger } from "~/components/ui/sidebar";
import { BlogPostTypes, blogPost } from "~/data/blogPosts";
import Example from "./content/example.mdx";

import { read } from "to-vfile";
import { matter } from "vfile-matter";
export interface Frontmatter {
  title: string;
  description: string;
  tags: string[];
  author: string;
  authorImg: string;
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
  console.log("frontmatter: ", frontmatter.data.matter);
  const { name } = useParams();
  const pageTitle = PageTitle(name as string);

  let selectedBlog: BlogPostTypes | undefined = blogPost.find((blog) => {
    return blog.title === pageTitle;
  });
  console.log("selectedBlog: ", selectedBlog);

  return (
    <section className="relative flex flex-col justify-center rounded-xl p-4">
      <div className="relative flex justify-center">
        <img
          src={frontmatter.data.matter.coverImage}
          className={cn(
            "min-h-screen rounded-2xl object-cover 2xl:h-full 2xl:w-full",
          )}
          alt="Image of a chip"
        />
        <div className="absolute left-4 top-5 rounded-xl bg-stone-400/50 p-1">
          <SidebarTrigger />
        </div>
        <div className="absolute bottom-8 left-4 w-4/5 rounded-lg bg-stone-400/70 px-4 py-2 text-white lg:w-1/2">
          <div className="flex flex-col gap-2">
            <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl">
              {frontmatter.data.matter.title}
            </h1>
            <p className="text-sm lg:text-sm">
              {frontmatter.data.matter.description}
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {frontmatter.data.matter.tags.map((tag) => (
                <li key={tag}>
                  <Chip size="sm">{tag}</Chip>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="px-2 py-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="prose flex max-w-full flex-col items-end md:col-span-1">
            <Example />

            <div className="mt-4">
              <Separator />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-medium">Table of Contents</h3>
              <ul className="space-y-2">
                {frontmatter.data.matter.toc.map((item) => (
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
                  alt={frontmatter.data.matter.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">
                    {frontmatter.data.matter.author as string}
                  </p>
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

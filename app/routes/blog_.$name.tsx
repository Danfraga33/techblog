import { json, useLoaderData, useParams } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { PageTitle } from "~/lib/utils";
import { Chip } from "@heroui/react";
import { Separator } from "~/components/ui/separator";
import { SidebarTrigger } from "~/components/ui/sidebar";
import { BlogPostTypes, blogPost } from "~/data/blogPosts";
import Example from "./content/example.mdx";

import { read } from "to-vfile";
import { matter } from "vfile-matter";

export async function loader() {
  const frontmatter = await read("./app/routes/content/example.mdx");
  matter(frontmatter);

  return json({ frontmatter });
}

const DynamicBlog = () => {
  const { frontmatter } = useLoaderData<typeof loader>();
  const { name } = useParams();
  const pageTitle = PageTitle(name as string);

  let selectedBlog: BlogPostTypes | undefined = blogPost.find((blog) => {
    return blog.title === pageTitle;
  });

  return (
    // <ContentLayout
    //   title={selectedBlog?.title as string}
    //   description={selectedBlog?.description as string}
    // >
    <section className="relative flex flex-col rounded-xl p-4">
      <div className="relative flex justify-center">
        <img
          src={selectedBlog?.image.url}
          className="h-full w-full rounded-2xl object-cover"
          alt="Image of a chip"
        />
        <div className="absolute left-4 top-5 rounded-xl bg-stone-400/50 p-1">
          <SidebarTrigger />
        </div>
        <div className="absolute bottom-8 left-4 w-4/5 rounded-lg bg-stone-400/50 px-4 py-2 text-white lg:w-1/2">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl">
              {selectedBlog?.title ?? "Leading the way"}
            </h1>
            <p className="hidden md:block md:text-xs lg:text-sm">
              {selectedBlog?.description}
            </p>
            <ul className="flex gap-1.5">
              {selectedBlog?.tags.map((tag: string, index: number) => (
                <li key={index}>
                  <Chip size="sm">{tag}</Chip>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto px-2 py-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="prose max-w-full md:col-span-1">
            <Example />

            <div className="mt-4">
              <Separator />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-medium">Table of Contents</h3>
              <nav className="space-y-2">
                <a
                  href="#"
                  className="block text-sm text-gray-600 hover:text-gray-900"
                >
                  Introduction
                </a>
                <a
                  href="#"
                  className="block text-sm text-gray-600 hover:text-gray-900"
                >
                  Cameras and tools
                </a>
                <a
                  href="#"
                  className="block text-sm text-gray-600 hover:text-gray-900"
                >
                  How you work
                </a>
                <a
                  href="#"
                  className="block text-sm text-gray-600 hover:text-gray-900"
                >
                  Advice for photographers
                </a>
                <a
                  href="#"
                  className="block text-sm text-gray-600 hover:text-gray-900"
                >
                  What's next?
                </a>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Written by</h3>
              <div className="flex items-center space-x-3">
                <img
                  src=""
                  alt="Amélie Laurent"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">Amélie Laurent</p>
                  <p className="text-sm text-gray-600">
                    Designer, Craft+Curiosity
                  </p>
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
    // </ContentLayout>
  );
};

export default DynamicBlog;

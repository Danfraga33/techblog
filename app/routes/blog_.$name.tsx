import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn, extractHeadings } from "~/lib/utils";
import { Chip } from "@heroui/react";
import { Separator } from "~/components/ui/separator";
import { SidebarTrigger } from "~/components/ui/sidebar";
import fs from "fs";
import path from "path";
import { json } from "@remix-run/node";
import { bundleMDX } from "mdx-bundler";
import { useLoaderData } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client";
import { Fragment, useMemo } from "react";
import rehypeSlug from "rehype-slug";
import matter from "gray-matter";

export async function loader({ params }: { params: { name: string } }) {
  const postsDirectory = path.join(process.cwd(), "app/content/posts");
  const filePath = path.join(postsDirectory, `${params.name}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Response("Post not found", { status: 404 });
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContent);
  const headings = await extractHeadings(content);
  const { code, frontmatter } = await bundleMDX({
    source: fileContent,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeSlug];
      return options;
    },
  });
  const estimatedReadingTime = Math.ceil(content.split(/\s+/).length / 200);

  return json({ estimatedReadingTime, headings, code, frontmatter });
}

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

const DynamicBlog = () => {
  const { code, frontmatter, headings, estimatedReadingTime } =
    useLoaderData<typeof loader>();
  console.log("headings: ", headings);

  const { title, description, tags, author, coverImage, toc } = frontmatter;

  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <section className="relative flex flex-col justify-center rounded-2xl p-4">
      <div className="relative flex h-[75vh] justify-center overflow-hidden">
        <div className="absolute inset-0 z-10 rounded-b-xl bg-gradient-to-t from-black to-transparent"></div>

        <img
          src={coverImage}
          className={cn(
            "h-full w-full rounded-2xl object-cover",
            "mask-image: linear-gradient(to top, transparent, black 50%)",
          )}
          alt="Image of a chip"
        />

        <div className="absolute left-4 top-5 z-20 rounded-xl bg-stone-400/50 p-1">
          <SidebarTrigger />
        </div>

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

      <div className="px-2 py-12">
        <div className="grid grid-cols-1 gap-12 px-10 md:grid-cols-10">
          <div className="prose flex max-w-full flex-col items-end md:col-start-2 md:col-end-8">
            <Component />

            <div className="mt-4">
              <Separator />
            </div>
          </div>

          <div className="space-y-8 md:col-start-8 md:col-end-10">
            <div className="space-y-4">
              <h2 className="mb-4 text-lg font-bold text-foreground">
                {title}
              </h2>
              <ul className="space-y-2">
                {headings.map((heading) => (
                  <Fragment key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className={`block text-sm text-muted-foreground transition-colors hover:text-primary ${heading.depth === 1 ? "pl-0 font-medium" : ""} ${heading.depth === 2 ? "pl-4" : ""} ${heading.depth === 3 ? "pl-8" : ""} `}
                    >
                      {heading.text}
                    </a>
                  </Fragment>
                ))}
                {/* {toc
                  ? toc.map((item: { id: string; title: string }) => (
                      <li
                        className="block text-sm text-gray-600 hover:text-gray-900"
                        key={item.id}
                      >
                        <a href={`#${item.id}`}>{item.title}</a>
                      </li>
                    ))
                  : [{ title: "Technology", id: 1 }].map((item) => (
                      <li
                        className="block text-sm text-gray-600 hover:text-gray-900"
                        key={item.id}
                      >
                        {item.title}
                      </li>
                    ))} */}
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

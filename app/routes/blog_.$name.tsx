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
import { Link, useLoaderData } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client";
import { Fragment, useMemo } from "react";
import rehypeSlug from "rehype-slug";
import matter from "gray-matter";
import rehypeExternalLinks from "rehype-external-links";
import remarkGfm from "remark-gfm";
import remarkImages from "remark-images";
import { getPosts } from "~/.server/posts";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkGfm,
        remarkImages,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [
          rehypeExternalLinks,
          { target: "_blank", rel: ["noopener", "noreferrer"] },
        ],
      ];
      return options;
    },
  });

  const estimatedReadingTime = Math.ceil(content.split(/\s+/).length / 200);

  const blogPosts = await getPosts();
  const currentIndex = blogPosts.findIndex((post) => post.slug === params.name);

  const previousArticle = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  console.log([previousArticle, nextArticle]);
  return json({
    estimatedReadingTime,
    headings,
    code,
    frontmatter,
    blogPosts,
    previousArticle,
    nextArticle,
  });
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
  const {
    code,
    frontmatter,
    headings,
    estimatedReadingTime,
    previousArticle,
    nextArticle,
  } = useLoaderData<typeof loader>();
  console.log("blogPosts: ", [previousArticle, nextArticle]);

  const { title, description, tags, author, coverImage } = frontmatter;

  const Component = useMemo(() => getMDXComponent(code), [code]);
  function translateEstimatedReadingTime(readingTime: number) {
    return (
      <p className="mb-8 text-sm text-muted-foreground">
        Estimated Reading Time:{" "}
        <span className="font-bold">{readingTime} minutes</span>
      </p>
    );
  }
  return (
    <section className="container relative mx-auto flex flex-col justify-center rounded-2xl p-4 text-right">
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
        <div className="grid grid-cols-1 gap-12 px-10 md:grid-cols-12">
          <div className="prose flex max-w-full flex-col items-end text-white md:col-start-2 md:col-end-8">
            <span className="text-xs">
              {translateEstimatedReadingTime(estimatedReadingTime)}
            </span>
            <Component />
            <div className="mt-4">
              <Separator />
            </div>
            <div className="col-span-4 col-start-2 flex justify-between gap-8">
              {previousArticle ? (
                <Link to={`/blog/${previousArticle.slug}`}>
                  <Card className="col-start-2 col-end-4 h-full transition-colors hover:border-primary">
                    <CardHeader>
                      <CardDescription className="flex items-center text-sm font-medium text-muted-foreground group-hover:text-primary">
                        <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Previous
                      </CardDescription>
                      <CardTitle className="sm:text-md mt-2 text-base font-semibold group-hover:text-primary">
                        {previousArticle.frontmatter.title}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {nextArticle ? (
                <Link to={`/blog/${nextArticle.slug}`}>
                  <Card className="col-start-6 col-end-8 flex h-full items-end justify-end transition-colors hover:border-primary">
                    <CardHeader className="text-right">
                      {" "}
                      {/* Add text-right here */}
                      <CardDescription className="flex items-center justify-end text-sm font-medium text-muted-foreground group-hover:text-primary">
                        <ChevronRight className="mr-2 flex h-4 w-4 items-end justify-end transition-transform group-hover:-translate-x-1" />
                        Next
                      </CardDescription>
                      <CardTitle className="mt-2 flex flex-wrap justify-end text-base font-semibold group-hover:text-primary sm:text-lg">
                        {nextArticle.frontmatter.title}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </div>

          <div className="space-y-8 text-start md:col-start-8 md:col-end-11">
            <div className="space-y-4">
              <h2 className="mb-4 text-sm font-bold text-foreground text-white">
                {title}
              </h2>
              <ul className="space-y-2">
                {headings.map((heading) => (
                  <Fragment key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className={`block text-sm text-muted-foreground transition-colors ${heading.depth === 1 ? "pl-0 font-medium" : ""} ${heading.depth === 2 ? "pl-4" : ""} ${heading.depth === 3 ? "pl-8" : ""} `}
                    >
                      {heading.text}
                    </a>
                  </Fragment>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-white">Written by</h3>
              <div className="flex items-center space-x-3 text-white">
                <img
                  src={"/AvatarImg.jpg"}
                  alt={author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="">
                  <p className="font-medium text-white">{author}</p>
                  <p className="text-sm">AI Engineer</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-white">
                Subscribe to our newsletter
              </h3>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full text-white"
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

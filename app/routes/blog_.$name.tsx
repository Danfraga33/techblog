import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn, extractHeadings, formatDate } from "~/lib/utils";
import { Chip, select } from "@heroui/react";
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
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { findBlog, getBlogs } from "~/lib/db";
import { Link as Headinglink, animateScroll as scroll } from "react-scroll";
import Footer from "~/components/Dashboard/Footer";
import Header from "~/components/Dashboard/Header";
import { author } from "~/data/constant/author";

export async function loader({ params }: { params: { name: string } }) {
  const blogs = await getBlogs();
  const selectedBlog = await findBlog(params.name);
  console.log("selectedBlog: ", selectedBlog);

  const headings = await extractHeadings(selectedBlog.content);
  const frontmatter = selectedBlog.frontmatter;
  const { code } = await bundleMDX({
    source: selectedBlog.content,
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

  const estimatedReadingTime = Math.ceil(
    selectedBlog.content.split(/\s+/).length / 200,
  );

  const blogPosts = await getBlogs();
  const currentIndex = blogPosts.findIndex((post) => post.slug === params.name);

  const previousArticle = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return json({
    blogs,
    estimatedReadingTime,
    headings,
    code,
    frontmatter,
    blogPosts,
    previousArticle,
    nextArticle,
  });
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

  const { title, description, tags, coverImage, date, subject } = frontmatter;
  console.log("frontmatter: ", frontmatter);

  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <div className="mx-auto max-w-5xl">
        <div className="flex">
          <div className="bg-black px-4 py-2 text-white">
            <p className="text-xs font-medium uppercase">by {author.name}</p>
          </div>
          <div className="px-4 py-2">
            <p className="text-xs font-medium">SCIENCE</p>
          </div>
        </div>
        <div className="px-4 pb-4 pt-10">
          <h1 className="border-b border-black pb-2 text-5xl font-bold leading-tight tracking-tight text-black md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {/* <p className="mt-2 text-lg text-black">{description}</p> */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex gap-4 text-black md:gap-8">
              <div className="md:text-md text-xs">
                <span className="text-sm font-medium">Date</span>
                <p>{formatDate(date)}</p>
              </div>
              <div className="md:text-md text-xs">
                <span className="font-medium">Read</span>
                <p>{estimatedReadingTime} min</p>
              </div>
            </div>
            {subject && (
              <div className="rounded-full border border-black px-4 py-2 text-sm text-black md:text-lg">
                {subject}
              </div>
            )}
          </div>
        </div>
        <div className="grid h-full gap-6 p-3">
          <div className="text-black">
            <div className="text-md leading-snug">
              <div className="mb-4 mr-4 inline-block h-[24rem] w-full">
                <img
                  src={coverImage}
                  alt={title}
                  className="h-full w-full object-cover p-3"
                />
              </div>

              <div className="mdx-content prose">
                <Component />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicBlog;

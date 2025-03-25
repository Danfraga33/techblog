import { extractHeadings, formatDate } from "~/lib/utils";
import { json } from "@remix-run/node";
import { bundleMDX } from "mdx-bundler";
import { useLoaderData } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import rehypeSlug from "rehype-slug";
import rehypeExternalLinks from "rehype-external-links";
import remarkGfm from "remark-gfm";
import remarkImages from "remark-images";

import { author } from "~/data/constant/author";
import { findBlog, getBlogs } from "~/.server/posts";
import { BlogPost } from "~/utils/types";

export async function loader({ params }: { params: { name: string } }) {
  const blogs = await getBlogs();
  const selectedBlog = await findBlog(params.name);

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

  const blogPosts: BlogPost[] = await getBlogs();
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

  const { title, description, tags, image_url, coverImage, date, subject } =
    frontmatter;

  const Component = useMemo(() => getMDXComponent(code), [code]);
  console.log("coverImage: ", coverImage);

  return (
    <>
      <div className="mx-auto max-w-5xl">
        <div className="flex">
          <div className="bg-black px-4 py-2 text-white">
            <p className="text-xs font-medium uppercase">by {author.name}</p>
          </div>
        </div>
        <div className="px-4 pb-4 pt-2">
          <h1 className="border-b border-black pb-2 text-5xl font-bold leading-none tracking-tight text-black md:text-6xl lg:text-7xl">
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
                  src={image_url}
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

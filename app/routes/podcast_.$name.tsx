import { json, useLoaderData } from "@remix-run/react";
import { bundleMDX } from "mdx-bundler";
import PodcastPlayer from "~/components/PodcastPlayer";
import fs from "fs";
import path from "path";
import { LoaderFunctionArgs } from "@remix-run/node";
import { PodcastFrontmatter } from "~/.server/podcasts";

export async function loader({ params }: LoaderFunctionArgs) {
  const postsDirectory = path.join(process.cwd(), "app/content/podcasts");
  const filePath = path.join(postsDirectory, `${params.name}.mdx`);
  if (!fs.existsSync(filePath)) {
    throw new Response("Post not found", { status: 404 });
  }
  const fileContent = fs.readFileSync(filePath, "utf8");
  // const { content } = matter(fileContent);
  const { code, frontmatter } = await bundleMDX({
    source: fileContent,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [...(options.rehypePlugins ?? [])];
      return options;
    },
  });

  return json({
    code,
    frontmatter: frontmatter as PodcastFrontmatter,
  });
}

const PodcastDynamic = () => {
  const { code, frontmatter } = useLoaderData<typeof loader>();

  return <PodcastPlayer code={code} frontmatter={frontmatter} />;
};

export default PodcastDynamic;

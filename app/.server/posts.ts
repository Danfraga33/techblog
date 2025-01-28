// app/utils/getPosts.server.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// import type { PostMeta } from "~/types";

const postsDirectory = path.join(process.cwd(), "app/content/posts");

export const getPosts = async () => {
  const postsDirectory = path.join(process.cwd(), "app/content/posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data: frontmatter } = matter(fileContent);
    const slug = filename.replace(/\.mdx$/, "");

    return { slug, frontmatter };
  });

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );
  return sortedPosts;
};

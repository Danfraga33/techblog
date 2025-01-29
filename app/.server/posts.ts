import fs from "fs";
import path from "path";
import matter from "gray-matter";
import crypto from "crypto";

type Frontmatter = {
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  toc: string;
  date: string;
  id?: string;
};

const postsDirectory = path.join(process.cwd(), "app/content/posts");
export const getPosts = async () => {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);
    const frontmatter = data as Frontmatter;
    const slug = filename.replace(/\.mdx$/, "");

    const id = crypto
      .createHash("md5")
      .update(filename + frontmatter.title + frontmatter.date)
      .digest("hex");

    return {
      slug,
      frontmatter: {
        ...frontmatter,
        id,
      },
    };
  });

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );
  return sortedPosts;
};
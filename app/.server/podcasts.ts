import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import crypto from "crypto";
import pLimit from "p-limit";
export type PodcastFrontmatter = {
  title: string;
  description: string;
  date: string;
  category: string;
  slogan: string;
  coverImage: string;
  audioFile: string;
  id?: string;
};

const limit = pLimit(10); // Limit to 10 concurrent file operations

export const getPodcasts = async () => {
  const postsDirectory = path.join(process.cwd(), "app/content/podcasts");
  const filenames = await fs.readdir(postsDirectory);

  const podcasts = await Promise.all(
    filenames.map((filename) =>
      limit(async () => {
        const filePath = path.join(postsDirectory, filename);
        const fileContent = await fs.readFile(filePath, "utf8");
        const { data } = matter(fileContent);
        const frontmatter = data as PodcastFrontmatter;
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
      }),
    ),
  );

  const sortedPodcasts = podcasts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );
  return sortedPodcasts;
};
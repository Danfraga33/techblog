import fs from "fs";
import path from "path";
import matter from "gray-matter";
import crypto from "crypto";
import pLimit from "p-limit";
export type PodcastFrontmatter = {
  title: string;
  description: string;
  date: string;
  subject: string;
  category: string;
  slogan: string;
  coverImage: string;
  audioFile: string;
  id?: string;
};

const postsDirectory = path.join(process.cwd(), "app/content/podcasts");

export const getPodcasts = async () => {
  const filenames = fs.readdirSync(postsDirectory);

  const podcasts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
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
  });

  const sortedPodcasts = podcasts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );
  return sortedPodcasts;
};

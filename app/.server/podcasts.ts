import fs from "fs";
import path from "path";
import matter from "gray-matter";
import crypto from "crypto";
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
export const getPodcasts = async () => {
  const postsDirectory = path.join(process.cwd(), "app/content/podcasts");
  const filenames = fs.promises.readdirSync(postsDirectory);

  const podcasts = await Promise.all(
    filenames.map((filename) => {
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
    }),
  );

  const sortedPodcasts = podcasts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );
  return sortedPodcasts;
};

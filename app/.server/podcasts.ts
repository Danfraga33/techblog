import fs from "fs";
import path from "path";
import matter from "gray-matter";
import crypto from "crypto";
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
    const { data, content } = matter(fileContent);
    const frontmatter = data as PodcastFrontmatter;
    const slug = filename.replace(/\.mdx$/, "");

    let publishedDate = frontmatter.date;

    if (!publishedDate) {
      publishedDate = new Date().toISOString().split("T")[0];

      const updatedFrontmatter = { ...frontmatter, date: publishedDate };
      const updatedContent = matter.stringify(content, updatedFrontmatter);
      fs.writeFileSync(filePath, updatedContent, "utf8");
    }

    const id = crypto
      .createHash("md5")
      .update(filename + frontmatter.title + frontmatter.date)
      .digest("hex");
    return {
      slug,
      frontmatter: {
        ...frontmatter,
        date: publishedDate,
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

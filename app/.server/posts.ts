import fs from "fs";
import path from "path";
import matter from "gray-matter";
import crypto from "crypto";

type Frontmatter = {
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  date: string;
  id?: string;
  subject: string;
  coverImageAlt: string;
  type: "Blog" | "Podcast";
};

const postsDirectory = path.join(process.cwd(), "app/content/posts");

export const getPosts = () => {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    const frontmatter = data as Frontmatter;
    const slug = filename.replace(/\.mdx$/, "");

    const id = crypto
      .createHash("md5")
      .update(filename + frontmatter.title + frontmatter.date)
      .digest("hex");

    let publishedDate = frontmatter.date;

    if (!publishedDate) {
      publishedDate = new Date().toISOString().split("T")[0];

      const updatedFrontmatter = { ...frontmatter, date: publishedDate };
      const updatedContent = matter.stringify(content, updatedFrontmatter);
      fs.writeFileSync(filePath, updatedContent, "utf8");
    }
    return {
      slug,
      frontmatter: {
        ...frontmatter,
        date: publishedDate,
        id,
      },
    };
  });

  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );

  return sortedPosts;
};

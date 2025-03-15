import { connectToDatabase } from "~/lib/db";

export async function getBlogs() {
  const db = await connectToDatabase();
  const blogs = await db
    .collection("blog_posts")
    .find({})
    .sort({ "frontmatter.date": -1 })
    .toArray();

  return blogs;
}

export async function findBlog(params: string) {
  const db = await connectToDatabase();
  const blog = await db.collection("blog_posts").findOne({ slug: params });

  return blog;
}

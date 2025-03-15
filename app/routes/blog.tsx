import { Link, json, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import Header from "~/components/Dashboard/Header";

import Footer from "~/components/Dashboard/Footer";
import { getBlogs } from "~/.server/posts";
import { formatDate } from "~/lib/utils";
import UnderlineAnimation from "~/components/Dashboard/UnderlineAnimation";

export async function loader() {
  const blogPosts = await getBlogs();

  return json({ blogPosts });
}
const Blog = () => {
  const { blogPosts } = useLoaderData<typeof loader>();
  const updatedBlogPosts = blogPosts.map((post) => {
    const estimatedReadingTime = Math.ceil(
      post.content.split(/\s+/).length / 200,
    );
    const updatedFrontmatter = {
      ...post.frontmatter,
      estimatedReadingTime,
    };

    return {
      ...post,
      frontmatter: updatedFrontmatter,
    };
  });
  const [subject, setSubject] = useState("View all");
  const [tags, setTags] = useState("");
  const filteredPosts = blogPosts.filter((post) => {
    const subjectFilter =
      subject === "View all" ||
      post.frontmatter.subject.toLowerCase() === subject.toLowerCase();

    const tagFilter = tags === "" || post.frontmatter.tags.includes(tags);

    return subjectFilter && tagFilter;
  });
  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="container mx-auto px-4 py-16">
          <h1 className="font-heading mb-16 text-7xl font-bold text-black">
            MAGAZINE
          </h1>

          <div className="grid grid-cols-1 gap-16 text-black">
            {updatedBlogPosts.map((post, index) => (
              <div
                key={post.id}
                className={`${index > 0 ? "border-t border-black pt-16" : ""}`}
              >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                  <div className="md:col-span-1">
                    <Link to={`/blogs/${post.slug}`}>
                      <img
                        src={post.frontmatter.coverImage || "/chip.png"}
                        alt={post.frontmatter.title}
                        width={300}
                        height={300}
                        className="h-auto w-full"
                      />
                    </Link>
                  </div>
                  <div className="md:col-span-3">
                    <UnderlineAnimation className="mb-4 text-4xl">
                      <Link to={`/blog/${post.slug}`}>
                        {post.frontmatter.title}
                      </Link>
                    </UnderlineAnimation>
                    <p className="mb-6 text-black">
                      {post.frontmatter.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-8">
                        <div>
                          <span className="text-sm font-medium">Date</span>
                          <p>{formatDate(post.frontmatter.date)}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Read</span>
                          <p>{post.frontmatter.estimatedReadingTime} min</p>
                        </div>
                      </div>
                      {post.category && (
                        <div className="rounded-full border border-black px-4 py-2 text-black">
                          {post.frontmatter.subject}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;

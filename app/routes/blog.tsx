import { Link, json, useLoaderData } from "@remix-run/react";

import { getBlogs } from "~/.server/posts";
import { formatDate } from "~/lib/utils";
import UnderlineAnimation from "~/components/Dashboard/UnderlineAnimation";
import { BlogPost } from "~/utils/types";

export async function loader() {
  const blogPosts = await getBlogs();

  return json({ blogPosts });
}
const Blog = () => {
  const { blogPosts } = useLoaderData<typeof loader>();

  const updatedBlogPosts: BlogPost[] = blogPosts.map((post: BlogPost) => {
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

  return (
    <>
      <main className="min-h-screen bg-white">
        <section className="container mx-auto px-4 py-16">
          <h1 className="mb-16 font-heading text-7xl font-bold text-black">
            BLOG<span className="text-primary">.</span>
          </h1>

          <div className="grid grid-cols-1 gap-16 text-black">
            {updatedBlogPosts.map((post, index) => (
              <div
                key={post._id}
                className={`${index > 0 ? "border-t border-black pt-16" : ""}`}
              >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                  <div className="md:col-span-1">
                    <Link to={`/blog/${post.slug}`}>
                      <img
                        src={post.frontmatter.image_url || "/chip.jpg"}
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
                      {post.frontmatter.subject && (
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

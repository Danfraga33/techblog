import { getBlogs } from "~/.server/posts";
import { json, useLoaderData } from "@remix-run/react";
import { getPodcasts } from "~/.server/podcasts";
import { useEffect, useRef } from "react";
import BlogSection from "~/components/blog-section";
import PodcastSection from "~/components/Dashboard/Podcast-section";
import NewsTicker from "~/components/news-ticker";
import gsap from "gsap";
import { getAllNewsletters } from "~/.server/newsletters";
import { businessData } from "~/data/constant/admin";
import { BlogPost } from "~/utils/types";

export async function loader() {
  const blogPosts = await getBlogs();
  const podcasts = await getPodcasts();
  const newsletters = await getAllNewsletters();

  return json({ blogPosts, podcasts, newsletters });
}

export default function Home() {
  const { blogPosts, podcasts, newsletters } = useLoaderData<typeof loader>();
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.set(headingRef.current, {
        y: 0,
        opacity: 1,
        clipPath: "inset(100% 0 0 0)",
      });

      const tl = gsap.timeline();

      // Animate the heading to slide up and reveal itself from below
      tl.to(headingRef.current, {
        y: 0, // Move the text to its final position
        opacity: 1, // Make it fully visible
        clipPath: "inset(0% 0 0 0)", // Reveal the text as it moves above the line
        duration: 3, // Animation duration
        ease: "power4.out", // Easing for smoothness
      });
    }
  }, []); // Empty array ensures it only runs on initial mount
  const updatedBlogPosts = blogPosts.map((post: BlogPost) => {
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
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 pt-8">
        <h1
          ref={headingRef}
          className="font-heading mx-auto inline-flex items-center justify-center text-6xl font-bold leading-none tracking-tighter text-black md:text-[10rem] lg:text-[14rem] xl:text-[18rem]"
        >
          {businessData.title}
        </h1>

        <NewsTicker />

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-7xl font-bold leading-none text-primary">
              DON&apos;T CLOSE
              <br />
              YOUR EYES
            </h2>
          </div>
          <div>
            <p className="mb-8 text-base text-black">
              Emerging technologies—AI and semiconductors—are reshaping the
              global economy, signaling an unprecedented investment frontier.
              Silicon innovation and AI-driven growth transcend traditional
              markets, offering exponential potential. This is the dawn of the
              tech era, where data and algorithms redefine wealth. Investors
              must pivot to this digital renaissance; the future belongs to
              those who embrace the silicon revolution and its limitless
              horizons.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection blogPosts={updatedBlogPosts} newsletters={newsletters} />

      {/* Podcast Section */}
      <PodcastSection podcasts={podcasts} />
    </main>
  );
}

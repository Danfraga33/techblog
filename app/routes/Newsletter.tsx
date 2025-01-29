import ComingSoon from "~/components/Dashboard/ComingSoon";
import ContentLayout from "~/components/Dashboard/ContentLayout";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardFooter } from "~/components/ui/card";

const blogPosts = [
  {
    title: "Street art festival",
    excerpt:
      "Celebrating urban creativity and community expression through the lens of contemporary street art.",
    imageUrl: "/chip.jpg",
    readTime: "3 min",
    category: "Street Art",
  },
  {
    title: "Street art festival",
    excerpt:
      "Celebrating urban creativity and community expression through the lens of contemporary street art.",
    imageUrl: "/chip.jpg",
    readTime: "3 min",
    category: "Street Art",
  },
  {
    title: "Street art festival",
    excerpt:
      "Celebrating urban creativity and community expression through the lens of contemporary street art.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-23%20at%2010.52.03_2000c969.jpg-0aiFiA8wNs31qWLWZlPWCbiGIAbjlU.jpeg",
    readTime: "3 min",
    category: "Street Art",
  },
];

const Newsletter = () => {
  return (
    <>
      <ContentLayout
        title="Newsletter"
        description="New product features, the latest in technology, solutions, and
            updates."
      >
        <ComingSoon />
        {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="cursor-pointer overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-square">
                <img
                  src={post.imageUrl || ""}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between px-4 pb-4 pt-0">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-xs text-muted-foreground">
                  {post.readTime}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div> */}
      </ContentLayout>
    </>
  );
};

export default Newsletter;

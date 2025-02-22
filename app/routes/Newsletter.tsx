import { json, useLoaderData } from "@remix-run/react";
import { GridFSBucket } from "mongodb";
import ComingSoon from "~/components/Dashboard/ComingSoon";
import ContentLayout from "~/components/Dashboard/ContentLayout";
import NewsletterCard from "~/components/NewsletterCard";
import PdfRenderer from "~/components/PdfRenderer";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { connectToDatabase, getAllPdfs } from "~/lib/db";

export async function loader() {
  const pdfs = await getAllPdfs();
  return json(pdfs);
}

const Newsletter = () => {
  const pdfs = useLoaderData<typeof loader>();
  console.log("pdfs: ", pdfs);

  return (
    <>
      <ContentLayout
        title="Newsletter"
        description="Curated updates on emerging technology, highlighting AI, quantum computing, semiconductors, and breakthrough innovations."
      >
        <ComingSoon />
        <div>
          <h1>PDF Report</h1>
          <ul>
            <hr />
            <section className="grid gap-4 py-8 md:grid-cols-2 lg:grid-cols-4">
              {pdfs.map((pdf) => (
                <li key={pdf._id}>
                  <NewsletterCard
                    title={pdf.filename}
                    createdAt={new Date(pdf.uploadDate).toDateString()}
                    link={pdf._id}
                  />
                </li>
              ))}
            </section>
          </ul>
        </div>
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

import { json, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import ContentLayout from "~/components/Dashboard/ContentLayout";
import NewsletterGrid from "~/components/NewsletterGrid";
import PDFViewer from "~/components/PDFViewer";
import { ScrollArea } from "~/components/ui/scroll-area";
import { getAllPdfs } from "~/lib/db";
import { Newsletter } from "~/utils/types";

export async function loader() {
  const pdfs = await getAllPdfs();
  return json(pdfs);
}

const Newsletter = () => {
  const [selectedNewsletter, setSelectedNewsletter] = useState("");
  const newsletters = useLoaderData<typeof loader>();
  const sortedNewsletters = newsletters.sort((a, b) => {
    return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
  });

  return (
    <ContentLayout
      title="Newsletter"
      description="Curated updates on emerging technology, highlighting AI, quantum computing, semiconductors, and breakthrough innovations."
    >
      <main className="flex flex-col-reverse space-x-6 lg:flex-row">
        <ScrollArea className="flex flex-col">
          <NewsletterGrid
            newsletters={sortedNewsletters}
            setSelectedNewsletter={setSelectedNewsletter}
          />
        </ScrollArea>

        <div className="hidden h-screen border-l-large lg:block" />
        <div className="flex min-w-fit p-6 md:w-1/2">
          {selectedNewsletter ? (
            <>
              <PDFViewer selectedNewsletter={selectedNewsletter} />
            </>
          ) : (
            <>
              <div className="h-full text-gray-500">
                Select a newsletter to view the PDF.
              </div>
            </>
          )}
        </div>
      </main>
    </ContentLayout>
  );
};

export default Newsletter;

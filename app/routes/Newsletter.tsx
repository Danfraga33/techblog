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
  const newsletters = useLoaderData<typeof loader>();
  const [selectedNewsletter, setSelectedNewsletter] = useState("");
  const sortedNewsletters = newsletters.sort((a: string, b: string) => {
    return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
  });

  return (
    <ContentLayout
      title="Newsletter"
      description="Curated updates on emerging technology, highlighting AI, quantum computing, semiconductors, and breakthrough innovations."
    >
      <main className="flex flex-col lg:flex-row lg:space-x-6">
        {/* Newsletter Grid Section */}
        <ScrollArea className="">
          <NewsletterGrid
            newsletters={sortedNewsletters}
            setSelectedNewsletter={setSelectedNewsletter}
          />
        </ScrollArea>

        <div className="hidden h-screen border-l-large lg:block" />

        <div className="w-3/4 p-4 lg:w-1/2 lg:p-6">
          {selectedNewsletter ? (
            <PDFViewer selectedNewsletter={selectedNewsletter} />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-500">
              Select a newsletter to view the PDF.
            </div>
          )}
        </div>
      </main>
    </ContentLayout>
  );
};

export default Newsletter;

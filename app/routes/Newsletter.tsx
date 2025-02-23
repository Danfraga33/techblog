import { json, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import ContentLayout from "~/components/Dashboard/ContentLayout";
import { Newsletter } from "~/components/NewsletterCard";
import NewsletterGrid from "~/components/NewsletterGrid";
import PDFViewer from "~/components/PDFViewer";
import { getAllPdfs } from "~/lib/db";

export async function loader() {
  const pdfs = await getAllPdfs();
  return json(pdfs);
}

const Newsletter = () => {
  const [selectedNewsletter, setSelectedNewsletter] = useState("");
  const newsletters = useLoaderData<typeof loader>();
  console.log("pdfs: ", newsletters);

  return (
    <ContentLayout
      title="Newsletter"
      description="Curated updates on emerging technology, highlighting AI, quantum computing, semiconductors, and breakthrough innovations."
    >
      <main className="flex">
        <div className="w-1/3 overflow-y-auto p-6">
          <NewsletterGrid
            newsletters={newsletters}
            setSelectedNewsletter={setSelectedNewsletter}
          />
        </div>
        <div className="w-2/3 p-6">
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

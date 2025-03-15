import { json, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { getAllNewsletters } from "~/.server/newsletters";
import ContentLayout from "~/components/Dashboard/ContentLayout";
import { SmallSignup } from "~/components/Dashboard/SmallSignup";
import NewsletterGrid from "~/components/NewsletterGrid";
import PDFViewer from "~/components/PDFViewer";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Newsletter } from "~/utils/types";

export async function loader() {
  const newsletters = await getAllNewsletters();
  return json(newsletters);
}

const Newsletter = () => {
  const newsletters = useLoaderData<typeof loader>();
  const [selectedNewsletter, setSelectedNewsletter] = useState("");
  const sortedNewsletters = newsletters.sort((a: string, b: string) => {
    return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
  });

  return (
    <main>
      <ScrollArea>
        <NewsletterGrid
          newsletters={sortedNewsletters}
          setSelectedNewsletter={setSelectedNewsletter}
        />
      </ScrollArea>
    </main>
  );
};

export default Newsletter;

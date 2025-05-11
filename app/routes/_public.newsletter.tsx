import { json, useLoaderData } from "@remix-run/react";
import { getAllNewsletters } from "~/.server/newsletters";
import NewsletterGrid from "~/components/NewsletterGrid";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Newsletter } from "~/utils/types";

export async function loader() {
  const newsletters = await getAllNewsletters();
  return json(newsletters);
}

const Newsletter = () => {
  const newsletters = useLoaderData<typeof loader>();

  const sortedNewsletters = newsletters.sort((a: Newsletter, b: Newsletter) => {
    return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
  });

  return (
    <main>
      <ScrollArea>
        <NewsletterGrid newsletters={sortedNewsletters} />
      </ScrollArea>
    </main>
  );
};

export default Newsletter;

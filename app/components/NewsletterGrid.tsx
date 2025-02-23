import { Dispatch, SetStateAction } from "react";
import NewsletterCard, { Newsletter } from "./NewsletterCard";
import PDFViewer from "./PDFViewer";
import { Link } from "@remix-run/react";
interface NewsletterGridProps {
  newsletters: Newsletter[];
  setSelectedNewsletter: Dispatch<SetStateAction<string>>;
}
const NewsletterGrid = ({
  newsletters,
  setSelectedNewsletter,
}: NewsletterGridProps) => {
  const handleNewsletterClick = (
    event: React.MouseEvent,
    newsletterId: string,
    setSelectedNewsletter: Dispatch<SetStateAction<string>>,
  ) => {
    event.preventDefault(); // Prevent the default link behavior
    setSelectedNewsletter(newsletterId); // Update the selected newsletter state
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {newsletters.map((newsletter, index) => (
        <NewsletterCard
          key={index}
          newsletter={newsletter}
          setSelectedNewsletter={setSelectedNewsletter}
        />
      ))}
    </div>
  );
};

export default NewsletterGrid;

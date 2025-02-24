import { Dispatch, SetStateAction } from "react";
import NewsletterCard, { Newsletter } from "./NewsletterCard";

interface NewsletterGridProps {
  newsletters: Newsletter[];
  setSelectedNewsletter: Dispatch<SetStateAction<string>>;
}
const NewsletterGrid = ({
  newsletters,
  setSelectedNewsletter,
}: NewsletterGridProps) => {
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

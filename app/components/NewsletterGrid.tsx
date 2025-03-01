import { Dispatch, SetStateAction } from "react";
import NewsletterCard from "./NewsletterCard";
import { Newsletter } from "~/utils/types";

interface NewsletterGridProps {
  newsletters: Newsletter[];
  setSelectedNewsletter: Dispatch<SetStateAction<string>>;
}
const NewsletterGrid = ({
  newsletters,
  setSelectedNewsletter,
}: NewsletterGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-8">
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

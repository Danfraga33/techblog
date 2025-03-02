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
    <div className="grid grid-cols-2 gap-4 md:gap-6">
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

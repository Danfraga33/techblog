import { Button } from "./ui/button";
import { AudioWaveform } from "lucide-react";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Link } from "@remix-run/react";
import { Badge } from "./ui/badge";
import { capitalizeWords } from "~/lib/utils";

const truncateDescription = (description: string, wordLimit: number = 4) => {
  const words = description.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return description;
};
export default function LatestPodcastCard({
  title,
  description,
  category,
  slug,
  coverImage,
}: {
  title: string;
  description: string;
  category: string;
  slug: string;
  coverImage: string;
}) {
  return (
    <Card className="group relative w-[400px] space-y-4 overflow-hidden py-0 shadow-lg transition-all hover:shadow-xl">
      <figure className="transition-all group-hover:opacity-90">
        <img
          className="aspect-square w-full"
          src={coverImage}
          width={300}
          height={500}
          alt={title}
        />
      </figure>
      <CardContent className="px-4 py-0">
        <div className="flex flex-col gap-1">
          <div>
            <h3 className="text-lg">
              <Link to={`/podcast/${slug}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                {title}
              </Link>
            </h3>
            <Badge className="text-xs">{capitalizeWords(category)}</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            {truncateDescription(description)}
          </p>
        </div>
      </CardContent>
      <CardFooter className="border-t p-0">
        <Button variant="ghost" className="w-full">
          <AudioWaveform className="me-1 size-4" />
          <span>Listen</span>
        </Button>
      </CardFooter>
    </Card>
  );
}

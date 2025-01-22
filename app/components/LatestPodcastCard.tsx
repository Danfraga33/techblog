import { Badge, Image } from "@heroui/react";
import { Button } from "./ui/button";
import { AudioWaveform, HeartIcon, PlusIcon } from "lucide-react";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Link } from "@remix-run/react";
import { Separator } from "./ui/separator";

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
  href,
}: {
  title: string;
  description: string;
  category: string;
  href: string;
}) {
  return (
    <Card className="group relative w-[400px] space-y-4 overflow-hidden px-4 py-0 shadow-lg">
      <figure className="group-hover:opacity-90">
        <Image
          className="aspect-square w-full"
          src={""}
          width={300}
          height={500}
          alt={title}
        />
      </figure>
      <Separator />
      <CardContent className="px-4 py-0">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg">
              <Link to={href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {title}
              </Link>
            </h3>
            <Badge className="text-sm text-muted-foreground">{category}</Badge>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          {truncateDescription(description)}
        </p>
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

import { BellIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Image } from "@heroui/react";
export const Signup = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1JzbrAiPjEYkAmhWeldOz8tVOO2pdU.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">Subscribe to Bace+</p>
              <p className="text-sm text-muted-foreground">
                Unlock an ad-free reading and access to premium articles by
                subscribing to Bace+
              </p>
            </div>
          </div>
          <Button variant="outline" className="bg-white">
            Subscribe Now
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Input
              type="search"
              placeholder="Search News"
              className="w-full pl-10"
            />
            <svg
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <Button variant="ghost" size="icon">
            <BellIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

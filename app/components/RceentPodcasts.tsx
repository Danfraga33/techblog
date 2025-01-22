"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Play } from "lucide-react";

const podcasts = [
  { title: "The Future of AI in Semiconductor Industry", duration: "45:30" },
  { title: "Navigating the Chip Shortage: Expert Insights", duration: "38:15" },
  {
    title: "Quantum Computing: A New Era for Semiconductors",
    duration: "52:00",
  },
  {
    title: "Green Tech: Sustainable Practices in Chip Manufacturing",
    duration: "41:45",
  },
];

export default function RecentPodcastsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-white">Recent Podcasts</h2>
      <div className="space-y-2">
        {podcasts.map((podcast, index) => (
          <Card
            key={index}
            className={`bg-[#242424] text-white transition-all duration-300 ease-in-out ${
              expandedIndex === index ? "h-32" : "h-16"
            }`}
          >
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm">{podcast.title}</CardTitle>
                <button
                  onClick={() => toggleExpand(index)}
                  className="rounded-full bg-primary p-2 text-black hover:bg-primary/80"
                >
                  <Play className="h-4 w-4" />
                </button>
              </div>
            </CardHeader>
            <CardContent
              className={`px-4 pb-4 ${expandedIndex === index ? "block" : "hidden"}`}
            >
              <p className="text-sm text-gray-400">
                Duration: {podcast.duration}
              </p>
              <p className="mt-2 text-sm">
                Click to listen to this episode about{" "}
                {podcast.title.toLowerCase()}.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

import {
  ChevronLeft,
  MoreVertical,
  Shuffle,
  SkipBack,
  Pause,
  SkipForward,
  Repeat,
  Play,
} from "lucide-react";
import { Separator } from "./ui/separator";
import FadedDivider from "./Dashboard/StyleComponents.tsx/FadedDivider";
import { Link } from "@remix-run/react";
import { SidebarTrigger } from "./ui/sidebar";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo, useRef, useState } from "react";
import { PodcastFrontmatter } from "~/.server/podcasts";

export default function PodcastPlayer({
  selectedPodcast,
}: {
  selectedPodcast: podcastType;
}) {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#3d2329] to-[#1a1314] text-white">
        <div className="px-4 py-6">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2 rounded-full bg-slate-200/10 p-2 px-3 transition hover:bg-white/10">
              <Link to="/podcast" className="">
                <ChevronLeft className="h-6 w-6 opacity-100" />
              </Link>
              <Separator orientation="vertical" className="mr-2 h-4" />

              <SidebarTrigger className="-ml-1" />
            </div>

            <div>
              <h1 className="text-lg font-medium">{selectedPodcast.title}</h1>
            </div>
            <button className="rounded-full p-2 transition hover:bg-white/10">
              <MoreVertical className="h-6 w-6" />
            </button>
          </div>

          <div className="mb-12 text-center">
            <h2 className="mb-8 px-8 text-2xl font-bold md:text-3xl">
              {selectedPodcast.slogan}
            </h2>

            {/* Add image fade here */}
            <div className="relative mb-12 inline-block">
              <img
                src="/chip.jpg"
                alt="Podcast host"
                width={600}
                height={600}
                className="toopacity-30 mx-auto w-4/5 rounded-3xl opacity-65"
              />
            </div>

            {/* Waveform */}
            <div className="mb-4 h-12">
              <FadedDivider />
            </div>

            {/* Time */}
            <div className="mb-4 text-sm text-gray-400">00:23/02:34</div>

            {/* Controls */}
            <div className="mb-8 flex items-center justify-evenly gap-8">
              <button className="rounded-full p-2 transition hover:bg-white/10">
                <Shuffle className="h-10 w-10 text-gray-400" />
              </button>
              <Link
                to="/podcasts"
                className="rounded-full border border-gray-500/100 p-2 transition hover:bg-white/10"
              >
                <SkipBack className="h-10 w-10" />
              </Link>
              <button className="rounded-full bg-white p-3 transition hover:bg-white/90">
                <Pause className="h-6 w-6 text-black" />
              </button>
              <button className="rounded-full border border-gray-500/100 p-2 transition hover:bg-white/10">
                <SkipForward className="h-10 w-10" />
              </button>
              <button className="rounded-full p-2 transition hover:bg-white/10">
                <Repeat className="h-10 w-10 text-gray-400" />
              </button>
            </div>

            {/* Caption */}
            <div className="text-sm text-gray-400">
              <p>{selectedPodcast.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import {
  ChevronLeft,
  MoreVertical,
  SkipBack,
  Pause,
  SkipForward,
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
  frontmatter,
  code,
}: {
  code: string;
  frontmatter: PodcastFrontmatter;
}) {
  const [currentTime, setCurrentTime] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const Component = useMemo(() => getMDXComponent(code), [code]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const toggleAudio = async () => {
    if (audioRef.current) {
      try {
        if (audioPlaying) {
          audioRef.current.pause();
        } else {
          await audioRef.current.play().catch((error) => {
            console.error("Error playing audio:", error);
          });
        }
        setAudioPlaying(!audioPlaying);
      } catch (error) {
        console.error("Error toggling audio:", error);
      }
    }
  };
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
              <h1 className="text-lg font-medium">{frontmatter.title}</h1>
            </div>
            <button className="rounded-full p-2 transition hover:bg-white/10">
              <MoreVertical className="h-6 w-6" />
            </button>
          </div>

          <div className="text-center">
            <h2 className="mb-8 px-8 text-2xl font-bold md:text-3xl">
              {frontmatter.slogan}
            </h2>

            <div className="relative mb-12 inline-block">
              <img
                src={frontmatter.coverImage}
                alt="Podcast host"
                width={600}
                height={600}
                className="toopacity-30 mx-auto w-4/5 rounded-3xl opacity-65"
              />
            </div>

            <div className="mb-4 h-12">
              <FadedDivider />
            </div>

            <div className="mb-4 text-sm text-gray-400">
              {formatTime(currentTime)}/
              {formatTime(audioRef.current?.duration || 0)}
            </div>

            <div className="mb-8 flex items-center justify-evenly gap-8">
              <Link
                to="/podcasts"
                className="rounded-full border border-gray-500/100 p-2 transition hover:bg-white/10"
              >
                <SkipBack className="h-10 w-10" />
              </Link>
              <button
                className="rounded-full bg-white p-3 transition hover:bg-white/90"
                onClick={toggleAudio}
              >
                {audioPlaying ? (
                  <Pause className="h-6 w-6 text-black" />
                ) : (
                  <Play className="h-6 w-6 text-black" />
                )}
              </button>
              <button className="rounded-full border border-gray-500/100 p-2 transition hover:bg-white/10">
                <SkipForward className="h-10 w-10" />
              </button>
            </div>
            <div className="md:text-md px-20 text-sm text-gray-300 lg:text-lg">
              <Component code={code} />
            </div>
          </div>
        </div>
        <audio
          ref={audioRef}
          onEnded={() => setAudioPlaying(false)}
          onTimeUpdate={() => {
            if (audioRef.current) {
              setCurrentTime(audioRef.current.currentTime);
            }
          }}
          onLoadedMetadata={() => {
            if (audioRef.current) {
              setCurrentTime(audioRef.current.currentTime);
            }
          }}
        >
          <source src={frontmatter.audioFile} />
          <source
            src={frontmatter.audioFile.replace(".mp3", ".wav")}
            type="audio/mp3"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    </>
  );
}

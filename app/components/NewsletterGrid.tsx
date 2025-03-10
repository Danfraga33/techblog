import { Dispatch, SetStateAction, useState } from "react";
import { Newsletter } from "~/utils/types";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import PDFViewer from "./PDFViewer";
import { SmallSignup } from "./Dashboard/SmallSignup";
import { Link } from "@remix-run/react";
import { dateChange } from "~/lib/utils";

interface NewsletterGridProps {
  newsletters: Newsletter[];
  setSelectedNewsletter: Dispatch<SetStateAction<string>>;
}

const NewsletterGrid = ({ newsletters }: NewsletterGridProps) => {
  const [selectedNewsletter, setSelectedNewsletter] = useState("");
  const [topic, setTopic] = useState("");
  const featuredNewsletter = newsletters[0];
  const topNewsletters = newsletters.slice(1, 4);
  const remainingNewsletters = newsletters.slice(4);

  return (
    <div className="container mx-auto flex flex-col gap-10 pt-20">
      <div className="flex flex-col items-end justify-end gap-6 text-end">
        <ul className="flex text-white">
          <Link to="/" className="mr-4">
            <span className="text-xl">The Hub</span>
          </Link>
          <li className="-ml-[14px] -mt-[14px] mb-[14px] cursor-pointer pb-[14px] pl-[14px] pt-[14px] hover:text-background hover:transition-all">
            <span className="text-xl text-primary">/</span>
          </li>
          <li className="-ml-[14px] -mt-[14px] mb-[14px] cursor-pointer pb-[14px] pl-[14px] pt-[14px] hover:text-background hover:transition-all">
            <span className="m-4 text-xl" onClick={() => setTopic("AI")}>
              Artificial Intelligence
            </span>
          </li>
          <li className="-mb-[14px] -ml-[14px] -mt-[14px] cursor-pointer pb-[14px] pl-[14px] pt-[14px] hover:text-background hover:transition-all">
            <span className="text-xl text-primary">/</span>
          </li>
          <li className="-mb-[14px] -ml-[14px] -mt-[14px] cursor-pointer pb-[14px] pl-[14px] pt-[14px] hover:text-background hover:transition-all">
            <span
              className="m-4 text-xl"
              onClick={() => setTopic("Semiconductor")}
            >
              Semiconductor
            </span>
          </li>
        </ul>
        <hr className="h-full w-full" />
      </div>
      <div className="flex justify-center gap-10 pt-2">
        <div className="flex">
          <Dialog>
            <DialogTrigger asChild>
              <div className="cursor-pointer pr-10">
                <div className="relative">
                  <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black opacity-75"></div>

                  <img
                    src={featuredNewsletter.image || "/chip.jpg"}
                    alt={featuredNewsletter.title}
                    width={1500}
                    height={2500}
                    className="h-[35rem] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                    <h1 className="font-display mb-2 text-5xl font-bold leading-tight text-white">
                      {featuredNewsletter.title}
                    </h1>
                    <p className="mb-4 text-xl text-white">
                      {featuredNewsletter.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-300">
                      <span className="text-primary">
                        {featuredNewsletter.topic}
                      </span>
                      <span className="mx-2">|</span>
                      <span>{dateChange(featuredNewsletter.uploadDate)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <PDFViewer selectedNewsletter={selectedNewsletter} />
            </DialogContent>
          </Dialog>
        </div>
        <div>
          <h2 className="mb-6 text-lg font-medium text-emerald-400">
            Top Stories
          </h2>
          <div className="space-y-6">
            {remainingNewsletters.map((p) => (
              <div className="text-white">{p.title}</div>
            ))}
            {topNewsletters.map((story, i) => (
              <Dialog>
                <DialogTrigger asChild>
                  <div className="group flex cursor-pointer gap-4">
                    <div className="flex items-start">
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-background p-3 text-xs font-bold text-gray-700">
                        <span className="text-primary">{i + 1}</span>
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-xl font-bold text-white transition-colors hover:underline hover:decoration-primary hover:transition-all"
                        onClick={() => setSelectedNewsletter(story._id)}
                      >
                        {story.title}
                      </h3>
                      <div className="mt-1 flex items-center text-xs text-gray-400">
                        <span className="text-primary">{story.topic}</span>
                        <span className="mx-2">|</span>
                        <span>{dateChange(story.uploadDate)}</span>
                      </div>
                    </div>
                    <div className="h-20 w-20 flex-shrink-0">
                      <img
                        src={story.img || "chip.jpg"}
                        alt={story.title}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <PDFViewer selectedNewsletter={selectedNewsletter} />
                </DialogContent>
                <hr className="bg-black" />
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterGrid;

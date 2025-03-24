import { useState } from "react";
import { Newsletter, NewsletterGridProps } from "~/utils/types";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Link } from "@remix-run/react";
import { cn, formatDate } from "~/lib/utils";
import NewsletterViewer from "./NewsletterViewer";
import { businessData } from "~/data/constant/admin";
import UnderlineAnimation from "./Dashboard/UnderlineAnimation";

const NewsletterGrid = ({ newsletters }: NewsletterGridProps) => {
  const [selectedNewsletter, setSelectedNewsletter] = useState<Newsletter>();

  const [topic, setTopic] = useState("");
  const featuredNewsletter = newsletters[0];
  const topNewsletters = newsletters.slice(1, 4);
  const remainingNewsletters = newsletters.slice(4);
  const filteredNewsletters = topic
    ? newsletters.filter((newsletter) => newsletter.topic === topic)
    : newsletters;
  const filteredFeatured = filteredNewsletters[0] || featuredNewsletter;
  const filteredTop = filteredNewsletters.slice(1, 5);

  return (
    <main className="mb-2 min-h-screen bg-white">
      <div className="container mx-auto px-4 pt-20">
        <div className="mb-12 flex flex-col items-end justify-end gap-6 text-end">
          <ul className="flex text-black">
            <Link to="/">
              <UnderlineAnimation className="text-xl">
                {businessData.title}
              </UnderlineAnimation>
            </Link>
            <li className="mx-2">
              <span className="text-xl text-primary">/</span>
            </li>
            <li className="cursor-pointer">
              <UnderlineAnimation
                className={cn(
                  "p-0 text-xl",
                  topic === "AI" ? "font-semibold transition-all" : "",
                )}
              >
                <span onClick={() => setTopic("AI")}>AI</span>
              </UnderlineAnimation>
            </li>
            <li className="mx-2">
              <span className="text-xl text-primary">/</span>
            </li>
            <li className="cursor-pointer">
              <UnderlineAnimation
                className={cn(
                  "p-0 text-xl",
                  topic === "Semiconductor"
                    ? "font-semibold transition-all"
                    : "",
                )}
              >
                <span onClick={() => setTopic("Semiconductor")}>
                  Semiconductor
                </span>
              </UnderlineAnimation>
            </li>
            <li className="mx-2">
              <span className="text-xl text-primary">/</span>
            </li>
            <li className="cursor-pointer">
              <UnderlineAnimation className="text-xl">
                <span onClick={() => setTopic("")}>Clear</span>
              </UnderlineAnimation>
            </li>
          </ul>
          <hr className="h-px w-full border-t border-black" />
        </div>

        <div className="flex flex-col justify-center gap-10 pt-2 md:flex-row">
          <div className="flex md:w-2/3">
            <Dialog>
              <DialogTrigger asChild>
                <div
                  className="w-full cursor-pointer pr-0 md:pr-10"
                  onClick={() => setSelectedNewsletter(filteredFeatured)}
                >
                  <div className="relative">
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black opacity-75"></div>
                    <img
                      src={"/herr.png"}
                      alt={filteredFeatured.title}
                      width={1500}
                      height={2500}
                      className="h-[35rem] w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                      <h1 className="mb-2 text-4xl font-bold leading-tight text-white underline decoration-primary md:text-5xl">
                        {filteredFeatured.title}
                      </h1>
                      <p className="mb-4 text-lg text-white md:text-xl">
                        {filteredFeatured.description}
                      </p>
                      <div className="flex items-center text-sm text-gray-300">
                        <span className="font-semibold text-primary">
                          {filteredFeatured.topic}
                        </span>
                        <span className="mx-2">|</span>
                        <span>{formatDate(filteredFeatured.uploadDate)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent
                aria-description="pdf display of report"
                className="max-w-4xl text-black"
              >
                {selectedNewsletter && (
                  <NewsletterViewer selectedNewsletter={selectedNewsletter} />
                )}
              </DialogContent>
            </Dialog>
          </div>

          {/* Top Stories */}
          <div className="md:w-1/3">
            <h2 className="mb-6 text-lg font-medium">TOP STORIES</h2>
            <div className="space-y-6">
              {(filteredTop.length > 0 ? filteredTop : topNewsletters).map(
                (story, i) => (
                  <div key={story._id}>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div
                          className="group flex cursor-pointer gap-4"
                          onClick={() => setSelectedNewsletter(story)}
                        >
                          <div className="flex items-start">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black p-3 text-xs font-bold">
                              <span className="text-primary">{i + 1}</span>
                            </span>
                          </div>
                          <div className="flex-1">
                            <h3
                              className="text-xl font-bold text-black hover:underline hover:decoration-primary"
                              onClick={() => setSelectedNewsletter(story)}
                            >
                              {story.title}
                            </h3>
                            <div className="mt-1 flex items-center text-xs text-gray-600">
                              <span className="font-bold text-primary">
                                {story.topic}
                              </span>
                              <span className="mx-2">|</span>
                              <span>{formatDate(story.uploadDate)}</span>
                            </div>
                          </div>
                          <div className="h-20 w-20 flex-shrink-0">
                            <img
                              src="/7103.jpg"
                              alt={story.title}
                              width={80}
                              height={80}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent
                        aria-description="pdf display"
                        className="max-w-4xl"
                      >
                        {selectedNewsletter && (
                          <NewsletterViewer
                            selectedNewsletter={selectedNewsletter}
                          />
                        )}
                      </DialogContent>
                    </Dialog>
                    <hr className="my-6 border-t border-gray-200" />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* More Newsletters */}
        <div className="my-16 border-t border-black pt-8">
          <h2 className="mb-8 cursor-default text-3xl font-bold text-black underline decoration-primary">
            More Newsletters
          </h2>

          <div className="grid grid-cols-1 gap-8 text-black md:grid-cols-3">
            {remainingNewsletters.map((newsletter) => (
              <Dialog key={newsletter._id}>
                <DialogTrigger asChild>
                  <div
                    className="cursor-pointer text-black"
                    onClick={() => setSelectedNewsletter(newsletter)}
                  >
                    <img
                      src="/cover2.jpg"
                      alt={newsletter.title}
                      width={400}
                      height={300}
                      className="mb-4 h-60 w-full object-cover"
                    />
                    <h3 className="mb-2 text-xl font-bold hover:underline">
                      {newsletter.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-sm">
                      {newsletter.description}
                    </p>
                    <div className="flex items-center text-xs text-gray-600">
                      <span className="font-bold text-primary">
                        {newsletter.topic}
                      </span>
                      <span className="mx-2">|</span>
                      <span>{formatDate(newsletter.uploadDate)}</span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent
                  aria-description="pdf display"
                  className="max-w-4xl"
                >
                  <NewsletterViewer selectedNewsletter={selectedNewsletter} />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsletterGrid;

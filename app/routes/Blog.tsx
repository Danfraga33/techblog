import { Image } from "@heroui/react";
import { Link } from "@remix-run/react";
import { Fragment, useState } from "react";
import Header from "~/components/Dashboard/Header";
import Title from "~/components/Dashboard/Title";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";

const Blog = () => {
  const [filter, setFilter] = useState("View all");
  return (
    <>
      <Header />

      <div className="min-w-screen px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-8">
          <Title
            title="Blog"
            description="New product features, the latest in technology, solutions, and
              updates."
          />
          <div className="flex max-w-md gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded-full"
            />
            <Button className="rounded-full px-6">Subscribe</Button>
          </div>
          <nav className="border-b">
            <ul className="-mb-px flex gap-8">
              {["View all", "Artificial Intelligence", "Semiconductor"].map(
                (item) => (
                  <Fragment key={item}>
                    <li>
                      <Link
                        to="#"
                        onClick={() => setFilter(item)}
                        className={cn(
                          "inline-block py-3 font-medium",
                          filter === item && "border-b-3 border-b-stone-300",
                        )}
                      >
                        {item}
                      </Link>
                    </li>
                  </Fragment>
                ),
              )}
            </ul>
          </nav>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {" "}
          {/* Changed to 3 columns */}
          <article className="group">
            <Link to="#" className="block space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OwajP7iYDPAyYHRWLTMAFlLg1pFmKf.png"
                  alt="Person holding a camera"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="mb-2 text-sm">Olivia Rhye</div>
                  <div className="text-sm opacity-70">20 Jan 2022</div>
                  <div className="mt-1 text-sm">Design</div>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold transition-colors group-hover:text-primary">
                  UX review presentations
                </h2>
                <p className="mt-2 text-muted-foreground">
                  How do you create compelling presentations that wow your
                  colleagues and impress your managers? Look no further.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium">
                  Read post
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </article>
          <article className="group">
            <Link to="#" className="block space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OwajP7iYDPAyYHRWLTMAFlLg1pFmKf.png"
                  alt="Bookshelf with various books"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="mb-2 text-sm">Phoenix Baker</div>
                  <div className="text-sm opacity-70">19 Jan 2022</div>
                  <div className="mt-1 text-sm">Design</div>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold transition-colors group-hover:text-primary">
                  Best books on scaling your startup
                </h2>
                <p className="mt-2 text-muted-foreground">
                  This collection of the best startup books for scaling your
                  startup are packed full with valuable insights and advice.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium">
                  Read post
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </article>
          <article className="group">
            <Link to="#" className="block space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OwajP7iYDPAyYHRWLTMAFlLg1pFmKf.png"
                  alt="Desk workspace"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="mb-2 text-sm">Jaxon Cole</div>
                  <div className="text-sm opacity-70">18 Jan 2022</div>
                  <div className="mt-1 text-sm">Development</div>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold transition-colors group-hover:text-primary">
                  New techniques for app development
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Learn about the latest techniques in app development to
                  optimize your workflow and improve your product's performance.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium">
                  Read post
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </article>
        </div>
      </div>
      {/* <section className="flex items-center justify-center pt-8">
        <Button>
          <span>
            <ArrowDown />
          </span>
          Lead more
        </Button>
      </section> */}
    </>
  );
};

export default Blog;

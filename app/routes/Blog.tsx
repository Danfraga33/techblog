import { Image } from "@heroui/react";
import { Link } from "@remix-run/react";
import { ArrowDown } from "lucide-react";
import Header from "~/components/Dashboard/Header";
import SearchBar from "~/components/Dashboard/Search";
import { AppSidebar } from "~/components/app-sidebar";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

const Blog = () => {
  return (
    <>
      <Header />

      <div className="px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
            <p className="text-lg text-muted-foreground">
              New product features, the latest in technology, solutions, and
              updates.
            </p>
          </div>
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
              <li>
                <Link
                  to="#"
                  className="inline-block border-b-2 border-primary py-3 font-medium"
                >
                  View all
                </Link>
              </li>
              {[
                "Design",
                "Product",
                "Development",
                "Customer Support",
                "Leadership",
                "Management",
                "Interviews",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="inline-block py-3 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
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
                  fill
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
        </div>
      </div>
      <section className="items flex">
        <Button>
          <span>
            <ArrowDown />
          </span>
          Lead more
        </Button>
      </section>
    </>
  );
};

export default Blog;

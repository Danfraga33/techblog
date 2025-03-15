import { Link } from "@remix-run/react";
import { TwitterIcon } from "lucide-react";
import UnderlineAnimation from "./UnderlineAnimation";

export default function Header() {
  return (
    <header className="border-b border-black py-6">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link
          to="/"
          className="font-heading text-2xl font-bold uppercase text-black"
        >
          Next Frontier Hub
        </Link>

        <div className="flex items-center gap-8">
          <nav className="text-md hidden gap-8 font-semibold uppercase tracking-tighter md:flex">
            <UnderlineAnimation>
              <Link to="/newsletter">Newsletter</Link>
            </UnderlineAnimation>
            <UnderlineAnimation>
              <Link to="/blog">blog</Link>
            </UnderlineAnimation>
            <UnderlineAnimation>
              <Link to="/podcasts">Podcasts</Link>
            </UnderlineAnimation>
          </nav>

          <Link
            to="https://x.com/Danfraga33"
            aria-label="Twitter"
            className="pl-10"
          >
            <TwitterIcon
              className="text-black hover:text-primary hover:transition-all"
              size={20}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

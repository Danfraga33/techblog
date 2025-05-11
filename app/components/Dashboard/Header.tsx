import { Link } from "@remix-run/react";
import { TwitterIcon } from "lucide-react";
import UnderlineAnimation from "./UnderlineAnimation";
import { menuItems } from "~/data/constant/headerItems";
import { Button } from "../ui/button";
import { Fragment } from "react";

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
          <nav className="text-md hidden gap-8 font-semibold uppercase tracking-tighter md:flex md:items-center">
            {menuItems.map((item, i) =>
              item.title == "Member" ? (
                <Fragment key={i}>
                  <Button
                    className="bg-amber-300 text-black hover:bg-amber-100 hover:transition-all"
                    asChild
                  >
                    <Link to={item.link}>{item.title}</Link>
                  </Button>
                </Fragment>
              ) : (
                <UnderlineAnimation key={i}>
                  <Link to={item.link}>{item.title}</Link>
                </UnderlineAnimation>
              ),
            )}
          </nav>
          <a
            href="https://x.com/Danfraga33"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon
              className="hover:text-primary hover:transition-all"
              size={20}
            />
          </a>
        </div>
      </div>
    </header>
  );
}

import { Link } from "@remix-run/react";
import { TwitterIcon } from "lucide-react";
import { SmallSignup } from "./SmallSignup";

export default function Footer() {
  return (
    <footer className="bg-black py-16 text-white">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="mb-20 flex flex-col items-start justify-between md:flex-row">
          <div className="mb-8 cursor-default md:mb-0">
            <h2 className="mb-2 text-5xl font-bold uppercase">
              EMERGING TECH NEWS
            </h2>
            <h2 className="text-5xl font-bold uppercase">TO YOUR INBOX</h2>
          </div>

          <div className="flex w-full flex-col md:w-auto">
            <h2 className="mb-2 text-2xl font-bold uppercase">Subscribe now</h2>
            <SmallSignup />
          </div>
        </div>
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 cursor-default text-xl font-bold uppercase">
              Next Frontier Hub
            </h3>
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

          <div>
            <ul className="space-y-2 text-white">
              <li>
                <Link to="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/podcasts" className="hover:text-primary">
                  Podcasts
                </Link>
              </li>
              <li>
                <Link to="/newsletter" className="hover:text-primary">
                  Newsletters
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

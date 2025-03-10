import { Link } from "@remix-run/react";
import { Fragment, useState } from "react";
import { SmallSignup } from "./SmallSignup";
import { Crown, Menu, Paperclip, Plus, Search, X } from "lucide-react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "../ui/button";

function NavItem({ label }: { label: string }) {
  return (
    <div className="group relative">
      <Button
        variant="secondary"
        className="flex items-center rounded-2xl bg-white px-4 py-0.5 text-sm font-medium text-gray-700 hover:text-gray-900"
      >
        {label === "NextFrontier" ? <Crown /> : ""}
        {label}
        {label === "NextFrontier" ? "" : <Plus />}
      </Button>
    </div>
  );
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "NextFrontier",
    "Articles",
    "Podcast",
    "Newsletters",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-10 bg-transparent">
      <div className="">
        <div className="flex items-center space-x-4">
          <nav className="hidden items-center space-x-1 md:flex">
            {menuItems.map((item, i) => (
              <Fragment key={i}>
                <NavItem label={item} />
              </Fragment>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

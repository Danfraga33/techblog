import {
  ArrowUpCircleIcon,
  Brain,
  ChartSpline,
  ClipboardListIcon,
  Cpu,
  DatabaseIcon,
  HelpCircleIcon,
  Home,
  LayoutDashboardIcon,
  NotebookText,
  RollerCoaster,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
export const navData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  NavOptions: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Themes/Sectors",
      url: "#",
      icon: RollerCoaster,
    },
    {
      title: "Reports",
      url: "#",
      icon: NotebookText,
    },
  ],
  navMain: [
    {
      title: "Semiconductor",
      url: "#",
      icon: Cpu,
    },
    {
      title: "Artificial Intellgience",
      url: "#",
      icon: Brain,
    },
    {
      title: "Macroeconomics",
      url: "#",
      icon: ChartSpline,
    },
  ],

  navSecondary: [
    {
      title: "NFT",
      url: "#",
      icon: Home,
    },
    {
      title: "Settings",
      url: "#",
      icon: SettingsIcon,
    },
    {
      title: "Get Help",
      url: "#",
      icon: HelpCircleIcon,
    },
    {
      title: "Search",
      url: "#",
      icon: SearchIcon,
    },
  ],
  documents: [
    {
      name: "Research",
      url: "#",
      icon: DatabaseIcon,
    },
    {
      name: "Reports",
      url: "#",
      icon: ClipboardListIcon,
    },
  ],
};

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import {
  ArrowUpCircleIcon,
  Brain,
  ChartSpline,
  ClipboardListIcon,
  Cpu,
  DatabaseIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  LucideHome,
  NotebookText,
  RollerCoaster,
  SearchIcon,
  SettingsIcon,
  Target,
} from "lucide-react";
import { NavMain } from "./nav-main";
import { NavDocuments } from "./nav-documents";
import { NavSecondary } from "./nav-secondary";
import { Link, redirect, useNavigate } from "@remix-run/react";
import { NavUser } from "./nav-user";
import { UserButton, useUser } from "@clerk/remix";
import { useEffect } from "react";

const data = {
  NavOptions: [
    {
      title: "Dashboard",
      url: "/member",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Reports",
      url: "/member/reports",
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
    {
      title: "Goal",
      url: "/member/goal",
      icon: Target,
    },
  ],

  navSecondary: [
    {
      title: "Homepage",
      url: "/",
      icon: LucideHome,
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
type UserObj = {
  name: string;
  email: string;
  avatar: string;
};

export function AppSidebar({
  userObj,
  ...props
}: React.ComponentProps<typeof Sidebar> & { userObj: UserObj }) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link to="/member">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain title="Nav" items={data.NavOptions} />
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userObj} />
      </SidebarFooter>
    </Sidebar>
  );
}

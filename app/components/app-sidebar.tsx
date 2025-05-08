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
import { Link } from "@remix-run/react";
import { NavUser } from "./nav-user";
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  NavOptions: [
    {
      title: "Dashboard",
      url: "/member",
      icon: LayoutDashboardIcon,
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
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

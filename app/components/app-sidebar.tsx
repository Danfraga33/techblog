import * as React from "react";
import { AudioWaveform, BookOpen, FolderKanban, Settings2 } from "lucide-react";

import { NavMain } from "~/components/nav-main";
import { TeamSwitcher } from "~/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "~/components/ui/sidebar";

const data = {
  user: {
    name: "Daniel",
    email: "daniel@example.com",
    avatar: "",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: AudioWaveform,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Hub",
      url: "/",
      icon: FolderKanban,
    },
    {
      title: "Newsletters",
      url: "/newsletter",
      icon: BookOpen,
    },
    {
      title: "Blog",
      url: "/blog",
      icon: Settings2,
    },
    {
      title: "Podcasts",
      url: "/podcast",
      icon: AudioWaveform,
    },
    {
      title: "Whiteboard Animation",
      url: "#",
      icon: BookOpen,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
}

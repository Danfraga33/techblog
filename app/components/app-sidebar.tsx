import * as React from "react";
import { AudioWaveform, BookOpen, Command, Settings2 } from "lucide-react"; // Icons used for demonstration, update as needed.

import { NavMain } from "~/components/nav-main";
import { TeamSwitcher } from "~/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "~/components/ui/sidebar";
import { NavUser } from "./nav-user";

// Updated data for navigation
const data = {
  user: {
    name: "Daniel",
    email: "daniel@example.com",
    avatar: "/avatars/daniel.jpg",
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
      title: "Newsletters",
      url: "#",
      icon: BookOpen, // Placeholder icon
      items: [],
    },
    {
      title: "Annual Reports",
      url: "#",
      icon: Command, // Placeholder icon
      items: [],
    },
    {
      title: "Blogs",
      url: "/Blog",
      icon: Settings2, // Placeholder icon
      items: [],
    },
    {
      title: "Podcasts",
      url: "/Podcasts",
      icon: AudioWaveform, // Placeholder icon
      items: [],
    },
    {
      title: "Whiteboard Animation",
      url: "#",
      icon: BookOpen, // Placeholder icon
      items: [],
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
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

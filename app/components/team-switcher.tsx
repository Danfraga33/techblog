import * as React from "react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "~/components/ui/sidebar";
import { Separator } from "./ui/separator";
import { Link } from "@remix-run/react";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) {
  const [activeTeam] = React.useState(teams[0]); // Always showing the first team as active

  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex justify-center py-2">
        <Link to="/">
          <SidebarMenuButton
            size="lg"
            className="flex aspect-square h-14 w-14 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground transition-all"
          >
            <activeTeam.logo className="h-8 w-8" />
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
      <Separator />
    </SidebarMenu>
  );
}

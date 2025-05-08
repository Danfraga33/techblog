import { Outlet } from "@remix-run/react";
import { AppSidebar } from "~/components/app-sidebar";

import { SiteHeader } from "~/components/site-header";

import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

const MembersLayout = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <main>
                <Outlet />
              </main>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default MembersLayout;

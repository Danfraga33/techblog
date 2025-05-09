import { useUser } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import { Outlet, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { AppSidebar } from "~/components/app-sidebar";

import { SiteHeader } from "~/components/site-header";

import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

const MembersLayout = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/sign-in"); // Redirect to sign-in page
    }
  }, [isLoaded, isSignedIn, navigate]);

  // Show nothing while loading or if not signed in
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  // At this point, we know user exists and is signed in
  const userObj = {
    name: user.fullName ?? "", // Empty string fallback (or throw error if this should never happen)
    email: user.primaryEmailAddress?.emailAddress ?? "",
    avatar: user.imageUrl ?? "",
  };
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar userObj={userObj} />
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

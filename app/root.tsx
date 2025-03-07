import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import "./tailwind.css";
import { AppSidebar } from "./components/app-sidebar";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";
import { ReactNode } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "./app/tailwind.css" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicon/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon/favicon-16x16.png",
  },
  {
    rel: "icon",
    type: "image/x-icon",
    href: "/favicon/favicon.ico",
  },
  { rel: "manifest", href: "/favicon/site.webmanifest" },
];

export const meta: MetaFunction = () => {
  const location = useLocation();
  console.log("location: ", location);

  const path = (str: string) => {
    const p = str.split("/").pop() || "Home";
    return p ? p[0].toUpperCase() + p.slice(1) : "";
  };

  return [
    { title: `Next Frontier | ${path(location.pathname)} ` },
    {
      property: "og:title",
      content: "Next Frontier Hub",
    },
    {
      name: "description",
      content:
        "Next Frontier Hub delivers the latest insights on emerging technologies, helping investors stay ahead of the curve. From AI and semiconductors to quantum computing and beyond, we break down key trends, market shifts, and investment opportunities in the tech industry",
    },
  ];
};

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="bg-[#F5f5f5] shadow-xl">
            {children}
          </SidebarInset>
        </SidebarProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  json,
  redirect,
  useLocation,
} from "@remix-run/react";
import type {
  ActionFunctionArgs,
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";

import "./tailwind.css";

import { ReactNode } from "react";
import stylesheet from "./tailwind.css?url";
import Header from "./components/Dashboard/Header";
import Footer from "./components/Dashboard/Footer";
import { sendWelcomeEmail } from "./utils/email.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  // { rel: "stylesheet", href: "./app/tailwind.css" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preload", href: "/font/karlo.tff", type: "font/tff" },
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

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;

  console.log("Form data received:", { email }); // Debugging

  // Validate form data
  if (!email) {
    return json({ error: "Email is required" }, { status: 400 });
  }

  try {
    await sendWelcomeEmail(email);

    return redirect("/blog");
  } catch (error) {
    console.error("Error handling form submission:", error);
    return json({ error: "Failed to submit form" }, { status: 500 });
  }
}

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
        <Header />
        {children}
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

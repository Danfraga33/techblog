import {
  Links,
  Meta,
  Outlet,
  Scripts,
  json,
  redirect,
  useLocation,
} from "@remix-run/react";
import type { MetaFunction, LoaderFunction } from "@remix-run/node";

import type { ActionFunctionArgs, LinksFunction } from "@remix-run/node";

import "./tailwind.css";

import { sendWelcomeEmail } from "./utils/email.server";
import { subscriptionSchema } from "~/schemas/subscriptionSchema";
import stylesheet from "./tailwind.css?url";

import { z } from "zod";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp } from "@clerk/remix";
import { ReactNode } from "react";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
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

  console.log("Form data received:", { email });

  if (!email) {
    return json({ error: "Email is required" }, { status: 400 });
  }

  try {
    subscriptionSchema.parse({ email });
    await sendWelcomeEmail(email);
    return redirect("/blog");
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map((err) => err.message).join(", ");
      console.error("Zod Validation Error:", errorMessages);
      return json({ error: errorMessages }, { status: 400 });
    }
    console.error("Error handling form submission:", error);
    return json({ error: "Failed to submit form" }, { status: 500 });
  }
}

export const loader: LoaderFunction = (args) => rootAuthLoader(args);

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
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function App() {
  return <Outlet />;
}

export default ClerkApp(App);

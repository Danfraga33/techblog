import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { remark } from "remark";
import { visit } from "unist-util-visit";
import GithubSlugger from "github-slugger";
import type { Heading } from "mdast";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPathName(pathName: string) {
  return pathName.split("/").pop();
}
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
export function getDomainUrl(request: Request) {
  const host =
    request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host) {
    throw new Error("Could not determine domain URL.");
  }
  const protocol = host.includes("localhost") ? "http" : "https";
  return `${protocol}://${host}`;
}

export function capitalizeWords(words: string) {
  return words
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");
}

export function PageTitle(str: string): string {
  return str
    .split(" ")
    .flatMap((word) => word.split("-"))
    .map((word) =>
      word.length > 3
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word.toLowerCase(),
    )
    .join(" ");
}

export function sortByDate(data: any[]) {
  return data.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime();
    const dateB = new Date(b.frontmatter.date).getTime();

    return dateB - dateA;
  });
}

export async function extractHeadings(content: string) {
  const slugger = new GithubSlugger();
  const headings: Array<{ depth: number; text: string; id: string }> = [];

  const processor = remark().use(() => (tree) => {
    slugger.reset();

    visit(tree, "heading", (node: Heading) => {
      const text = node.children
        .filter((child) => child.type === "text" || child.type === "strong") // Also handle plain text
        .map((child) => {
          return child.children?.[0]?.value || child.value; // Ensure you return the value
        })
        .join(" ");

      const id = text ? slugger.slug(text) : "";

      headings.push({
        depth: node.depth,
        text,
        id,
      });
    });
  });

  await processor.process(content);
  return headings;
}

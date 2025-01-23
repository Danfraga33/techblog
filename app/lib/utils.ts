import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPathName(pathName: string) {
  return pathName.split("/").pop();
}

export function PageTitle(str: string): string {
  return str
    .split("-")
    .map((word, index) =>
      word.length > 3
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word.toLowerCase(),
    )
    .join(" ");
}

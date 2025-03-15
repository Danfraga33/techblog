import { Dispatch, SetStateAction } from "react";

export interface Newsletter {
  _id: string;
  title: string;
  description: string;
  filename: string;
  topic: string;
  uploadDate: string;
  length: number;
  chunkSize: number;
}
export interface NewsletterGridProps {
  newsletters: Newsletter[];
  setSelectedNewsletter: Dispatch<SetStateAction<string>>;
}

export type BlogPost = {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    subject: string;
    audioFile: string;
    type: string;
    tags: string[];
    coverImage: string;
    coverImageAlt: string;
    date: string;
    id: string;
  };
};

export type NewsArticleType = {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
  relevance_score: number;
  locale: string;
};
export interface FrontmatterTypes {
  title: string;
  description: string;
  tags: string[];
  author: string;
  authorImg: string;
  coverImage: string;
  date: string;
  toc?: { title: string; id: string }[];
}

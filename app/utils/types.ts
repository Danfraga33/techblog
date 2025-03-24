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
}

export type BlogPost = {
  frontmatter: {
    coverImage: string;
    date: string;
    description: string;
    estimatedReadingTime: number;
    image_url: string;
    subject: string | null;
    tags: string[];
    title: string;
    type: string;
  };
  content: string;
  slug: string;
  _id: string;
};

export type Podcast = {
  frontmatter: {
    audioFile: string;
    coverImage: string;
    coverImageAlt: string;
    date: string;
    description: string;
    id: string;
    subject: string;
    tags: string[];
    title: string;
    type: string;
  };
  slug: string;
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

// export type BlogPost = {
//   slug: string;
//   _id: string;
//   title: string;
//   type: "blog";
//   description: string;
//   date: string;
//   estimatedReadingTime: number;
//   tags: string[];
//   content: string;
//   frontmatter: {
//     coverImage: string;
//     image_url: string;
//     subject: string | null;
//   };
// };

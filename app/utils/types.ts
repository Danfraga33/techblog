export type Newsletter = {
  _id: string;
  filename: string;
  description: string;
  topic: string;
  title: string;
  chunkSize: number;
  length: number;
  uploadDate: string;
};

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

export type Document = {
  _id: string;
  filename: string;
  description: string;
  category: string;
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

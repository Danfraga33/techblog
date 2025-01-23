export type BlogPostTypes = {
  id: number;
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  author: string;
  date: string;
  link: string;
  tags: string[];
};

export const blogPost: BlogPostTypes[] = [
  {
    id: 1,
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers? Look no further.",
    image: {
      url: "/chip.jpg",
      alt: "Person holding a camera",
    },
    author: "Daniel Fraga",
    date: "20 Jan 2022",
    link: "/blog/one",
    tags: ["UX Design", "Presentation Tips", "Creative Storytelling"],
  },
];

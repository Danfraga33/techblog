export type BlogPostTypes = {
  id: number;
  title: string;
  description: string;
  body: string;
  tableOfContents: string[];
  image: {
    url: string;
    alt: string;
  };
  topic: string;
  author: string;
  date: string;
  link: string;
  tags: string[];
};

export const blogPost: BlogPostTypes[] = [
  {
    id: 1,
    title: "Inside the Semiconductor Revolution",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers? Look no further.",
    body: "exercitation aliqua sint fugiat in dolore consectetur amet ut enim esse irure et non quis ut adipisicing tempor qui aliqua consectetur excepteur et amet ad aute ex consequat nostrud eiusmod exercitation officia adipisicing officia veniam aute consectetur ex cillum consectetur culpa aliqua velit velit ad irure consectetur voluptate culpa voluptate",
    tableOfContents: ["Introduction", "semiconductor"],
    topic: "Semiconductor",
    image: {
      url: "/chip.jpg",
      alt: "Person holding a camera",
    },
    author: "Daniel Fraga",
    date: "20 Jan 2022",
    link: "/blog/one",
    tags: ["Semiconductors", "Fabless", "Lithography"],
  },
  {
    id: 2,
    title: "Exploring the Future of Augmented Reality",
    description:
      "Augmented Reality is transforming how we interact with the world. Learn how AR is enhancing industries from gaming to education and beyond.",
    body: "exercitation aliqua sint fugiat in dolore consectetur amet ut enim esse irure et non quis ut adipisicing tempor qui aliqua consectetur excepteur et amet ad aute ex consequat nostrud eiusmod exercitation officia adipisicing officia veniam aute consectetur ex cillum consectetur culpa aliqua velit velit ad irure consectetur voluptate culpa voluptate",
    tableOfContents: ["Introduction", "AR"],
    topic: "Artificial Intelligence",
    image: {
      url: "/ar.jpg",
      alt: "Person using augmented reality glasses",
    },
    author: "Daniel Fraga",
    date: "5 Mar 2022",
    link: "/blog/three",
    tags: ["Supervised Learning", "Machine Learning", "AR"],
  },
];

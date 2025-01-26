import Example from "./content/example.mdx";

import React from "react";

const BlogPost = () => {
  return (
    <article className="prose">
      <Example />
    </article>
  );
};

export default BlogPost;

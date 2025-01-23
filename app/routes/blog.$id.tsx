import { useParams } from "@remix-run/react";
import React from "react";
import ContentLayout from "~/components/Dashboard/ContentLayout";
import { blogPost } from "./(blog).blog";

const DynamicBlog = () => {
  const { id } = useParams();
  console.log("id: ", id);
  const selectedBlog = blogPost.find((blog) => {
    return blog.id === Number(id);
  });
  return (
    <ContentLayout
      title={selectedBlog?.title as string}
      description={selectedBlog?.description as string}
    >
      <section className="container flex min-h-[400px] w-3/4 flex-col"></section>
    </ContentLayout>
  );
};

export default DynamicBlog;

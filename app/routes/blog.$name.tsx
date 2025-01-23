import { useParams } from "@remix-run/react";
import React from "react";
import ContentLayout from "~/components/Dashboard/ContentLayout";
import { blogPost } from "./(blog).blog";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import Header from "~/components/Dashboard/Header";
import { PageTitle } from "~/lib/utils";
import { Badge } from "~/components/ui/badge";
import { Chip } from "@heroui/react";
import { Separator } from "~/components/ui/separator";
import { SidebarTrigger } from "~/components/ui/sidebar";

const DynamicBlog = () => {
  const { name } = useParams();
  console.log("name: ", name);
  const pageTitle = PageTitle(name as string);
  console.log("pageTitle: ", pageTitle);

  const selectedBlog = blogPost.find((blog) => {
    return blog.title === "UX review presentations";
  });
  console.log("selectedBlog: ", selectedBlog);
  return (
    // <ContentLayout
    //   title={selectedBlog?.title as string}
    //   description={selectedBlog?.description as string}
    // >
    <section className="relative flex flex-col rounded-xl p-4">
      <div className="relative flex justify-center">
        <img
          src="/chip.jpg"
          className="h-full w-full rounded-2xl object-cover"
          alt="Image of a chip"
        />
        <div className="absolute left-4 top-5 rounded-xl bg-stone-400/50">
          <div className="flex items-center gap-2 px-2">
            <SidebarTrigger className="-ml-1" />
            {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
          </div>
        </div>
        <div className="absolute bottom-8 left-4 w-1/2 rounded-lg bg-stone-400/50 px-4 py-2 text-white">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl">
              {selectedBlog?.title ?? "Leading the way"}
            </h1>
            <p className="text-sm">{selectedBlog?.description}</p>
            <ul className="flex gap-1.5">
              {selectedBlog?.tags.map((tag, index) => (
                <li key={index}>
                  <Chip size="sm">{tag}</Chip>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto px-2 py-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Incidunt elit, id quisque ligula ac diam, amet. Vel etiam
                suspendisse morbi eleifend faucibus eget vestibulum felis.
                Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                Mauris posuere vulputate arcu amet, vitae nisi, tellus
                tincidunt. At feugiat.
              </p>
              <p>
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                volutpat mollis at volutpat lectus velit, sed auctor. Porttitor
                fames arcu quis fusce augue enim. Quis at habitant diam at.
                Suscipit tristique risus, at donec. In turpis vel et quam
                imperdiet. Ipsum molestie aliquet sodales.
              </p>

              <img
                src="/water.jpg"
                alt="Person working on laptop with floating avatars"
                width={800}
                height={600}
                className="my-8 rounded-2xl"
              />

              <blockquote>
                "In a world older and more complete than ours they move finished
                and complete, gifted with extensions of the senses we have lost
                or never attained, living by voices we shall never hear."
              </blockquote>
            </div>
            <div className="mt-4">
              <Separator />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-medium">Table of Contents</h3>
              <nav className="space-y-2">
                <a
                  href="#"
                  className="block text-sm text-gray-600 hover:text-gray-900"
                >
                  Introduction
                </a>
                <a
                  href="#"
                  className="block text-sm text-gray-600 hover:text-gray-900"
                >
                  Cameras and tools
                </a>
                <a
                  href="#"
                  className="block text-sm text-gray-600 hover:text-gray-900"
                >
                  How you work
                </a>
                <a
                  href="#"
                  className="block text-sm text-gray-600 hover:text-gray-900"
                >
                  Advice for photographers
                </a>
                <a
                  href="#"
                  className="block text-sm text-gray-600 hover:text-gray-900"
                >
                  What's next?
                </a>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Written by</h3>
              <div className="flex items-center space-x-3">
                <img
                  src=""
                  alt="Amélie Laurent"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">Amélie Laurent</p>
                  <p className="text-sm text-gray-600">
                    Designer, Craft+Curiosity
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Subscribe to our newsletter</h3>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full"
                />
                <Button className="w-full">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // </ContentLayout>
  );
};

export default DynamicBlog;

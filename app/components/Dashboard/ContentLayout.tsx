import React, { ReactNode } from "react";
import Header from "./Header";
import Title from "./Title";
type TitleProps = {
  title: string;
  description: string;
  children: ReactNode;
};
const ContentLayout = ({ title, description, children }: TitleProps) => {
  return (
    <>
      <Header />
      <div className="min-w-screen px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-8">
          <Title title={title} description={description} />
        </div>
        {children}
      </div>
    </>
  );
};

export default ContentLayout;

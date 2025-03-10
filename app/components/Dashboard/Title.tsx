import React from "react";

type TitleProps = {
  title: string;
  description: string;
};

const Title = ({ title, description }: TitleProps) => {
  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-bold tracking-tight text-primary">
        {title}
      </h1>
      <p className="text-lg text-primary">{description}</p>
    </div>
  );
};

export default Title;

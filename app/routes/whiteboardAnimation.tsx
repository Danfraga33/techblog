import React from "react";
import ComingSoon from "~/components/Dashboard/ComingSoon";
import ContentLayout from "~/components/Dashboard/ContentLayout";

const whiteboardAnimation = () => {
  return (
    <>
      <ContentLayout
        title="Whiteboard Animations"
        description="Engaging visual storytelling simplifies AI, quantum computing, semiconductors, and emerging technology concepts effectively."
      >
        <ComingSoon />
      </ContentLayout>
    </>
  );
};

export default whiteboardAnimation;

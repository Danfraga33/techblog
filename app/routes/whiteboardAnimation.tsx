import React from "react";
import ComingSoon from "~/components/Dashboard/ComingSoon";
import ContentLayout from "~/components/Dashboard/ContentLayout";

const whiteboardAnimation = () => {
  return (
    <>
      <ContentLayout
        title="Whiteboard Animations"
        description="Whiteboard animations explaining key emerging technology trends"
      >
        <ComingSoon />
      </ContentLayout>
    </>
  );
};

export default whiteboardAnimation;

import type React from "react";
import { Button } from "../ui/button";

interface PDFViewerProps {
  selectedNewsletterId: string;
}

const PDFUI: React.FC<PDFViewerProps> = ({ selectedNewsletterId }) => {
  return (
    <>
      {/* <div className="mx-auto w-full max-w-4xl gap-3"> */}
      <div className="flex items-center gap-3">
        <h1 className="text-primary">PDF Viewer </h1>
        <Button asChild className="bg-background">
          <a
            href={`/newsletter/${selectedNewsletterId}`}
            download={`${selectedNewsletterId}`}
          >
            Download
          </a>
        </Button>
      </div>
      <div className="aspect-[3/4] w-full overflow-hidden rounded-lg shadow-2xl">
        <iframe
          src={`/newsletter/${selectedNewsletterId}#toolbar=0`}
          className="h-full w-full border-none"
          title="PDF Viewer"
        />
      </div>
      {/* </div> */}
    </>
  );
};

export default PDFUI;

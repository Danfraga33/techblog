import type React from "react";
import { Button } from "../ui/button";

interface PDFViewerProps {
  newsletter: string;
}

const PDFUI: React.FC<PDFViewerProps> = ({ newsletter }) => {
  return (
    <>
      <div className="mx-auto w-full max-w-4xl gap-3">
        <div className="flex items-center gap-3">
          <h1>PDF Viewer </h1>
          <Button asChild>
            <a href={`/newsletter/${newsletter}`} download={`${newsletter}`}>
              Download
            </a>
          </Button>
        </div>
        <div className="aspect-[3/4] w-full overflow-hidden rounded-lg shadow-2xl">
          <iframe
            src={`/newsletter/${newsletter}#toolbar=0`}
            className="h-full w-full border-none"
            title="PDF Viewer"
          />
        </div>
      </div>
    </>
  );
};

export default PDFUI;

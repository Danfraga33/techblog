import type React from "react";

interface PDFViewerProps {
  newsletter: string;
}

const PDFUI: React.FC<PDFViewerProps> = ({ newsletter }) => {
  return (
    <div className="mx-auto w-full max-w-3xl p-4">
      <h1>PDF Viewer</h1>
      <div className="aspect-[3/4] w-full overflow-hidden rounded-lg shadow-2xl">
        <iframe
          src={`/newsletter/${newsletter}#toolbar=0`}
          className="h-full w-full border-none"
          title="PDF Viewer"
        />
      </div>
    </div>
  );
};

export default PDFUI;

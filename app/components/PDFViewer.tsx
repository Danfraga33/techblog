import PDFUI from "./Dashboard/PDFUI";

interface PDFViewerProps {
  selectedNewsletter: string;
}

const PDFViewer = ({ selectedNewsletter }: PDFViewerProps) => {
  return (
    <div style={{ width: "100%", height: "75vh" }}>
      {selectedNewsletter ? (
        <PDFUI newsletter={selectedNewsletter} />
      ) : (
        <p className="text-primary">Loading PDF...</p>
      )}
    </div>
  );
};

export default PDFViewer;

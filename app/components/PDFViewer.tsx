import PDFUI from "./Dashboard/PDFUI";

interface PDFViewerProps {
  selectedNewsletter: string;
}

const PDFViewer = ({ selectedNewsletter }: PDFViewerProps) => {
  console.log("selectedNewsletter: ", selectedNewsletter);
  return (
    <div style={{ width: "100%", height: "50vh" }}>
      {selectedNewsletter ? (
        <>
          <PDFUI newsletter={selectedNewsletter} />
        </>
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
};

export default PDFViewer;

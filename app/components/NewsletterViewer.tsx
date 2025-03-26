import { formatDate } from "~/lib/utils";
import { Newsletter } from "~/utils/types";
import UnderlineAnimation from "./Dashboard/UnderlineAnimation";

export default function NewsletterViewer({
  selectedNewsletter,
}: {
  selectedNewsletter: Newsletter;
}) {
  return (
    <div className="p-4">
      <div className="mb-6 cursor-default text-black">
        <h2 className="mb-2 text-3xl font-bold">{selectedNewsletter.title}</h2>
        <div className="mb-4 flex items-center text-sm text-gray-600">
          <span className="font-bold text-primary">
            {selectedNewsletter.topic}
          </span>
          <span className="mx-2">|</span>
          <span>{formatDate(selectedNewsletter.uploadDate)}</span>
        </div>
      </div>
      <div className="h-[80vh] w-full overflow-hidden rounded-lg shadow-2xl">
        <iframe
          src={`/newsletter/${selectedNewsletter._id}`}
          className="h-full w-full border-none"
          title="PDF Viewer"
        />
      </div>

      <div className="mt-8 flex justify-between text-black">
        <button>
          <a
            href={`/newsletter/${selectedNewsletter._id}`}
            download={`${selectedNewsletter._id}`}
            className="text-black"
          >
            <UnderlineAnimation className="text-md">
              Download PDF
            </UnderlineAnimation>
          </a>
        </button>
      </div>
    </div>
  );
}

import React from "react";

const MemberGoals = () => {
  return (
    <div className="p-6 text-gray-900">
      <h1 className="mb-4 text-3xl font-bold">
        🧱 MVP Build Plan – Company → SEC Filings
      </h1>

      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold">
          Phase 1 – Static Display (No Data Pipeline)
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Create a static list of example company names (e.g., NVIDIA, AMD,
            Palantir)
          </li>
          <li>
            Build a simple UI showing:
            <ul className="list-disc pl-6">
              <li>Company name</li>
              <li>Latest 3 SEC filings (title, form type, date, link)</li>
            </ul>
          </li>
          <li>Mock the SEC data as hardcoded JSON initially</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold">
          Phase 2 – Company → Real SEC Data
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Hook up a LlamaIndex agent to:
            <ul className="list-disc pl-6">
              <li>Take the company name</li>
              <li>Search for 10-K/Q filings in the SEC EDGAR database</li>
              <li>Return top 3 matches with titles + links</li>
            </ul>
          </li>
          <li>Connect this backend agent to the frontend via API route</li>
          <li>Replace mock data with real output</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold">Bonus (Optional)</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Extract & display a summary of key highlights from the latest 10-K
          </li>
          <li>Sort companies by who filed most recently</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold">To do:</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Hook up authentication:
            <ul className="list-disc pl-6">
              <li>Implement user login/signup flow</li>
              <li>Add protected routes for authenticated users</li>
              <li>Store user preferences/saved companies</li>
            </ul>
          </li>
          <li>
            Build company extractor from reports:
            <ul className="list-disc pl-6">
              <li>Parse SEC filings to automatically extract company names</li>
              <li>Create mapping between tickers and official company names</li>
              <li>Handle edge cases (multiple names, subsidiaries, etc.)</li>
            </ul>
          </li>
          <li>
            Implement on-demand company SEC downloading and LlamaIndex
            processing:
            <ul className="list-disc pl-6">
              <li>Create API endpoint for ad-hoc company searches</li>
              <li>Set up queue system for processing requests</li>
              <li>Cache results to avoid duplicate processing</li>
              <li>Integrate LlamaIndex for document analysis</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default MemberGoals;

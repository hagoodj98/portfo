import React from "react";
import CarouselControlled from "../../../components/Carousel";
const apiEndpointSlides = [
  {
    id: "api-entries-get",
    title: "GET /api/entries",
    summary:
      "Fetches all book entries from the database. Calls getAllEntries() from entryRepository to return the complete collection.",
    description:
      "Endpoint: GET /api/entries\nReturns: Array of all entry objects\nFlow: Request → entryRepository.getAllEntries() → PostgreSQL query → Response",
  },
  {
    id: "api-newentry-post",
    title: "POST /api/newentry",
    summary:
      "Creates a new entry from an ISBN. Accepts isbn and summary, calls addEntryFromIsbn() service to fetch Open Library data and persist to database.",
    description:
      "Endpoint: POST /api/newentry\nBody: { isbn, summary }\nFlow: Request → entryService.addEntryFromIsbn() → openLibraryService.fetch() → entryRepository.create() → Database",
  },
  {
    id: "api-sort-get",
    title: "GET /api/sort-entry-by?order=recency",
    summary:
      "Returns entries sorted by the specified order parameter (oldest, recency, title, relevance). Routes to listSortedEntries() service.",
    description:
      "Endpoint: GET /api/sort-entry-by?order={order}\nQuery Params: order (oldest | recency | title | relevance)\nFlow: Request → entryService.listSortedEntries(order) → Repository sort method → Sorted response",
  },
];

const ApiEndpointSection = () => {
  return (
    <div className="tw-relative lg:tw-w-8/12 tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal">
      <div className="tw-w-full tw-mx-auto">
        <CarouselControlled
          wireframeslides={apiEndpointSlides.map((endpoint) => ({
            id: endpoint.id,
            custom: (
              <div className="tw-bg-[#17213a] tw-rounded-2xl tw-border tw-border-[#38bdf8]/30 tw-p-5 tw-shadow-md">
                <h4 className="tw-text-[#38bdf8] tw-font-semibold tw-mb-2 tw-text-lg">
                  {endpoint.title}
                </h4>
                <p className="tw-text-[#e0e7ef] tw-text-sm tw-mb-3">
                  {endpoint.summary}
                </p>
                <pre className="tw-bg-[#22315a] tw-rounded-lg tw-p-4 tw-text-xs tw-text-[#7dd3fc] tw-overflow-x-auto tw-font-mono tw-border tw-border-[#334155]/60">
                  <code>{endpoint.description}</code>
                </pre>
              </div>
            ),
          }))}
          width="100%"
          height="auto"
        />
      </div>
    </div>
  );
};

export default ApiEndpointSection;

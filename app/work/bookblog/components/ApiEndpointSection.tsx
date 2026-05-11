import React from "react";
import CarouselControlled from "../../../components/Carousel";
const apiEndpointSlides = [
  {
    id: "api-summary",
    title: "BookBlog API Summary",
    summary:
      "The API supports listing entries, creating entries from ISBN, and sorted retrieval for multiple UX views.",
    description:
      "Endpoints:\n  GET /api/entries\n  POST /api/newentry\n  GET /api/sort-entry-by?order={order}\n\nPurpose:\n  Keep entry retrieval and creation logic centralized in services/repositories.",
  },
  {
    id: "api-entries-get",
    title: "GET /api/entries",
    summary: "Fetches all saved entries for the default library view.",
    description:
      "Returns:\n  Array of all entry objects\n\nWhat it does:\n  Queries PostgreSQL through repository methods and returns a complete list.",
  },
  {
    id: "api-newentry-post",
    title: "POST /api/newentry",
    summary: "Creates a new entry from ISBN and optional user summary.",
    description:
      "Body:\n  { isbn, summary }\n\nWhat it does:\n  Fetches Open Library metadata, merges user input, and persists the new entry.",
  },
  {
    id: "api-sort-get",
    title: "GET /api/sort-entry-by?order=recency",
    summary: "Returns entries sorted for timeline, title, or relevance views.",
    description:
      "Query:\n  order = oldest | recency | title | relevance\n\nWhat it does:\n  Applies service-level sort selection and returns a sorted entry collection.",
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

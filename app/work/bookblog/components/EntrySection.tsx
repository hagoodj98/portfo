import React from "react";
import CarouselControlled from "../../../components/Carousel";

const entryServiceSlides = [
  {
    id: "entry-service-add",
    title: "entryService.ts: Add Entry from ISBN",
    summary:
      "Service composes fetched Open Library data with user summary and timestamp before repository insertion.",
    description: `export async function addEntryFromIsbn(payload: { isbn: string; summary: string; }) {\n  const { isbn, summary } = payload;\n  const bookData = await fetchBookDataByIsbn(isbn);\n  return createEntry({\n    ...bookData,\n    summary,\n    entry_created: getTime(),\n    isbn,\n  });\n}`,
    alt: "entryService add entry from isbn",
  },
  {
    id: "entry-service-sort",
    title: "entryService.ts: Sorted Listing",
    summary:
      "Sort parameter maps to repository query strategies for recency, oldest, title, and relevance.",
    description: `export async function listSortedEntries(order: string) {\n  // Maps order param to repository sort\n  return entryRepository.listSortedEntries(order);\n}`,
    alt: "entryService sorted listing strategy",
  },
];

const EntrySection = () => {
  return (
    <div className="tw-bg-[#17213a] tw-rounded-2xl tw-border tw-border-[#38bdf8]/30 tw-p-5 tw-shadow-md tw-w-full">
      <h4 className="tw-text-[#38bdf8] tw-font-semibold tw-mb-3 tw-text-lg">
        Service Layer (entryService.ts)
      </h4>
      <CarouselControlled
        wireframeslides={entryServiceSlides}
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default EntrySection;

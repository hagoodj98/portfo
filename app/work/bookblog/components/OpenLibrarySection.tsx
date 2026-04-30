import React from "react";
import CarouselControlled from "../../../components/Carousel";

const openLibraryServiceSlides = [
  {
    id: "openlibrary-fetch",
    title: "openLibraryService.ts: Fetch and Map",
    summary:
      "Book API response is normalized into internal fields for titles, authors, subjects, and cover URLs.",
    description: `export async function fetchBookDataByIsbn(isbn: string) {\n  const url = 'https://openlibrary.org/isbn/' + isbn + '.json';\n  const res = await fetch(url);\n  const data = await res.json();\n  return {\n    title: data.title,\n    authors: data.authors,\n    subjects: data.subjects,\n    cover_image_url_large: data.covers?.[0],\n    // ...other fields\n  };\n}`,
    alt: "openLibraryService fetch and map",
  },
  {
    id: "openlibrary-helpers",
    title: "openLibraryService.ts: Work Key + Ratings",
    summary:
      "Helper functions chain additional API calls for work metadata and ratings aggregation.",
    description: `async function fetchWorkAndRatings(workKey: string) {\n  const workUrl = 'https://openlibrary.org/works/' + workKey + '.json';\n  const ratingsUrl = 'https://openlibrary.org/works/' + workKey + '/ratings.json';\n  const [workRes, ratingsRes] = await Promise.all([\n    fetch(workUrl),\n    fetch(ratingsUrl),\n  ]);\n  const work = await workRes.json();\n  const ratings = await ratingsRes.json();\n  return { ...work, ratings };\n}`,
    alt: "openLibraryService helper functions",
  },
];
const OpenLibrarySection = () => {
  return (
    <div className="tw-bg-[#17213a] tw-rounded-2xl tw-border tw-border-[#38bdf8]/30 tw-p-5 tw-shadow-md tw-w-full">
      <h4 className="tw-text-[#38bdf8] tw-font-semibold tw-mb-3 tw-text-lg">
        External Data Integration (openLibraryService.ts)
      </h4>
      <CarouselControlled
        wireframeslides={openLibraryServiceSlides}
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default OpenLibrarySection;

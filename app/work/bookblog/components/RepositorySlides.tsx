import React from "react";
import CarouselControlled from "../../../components/Carousel";

const repositorySlides = [
  {
    id: "repo-create",
    title: "entryRepository.ts: Create Entry",
    summary:
      "Parameterized insert query for entry creation using Open Library metadata fields.",
    description: `export async function createEntry(entry: Entry) {\n  const result = await db.query(\n    \"INSERT INTO entries (title, summary, cover_image_url_large, cover_image_url_medium,\n  publish_date, authors, rating_average, subjects, rating_count, subtitle, entry_created,\n  isbn, work_key, description_summary)\n  VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *\",\n    [\n      entry.title,\n      entry.summary,\n      entry.cover_image_url_large,\n      entry.cover_image_url_medium,\n      entry.publish_date,\n      entry.authors,\n      entry.rating_average,\n      entry.subjects,\n      entry.rating_count,\n      entry.subtitle,\n      entry.entry_created,\n      entry.isbn,\n      entry.work_key,\n      entry.description_summary,\n    ]\n  );\n  return result.rows[0];\n}`,

    alt: "entryRepository create entry query",
  },
  {
    id: "repo-sorts",
    title: "entryRepository.ts: Sort Queries",
    summary:
      "Sorting methods support recency, oldest, title, and relevance retrieval paths.",
    description: `export async function listSortedEntries(order: string) {\n  let sortBy = 'entry_created DESC';\n  if (order === 'oldest') sortBy = 'entry_created ASC';\n  if (order === 'title') sortBy = 'title ASC';\n  if (order === 'relevance') sortBy = 'rating_average DESC';\n  const result = await db.query(\n    'SELECT * FROM entries ORDER BY ' + sortBy\n  );\n  return result.rows;\n}`,

    alt: "entryRepository sort query methods",
  },
];

const RepositorySlides = () => {
  return (
    <div className="tw-bg-[#17213a] tw-rounded-2xl tw-border tw-border-[#38bdf8]/30 tw-p-5 tw-shadow-md tw-w-full">
      <h4 className="tw-text-[#38bdf8] tw-font-semibold tw-mb-3 tw-text-lg">
        Repository Layer (entryRepository.ts)
      </h4>
      <CarouselControlled
        wireframeslides={repositorySlides}
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default RepositorySlides;

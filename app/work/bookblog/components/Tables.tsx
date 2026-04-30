import CarouselControlled from "@/app/components/Carousel";
import React from "react";

const databaseTableSlides = [
  {
    id: "table-entries",
    title: "entries Table",
    summary:
      "Core table storing book entry metadata fetched from Open Library API. Includes cover images, ratings, publication info, and user-provided summary.",
    description: `entries:
  id (SERIAL PRIMARY KEY)
  title TEXT
  summary TEXT (user-provided)
  isbn TEXT
  authors TEXT
  subtitle TEXT
  publish_date TEXT
  cover_image_url_large TEXT
  cover_image_url_medium TEXT
  rating_average NUMERIC
  rating_count INTEGER
  subjects TEXT
  work_key TEXT
  description_summary TEXT
  entry_created TIMESTAMP`,
  },
  {
    id: "table-notes",
    title: "notes Table",
    summary:
      "Stores user notes tied to entries with cascade delete. One-to-many relationship: each note references one entry, but entries can have many notes.",
    description: `notes:
  id (SERIAL PRIMARY KEY)
  note TEXT (user-provided note content)
  entry_id INTEGER (FOREIGN KEY → entries.id)
  ON DELETE CASCADE
  created_at TIMESTAMP`,
  },
  {
    id: "relationship",
    title: "Schema Relationship",
    summary:
      "One-to-many relationship enforces referential integrity. Deleting an entry automatically removes all associated notes.",
    description: `Relationship Diagram:
  entries (1) ←→ (many) notes
  
  notes.entry_id REFERENCES entries(id)
  ON DELETE CASCADE
  
  Benefits:
  - Ensures data consistency
  - Automatic cleanup when entry deleted
  - Simplifies query joins
  - No orphaned notes`,
  },
];

const BookBlogTables = () => {
  return (
    <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-5">
      <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
        <div className="tw-py-10">
          <h3 className="tw-text-xl md:tw-text-2xl tw-text-bluegreen tw-font-boldonse">
            PostgreSQL
          </h3>
          <div className="tw-w-28">
            <hr className="tw-h-2 tw-bg-bluegreen" />{" "}
          </div>
          <div>
            <p>
              PostgreSQL is the relational database powering this project. The
              schema centers on two core tables: <strong>entries</strong> stores
              book metadata fetched from the Open Library API, while{" "}
              <strong>notes</strong> stores user annotations. The relationship
              is enforced via foreign key constraints with cascade delete,
              ensuring data integrity when entries are removed.
            </p>
          </div>
        </div>
      </div>
      <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
        <div className="tw-w-full tw-mx-auto">
          <CarouselControlled
            wireframeslides={databaseTableSlides.map((table) => ({
              id: table.id,
              custom: (
                <div className="tw-bg-[#17213a] tw-rounded-2xl tw-border tw-border-[#38bdf8]/30 tw-p-5 tw-shadow-md">
                  <h4 className="tw-text-[#38bdf8] tw-font-semibold tw-mb-2 tw-text-lg">
                    {table.title}
                  </h4>
                  <p className="tw-text-[#e0e7ef] tw-text-sm tw-mb-3">
                    {table.summary}
                  </p>
                  <pre className="tw-bg-[#22315a] tw-rounded-lg tw-p-4 tw-text-xs tw-text-[#7dd3fc] tw-overflow-x-auto tw-font-mono tw-border tw-border-[#334155]/60">
                    <code>{table.description}</code>
                  </pre>
                </div>
              ),
            }))}
            width="100%"
            height="auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BookBlogTables;

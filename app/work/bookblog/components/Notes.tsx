import React from "react";
import CarouselControlled from "../../../components/Carousel";

const noteServiceSlides = [
  {
    id: "note-service",
    title: "noteService.ts: Note Management",
    summary:
      "Complete CRUD operations for notes tied to entries: list by entry, add, edit, and remove with cascade safety.",
    description: `export async function addNote(entry_id: number, note: string) {\n  return db.query(\n    \"INSERT INTO notes (entry_id, note, created_at) VALUES ($1, $2, NOW()) RETURNING *\",\n    [entry_id, note]\n  );\n}\nexport async function listNotes(entry_id: number) {\n  return db.query(\n    \"SELECT * FROM notes WHERE entry_id = $1 ORDER BY created_at DESC\",\n    [entry_id]\n  );\n}`,
    alt: "noteService CRUD operations",
  },
];
const Notes = () => {
  return (
    <div className="tw-bg-[#17213a] tw-rounded-2xl tw-border tw-border-[#38bdf8]/30 tw-p-5 tw-shadow-md tw-w-full">
      <h4 className="tw-text-[#38bdf8] tw-font-semibold tw-mb-3 tw-text-lg">
        Notes Service (noteService.ts)
      </h4>
      <CarouselControlled
        wireframeslides={noteServiceSlides}
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default Notes;

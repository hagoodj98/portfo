import React from "react";

const FileArchitecture = `
my-app/
── app/
   ── __tests__/          # Vitest unit tests
   ── api/                # Next.js API route handlers
      ── entries/        # GET all entries
      ── entry/[id]/     # GET / PUT / DELETE single entry
      ── newentry/       # POST — create entry from ISBN
      ── notes/[id]/     # GET / POST / PATCH / DELETE notes
      ── sort-entry-by/  # GET sorted entries
   ── components/         # Shared UI components
      ── ui/             # Generic Button, Input, Modal
   ── entry/[id]/         # Entry detail page
   ── findentry/          # Add new entry page
   ── hooks/              # useEntries, useNotes custom hooks
── e2e/                    # Playwright E2E tests
── lib/
   ── database/           # PostgreSQL connection + schema.sql
   ── repositories/       # entryRepository, noteRepository
   ── services/           # entryService, noteService, openLibraryService
   ── utils/              # Error handling, time formatting
 docker-compose.yml      # Local PostgreSQL container
`;

const FileArch = () => {
  return (
    <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row-reverse tw-gap-2 tw-my-6">
      <div className="lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
        <div className="tw-py-10">
          <h3 className="tw-text-xl md:tw-text-2xl tw-text-bluegreen tw-font-boldonse">
            File Architecture
          </h3>
          <div className="tw-w-28">
            <hr className="tw-h-2 tw-bg-bluegreen" />
          </div>
          <p className="md:tw-text-base tw-text-black">
            This project is organized by layers so responsibilities stay clear:
            app routes and UI in app/, data operations in repositories, business
            orchestration in services, and PostgreSQL setup in lib/database.
            This structure made testing and feature expansion easier as the
            project grew.
          </p>
        </div>
      </div>
      <div className="tw-relative lg:tw-w-8/12 tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal">
        <div className="tw-w-full tw-flex tw-flex-col tw-gap-3 tw-mx-auto">
          <pre className="tw-bg-[#0E1424] tw-rounded-xl tw-border tw-border-[#243255] tw-p-4 tw-text-xs tw-text-[#e0e0e0] tw-overflow-x-auto">
            <code>{FileArchitecture}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default FileArch;

import React from "react";

const l4dFileArchitecture = `L4D/
+-- index.ts
+-- middleware/
|   +-- notification.ts
+-- notification-cache.ts
+-- src/
|   +-- routes/
|       +-- auth.ts
|       +-- forum.ts
|       +-- notifications.ts
|       +-- post_type_reactions.ts
|       +-- post_type_response_body.ts
+-- database/
|   +-- databaseConnection.ts
|   +-- repositories/
|       +-- users.ts
|       +-- forumcontent.ts
|       +-- comments.ts
|       +-- replies.ts
|       +-- user_notifications.ts
|       +-- posts_reactions.ts
|       +-- comments_reactions.ts
|       +-- replies_reactions.ts
+-- utils/
|   +-- error.ts
|   +-- zodSchemas.ts
|   +-- notification_helpers.ts/
|       +-- buildnotificationstate.ts
|       +-- find-matching.ts
+-- views/
|   +-- forum.ejs
|   +-- login.ejs
|   +-- register.ejs
|   +-- partials/
|       +-- header.ejs
|       +-- footer.ejs
|       +-- forum.ejs
|       +-- notification-scripts.ejs
|       +-- sse-notification-feed.ejs
+-- tests/
|   +-- auth.test.js
|   +-- forum-content.test.js
|   +-- notifications.test.js
|   +-- helpers/
+-- e2e/
|   +-- auth.spec.js
|   +-- forum.spec.js
|   +-- notifications.spec.js
+-- db/
|   +-- init.sql
+-- public/
|   +-- css/styles.css
|   +-- images/
+-- package.json`;

const FileArchitecture = () => {
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
            The project is organized by layers for clarity and maintainability:
            database logic, authentication, repositories, services, EJS views,
            and tests are all separated. This structure makes it easy to expand
            features and keep responsibilities clear.
          </p>
        </div>
      </div>
      <div className="tw-relative lg:tw-w-8/12 tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal">
        <div className="tw-w-full tw-flex tw-flex-col tw-gap-3 tw-mx-auto">
          <pre className="tw-bg-[#0E1424] tw-rounded-xl tw-border tw-border-[#243255] tw-p-4 tw-text-xs tw-text-[#e0e0e0] tw-overflow-x-auto">
            <code>{l4dFileArchitecture}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default FileArchitecture;

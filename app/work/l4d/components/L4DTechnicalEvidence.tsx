import React from "react";

const ProjectLayers = () => (
  <div className="tw-container tw-mx-auto tw-py-10">
    <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">
      Project Layers
    </h3>
    <div className="tw-w-56">
      <hr className="tw-h-2 tw-bg-bluegreen" />
    </div>
    <div className=" tw-space-y-8 tw-mt-8">
      <div className="md:tw-flex tw-bg-[#0E1424] tw-rounded-xl tw-border tw-border-[#243255] tw-p-4">
        {/* Database Section */}
        <div className="tw-bg-[#0E1424] tw-flex-1 tw-rounded-xl tw-border tw-border-[#243255] tw-p-4">
          <h4 className="tw-text-bluegreen tw-font-semibold tw-mb-2">
            Database Layer
          </h4>
          <p className="tw-text-white tw-text-sm tw-mb-3">
            Handles all PostgreSQL connections, schema setup, and data access.
            Repositories encapsulate all SQL queries for users, posts, replies,
            comments, notifications, and reactions.
          </p>
          <ul className="tw-list-disc tw-ml-5 tw-text-[#e0e0e0] tw-text-xs">
            <li>
              <strong>database/databaseConnection.js</strong>: Centralized DB
              connection logic.
            </li>
            <li>
              <strong>database/repositories/</strong>: All table-specific query
              logic (users, forumcontent, comments, replies, user_notifications,
              posts_reactions, comments_reactions, replies_reactions).
            </li>
            <li>
              <strong>db/init.sql</strong>: Schema and seed data (if present).
            </li>
            <li>
              <strong>scripts/db-init.js</strong>: Script for initializing the
              database.
            </li>
          </ul>
        </div>
        {/* Services Section */}
        <div className="tw-bg-[#0E1424] tw-flex-1 tw-rounded-xl tw-border tw-border-[#243255] tw-p-4">
          <h4 className="tw-text-bluegreen tw-font-semibold tw-mb-2">
            Services & Auth Layer
          </h4>
          <p className="tw-text-white tw-text-sm tw-mb-3">
            Passport.js strategies for local and OAuth authentication, plus
            utility modules for error handling and schema validation.
          </p>
          <ul className="tw-list-disc tw-ml-5 tw-text-[#e0e0e0] tw-text-xs">
            <li>
              <strong>passport/passport.js</strong>: All Passport strategies and
              session logic.
            </li>
            <li>
              <strong>utils/error.js</strong>: Centralized error handling.
            </li>
            <li>
              <strong>utils/zodSchemas.js</strong>: Zod schemas for input
              validation.
            </li>
            <li>
              <strong>providercredentials.ts</strong>: OAuth provider keys and
              secrets.
            </li>
          </ul>
        </div>
      </div>
      <div className="md:tw-flex tw-bg-[#0E1424] tw-rounded-xl tw-border tw-border-[#243255] tw-p-4">
        {/* Repositories Section */}
        <div className="tw-bg-[#0E1424] tw-flex-1 tw-rounded-xl tw-border tw-border-[#243255] tw-p-4">
          <h4 className="tw-text-bluegreen tw-font-semibold tw-mb-2">
            Repositories
          </h4>
          <p className="tw-text-white tw-text-sm tw-mb-3">
            Each repository file contains all SQL logic for a specific table,
            keeping business logic out of routes and services.
          </p>
          <ul className="tw-list-disc tw-ml-5 tw-text-[#e0e0e0] tw-text-xs">
            <li>
              <strong>users.js</strong>: User creation, lookup, and provider
              linking.
            </li>
            <li>
              <strong>forumcontent.js</strong>: Forum post listing, counts, and
              aggregate thread data.
            </li>
            <li>
              <strong>comments.js / replies.js</strong>: First-tier and
              reply-to-comment creation flows.
            </li>
            <li>
              <strong>posts_reactions.js</strong>: Like/dislike logic for posts.
            </li>
            <li>
              <strong>comments_reactions.js / replies_reactions.js</strong>:
              Like/dislike logic for comments and replies.
            </li>
          </ul>
        </div>
        {/* Views Section */}
        <div className="tw-bg-[#0E1424] tw-flex-1 tw-rounded-xl tw-border tw-border-[#243255] tw-p-4">
          <h4 className="tw-text-bluegreen tw-font-semibold tw-mb-2">
            Views (EJS Templates)
          </h4>
          <p className="tw-text-white tw-text-sm tw-mb-3">
            All UI is rendered with EJS templates, split into pages and partials
            for reuse and clarity.
          </p>
          <ul className="tw-list-disc tw-ml-5 tw-text-[#e0e0e0] tw-text-xs">
            <li>
              <strong>views/</strong>: Main pages (forum, login, register,
              etc.).
            </li>
            <li>
              <strong>views/partials/</strong>: Shared header and footer
              templates.
            </li>
          </ul>
        </div>
      </div>
      <div className="md:tw-flex tw-bg-[#0E1424] tw-rounded-xl tw-border tw-border-[#243255] tw-p-4">
        {/* Tests Section */}
        <div className="tw-bg-[#0E1424] tw-flex-1 tw-rounded-xl tw-border tw-border-[#243255] tw-p-4">
          <h4 className="tw-text-bluegreen tw-font-semibold tw-mb-2">Tests</h4>
          <p className="tw-text-white tw-text-sm tw-mb-3">
            Unit and integration tests for all major features, plus helpers for
            mocking forum data.
          </p>
          <ul className="tw-list-disc tw-ml-5 tw-text-[#e0e0e0] tw-text-xs">
            <li>
              <strong>tests/</strong>: All test files for authentication, forum,
              error handling, pagination, and reactions.
            </li>
            <li>
              <strong>tests/helpers/</strong>: Mock data and test helpers.
            </li>
          </ul>
        </div>
        {/* Public Section */}
        <div className="tw-bg-[#0E1424] tw-flex-1 tw-rounded-xl tw-border tw-border-[#243255] tw-p-4">
          <h4 className="tw-text-bluegreen tw-font-semibold tw-mb-2">
            Public (Static Assets)
          </h4>
          <p className="tw-text-white tw-text-sm tw-mb-3">
            All static files (CSS, images) for styling and content.
          </p>
          <ul className="tw-list-disc tw-ml-5 tw-text-[#e0e0e0] tw-text-xs">
            <li>
              <strong>public/css/styles.css</strong>: Main stylesheet.
            </li>
            <li>
              <strong>public/images/</strong>: All static images used in the UI.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectLayers;

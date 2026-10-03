import React from "react";

const posFileArchitecture = `
production-scheduler/
  app/
    actions/              # Sign-in and session actions
    api/
      auth/               # Session status and permission checks
      order/              # Load, schedule, reschedule, delete
      order-log/          # Activity history
      resource/           # Load, search, and add resources
    assign-order/         # Order scheduling workflow
    components/           # Calendar, forms, charts, tables, shared UI
    context/              # Shared authenticated-user state
    validation/           # Zod schemas and schedule conflict checks
  lib/
    repositories/         # Prisma data-access modules
  node_cron/              # Background status-update process
  prisma/
    schema.prisma         # Orders, resources, users, permissions, logs
    migrations/
  task/
    schedulerTask.ts      # Time-based order status transitions
  tests/                  # API, component, E2E, task, and schema tests
  utils/                  # Auth, status, and error helpers`;

const FileStructure = () => {
  return (
    <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row-reverse tw-gap-2 tw-my-6">
      <div className="lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
        <div className="tw-py-10">
          <h3 className="tw-text-xl md:tw-text-2xl tw-text-bluegreen tw-font-boldonse">
            Current Project Structure
          </h3>
          <div className="tw-w-28">
            <hr className="tw-h-2 tw-bg-bluegreen" />
          </div>
          <p className="md:tw-text-base tw-text-black">
            The application groups route handlers, UI workflows, validation,
            and persistence by responsibility. Repositories isolate Prisma
            access, while a separate cron process runs the status-transition
            task. Tests cover API routes, components, end-to-end flows, task
            logic, and input validation.
          </p>
        </div>
      </div>
      <div className="tw-relative lg:tw-w-8/12 tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal">
        <div className="tw-w-full tw-flex tw-flex-col tw-gap-3 tw-mx-auto">
          <pre className="tw-bg-[#0E1424] tw-rounded-xl tw-border tw-border-[#243255] tw-p-4 tw-text-xs tw-text-[#e0e0e0] tw-overflow-x-auto">
            <code>{posFileArchitecture}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default FileStructure;

const posFileArchitecture = `
production-scheduler/
  app/
    api/                # REST API endpoints (add, check, create, delete, load, mark, search)
    components/         # Shared UI components (forms, calendar, sidebar, charts)
    ...                # Pages, context, validation, generated
  lib/
    repositories/       # Data access for production orders & resources
  node_cron/           # Automated job scheduling logic (cron.mjs)
  prisma/
    schema.prisma      # Database schema (ProductionOrder, SelectedResource, Resource)
  task/
    schedulerTask.ts   # Core scheduling logic
  tests/               # (api, components, e2e, task, zod)
  utils/               # Custom error handling`;

const FileStructure = () => {
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
            The project is organized into a clear and modular file structure,
            with API routes handling all server-side logic and a dedicated utils
            folder for shared functions. The lib folder contains essential
            services like database access, while the node_cron directory houses
            the automated job scheduling logic. The prisma folder defines the
            database schema, and the task directory contains the core scheduling
            algorithm. This architecture promotes maintainability, scalability,
            and separation of concerns across the application.
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

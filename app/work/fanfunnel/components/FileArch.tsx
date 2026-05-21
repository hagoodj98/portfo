import React from "react";

const fileStructure = `musicfunnel/
  app/
    api/
      subscribe/route.ts            # Handles new subscriber creation, validation, and Mailchimp integration
      refresh-session/route.ts      # Refreshes session tokens and CSRF, validates session state
      session-info/route.ts         # Returns session TTL for client-side session management
      redis-handler/route.ts        # Internal API for Redis get/set actions, secured by secret
      webhook/
        mailchimp/route.ts          # Handles Mailchimp webhook events, validates source and payload
    utils/
      sessionHelpers.ts             # Session management, Redis mapping, CSRF, HMAC, Mailchimp/Stripe helpers
      mailchimp.ts                  # Configures and exports Mailchimp client
    components/
      ...                           # UI components (not shown for brevity)
  lib/
    redis.ts                        # Redis client setup, TLS config, connection check
    limiters.ts                     # Rate limiter setup for sessions, email, address validation
  public/
    ...                             # Static assets
  ...`;
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
            The project is organized into a clear and modular file structure,
            with API routes handling all server-side logic and a dedicated utils
            folder for shared functions. The lib folder contains essential
            services like Redis client setup and rate limiters, while the public
            folder houses all static assets. This architecture promotes
            maintainability, scalability, and separation of concerns across the
            application.
          </p>
        </div>
      </div>
      <div className="tw-relative lg:tw-w-8/12 tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal">
        <div className="tw-w-full tw-flex tw-flex-col tw-gap-3 tw-mx-auto">
          <pre className="tw-bg-[#0E1424] tw-rounded-xl tw-border tw-border-[#243255] tw-p-4 tw-text-xs tw-text-[#e0e0e0] tw-overflow-x-auto tw-overflow-y-auto tw-h-64">
            <code>{fileStructure}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default FileArch;

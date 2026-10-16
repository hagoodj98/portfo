import React from "react";

const fileArchitecture = `carbon-footprint/
├── WordPress/
│   └── wp-content/
│       ├── themes/carbon-theme/
│       │   ├── front-page.php, page.php, single-*.php
│       │   ├── functions.php
│       │   ├── template-parts/
│       │   ├── src/index.js
│       │   ├── sass/                 # Source styles
│       │   └── css/                  # Compiled styles
│       ├── plugins/calc-fetcher-plugin/
│       │   └── calc-plugin.php       # Calculator shortcode + AJAX bridge
│       └── mu-plugins/
│           └── carbon-post-types.php # Events and Talks post types
└── calcpaymenttool/
    ├── server.js                     # Express calculation endpoint
    ├── validation-schema.js          # Zod input validation
    └── package.json`;

const FileArch = () => {
  return (
    <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row-reverse tw-gap-2 tw-my-6">
      <div className="lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
        <div className="tw-py-10">
          <h2 className="tw-text-xl md:tw-text-2xl tw-text-bluegreen tw-font-boldonse">
            File Architecture
          </h2>
          <div className="tw-w-28">
            <hr className="tw-h-2 tw-bg-bluegreen" />
          </div>
          <p className="md:tw-text-base tw-text-black">
            The project is split between the WordPress site and a standalone
            calculator service. The theme contains page templates, reusable
            sections, styles, and the chart interface; the plugin connects the
            calculator form to the Node.js endpoint.
          </p>
        </div>
      </div>
      <div className="tw-relative lg:tw-w-8/12 tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal">
        <div className="tw-w-full tw-flex tw-flex-col tw-gap-3 tw-mx-auto">
          <pre className="tw-bg-[#0E1424] tw-rounded-xl tw-border tw-border-[#243255] tw-p-4 tw-text-xs tw-text-[#e0e0e0] tw-overflow-x-auto">
            <code>{fileArchitecture}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default FileArch;

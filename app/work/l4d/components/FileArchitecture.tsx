import React from "react";

const l4dFileArchitecture = `L4D/
── database/
  databaseConnection.js
    repositories/
    users.js
    forumcontent.js
    comments.js
    replies.js
    user_notifications.js
    posts_reactions.js
    comments_reactions.js
    replies_reactions.js
── db/
    init.sql
── passport/
  passport.js
── public/
    css/
     styles.css
    images/
── tests/
  app.test.js
  auth-errors.test.js
  auth.test.js
  error-handler.test.js
    ....
── utils/
  error.js
  notificationHelper.js
  zodSchemas.js
── views/
    community.ejs
    forum.ejs
    homelogin.ejs
    index.ejs
    login.ejs
    register.ejs
    specialinfected.ejs
    survivors.ejs
    partials/
        footer.ejs
        header.ejs
       index.js
 package.json
       providercredentials.js`;

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

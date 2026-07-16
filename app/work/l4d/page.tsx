import React from "react";

import { infoData } from "../../components/datai";
import responsive from "../../../public/l4d/l4d.png";
import Video from "../../components/Video";
import ProjectIntro from "../../components/ProjectIntro";
import Personas from "@/app/components/Personas";
import Responsive from "@/app/components/Responsive";
import ProjectLayers from "./components/L4DTechnicalEvidence";
import TablesSlides from "./components/TablesSlides";
import SecuritySection from "./components/Security";
import Repositories from "./components/Repositories";
import APIEndpoints from "./components/APIEndpoints";
import CISection from "./components/CISection";
import ImprovementSection from "@/app/components/ImprovementSection";
import WireframeSlide from "@/app/components/WireframeSlide";
import DesignTimeLine from "@/app/components/DesignTimeLine";
import Diagram from "@/app/components/Diagram";
import PERNSection from "@/app/components/PERNSection";
import FileArch from "./components/FileArchitecture";
import NotificationQuerySlides from "./components/NotificationQuerySlides";
import NotificationEndpointSlides from "./components/NotificationEndpointSlides";
import ImageZoom from "@/app/components/ImageZoom";
export const metadata = {
  title: "Forum Gaming Site",
};

function Left4Dead() {
  // File architecture as a string for code block

  const intialwireArray = infoData.initialLeft4Dead;
  const middlewireArray = infoData.middleLeft4Dead;
  const finalwireArray = infoData.finalLeft4Dead;

  return (
    <div className="tw-py-20">
      <ProjectIntro
        projectname="Forum Gaming Site"
        description="For this project, I redesigned the Left 4 Dead website to showcase a modern gaming hub with an integrated forum feature. The original site (https://www.l4d.com/l4d/home.php) had potential but lacked contemporary usability and visual design. I rebuilt it with a focus on user experience, featuring a fully functional forum system that allows players to post, reply, react, and engage in threaded discussions. The objective was to create a platform where gamers can discuss the game, share experiences, and build community through interactive forum features."
        srcname="/l4d/Mockup.png"
      />

      <Personas
        persona="/l4d/persona.svg"
        personatwo="/l4d/persona2.svg"
        personathree="/l4d/persona3.svg"
      />
      <PERNSection>
        <h2 className="tw-leading-10 tw-text-3xl md:tw-text-4xl tw-text-black tw-font-boldonse md:tw-leading-[1.5]">
          Technical Architecture
        </h2>
        <div className="tw-w-28">
          <hr className="tw-h-2 tw-bg-black" />
        </div>
        <div>
          <p className="tw-text-base md:tw-text-xl tw-text-black ">
            The L4D project is a full-stack web app that reimagines the classic
            Left 4 Dead website with a modern, modular design.
          </p>
          <ul className="tw-list-disc tw-ml-5 tw-mt-2 tw-text-black tw-text-base">
            <li>
              Frontend: Built with Node/Express and EJS for creating dynamic web
              pages, using reusable components for UI and visuals.
            </li>
            <li>
              Backend: Node.js and Express provide REST API endpoints for
              authentication, forum content, and user actions.
            </li>
            <li>
              Database: PostgreSQL stores user data, forum posts, threaded
              replies, and reaction records across multiple layers.
            </li>
            <li>
              Authentication: Secure local and OAuth login with Passport,
              express-session, and bcrypt.
            </li>
            <li>
              Forum: CRUD operations for posts, replies, reply-to-reply
              threading, and live pagination.
            </li>
            <li>
              Reactions: Users can like or dislike posts, replies, and
              final-tier replies.
            </li>
          </ul>
        </div>
      </PERNSection>

      {/* API Endpoints Overview */}
      <Diagram image="/l4d/l4d diagram.png" alt="diagram of endpoints">
        <p className="md:tw-w-2/3 tw-mt-3">
          The following diagram provides a visual overview of the main REST API
          endpoints for authentication, forum content, and reactions. It
          illustrates the flow of requests between the client, Express routes,
          and the PostgreSQL database.
        </p>
      </Diagram>
      <FileArch />
      <TablesSlides />
      <div className="tw-container tw-mx-auto tw-my-10 tw-p-5">
        <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">
          Table Schemas and their relationships
        </h3>
        <div className="tw-w-64">
          <hr className="tw-h-2 tw-bg-bluegreen" />
        </div>
        <div className="tw-mt-6">
          <ImageZoom
            src="/l4d/Screenshot 2026-07-16 at 12.11.27 PM.png"
            width={1200}
            height={800}
            alt="Forum interface showing table schemas and their relationships"
            className="tw-w-full tw-rounded-lg tw-border tw-border-bluegreen/20 tw-shadow-sm"
          />
        </div>
      </div>
      <ProjectLayers />
      <div className="tw-container tw-mx-auto tw-my-8 tw-p-5">
        <div className="tw-space-y-8 tw-mt-6">
          {/* Registration Endpoint */}

          <div className="tw-container tw-py-10 tw-mx-auto tw-p-5">
            <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">
              Repository and Security Measures Layer
            </h3>
            <div className="tw-w-56">
              <hr className="tw-h-2 tw-bg-bluegreen" />
            </div>
            <p className="md:tw-w-2/3 tw-mt-3 tw-text-black">
              Each layer handles specific concerns: repositories execute SQL
              queries, services orchestrate business logic, and external
              services handle third-party integrations.
            </p>
            <div className="tw-flex tw-flex-col tw-gap-8 tw-mt-8">
              <Repositories />
              <SecuritySection />
              <APIEndpoints />
            </div>
          </div>
        </div>
      </div>
      {/* Edge-to-edge CI/CD and Docker section */}
      <CISection />
      <div className="tw-container tw-mx-auto tw-my-10 tw-p-5">
        <DesignTimeLine>
          <h2 className="tw-text-3xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse">
            Wireframing and Design Iteration
          </h2>
        </DesignTimeLine>
        <WireframeSlide processWireframes={intialwireArray}>
          <div className="lg:tw-col-span-4 tw-p-6">
            <span className="tw-inline-block tw-bg-[#0E1424] tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-mb-3">
              Phase 01 - Exploration
            </span>
            <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse tw-mb-3">
              Initial Wireframing
            </h3>
            <p>
              The initial wireframing phase focused on exploring different
              layout options and visual styles. I created multiple versions of
              key screens to experiment with various arrangements of content,
              navigation, and interactive elements.
            </p>
            <ul className="tw-list-disc tw-ml-5 tw-mt-2 tw-text-black tw-text-sm">
              <li>
                Layout Exploration: Tested different placements for the
                navigation bar, content sections, and interactive elements.
              </li>
              <li>
                Visual Style: Experimented with color schemes and typography to
                find a modern yet fitting aesthetic for the Left 4 Dead brand.
              </li>
            </ul>
          </div>
        </WireframeSlide>
        <WireframeSlide processWireframes={middlewireArray}>
          <div className="lg:tw-col-span-4 tw-p-6">
            <span className="tw-inline-block tw-bg-[#113058] tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-mb-3">
              Phase 02 - Refinement
            </span>
            <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse tw-mb-3">
              Refined Wireframing
            </h3>
            <p>
              In the refined wireframing stage, I iterated on the initial
              wireframes, improving layout, color, and UI clarity.
            </p>
            <ul className="tw-list-disc tw-ml-5 tw-mt-2 tw-text-black tw-text-sm">
              <li>
                Modern Aesthetics: Incorporated modern design trends while
                retaining the essence of Left 4 Dead’s distinctive look.
              </li>
              <li>
                Functionality & Visuals: Balanced usability with visual appeal.
              </li>
            </ul>
          </div>
        </WireframeSlide>
        <WireframeSlide processWireframes={finalwireArray}>
          <div className="lg:tw-col-span-4 tw-p-6">
            <span className="tw-inline-block tw-bg-bluegreen tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-mb-3">
              Phase 03 - Finalization
            </span>
            <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse tw-mb-3">
              Final Wireframing
            </h3>
            <p>
              The final wireframing phase brought all the ideas and revisions
              together into a polished, high-fidelity blueprint. Final screens
              unified visual consistency and behavior expectations, creating a
              production-ready blueprint before implementation and polish.
            </p>
          </div>
        </WireframeSlide>
      </div>
      <ImprovementSection>
        <div className="md:tw-w-2/3">
          <ul className="tw-list-disc  tw-mt-2 tw-text-black tw-text-sm">
            <li>
              One challenged faced was learning when to call an asynchronous
              function. Its important because it helps clean up redundant code
              on the backend.
            </li>
            <li>
              Another challenge was figuring out how can I make the login
              user&apos;s name dynamic using EJS. This site is from pure
              Express. Passing the local variable from the server to the EJS
              template was a bit tricky at first. Now the user can see their
              name on the top right corner when they log in.
            </li>
            <li>
              During my internship, CI/CD was a new concept to me. I had to
              learn how to set up a pipeline that runs on GitHub Actions, which
              includes steps for setting up a PostgreSQL service, applying the
              database schema, and running various checks like type-checking,
              linting, unit tests, production build, and end-to-end tests with
              Playwright. This was a valuable learning experience that taught me
              how to automate the testing and deployment process to ensure code
              quality and reliability.
            </li>
            <li>
              Docker was also a new tool I came across during internship work. I
              had to learn how to create a Docker Compose configuration that
              sets up a PostgreSQL container for local development. This
              involved mounting the database schema for initialization and
              configuring a persistent volume to ensure that the database state
              is maintained across container restarts. Learning Docker has been
              beneficial for creating consistent development environments and
              simplifying the setup process for other developers who may work on
              the project in the future.
            </li>
            <li>
              Implement routing through the notification messages to land on
              that specific post or thread.
            </li>
            <li>Implement TypeScript. This project is getting complicated!</li>
            <li className="tw-line-through tw-decoration-2">
              Improve better naming conventions for the database tables and
              columns. This would enhance readability and maintainability of the
              database schema, making it easier for developers to understand the
              purpose of each table and column at a glance.
              <span className="tw-inline-flex tw-items-center tw-rounded-full tw-bg-bluegreen tw-text-white tw-text-xs tw-px-2 tw-py-1">
                Addressed
              </span>
            </li>
            <li>
              <span className="tw-line-through tw-decoration-2">
                Implement notifications for user interactions such as new posts,
                replies, and reactions. This would enhance user engagement and
                keep users informed about activity on their posts and threads.
              </span>{" "}
              <span className="tw-inline-flex tw-items-center tw-rounded-full tw-bg-bluegreen tw-text-white tw-text-xs tw-px-2 tw-py-1">
                Addressed
              </span>
            </li>
            <li>
              <span className="tw-line-through tw-decoration-2">
                Add additional features like reply-to-reply interactions and
                reactions on the final tier of replies to enhance user
                engagement and support deeper discussions in the forum.
              </span>{" "}
              <span className="tw-inline-flex tw-items-center tw-rounded-full tw-bg-bluegreen tw-text-white tw-text-xs tw-px-2 tw-py-1">
                Addressed
              </span>
            </li>
            <li>
              <span className="tw-line-through tw-decoration-2">
                Will implement AJAX in the future to make the site more dynamic
                and interactive. This would allow users to like a post without
                refreshing the page.
              </span>{" "}
              <span className="tw-inline-flex tw-items-center tw-rounded-full tw-bg-bluegreen tw-text-white tw-text-xs tw-px-2 tw-py-1">
                Addressed
              </span>
            </li>
            <li className="tw-line-through tw-decoration-2">
              <span>Will improve readability on the forum</span> {""}
              <span className="tw-inline-flex tw-items-center tw-rounded-full tw-bg-bluegreen tw-text-white tw-text-xs tw-px-2 tw-py-1">
                Addressed(AJAX implementation)
              </span>
            </li>
          </ul>
        </div>
      </ImprovementSection>
      <Responsive repsonsive={responsive} />

      <Video
        githubLink="https://github.com/hagoodj98/L4D"
        srclink="../l4d/demo-small.mp4"
      />
      <div className="tw-container tw-mx-auto tw-my-10 tw-p-5">
        <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-font-boldonse">
          Addressed Improvements
        </h3>
        <div className="tw-w-64">
          <hr className="tw-h-2 tw-bg-bluegreen" />
        </div>
        <div className="tw-mt-5 tw-rounded-lg tw-border tw-border-bluegreen/30 tw-bg-white tw-p-5 tw-shadow-sm">
          <div className="tw-flex tw-items-center tw-gap-2 tw-mb-3">
            <span className="tw-inline-flex tw-items-center tw-rounded-full tw-bg-bluegreen tw-text-white tw-text-xs tw-px-2 tw-py-1">
              Addressed
            </span>
            <span className="tw-text-xs tw-text-gray-500">
              AJAX forum interactions and readability
            </span>
          </div>
          <h4 className="tw-text-lg tw-font-bold tw-text-black tw-mb-2">
            Implemented live forum updates without page refresh
          </h4>
          <p className="tw-text-sm tw-text-black tw-mb-2">
            <strong>Problem:</strong> Forum actions required full page reloads,
            which made posting, replying, and sorting feel slow and less
            interactive.
          </p>
          <p className="tw-text-sm tw-text-black tw-mb-2">
            <strong>Solution:</strong> Converted post and reply submission to
            JSON-based AJAX flows and updated the UI in-place, including
            immediate prepend behavior and visual feedback for new posts.
          </p>
          <p className="tw-text-sm tw-text-black tw-mb-3">
            <strong>Evidence:</strong> New posts now appear instantly, replies
            can be added inline, and forum sorting/pagination updates content
            dynamically.
          </p>
          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-4 tw-items-start">
            <div className="tw-max-w-md">
              <video
                className="tw-w-full tw-rounded tw-border tw-border-bluegreen/20"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/l4d/lastajaxdemo-small.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <pre className="tw-bg-[#181f2a] tw-text-[#e0e0e0] tw-rounded tw-p-4 tw-text-xs tw-overflow-x-auto">{`// Client-side (views/partials/forum-scripts.ejs)
const response = await fetch("http://localhost:3000/add-post", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ newPost: postContent }),
});
const data = await response.json();
if (data.success) {
  postsContainer.insertAdjacentHTML("afterbegin", newHTML);
  requestAnimationFrame(() => insertedPost.classList.add("fade-bg"));
}

// Server-side (index.js)
app.post("/add-post", async (req, res, next) => {
  const result = await createPost(req.body.newPost, req.user.id);
  return res.json({ success: true, post: result });
});`}</pre>
          </div>
          <p className="tw-text-xs tw-text-gray-500 tw-mt-3">
            Source: L4D/views/partials/forum-scripts.ejs and L4D/index.js
          </p>
        </div>
        <div className="tw-mt-5 tw-rounded-lg tw-border tw-border-bluegreen/30 tw-bg-white tw-p-5 tw-shadow-sm">
          <div className="tw-flex tw-items-center tw-gap-2 tw-mb-3">
            <span className="tw-inline-flex tw-items-center tw-rounded-full tw-bg-bluegreen tw-text-white tw-text-xs tw-px-2 tw-py-1">
              Addressed
            </span>
            <span className="tw-text-xs tw-text-gray-500">
              Threaded replies and final-tier reactions
            </span>
          </div>
          <h4 className="tw-text-lg tw-font-bold tw-text-black tw-mb-2">
            Added reply-to-reply interactions and final-tier reaction support
          </h4>
          <p className="tw-text-sm tw-text-black tw-mb-2">
            <strong>Problem:</strong> Replies stopped at one level, so longer
            discussions and reactions on deeper thread levels were missing from
            the forum.
          </p>
          <p className="tw-text-sm tw-text-black tw-mb-2">
            <strong>Solution:</strong> Extended the forum data model to support
            nested replies, added separate reaction handling for the final tier,
            and updated the client UI to render the deeper thread structure.
          </p>
          <p className="tw-text-sm tw-text-black tw-mb-3">
            <strong>Evidence:</strong> The forum now supports reply-to-reply
            creation, nested reaction toggles, and updated counts at the deepest
            thread level.
          </p>
          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-4 tw-items-start">
            <div className="tw-bg-white tw-rounded-xl tw-border tw-border-bluegreen/30 tw-p-4 tw-shadow-sm">
              <h5 className="tw-text-base tw-font-bold tw-text-black tw-mb-2">
                Reply-to-reply creation
              </h5>
              <p className="tw-text-sm tw-text-black tw-mb-3">
                Demonstrates how a reply opens a second-tier input and creates a
                nested thread in place.
              </p>
              <video
                className="tw-w-full tw-rounded tw-border tw-border-bluegreen/20"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/l4d/subreplieyfeature.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="tw-bg-white tw-rounded-xl tw-border tw-border-bluegreen/30 tw-p-4 tw-shadow-sm">
              <h5 className="tw-text-base tw-font-bold tw-text-black tw-mb-2">
                Final-tier reply reactions activity (in addition)
              </h5>
              <p className="tw-text-sm tw-text-black tw-mb-3">
                Shows like/dislike handling and count updates on the deepest
                reply layer.
              </p>
              <video
                className="tw-w-full tw-rounded tw-border tw-border-bluegreen/20"
                controls
                playsInline
                preload="metadata"
              >
                <source
                  src="/l4d/additionvideotosubreply.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <p className="tw-text-xs tw-text-gray-500 tw-mt-3">
            Source: L4D/views/partials/forum-scripts.ejs, L4D/index.js, and the
            nested reply database tables
          </p>
        </div>

        <div className="tw-mt-5 tw-rounded-lg tw-border tw-border-bluegreen/30 tw-bg-white tw-p-5 tw-shadow-sm">
          <div className="tw-flex tw-items-center tw-gap-2 tw-mb-3">
            <span className="tw-inline-flex tw-items-center tw-rounded-full tw-bg-bluegreen tw-text-white tw-text-xs tw-px-2 tw-py-1">
              Addressed
            </span>
            <span className="tw-text-xs tw-text-gray-500">
              Multi-source notifications with caching and read-state persistence
            </span>
          </div>
          <h4 className="tw-text-lg tw-font-bold tw-text-black tw-mb-2">
            Built a unified notification system across post, comment, and reply
            layers
          </h4>
          <p className="tw-text-sm tw-text-black tw-mb-2">
            <strong>Problem:</strong> Notifications were originally fragmented
            across interaction types. Post reactions/comments, comment
            reactions/replies, and reply reactions each required different query
            paths. Without a merge strategy and cache layer, this caused
            duplicate entries, inconsistent read state, and unnecessary repeated
            DB reads.
          </p>
          <p className="tw-text-sm tw-text-black tw-mb-2">
            <strong>Solution:</strong> I implemented a three-query notification
            pipeline in PostgreSQL, then merged the sourced results on the
            server before sending to the client.
          </p>
          <ul className="tw-list-disc tw-ml-5 tw-text-black tw-text-sm tw-mb-3">
            <li>
              <strong>postsCommentsNotifications:</strong> captures reactions
              and comments on a user&apos;s posts.
            </li>
            <li>
              <strong>commentsRepliesNotifications:</strong> captures reactions
              and replies on a user&apos;s comments.
            </li>
            <li>
              <strong>repliesNotifications:</strong> captures reactions on a
              user&apos;s replies.
            </li>
            <li>
              Added a server-side cache keyed by user id to reduce repetitive
              reads and stabilize notification identity in SSE updates.
            </li>
            <li>
              Persisted read/unread status in the users table via
              notification_state JSONB, so bell state survives refresh and
              session changes.
            </li>
          </ul>
          <p className="tw-text-sm tw-text-black tw-mb-3">
            <strong>Evidence:</strong> The system now supports real-time
            updates, accurate unread counts, no duplicate panel items after
            merge, and durable read state after refresh. End-to-end coverage was
            added for all notification paths: post reaction/comment, comment
            reaction/reply, and reply reaction.
          </p>
          <div className="tw-mb-4 tw-max-w-3xl">
            <h5 className="tw-text-base tw-font-bold tw-text-black tw-mb-2">
              Notification feed demo
            </h5>
            <h6>Here’s what I accomplished:</h6>
            <ul>
              <li>Set up SSE to stream notification updates in real time.</li>
              <li>
                I tested this with two users in parallel using Chrome in
                Incognito mode.
              </li>
              <li>
                In the demo scenario, user97 liked one of user1’s posts, and
                user1’s notification bell updated with a new notification from
                user97.
              </li>
            </ul>
            <video
              className="tw-w-full tw-rounded tw-border tw-border-bluegreen/20"
              controls
              playsInline
              preload="metadata"
            >
              <source src="/l4d/notification-feed-small.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-4 tw-items-start">
            <pre className="tw-bg-[#181f2a] tw-text-[#e0e0e0] tw-rounded tw-p-4 tw-text-xs tw-overflow-x-auto">{`// Repository fan-out (database/repositories/user_notifications.js)
              export const fetchAllNotifications = async (userId) => {
                const postsNotificationsSource = await postsCommentsNotifications(userId);
                const commentsNotificationSource = await commentsRepliesNotifications(userId);
                const repliesNotificationsSource = await repliesNotifications(userId);
                return {
                  postsNotificationsSource,
                  commentsNotificationSource,
                  repliesNotificationsSource,
                };
              };`}</pre>
            <pre className="tw-bg-[#181f2a] tw-text-[#e0e0e0] tw-rounded tw-p-4 tw-text-xs tw-overflow-x-auto">
              {`// Server merge + cache + SSE persistence (index.js)
              const cachedUserNotificationState = new Map();

              const {
                postsNotificationsSource,
                commentsNotificationSource,
                repliesNotificationsSource,
              } = await fetchAllNotifications(userId);

              const merged = await mergeAllSourcedNotifications([
                ...postsNotificationsSource,
                ...commentsNotificationSource,
                ...repliesNotificationsSource,
              ]);

              await saveNotificationState(userId, merged);
              cachedUserNotificationState.set(userId, merged);`}
            </pre>
          </div>
          <NotificationQuerySlides />
          <NotificationEndpointSlides />
          <p className="tw-text-xs tw-text-gray-500 tw-mt-3">
            Source: L4D/database/repositories/user_notifications.js,
            L4D/utils/notificationHelper.js, L4D/index.js
          </p>
        </div>
      </div>
    </div>
  );
}

export default Left4Dead;

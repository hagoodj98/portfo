import CarouselControlled from "../../../components/Carousel";

const notificationEndpointSlides = [
  {
    id: "check-reloaded",
    title: "GET /check-notifications-reloaded",
    summary:
      "Hydrates the notification panel on page load with the latest cached/persisted notification state.",
    description: `Purpose:
  - Populate bell dropdown immediately after refresh/login
  - Return current notifications array with read state

Route behavior:
  - Requires authenticated session
  - Reads user notification state from cache/database
  - Returns JSON used by forum-scripts.ejs to render list` ,
  },
  {
    id: "sse-updates",
    title: "GET /update-notifications (SSE)",
    summary:
      "Streams real-time notification payload updates to the browser without requiring full-page polling refreshes.",
    description: `Purpose:
  - Keep unread count and panel in sync in near real time
  - Push merged payload via Server-Sent Events

Route behavior:
  - Requires authenticated session
  - Refreshes notification sources on interval
  - Merges sources + cache identity
  - Emits: { payload: { count, notifications } }` ,
  },
  {
    id: "mark-read",
    title: "POST /read-notifications",
    summary:
      "Marks unread notifications as read and persists state so UI remains consistent across refresh and future sessions.",
    description: `Purpose:
  - Reset unread bell count after panel interaction
  - Persist read state durably

Route behavior:
  - Requires authenticated session
  - Maps unread -> read for user notifications
  - Saves updated state to users.notification_state
  - Updates in-memory cache and returns 200` ,
  },
  {
    id: "event-sources",
    title: "Event Producers (triggers)",
    summary:
      "These existing write endpoints generate activity that later appears in notification feeds.",
    description: `Key producers:
  - POST /post-reaction
  - POST /add-reply

Why this matters:
  - User actions create rows used by notification queries
  - Notification routes then aggregate those rows by ownership scope
  - UI receives one merged timeline instead of source-specific payloads` ,
  },
];

const NotificationEndpointSlides = () => {
  return (
    <div className="tw-w-full tw-rounded-xl tw-border tw-border-bluegreen/30 tw-bg-[#0f172a] tw-p-4 md:tw-p-5 tw-mt-4">
      <h5 className="tw-text-base md:tw-text-lg tw-font-bold tw-text-[#67e8f9] tw-mb-2">
        Notification API Endpoint Walkthrough
      </h5>
      <p className="tw-text-sm tw-text-slate-200 tw-mb-4">
        These are the route-level pieces that make notifications reliable on
        load, real-time during activity, and durable after read-state updates.
      </p>
      <CarouselControlled
        wireframeslides={notificationEndpointSlides}
        width="100%"
        height="520px"
      />
    </div>
  );
};

export default NotificationEndpointSlides;

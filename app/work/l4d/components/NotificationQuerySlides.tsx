import CarouselControlled from "../../../components/Carousel";

const notificationSlides = [
  {
    id: "posts-query",
    title: "Decision 1: Split by ownership scope (posts)",
    summary:
      "This query isolates post-owner events so reactions and comments can be collected without mixing comment/reply ownership rules.",
    description: `SELECT
  posts.id,
  posts.post,
  'posts_down' AS notification_type,
  COALESCE(likes_to_posts.reaction_to_post, '[]'::json) AS reactions_to_posts,
  COALESCE(other_comments_to_posts.comments, '[]'::json) AS other_comments
FROM posts
LEFT JOIN LATERAL (...) likes_to_posts ON true
LEFT JOIN LATERAL (...) other_comments_to_posts ON true
WHERE posts.user_id = $1
  AND (
    likes_to_posts.reaction_to_post IS NOT NULL OR
    other_comments_to_posts.comments IS NOT NULL
  );`,
  },
  {
    id: "comments-query",
    title: "Decision 2: Separate comment-owner events",
    summary:
      "Comment reactions and reply-to-comment events are handled in a dedicated path, which avoids overloading the post query with nested conditions.",
    description: `SELECT
  comments.id,
  'comments_down' AS notification_type,
  COALESCE(likes_to_comments.reaction, '[]'::json) AS reactions_to_comments,
  COALESCE(other_replies_to_comments.replies, '[]'::json) AS replies_to_comments
FROM comments
LEFT JOIN LATERAL (...) likes_to_comments ON true
LEFT JOIN LATERAL (...) other_replies_to_comments ON true
WHERE comments.user_id = $1
  AND (
    likes_to_comments.reaction IS NOT NULL OR
    other_replies_to_comments.replies IS NOT NULL
  );`,
  },
  {
    id: "replies-query",
    title: "Decision 3: Keep reply reactions isolated",
    summary:
      "Final-tier reply reactions have their own ownership and foreign keys, so this query remains intentionally narrow and predictable.",
    description: `SELECT
  replies.id,
  reply_post,
  'replies_down' AS notification_type,
  user_id,
  COALESCE(likes_to_replies.reactions_to_replies, '[]'::json) AS reactions_to_replies
FROM replies
LEFT JOIN LATERAL (...) likes_to_replies ON true
WHERE replies.user_id = $1
  AND likes_to_replies.reactions_to_replies IS NOT NULL;`,
  },
  {
    id: "repo-fanout",
    title: "Orchestration: Fan-out in repository layer",
    summary:
      "A single repository function executes the three scoped queries and returns one structured object for the service layer.",
    description: `export const fetchAllNotifications = async (userId) => {
  const postsNotificationsSource = await postsCommentsNotifications(userId);
  const commentsNotificationSource = await commentsRepliesNotifications(userId);
  const repliesNotificationsSource = await repliesNotifications(userId);

  return {
    postsNotificationsSource,
    commentsNotificationSource,
    repliesNotificationsSource,
  };
};`,
  },
  {
    id: "merge-one-array",
    title: "Aggregation: Merge into one timeline",
    summary:
      "The server combines all sources into one ordered notification timeline so the UI consumes one consistent payload contract.",
    description: `const {
  postsNotificationsSource,
  commentsNotificationSource,
  repliesNotificationsSource,
} = await fetchAllNotifications(userId);

const allSourcedNotifications = [
  ...postsNotificationsSource,
  ...commentsNotificationSource,
  ...repliesNotificationsSource,
];

const mergedNotifications = await mergeAllSourcedNotifications(
  allSourcedNotifications,
);

const payload = {
  count: mergedNotifications.filter((n) => !n.wasRead).length,
  notifications: mergedNotifications,
};`,
  },
  {
    id: "cache-read-state",
    title: "Reliability: Cache-first SSE + read-state persistence",
    summary:
      "Caching stabilizes identity during SSE refresh cycles, while explicit read actions persist read-state durability for future sessions.",
    description: `// cache by user
const cachedUserNotificationState = new Map();

// merge incoming notifications with cache identity
const mergedNotifications = findMatchingNotification(cached, sourced);
cachedUserNotificationState.set(userId, mergedNotifications);

// persist only when user marks notifications as read
const readNotifications = cached.map((n) => ({
  ...n,
  wasRead: true,
}));
await saveNotificationState(userId, readNotifications);`,
  },
];

const NotificationQuerySlides = () => {
  return (
    <div className="tw-w-full tw-rounded-xl tw-border tw-border-bluegreen/30 tw-bg-[#0f172a] tw-p-4 md:tw-p-5 tw-mt-4">
      <h5 className="tw-text-base md:tw-text-lg tw-font-bold tw-text-[#67e8f9] tw-mb-2">
        Notification Query Walkthrough
      </h5>
      <p className="tw-text-sm tw-text-slate-200 tw-mb-4">
        This walkthrough shows the notification architecture as a decision
        sequence: scoped query design, repository fan-out, server-side merge,
        and cache-backed read-state durability.
      </p>
      <CarouselControlled
        wireframeslides={notificationSlides}
        width="100%"
        height="540px"
      />
    </div>
  );
};

export default NotificationQuerySlides;

import CarouselControlled from "../../../components/Carousel";

const l4dPostgresSlides = [
  {
    id: "users-table",
    title: "users Table and Account Identity",
    summary:
      "Supports both local and OAuth identities with provider-specific IDs while preserving unique email constraints.",
    description: `users:
  id SERIAL PRIMARY KEY
  display_name VARCHAR(100)
  email VARCHAR(255) UNIQUE
  password VARCHAR(255) (nullable for OAuth)
  google_id VARCHAR(255) UNIQUE (nullable)
  twitch_id VARCHAR(255) UNIQUE (nullable)
  discord_id VARCHAR(255) UNIQUE (nullable)
  notification_state JSONB DEFAULT '{"notifications": []}'::jsonb
  provider VARCHAR(20) DEFAULT 'local'`,
  },
  {
    id: "posts-table",
    title: "posts Table",
    summary: "Forum posts authored by users, with timestamps and ownership.",
    description: `posts:
  id SERIAL PRIMARY KEY
  post TEXT
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
  created_at TIMESTAMP
  updated_at TIMESTAMP`,
  },
  {
    id: "comments-table",
    title: "comments Table",
    summary: "First-tier comments linked to a post and author.",
    description: `comments:
  id SERIAL PRIMARY KEY
  comment_post TEXT
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE
  created_at TIMESTAMP`,
  },
  {
    id: "replies-table",
    title: "replies Table",
    summary:
      "Stores reply-to-comment records and supports deeper thread interactions.",
    description: `replies:
  id SERIAL PRIMARY KEY
  reply_post TEXT
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
  comment_id INTEGER REFERENCES comments(id) ON DELETE CASCADE
  created_at TIMESTAMP`,
  },
  {
    id: "posts-reactions-table",
    title: "posts_reactions Table",
    summary:
      "Tracks user reactions (like/dislike) to posts. Unique per user/post.",
    description: `posts_reactions:
  id SERIAL PRIMARY KEY
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
  reaction_type TEXT -- 'like' | 'dislike'
  UNIQUE (user_id, post_id)`,
  },
  {
    id: "comments-reactions-table",
    title: "comments_reactions Table",
    summary:
      "Tracks user reactions (like/dislike) on comments. Unique per user/comment.",
    description: `comments_reactions:
  id SERIAL PRIMARY KEY
  comment_id INTEGER REFERENCES comments(id) ON DELETE CASCADE
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
  reaction_type TEXT -- 'like' | 'dislike'
  UNIQUE (user_id, comment_id)`,
  },
  {
    id: "replies-reactions-table",
    title: "replies_reactions Table",
    summary:
      "Tracks user reactions (like/dislike) on replies. Unique per user/reply.",
    description: `replies_reactions:
  id SERIAL PRIMARY KEY
  reply_id INTEGER REFERENCES replies(id) ON DELETE CASCADE
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
  reaction_type TEXT -- 'like' | 'dislike'
  UNIQUE (user_id, reply_id)`,
  },
];

const TablesSlides = () => {
  return (
    <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-gap-2 tw-my-5">
      <div className=" lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
        <div className="tw-py-10">
          <h3 className="tw-text-xl md:tw-text-2xl tw-text-bluegreen tw-font-boldonse">
            PostgreSQL
          </h3>
          <div className="tw-w-28">
            <hr className="tw-h-2 tw-bg-bluegreen" />{" "}
          </div>
          <div>
            <p>
              The database schema is designed to support a forum-like
              application with users, posts, replies, nested replies, and
              reactions. The users table accommodates both local and OAuth
              identities while enforcing unique email constraints. Posts and
              comments/replies are linked to their authors. Reactions are
              tracked in separate tables for posts, comments, and replies,
              enabling efficient querying for like/dislike counts and per-user
              reaction state. This structure supports threaded discussion,
              notification sourcing, and durable engagement metrics.
            </p>
          </div>
        </div>
      </div>
      <div className="tw-relative  lg:tw-w-8/12  tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal ">
        <div className="tw-w-full tw-mx-auto">
          <CarouselControlled
            wireframeslides={l4dPostgresSlides.map((table) => ({
              id: table.id,
              custom: (
                <div className="tw-bg-[#17213a] tw-rounded-2xl tw-border tw-border-[#38bdf8]/30 tw-p-5 tw-shadow-md">
                  <h4 className="tw-text-[#38bdf8] tw-font-semibold tw-mb-2 tw-text-lg">
                    {table.title}
                  </h4>
                  <p className="tw-text-[#e0e7ef] tw-text-sm tw-mb-3">
                    {table.summary}
                  </p>
                  <pre className="tw-bg-[#22315a] tw-rounded-lg tw-p-4 tw-text-xs tw-text-[#7dd3fc] tw-overflow-x-auto tw-font-mono tw-border tw-border-[#334155]/60">
                    <code>{table.description}</code>
                  </pre>
                </div>
              ),
            }))}
            width="100%"
            height="auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TablesSlides;

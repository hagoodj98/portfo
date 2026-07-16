import CarouselControlled from "../../../components/Carousel";

const RepositoriesLayerSlides = [
  {
    id: "users-repository",
    title: "Users Repository",
    summary:
      "Encapsulates user creation and lookup queries for local and OAuth accounts.",
    description: `// database/repositories/users.js
import pool from '../databaseConnection';

export const createUser = async (userData) => {
  const { display_name, email, password, provider } = userData;
  const result = await pool.query(
    'INSERT INTO users (display_name, email, password, provider) VALUES ($1, $2, $3, $4) RETURNING *',
    [display_name, email, password, provider]
  );
  return result.rows[0];
};`,
  },
  {
    id: "forumcontent-repository",
    title: "Forum Content Repository",
    summary:
      "Handles forum post creation and aggregated listing with reaction and nested reply counts.",
    description: `// database/repositories/forumcontent.js
import db from "../databaseConnection.js";

export const createPost = async (postContent, userId) => {
  const result = await db.query(
    "INSERT INTO posts (post, user_id, created_at) VALUES ($1, $2, $3) RETURNING *",
    [postContent, userId, new Date()],
  );
  return result.rows[0];
};

export const getAllForumData = async (userId, sortDirection, limit, offset) => {
  // returns posts with nested comments/replies and reaction aggregates
};`,
  },
  {
    id: "comments-and-replies-repository",
    title: "Comments and Replies Repositories",
    summary:
      "Supports both first-tier comments and reply-to-comment creation in separate repository files.",
    description: `// database/repositories/comments.js + replies.js
import db from "../databaseConnection.js";

export const createComment = async (comment_post, user_id, post_id) => {
  return db.query(
    "INSERT INTO comments (comment_post, user_id, post_id, created_at) VALUES ($1, $2, $3, $4) RETURNING *",
    [comment_post, user_id, post_id, new Date()]
  );
};

export const createReply = async (reply_post, user_id, comment_id) => {
  return db.query(
    "INSERT INTO replies (reply_post, user_id, comment_id, created_at) VALUES ($1, $2, $3, $4) RETURNING *",
    [reply_post, user_id, comment_id, new Date()]
  );
};`,
  },
  {
    id: "posts-reactions-repository",
    title: "Posts Reactions Repository",
    summary:
      "Tracks like and dislike reactions on posts with one reaction per user per post.",
    description: `// database/repositories/posts_reactions.js
import db from "../databaseConnection.js";

export const addReaction = async (postId, userId, reactionType) => {
  await db.query(
    "INSERT INTO posts_reactions (post_id, user_id, reaction_type) VALUES ($1, $2, $3)",
    [postId, userId, reactionType],
  );
};`,
  },
  {
    id: "comments-reactions-repository",
    title: "Comments/Replies Reactions Repositories",
    summary:
      "Tracks like/dislike reactions on comments and replies using dedicated tables and upsert logic.",
    description: `// database/repositories/comments_reactions.js + replies_reactions.js
import db from "../databaseConnection.js";

export const addCommentReaction = async (commentId, userId, reactionType) => {
  await db.query(
    "INSERT INTO comments_reactions (comment_id, user_id, reaction_type) VALUES ($1, $2, $3)",
    [commentId, userId, reactionType],
  );
};`,
  },
];

const Repositories = () => {
  return (
    <div className="tw-bg-[#17213a] tw-rounded-2xl tw-border tw-border-[#38bdf8]/30 tw-p-5 tw-shadow-md tw-w-full">
      <h4 className="tw-text-[#38bdf8] tw-font-semibold tw-mb-3 tw-text-lg">
        Repository Layer
      </h4>
      <CarouselControlled
        wireframeslides={RepositoriesLayerSlides}
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default Repositories;

import CarouselControlled from "../../../components/Carousel";

const RepositoriesLayerSlides = [
  {
    id: "users-repository",
    title: "Users Repository",
    summary:
      "Encapsulates user creation and lookup queries for local and OAuth accounts.",
    description: `// database/repositories/users.ts
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
    id: "posts-repository",
    title: "Posts Repository",
    summary:
      "Handles forum post creation and listing with reaction and reply counts.",
    description: `// database/repositories/posts.ts
import db from "../databaseConnection.js";

export const createPost = async (postContent, userId) => {
  await db.query(
    "INSERT INTO posts (post, user_id, created_at) VALUES ($1, $2, $3)",
    [postContent, userId, new Date()],
  );
};`,
  },
  {
    id: "replies-repository",
    title: "Replies Repository",
    summary:
      "Stores first-tier replies linked to a post and the user who wrote them.",
    description: `// database/repositories/replies.ts
import db from "../databaseConnection.js";

export const createReply = async (comment_post, user_id, post_id) => {
  await db.query(
    "INSERT INTO replies (comment_post, user_id, post_id, created_at) VALUES ($1, $2, $3, $4)",
    [comment_post, user_id, post_id, new Date()],
  );
};`,
  },
  {
    id: "posts-reactions-repository",
    title: "Posts Reactions Repository",
    summary:
      "Tracks like and dislike reactions on posts with one reaction per user per post.",
    description: `// database/repositories/posts_reactions.ts
import db from "../databaseConnection.js";

export const addReaction = async (postId, userId, reactionType) => {
  await db.query(
    "INSERT INTO posts_reactions (post_id, user_id, reaction_type) VALUES ($1, $2, $3)",
    [postId, userId, reactionType],
  );
};`,
  },
  {
    id: "reactions-comments-repository",
    title: "Reactions Comments Repository",
    summary: "Tracks like and dislike reactions on forum comments and replies.",
    description: `// database/repositories/reactions_comments.ts
import db from "../databaseConnection.js";

export const addReaction = async (commentId, userId, reactionType) => {
  await db.query(
    "INSERT INTO reactions_comments (comment_id, user_id, reaction_type) VALUES ($1, $2, $3)",
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

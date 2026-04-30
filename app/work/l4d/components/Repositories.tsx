import CarouselControlled from "../../../components/Carousel";
const RepositoriesLayerSlides = [
  {
    id: "users-repository",
    title: "Users Repository",
    summary:
      "Encapsulates all SQL queries related to user management, including creation and lookup.",
    description: `// database/repositories/users.ts\nimport pool from '../databaseConnection';\n\nexport const createUser = async (userData) => {\n  const { display_name, email, password, provider } = userData;\n  const result = await pool.query(\n    'INSERT INTO users (display_name, email, password, provider) VALUES ($1, $2, $3, $4) RETURNING *  ',\n    [display_name, email, password, provider]\n  );\n  return result.rows[0];\n};\n\nexport const findUserByEmail = async (email) => {\n  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);\n  return result.rows[0];\n};\n\n// ... other user-related queries`,
  },
  {
    id: "posts-repository",
    title: "Posts Repository",
    summary:
      "Encapsulates all SQL queries related to post management, including creation and lookup.",
    description: `// database/repositories/posts.ts\nimport db from "../databaseConnection.js";
    
    export const getForumPosts = async (
      userId = null,
      sortDirection = "DESC",
      limit = 4,
      offset = 0,
    ) => {
      const safeSortDirection = sortDirection === "ASC" ? "ASC" : "DESC";
    
      const forumPostQuery = 
          SELECT
            p.id,
            p.updated_at,
            p.post,
            p.user_id,
            p.created_at,
            COALESCE(rc.likes, 0) AS likes,
            COALESCE(rc.dislikes, 0) AS dislikes,
            COALESCE(rep.reply_count, 0) AS reply_count,
            cur_pr.reaction_type AS user_reaction,
            u.display_name,
            COALESCE(rp.replies, '[]'::json) AS replies
          FROM posts p
          LEFT JOIN (
            SELECT
              post_id,
              COUNT(*) FILTER (WHERE reaction_type = 'like') AS likes,
              COUNT(*) FILTER (WHERE reaction_type = 'dislike') AS dislikes
            FROM posts_reactions
            GROUP BY post_id
          ) rc ON rc.post_id = p.id
          LEFT JOIN posts_reactions cur_pr
            ON cur_pr.post_id = p.id AND cur_pr.user_id = $1
          LEFT JOIN (
            SELECT
              post_id,
              COUNT(*) AS reply_count
            FROM replies
            GROUP BY post_id
          ) rep ON rep.post_id = p.id
          LEFT JOIN users u ON u.id = p.user_id
          LEFT JOIN LATERAL (
            SELECT
              r.post_id,
              json_agg(
                json_build_object(
                  'id', r.id,
                  'comment_post', r.comment_post,
                  'user_id', r.user_id,
                  'created_at', r.created_at,
                  'likes', COALESCE(rcc.likes, 0),
                  'dislikes', COALESCE(rcc.dislikes, 0),
                  'user_reaction', ccr.reaction_type,
                  'display_name', ru.display_name
                )
                ORDER BY r.created_at DESC
              ) AS replies
            FROM replies r
            LEFT JOIN users ru ON ru.id = r.user_id
            LEFT JOIN (
              SELECT
                comment_id,
                COUNT(*) FILTER (WHERE reaction_type = 'like') AS likes,
                COUNT(*) FILTER (WHERE reaction_type = 'dislike') AS dislikes
              FROM reactions_comments
              GROUP BY comment_id
            ) rcc ON rcc.comment_id = r.id
            LEFT JOIN reactions_comments ccr
              ON ccr.comment_id = r.id AND ccr.user_id = $1
            WHERE r.post_id = p.id
            GROUP BY r.post_id
          ) rp ON true
          ORDER BY p.created_at {{$"{"safeSortDirection"}"}}
          LIMIT $2 OFFSET $3 ;
      return db.query(forumPostQuery, [userId, limit, offset]);
    };
    
    export const totalPostsResult = async () =>
      await db.query("SELECT COUNT(*) FROM posts");
    
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
      "Encapsulates all SQL queries related to reply management, including creation and lookup.",
    description: `// database/repositories/replies.ts\nimport db from "../databaseConnection.js" export const createReply = async (comment_post, user_id, post_id) => {
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
      "Encapsulates all SQL queries related to post reactions, including creation and lookup.",
    description: `// database/repositories/posts_reactions.ts\nimport db from "../databaseConnection.js" import db from "../databaseConnection.js";
      
      export const existing = async (postId, userId) => {
        const result = await db.query(
          "SELECT reaction_type FROM posts_reactions WHERE post_id = $1 AND user_id = $2",
          [postId, userId],
        );
        return result.rows[0];
      };
      
      export const addReaction = async (postId, userId, reactionType) => {
        await db.query(
          INSERT INTO posts_reactions (post_id, user_id, reaction_type)
               VALUES ($1, $2, $3)
               ON CONFLICT (user_id, post_id)
               DO UPDATE SET reaction_type = EXCLUDED.reaction_type,
          [postId, userId, reactionType],
        );
      };
      
      export const removeReaction = async (postId, userId) => {
        await db.query(
          "DELETE FROM posts_reactions WHERE post_id = $1 AND user_id = $2",
          [postId, userId],
        );
      };`,
  },
  {
    id: "reactions-comments-repository",
    title: "Reactions Comments Repository",
    summary:
      "Encapsulates all SQL queries related to comment reactions, including creation and lookup.",
    description: `// database/repositories/reactions_comments.ts\nimport db from "../databaseConnection.js" import db from "../databaseConnection.js";
    import db from "../databaseConnection.js";
    
    export const existing = async (commentId, userId) => {
      const result = await db.query(
        "SELECT reaction_type FROM reactions_comments WHERE comment_id = $1 AND user_id = $2",
        [commentId, userId],
      );
      return result.rows[0];
    };
    
    export const addReaction = async (commentId, userId, reactionType) => {
      const result = await db.query(
        "INSERT INTO reactions_comments (comment_id, user_id, reaction_type) VALUES ($1, $2, $3) RETURNING *",
        [commentId, userId, reactionType],
      );
      return result.rows[0];
    };
    export const removeReaction = async (commentId, userId) => {
      await db.query(
        "DELETE FROM reactions_comments WHERE comment_id = $1 AND user_id = $2",
        [commentId, userId],
      );
    };
    
    export const updateReaction = async (commentId, userId, reactionType) => {
      const result = await db.query(
        INSERT INTO reactions_comments (comment_id, user_id, reaction_type)
             VALUES ($1, $2, $3)
             ON CONFLICT (user_id, comment_id)
             DO UPDATE SET reaction_type = EXCLUDED.reaction_type,
        [commentId, userId, reactionType],
      );
      return result.rows[0];
    };
    `,
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

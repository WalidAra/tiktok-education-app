const query = require("../utils/query.js");
const pgClient = require("../config/pg");

const Video = {
  getAllComments: async (id) => {
    try {
      const result = await pgClient.query(query.queryGetComments(id), [id]);
      return result.rows;
    } catch (error) {
      console.error(error);
    }
  },

  getCommentByID: async (id) => {
    try {
      const result = await pgClient.query(query.queryFindVideoByID(id));
      return result.rows;
    } catch (error) {
      console.error(error);
    }
  },
  addComment: async (comment) => {
    try {
      await pgClient.query(query.queryAddComment(), [
        comment.usercomment,
        comment.commenter_id,
        comment.video_id,
      ]);
      return true;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to add comment");
    }
  },

  DeleteUserComments: async (id) => {
    // user ID
    try {
      await pgClient.query(query.DeleteCommentsOfUser(id));
    } catch (error) {
      console.error(error);
      return false;
    }
  },
};

module.exports = Video;

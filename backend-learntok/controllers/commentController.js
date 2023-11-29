const Comment = require("../models/Comment");
const User = require("../models/Users");

const commentController = {
  getComments: async (req, res) => {
    try {
      const comments = await Comment.getAllComments();
      let learnTokComments = [];

      for (const comment of comments) {
        const commenter = await User.getUserByID(comment.commenter_id);
        learnTokVideos.push({ ...comment, commenter: commenter });
      }

      res.json(learnTokComments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getCommentByID: async (req, res) => {
    const { id } = req.body;
    try {
      const result = await Comment.getCommentByID(id);
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  addComment: async (req, res) => {
    const { info } = req.body;

    try {
      const result = await Comment.addComment(info);
      res.json({ success: true, result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  },
};

module.exports = commentController;

const videos = require("../models/Videos");
const User = require("../models/Users");
const Comment = require("../models/Comment");
const Video = require("../models/Videos");
const { CommandStartedEvent } = require("mongodb");

const videoController = {

  searchVideos: async (req, res) => {
    const { searchValue } = req.body;

    try {
      const learnTokVideos = await videos.getAllVideos();
      const users = await User.SearchUsers(searchValue);
      let filteredVideos = learnTokVideos.filter((v) => {
        return v.title.toLowerCase().includes(searchValue.toLowerCase());
      });
      const finalVids = [];
      for (const video of filteredVideos) {
        const poster = await User.getUserByID(video.poster_id);
        const comments = await Comment.getAllComments(video.video_id);
        finalVids.push({ ...video, poster: poster, comments: comments });
      }

      res.json({ finalVids , users});
    } catch (error) {
      console.error("Search Videos FC :", error);
    }
  },

  getUserFollowsVids: async (req, res) => {
    const { id } = req.body;

    try {
      const user = await User.getUserByID(id);
      const learnTokVideos = await videos.getAllVideos();
      let userFollowsVids = learnTokVideos.filter((v) => {
        return user.following.some((u) => u._id === v.poster_id);
      });

      if (userFollowsVids.length !== 0) {
        const finalVids = [];
        for (const video of userFollowsVids) {
          const poster = await User.getUserByID(video.poster_id);
          const comments = await Comment.getAllComments(video.video_id);
          finalVids.push({ ...video, poster: poster, comments: comments });
        }
        res.status(200).json(finalVids);
      } else {
        res.status(200).json(learnTokVideos);
      }
    } catch (error) {
      console.error(error);
    }
  },
  getAllVideos: async (req, res) => {
    try {
      let results = await videos.getAllVideos();
      const learnTokVideos = [];

      for (const video of results) {
        const poster = await User.getUserByID(video.poster_id);
        const comments = await Comment.getAllComments(video.video_id);
        learnTokVideos.push({ ...video, poster: poster, comments: comments });
      }

      res.status(200).json(learnTokVideos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error (controller)" });
    }
  },

  updateVideoLikeState: async (req, res) => {
    const { userID, videoID, op } = req.body;

    try {
      const vids = await Video.getVideoByID(videoID);
      const user = await User.getUserByID(userID);
      let num = vids[0].likes;

      if (op) {
        num++;
        user.favCategories.push(vids[0].category_id);
      } else {
        num--;
        user.favCategories.splice(vids[0].category_id, 1);
      }

      await Video.updateVideoLike(videoID, num);
      const result = await User.updateUserState(userID, user);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  },

  getUserVideos: async (req, res) => {
    const { id } = req.body;
    try {
      let results = await videos.getUserVideos(id);
      const learnTokVideos = [];

      if (results) {
        for (const video of results) {
          const poster = await User.getUserByID(video.poster_id);
          learnTokVideos.push({ ...video, poster: poster });
        }
      }
      res.status(200).json(learnTokVideos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error (controller)" });
    }
  },
  getVideoByID: async (req, res) => {
    const { id } = req.body;

    try {
      let results = await videos.getVideoByID(id);
      const learnTokVideos = [];

      for (const video of results) {
        const poster = await User.getUserByID(video.poster_id);
        const comments = await Comment.getAllComments(video.video_id);
        learnTokVideos.push({ ...video, poster: poster, comments: comments });
      }

      res.status(200).json(learnTokVideos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error (controller)" });
    }
  },

  createVideo: async (req, res) => {
    const { obj } = req.body;
    try {
      let result = await videos.createVideo(obj);

      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error (controller)" });
    }
  },

  DeleteVideo: async (req, res) => {
    const { id } = req.body;
    try {
      let result = await videos.DeleteVideo(id);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error (controller)" });
    }
  },

  updateVidProps: async (req, res) => {
    const { title, description, videoID } = req.body;
    try {
      const result = await videos.UpdateVidProps(title, description, videoID);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error (controller)" });
    }
  },

  uploadNewVideo: async (req, res) => {
    const { title, description, url, category_id, poster_id, likes_count } =
      req.body;

    try {
      const result = await Video.uploadNewVideos(
        title,
        description,
        url,
        category_id,
        poster_id,
        likes_count
      );
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error (controller)" });
    }
  },
};

module.exports = videoController;

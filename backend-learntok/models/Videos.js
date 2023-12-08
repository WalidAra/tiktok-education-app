const query = require("../utils/query");
const pgClient = require("../config/pg");

const Video = {
  getAllVideos: async () => {
    try {
      const result = await pgClient.query(query.queryGetVideos());
      return result.rows;
    } catch (error) {
      console.error(error);
    }
  },

  getVideoByID: async (id) => {
    try {
      const result = await pgClient.query(query.queryFindVideoByID(id), [id]);
      return result.rows;
    } catch (error) {
      console.error(error);
    }
  },

  getUserVideos: async (id) => {
    try {
      const result = await pgClient.query(query.queryGetUserVideos(id));
      return result.rows;
    } catch (error) {
      console.error(error);
    }
  },

  updateVideoLike: async (video_id, updated, user_id) => {

    try {
      const result = await pgClient.query(query.queryUpdateVideoLike(video_id, updated), [
        updated,
        video_id,
      ]);

      // await pgClient.query(
      //   query.AddNewLike((user_id, video_id), [user_id, video_id])
      // );
      return result;
    } catch (error) {
      console.error(error);
    }
  },

  createVideo: async (obj) => {
    try {
      const result = await pgClient.query(query.queryAddVideo(obj));
      return result.rows;
    } catch (error) {
      console.error(error);
    }
  },

  DeleteVideo: async (id) => {
    // video id
    try {
      await pgClient.query(query.queryDeleteComments(id));
      await pgClient.query(query.queryDeleteVideo(id));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  UpdateVidProps: async (title, description, videoID) => {
    try {
      await pgClient.query(
        query.queryUpdateVideoProps(title, description, videoID)
      );
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  uploadNewVideos: async (
    title,
    description,
    url,
    category_id,
    poster_id,
    likes_count
  ) => {
    try {
      await pgClient.query(
        query.uploadNewVideo(
          title,
          description,
          url,
          category_id,
          poster_id,
          likes_count
        )
      );
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
};

module.exports = Video;

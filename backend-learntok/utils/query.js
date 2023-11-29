const queries = {
  queryGetVideos: () => `SELECT * FROM videos`,
  queryFindVideoByID: (targetVideoId) =>
    "SELECT * FROM videos WHERE video_id = $1",
  queryGetUserVideos: (id_user) =>
    `SELECT * FROM videos WHERE poster_id = '${id_user}'`,
  queryUpdateVideoLike: (id, updated) =>
    `UPDATE videos SET likes = ${updated} WHERE video_id = ${id}`,

  queryGetComments: (id) => "SELECT * FROM comments WHERE video_id = $1",
  queryFindCommentByID: (id) =>
    `SELECT * FROM TheComments WHERE comment_id = ${id}`,

  queryAddComment: () =>
    "INSERT INTO comments(usercomment, commenter_id, video_id) VALUES ($1, $2, $3)",

  queryDeleteVideo: (id) => `DELETE FROM videos
WHERE video_id = ${id}`,
  queryDeleteComments: (id) => `DELETE FROM comments WHERE video_id = ${id} `,
  queryUpdateVideoProps: (title, description, videoID) =>
    `UPDATE videos SET title = '${title}', description = '${description}' WHERE video_id = ${videoID}`,
  DeleteCommentsOfUser: (userID) =>
    `DELETE FROM comments WHERE commenter_id = ${userID} `,

  uploadNewVideo: (
    title,
    description,
    url,
    category_id,
    poster_id,
    likes_count
  ) =>
    `INSERT INTO videos (title , url , poster_id , category_id , description , likes_count) VALUES('${title}' , '${url}' , '${poster_id}' , '${category_id}' , '${description}' , '${likes_count}')`,
};

module.exports = queries;

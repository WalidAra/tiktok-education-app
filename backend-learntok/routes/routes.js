const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const videoController = require("../controllers/VideoController");
const commentsController = require("../controllers/commentController");

router.get("/users", UserController.getAllUsers);
router.post("/update-pfp", UserController.UpdatePfp);
router.get("/videos", videoController.getAllVideos);
router.post("/userById", UserController.getUserByID);
router.post("/videoById", videoController.getVideoByID);
router.post("/commentById", commentsController.getCommentByID);
router.post("/get-user-videos", videoController.getUserVideos);
router.post("/following", videoController.getUserFollowsVids);
router.post("/searchVids", videoController.searchVideos);
router.post("/login", UserController.loginUser);
router.post("/signup", UserController.signUpUser);
router.post("/newVideo", videoController.createVideo);
router.post("/newComment", commentsController.addComment);
router.post("/update-like-state", videoController.updateVideoLikeState);
router.post("/updateLikeState", videoController.updateVideoLikeState);
router.post("/updateFollowUser", UserController.updateUserFollowState);
router.post("/delete-video", videoController.DeleteVideo);
router.post("/delete-user", UserController.DeleteUser);
router.post("/updateVideoProps", videoController.updateVidProps);
router.post("/upload-video", videoController.uploadNewVideo);

module.exports = router;

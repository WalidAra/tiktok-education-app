const { ObjectId } = require("mongodb");
const User = require("../models/Users");
const Video = require("../models/Videos");
const Comment = require("../models/Comment");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  loginUser: async (req, res) => {
    const info = req.body;
    try {
      const result = await User.Login(info);

      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  signUpUser: async (req, res) => {
    const { email, fullName, password, userName } = req.body;
    const userInfo = {
      fullName: fullName,
      userName: userName,
      email: email,
      password: password,
      pfpUrl:
        "https://i.pinimg.com/564x/70/6c/a3/706ca3400893e3da65ff30ca00852fa3.jpg",
      followers: [],
      following: [],
      joined: new Date().toISOString(),
      favCategories: [],
    };
    try {
      let result = await User.SignUp(userInfo);
      const info = {
        email: email,
        password: password,
      };
      result.user = await User.Login(info);
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getUserByID: async (req, res) => {
    const { id } = req.body;
    try {
      const result = await User.getUserByID(id);
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateUserFollowState: async (req, res) => {
    const { userID, followedID, op } = req.body;
    try {
      const user = await User.getUserByID(userID);
      const FollowedUser = await User.getUserByID(followedID);

      if (op) {
        user.following.push({ _id: followedID });
        FollowedUser.followers.push({ _id: userID });
      } else if (op === false) {
        let index = user.following.findIndex(
          (user) => user._id === FollowedUser._id
        );

        if (index !== -1) {
          user.following.splice(index, 1);
        }

        index = FollowedUser.followers.findIndex(
          (user) => user._id === user._id
        );

        if (index !== -1) {
          FollowedUser.followers.splice(index, 1);
        }
      }

      await User.updateUserState(userID, user);
      await User.updateUserState(followedID, FollowedUser);

      return true;
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  DeleteUser: async (req, res) => {
    const { id } = req.body; // user id
    try {
      await Comment.DeleteUserComments(id);
      const userVids = await Video.getUserVideos(id);

      userVids.forEach(async (vid) => {
        await Video.DeleteVideo(vid.videoid);
      });
      const result = await User.DeleteUser(id);

      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  UpdatePfp: async (req, res) => {
    const { pfp, id } = req.body;
    try {
      const result = await User.updatePfp(id, pfp);
      res.json(result);
    } catch (error) {
      console.error("error updating pfp : ", error);
    }
  },
};

module.exports = userController;

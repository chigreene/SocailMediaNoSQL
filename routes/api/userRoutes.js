const express = require("express");
// const User = require("../../models/User");
// const Thought = require("../../models/Thought");
const router = express.Router();
const {
  getUsers,
  getSingleUser,
  postNewUser,
  updateUser,
  deleteUser,
  addNewFriend,
  removeFriend,
} = require("../../controllers/userController");

// '/' routes to get all users and post new users
router.route("/").get(getUsers).post(postNewUser);

// '/:userId' routes to get single user, update a user, and delete a user
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// '/:userId/friends/:friendId' routes to add and delete friends
router
  .route("/:userId/friends/:friendId")
  .post(addNewFriend)
  .delete(removeFriend);

module.exports = router;

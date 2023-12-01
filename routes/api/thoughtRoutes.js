const express = require("express");
const router = express.Router();
const {
  getThoughts,
  getSingleThought,
  postNewThought,
  updateThought,
  deleteThought,
  postReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// handles the '/' route to get all thoughts and to post a new thought
router.route("/").get(getThoughts).post(postNewThought);

// handles the "/:thoughtId" route to get a single thought, delete a thought and update a thought
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// handles the "/:thoughtId/reactions" route to add a reaction to the thoughts reactions array
router.route("/:thoughtId/reactions").post(postReaction);

// handles the "/:thoughtId/reactions/:reactionId" route to remove a reaction from a thoughts reaction array
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;

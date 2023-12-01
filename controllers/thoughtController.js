const { User, Thought } = require("../models");

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find({});
      res.json(thoughts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      if (!thought) {
        return res.status(404).json({ message: "Thought not found" });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  async postNewThought(req, res) {
    try {
      const newThought = new Thought(req.body);
      const savedThought = await newThought.save();

      // Add thought to the user's thoughts array
      await User.findByIdAndUpdate(req.body.userId, {
        $push: { thoughts: savedThought._id },
      });

      res.status(201).json(savedThought);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  async updateThought(req, res) {
    try {
      const updatedThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { new: true, runValidators: true }
      );
      if (!updatedThought) {
        return res.status(404).json({ message: "Thought not found" });
      }
      res.json(updatedThought);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  async deleteThought(req, res) {
    try {
      const deletedThought = await Thought.findByIdAndDelete(
        req.params.thoughtId
      );
      if (!deletedThought) {
        return res.status(404).json({ message: "Thought not found" });
      }
      res.json({ message: "Thought deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  async postReaction(req, res) {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: "Thought not found" });
      }
      thought.reactions.push(req.body);
      await thought.save();
      res.json(thought);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: "Thought not found" });
      }
      thought.reactions.pull({ _id: req.params.reactionId });
      await thought.save();
      res.json(thought);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};

const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { userData, thoughtData } = require("./data");

async function seedDatabase() {
  await connection.once("open", async () => {
    try {
      await User.deleteMany({});
      await Thought.deleteMany({});

      // Seed users
      const users = await User.insertMany(userData);

      // Map usernames to user IDs for quick lookup
      const userMap = users.reduce((map, user) => {
        map[user.username] = user._id;
        return map;
      }, {});

      // Associate each thought with the userID and save thoughts
      const thoughtsWithUsers = thoughtData.map((thought) => {
        return { ...thought, userId: userMap[thought.username] };
      });
      const savedThoughts = await Thought.insertMany(thoughtsWithUsers);

      // Update each user's thoughts array
      for (const thought of savedThoughts) {
        await User.findByIdAndUpdate(
          thought.userId,
          { $push: { thoughts: thought._id } },
          { new: true }
        );
      }

      console.log("Database seeded successfully!");
    } catch (err) {
      console.error("Error seeding database:", err);
    } finally {
      process.exit(0);
    }
  });
}

seedDatabase();

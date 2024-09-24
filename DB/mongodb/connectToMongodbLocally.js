const mongoose = require("mongoose");

// a function to connect to the local mongodb
const connectToLocalDb = async () => {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/cardsServer");
      console.log("Connected to MongoDB locally");
    } catch (error) {
      console.error("Could not connect to MongoDB locally", error);
    }
  };

  module.exports = connectToLocalDb;
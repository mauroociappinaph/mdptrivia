const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  profileImage: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;

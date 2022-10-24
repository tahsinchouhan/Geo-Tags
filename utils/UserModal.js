// create user model for mongo db
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const UserModal = mongoose.models.user || mongoose.model("user", userSchema);

module.exports = UserModal;

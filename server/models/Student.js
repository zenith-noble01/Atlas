const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  username: {
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
    type: Boolean,
    default: false,
  },
  emailToken: {
    type: String,
  },
  profilePic: {
    type: String,
    default:
      "https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/user.png",
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Student", StudentSchema);

const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    teachingSubjects: {
      type: Array,
      default: [],
    },
    phone: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", TeacherSchema);

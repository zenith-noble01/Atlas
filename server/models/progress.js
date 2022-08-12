const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
  },
  questionYear: {
    type: String,
    required: true,
  },
  progressScore: {
    type: Number,
  },
  progressDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Progress", progressSchema);

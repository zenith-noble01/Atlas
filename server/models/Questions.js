const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questionName: {
    type: String,
    required: true,
  },
  questionYear: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  questions: [
    {
      questionTitle: {
        type: String,
        required: true,
      },
      p: {
        type: String,
      },
      suggestions: [],
      correct: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Questions", questionSchema);

const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questionYear: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  questions: [
    {
      qustionTitle: {
        type: String,
        required: true,
      },
      p: {
        type: String,
      },

      suggestions: [
        {
          a: {
            type: String,
            required: true,
          },
          b: {
            type: String,
            required: true,
          },
          c: {
            type: String,
            required: true,
          },
          d: {
            type: String,
            required: true,
          },

          correct: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Questions", questionSchema);

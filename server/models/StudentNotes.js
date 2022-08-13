const mongoose = require("mongoose");

const studentNotesSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
  },
  noteTitle: {
    type: String,
    required: true,
  },
  noteBody: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("StudentNotes", studentNotesSchema);

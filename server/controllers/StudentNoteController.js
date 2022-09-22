const StudentNotes = require("../models/StudentNotes");

module.exports.creataNewStudentNote = async (req, res) => {
  const { studentId, noteTitle, noteBody } = req.body;
  try {
    if (!studentId || !noteTitle || !noteBody) {
      return;
    }
    const studentNote = await StudentNotes.create(req.body);
    res.status(201).json({
      message: "Student note created successfully",
      studentNote,
    });
  } catch (error) {
    console.log(error);
  }
};

//get notes by studentsId
module.exports.getNotesByStudentId = async (req, res) => {
  const { studentId } = req.params;
  try {
    if (!studentId) {
      throw new Error("Missing required fields");
    }
    const studentNotes = await StudentNotes.find({ studentId });
    if (studentNotes.length === 0) {
      return res.status(200).json({
        message: "No Notes Yet",
        notes: [],
      });
    }
    res.status(200).json({
      message: "here are your notes",
      // notes,
    });
  } catch (error) {
    console.log(error);
  }
};

//update notes by notesId
module.exports.updateNotesByNotesId = async (req, res) => {
  const { studentId, noteId } = req.params;
  try {
    if (!studentId || !noteId || !req.body) {
      throw new Error("Missing required fields");
    }
    const studentNote = await StudentNotes.findById(noteId);
    if (!studentNote) {
      return res.status(404).json({
        message: "Student note not found",
      });
    }
    const updatedStudentNote = await StudentNotes.findByIdAndUpdate(
      noteId,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedStudentNote);
  } catch (error) {
    console.log(error);
  }
};

module.exports.updateNotesByStudentId = async (req, res) => {
  const { studentId } = req.params;
  try {
    if (!studentId) {
      throw new Error("Missing required fields");
    }
    const studentNotes = await StudentNotes.findByIdAndUpdate(
      studentId,
      req.body,
      { new: true }
    );
    res.status(200).json(studentNotes);
  } catch (error) {
    console.log(error.message);
  }
};

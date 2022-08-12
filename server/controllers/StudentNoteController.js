const StudentNotes = require("../models/StudentNotes");

module.exports.createStudent = async (req, res) => {
  const { studentId, noteTitle, noteBody } = req.body;
  try {
    if (!studentId || !noteTitle || !noteBody) {
      throw new Error("Missing required fields");
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
    res.status(200).json(studentNotes);
  } catch (error) {
    console.log(error);
  }
};

//update notes by studentsId
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
    console.log(error);
  }
};

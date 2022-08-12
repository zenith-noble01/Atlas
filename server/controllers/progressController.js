const Progress = require("../models/progress");

module.exports.createProgress = async (req, res) => {
  const { studentId, questionYear, progressScore, progressDate } = req.body;
  try {
    if (!studentId || !questionYear || !progressScore || !progressDate) {
      throw new Error("Missing required fields");
    }
    const progress = await Progress.create(req.body);
    res.status(201).json({
      message: "Progress created successfully",
      progress,
    });
  } catch (error) {
    console.log(error);
  }
};

//gget notes by studentsId
module.exports.getProgressByStudentId = async (req, res) => {
  const { studentId } = req.params;
  try {
    if (!studentId) {
      throw new Error("Missing required fields");
    }
    const progress = await Progress.find({ studentId });
    res.status(200).json(progress);
  } catch (error) {
    console.log(error);
  }
};

//update the progress by studentsId
module.exports.updateProgressByStudentId = async (req, res) => {
  const { studentId } = req.params;
  try {
    if (!studentId) {
      throw new Error("Missing required fields");
    }
    const progress = await Progress.findByIdAndUpdate(studentId, req.body, {
      new: true,
    });
    res.status(200).json(progress);
  } catch (error) {
    console.log(error);
  }
};

const Question = require("../models/Questions");
// const { questions } = require("../data/questions");

//creating newQuestions
module.exports.createQuestion = async (req, res) => {
  try {
    const { questionYear } = req.body;
    const oldYear = await Question.findOne({ questionYear });
    if (oldYear) {
      return res.status(400).json({
        message: "This year already exists in the database",
      });
    }
    const newQuestion = await Question.create(req.body);
    // console.log(req.body);
    res.status(201).json(newQuestion);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.getAllQuestions = async (req, res) => {
  try {
    const allQuestions = await Question.find();
    res.status(200).json(allQuestions);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.updateAQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({
        message: "Question not found",
      });
    }
    question.questions.push(req.body);
    await question.save();
    res.status(200).json(question);
    // const
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.updateOneQuestion = async (req, res) => {
  try {
    const question = await Question.questions.findById(req.params.id);
    if (!question) {
      return res.status(404).json({
        message: "Question not found",
      });
    }
    question.questions.push(req.body);
    await question.save();
    res.status(200).json(question);
    // const
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.getQuestionByYear = async (req, res) => {
  try {
    const question = await Question.findById(req.params.year);

    if (!question) {
      return res.status(404).json({
        message: "Question year not found",
      });
    }
    if (question) return res.status(200).json(question);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.getJustYears = async (req, res) => {
  try {
    const years = await Question.find();
    const { questions, ...others } = years._doc;
    res.status(200).json(others);
  } catch (error) {
    console.log(error.message);
  }
};

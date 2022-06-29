const {
  createQuestion,
  getAllQuestions,
  updateAQuestion,
  updateOneQuestion,
  getQuestionByYear,
  getJustYears,
} = require("../controllers/questionsController");

const router = require("express").Router();

router.post("/", createQuestion);
router.get("/", getAllQuestions);
router.put("/:id", updateAQuestion);
router.put("/q/:id", updateOneQuestion);
router.get("/q/:year", getQuestionByYear);
router.get("/ques", getJustYears);

module.exports = router;

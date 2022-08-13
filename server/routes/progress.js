const router = require("express").Router();

const {
  createProgress,
  getProgressByStudentId,
  updateProgressByStudentId,
} = require("../controllers/progressController");

router.post("/", createProgress);
router.get("/:studentId", getProgressByStudentId);
router.put("/:studentId", updateProgressByStudentId);

module.exports = router;

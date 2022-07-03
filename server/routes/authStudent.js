const {
  createStudent,
  loginStudent,
  verifyStudent,
} = require("../controllers/authStudent");

const router = require("express").Router();

router.post("/register", createStudent);
router.post("/login", loginStudent);
router.get("/verify/:id", verifyStudent);

module.exports = router;

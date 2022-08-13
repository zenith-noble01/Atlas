const router = require("express").Router();
const {
  creataNewStudentNote,
  getNotesByStudentId,
  updateNotesByNotesId,
} = require("../controllers/StudentNoteController");

router.post("/", creataNewStudentNote);
router.get("/:studentId", getNotesByStudentId);
router.put("/:studentId/:noteId", updateNotesByNotesId);

module.exports = router;

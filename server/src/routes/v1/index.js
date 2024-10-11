const express = require("express");
const ProgramController = require("../../controllers/index");

const router = express.Router();

// Routes for Program
router.post("/programs", ProgramController.createProgram);

router.get("/programs", ProgramController.getPrograms);
router.get("/programs/:id", ProgramController.getProgram);

// Routes for Track
router.post("/tracks", ProgramController.createTrack);

router.get("/tracks/:id", ProgramController.getTrack);

module.exports = router;

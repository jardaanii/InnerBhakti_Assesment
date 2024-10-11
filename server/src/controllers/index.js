const { StatusCodes } = require("http-status-codes");
const ProgramService = require("../services/index");

const programService = new ProgramService();

const createProgram = async (req, res, next) => {
  try {
    const program = await programService.createProgram({ ...req.body });
    res.status(StatusCodes.CREATED).json(program);
  } catch (error) {
    console.error("Error in createProgram controller:", error.message);
    next(error);
  }
};

const getPrograms = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const result = await programService.getPrograms(
      parseInt(page),
      parseInt(limit)
    );
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    console.error("Error in getPrograms controller:", error.message);
    next(error);
  }
};

const getProgram = async (req, res, next) => {
  try {
    const program = await programService.getProgram(req.params.id);
    res.status(StatusCodes.OK).json(program);
  } catch (error) {
    console.error("Error in getProgram controller:", error.message);
    next(error);
  }
};

const createTrack = async (req, res, next) => {
  try {
    const track = await programService.createTrack(req.body);
    res.status(StatusCodes.CREATED).json(track);
  } catch (error) {
    console.error("Error in createTrack controller:", error.message);
    next(error);
  }
};

const getTrack = async (req, res, next) => {
  try {
    const track = await programService.getTrack(req.params.id);
    res.status(StatusCodes.OK).json(track);
  } catch (error) {
    console.error("Error in getTrack controller:", error.message);
    next(error);
  }
};

// Exporting the functions
module.exports = {
  createProgram,
  getPrograms,
  getProgram,
  createTrack,
  getTrack,
};

// services/programService.js
const ProgramRepository = require("../repository/index");
const { NotFoundError } = require("../utils/errors");

class ProgramService {
  constructor() {
    this.programRepository = new ProgramRepository();
  }

  async createProgram(data) {
    try {
      return await this.programRepository.createProgram(data);
    } catch (error) {
      console.error("Error in ProgramService's createProgram:", error.message);
      throw error;
    }
  }

  async getPrograms(page, limit) {
    try {
      const skip = (page - 1) * limit;
      const [programs, total] = await Promise.all([
        this.programRepository.findAll(skip, limit),
        this.programRepository.count(),
      ]);

      return {
        programs,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalItems: total,
      };
    } catch (error) {
      console.error("Error in ProgramService's getPrograms:", error.message);
      throw error;
    }
  }

  async getProgram(id) {
    try {
      const program = await this.programRepository.findById(id);
      if (!program) {
        throw new NotFoundError("Program not found");
      }
      return program;
    } catch (error) {
      console.error("Error in ProgramService's getProgram:", error.message);
      throw error;
    }
  }

  async createTrack(data) {
    try {
      return await this.programRepository.createTrack(data);
    } catch (error) {
      console.error("Error in ProgramService's createTrack:", error.message);
      throw error;
    }
  }

  async getTrack(id) {
    try {
      const track = await this.programRepository.findtrackById(id);
      if (!track) {
        throw new NotFoundError("Track not found");
      }
      return track;
    } catch (error) {
      console.error("Error in ProgramService's getTrack:", error.message);
      throw error;
    }
  }
}

module.exports = ProgramService;

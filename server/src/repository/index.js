// repository/programRepository.js
const Program = require("../models/programs");
const Track = require("../models/tracks");

class ProgramRepository {
  async createProgram(data) {
    try {
      const program = new Program({ ...data });
      await program.save();
      return program;
    } catch (error) {
      console.error(
        "Error in ProgramRepository's createProgram:",
        error.message
      );
      throw error;
    }
  }

  async findAll(skip, limit) {
    try {
      return Program.find().skip(skip).limit(limit);
    } catch (error) {
      console.error("Error in ProgramRepository's findAll:", error.message);
      throw error;
    }
  }

  async count() {
    try {
      return Program.countDocuments();
    } catch (error) {
      console.error("Error in ProgramRepository's count:", error.message);
      throw error;
    }
  }

  async findById(id) {
    try {
      return Program.findById(id).populate("tracks");
    } catch (error) {
      console.error("Error in ProgramRepository's findById:", error.message);
      throw error;
    }
  }

  async createTrack(data) {
    try {
      const track = new Track(data);
      await track.save();

      const prog = await Program.findById(data.program);
      prog.tracks?.push(track._id.toString());
      await prog.save();

      return track;
    } catch (error) {
      console.error("Error in ProgramRepository's createTrack:", error.message);
      throw error;
    }
  }

  async findtrackById(id) {
    try {
      return Track.findById(id);
    } catch (error) {
      console.error(
        "Error in ProgramRepository's findtrackById:",
        error.message
      );
      throw error;
    }
  }
}

module.exports = ProgramRepository;

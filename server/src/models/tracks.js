const mongoose = require("mongoose");

const TrackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  audioUrl: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  program: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Program",
    required: true,
  },
});

module.exports = mongoose.model("Track", TrackSchema);

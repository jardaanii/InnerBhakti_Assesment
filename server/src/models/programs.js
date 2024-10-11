const mongoose = require("mongoose");

const ProgramSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  tracks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Track",
    },
  ],
});

module.exports = mongoose.model("Program", ProgramSchema);

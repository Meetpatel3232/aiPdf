const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },

    originalName: {
      type: String,
      required: true,
    },

    uploadedBy: {
      type: String,
      default: "guest",
    },

    totalChunks: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["processing", "completed", "failed"],
      default: "processing",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Document", documentSchema);
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const uploadRoutes = require("./routes/uploadRoutes");
const chatRoutes = require("./routes/chatRoutes");
const conversationRoutes = require("./routes/conversationRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/upload", uploadRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/conversations", conversationRoutes);
app.use("/api/auth", authRoutes);

console.log("✅ Chat routes registered");

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to DockMind AI Backend",
  });
});

module.exports = app;

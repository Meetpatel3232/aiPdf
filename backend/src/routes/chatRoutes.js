const express = require("express");
const router = express.Router();

console.log("✅ chatRoutes loaded");

const { ask } = require("../controllers/chatController");
const protect = require("../middleware/authMiddleware");


router.post("/ask", protect, ask);

module.exports = router;
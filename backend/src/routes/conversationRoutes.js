const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  getConversations,
  getConversationMessages,
  deleteConversation,
  renameConversation,
} = require("../controllers/conversationController");

router.get("/", protect, getConversations);

router.get(
  "/:conversationId/messages",
  protect,
  getConversationMessages
);
router.delete(
  "/:conversationId",
  protect,
  deleteConversation
);

router.patch(
  "/:conversationId",
  protect,
  renameConversation
);

module.exports = router;

const Conversation = require("../models/Conversation");

const getAllConversations = async (userId) => {
  return await Conversation.find({ userId })
    .sort({ updatedAt: -1 })
    .select("_id title documentId updatedAt");
};

module.exports = {
  getAllConversations,
};
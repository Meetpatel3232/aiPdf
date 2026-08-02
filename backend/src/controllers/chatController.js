const { askQuestion } = require("../services/chatService");

const ask = async (req, res) => {

  console.log("Body:", req.body);
  console.log("Headers:", req.headers);
  
  try {
    const { conversationId, question } = req.body;

    if (!conversationId) {
      return res.status(400).json({
        success: false,
        message: "Conversation ID is required",
      });
    }

    if (!question || question.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Question is required",
      });
    }

    console.log("BODY:", req.body);
console.log("USER:", req.user._id);

    const answer = await askQuestion(
    req.user._id,
    conversationId,
    question
);

    res.status(200).json({
      success: true,
      question,
      answer,
    });
  } catch (error) {
    console.error("Chat Controller Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to generate answer",
    });
  }
};

module.exports = {
  ask,
};

const {
  getAllConversations,
} = require("../services/conversationService");

const getConversations = async (req, res) => {
  try {
    console.log("Logged User:", req.user._id);

const conversations = await getAllConversations(req.user._id);



    res.status(200).json({
      success: true,
      conversations,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch conversations",
    });
  }
};

const Message = require("../models/Message");
const Conversation = require("../models/Conversation");

const getConversationMessages = async (req, res) => {
  try {
    const { conversationId } = req.params;

    const messages = await Message.find({
      conversationId,
    }).sort({
      createdAt: 1,
    });


    res.json({
      success: true,
      messages,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const deleteConversation = async (req, res) => {
  try {
    const { conversationId } = req.params;

    const conversation = await Conversation.findOne({
      _id: conversationId,
      userId: req.user._id,
    });

    if (!conversation) {
      return res.status(404).json({
        success: false,
        message: "Conversation not found",
      });
    }

    await Conversation.findByIdAndDelete(conversationId);

    await Message.deleteMany({
      conversationId,
    });

    res.json({
      success: true,
      message: "Conversation deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const renameConversation = async (req, res) => {
  try {
    const { conversationId } = req.params;
    const { title } = req.body;

    const conversation = await Conversation.findOneAndUpdate(
      {
        _id: conversationId,
        userId: req.user._id,
      },
      {
        title,
      },
      {
        new: true,
      }
    );

    if (!conversation) {
      return res.status(404).json({
        success: false,
        message: "Conversation not found",
      });
    }

    res.json({
      success: true,
      conversation,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getConversations,
  getConversationMessages,
  deleteConversation,
  renameConversation,
};
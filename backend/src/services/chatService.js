const ai = require("../config/gemini");
const DocumentChunk = require("../models/DocumentChunk");
const Message = require("../models/Message");
const { generateEmbedding } = require("./embeddingService");
const { buildPrompt } = require("../prompts/ragPrompt");

const askQuestion = async (
    userId,
    conversationId,
    question
) => {
  try {
    await Message.create({
    userId,
    conversationId,
    role: "user",
    content: question,
});

    const questionEmbedding = await generateEmbedding(question);

    const searchResults = await DocumentChunk.aggregate([
      {
        $vectorSearch: {
          index: "vector_index",
          path: "embedding",
          queryVector: questionEmbedding,
          numCandidates: 50,
          limit: 5,
        },
      },
      {
        $lookup: {
          from: "documents",
          localField: "documentId",
          foreignField: "_id",
          as: "document",
        },
      },
      {
        $unwind: "$document",
      },
      {
        $project: {
          text: 1,
          chunkIndex: 1,
          documentName: "$document.originalName",
          score: {
            $meta: "vectorSearchScore",
          },
        },
      },
    ]);

    if (searchResults.length === 0) {
      return "I couldn't find any relevant information in the uploaded document.";
    }

    const context = searchResults.map((chunk) => chunk.text).join("\n\n");

    const prompt = buildPrompt(context, question);

    console.log("Model from ENV:", process.env.GEMINI_MODEL);

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL,
      contents: prompt,
    });


    const answer = response.text;

    await Message.create({
    userId,
    conversationId,
    role: "assistant",
    content: answer,
});

    return answer;
  } catch (error) {
    console.error("Chat Service Error:", error);
    throw error;
  }
};

module.exports = {
  askQuestion,
};

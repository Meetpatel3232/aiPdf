const path = require("path");

const { extractTextFromPDF } = require("../services/pdfService");
const { splitTextIntoChunks } = require("../services/chunkService");
const { generateEmbedding } = require("../services/embeddingService");
const Conversation = require("../models/Conversation");
const Document = require("../models/Document");
const DocumentChunk = require("../models/DocumentChunk");
const uploadPDF = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No PDF uploaded",
      });
    }

    const filePath = path.join(__dirname, "..", "uploads", req.file.filename);

    const extractedText = await extractTextFromPDF(filePath);

    const chunks = await splitTextIntoChunks(extractedText);

    const document = await Document.create({
      
  filename: req.file.filename,
  originalName: req.file.originalname,
  totalChunks: chunks.length,
  status: "processing",
});

const count = await Document.countDocuments();

console.log("Total Documents:", count);

const conversation = await Conversation.create({
  userId: req.user._id,
  documentId: document._id,
  title: req.file.originalname,
});

    const chunkDocuments = [];

for (let index = 0; index < chunks.length; index++) {

  console.log(`Embedding ${index + 1}/${chunks.length}`);

  const chunk = chunks[index];

  const embedding = await generateEmbedding(chunk.pageContent);

  chunkDocuments.push({
    documentId: document._id,
    chunkIndex: index,
    text: chunk.pageContent,
    embedding,
  });
}

await DocumentChunk.insertMany(chunkDocuments);

    document.status = "completed";
    await document.save();

    res.status(201).json({
  success: true,
  message: "PDF processed successfully.",

  document: {
    _id: document._id,
    originalName: document.originalName,
    totalChunks: document.totalChunks,
  },

  conversation: {
    _id: conversation._id,
    title: conversation.title,
    documentId: conversation.documentId,
    createdAt: conversation.createdAt,
  },
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
  uploadPDF,
};

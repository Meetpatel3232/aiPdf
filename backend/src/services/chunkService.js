const { RecursiveCharacterTextSplitter } = require("@langchain/textsplitters");

const splitTextIntoChunks = async (text) => {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1500,
    chunkOverlap: 200,
  });

  const chunks = await splitter.createDocuments([text]);

  console.log("Total Chunks:", chunks.length);

  return chunks;
};

module.exports = {
  splitTextIntoChunks,
};

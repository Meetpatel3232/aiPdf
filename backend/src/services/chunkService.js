const { RecursiveCharacterTextSplitter } = require("@langchain/textsplitters");

const splitTextIntoChunks = async (text) => {
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200,
    });

    const chunks = await splitter.createDocuments([text]);

    return chunks;
};

module.exports = {
    splitTextIntoChunks,
};
const { MemoryVectorStore } = require("langchain/vectorstores/memory");

let vectorStore = null;

async function createVectorStore(embeddingsModel, chunks) {

    vectorStore = await MemoryVectorStore.fromDocuments(
        chunks,
        embeddingsModel
    );

    return vectorStore;
}

function getVectorStore() {
    return vectorStore;
}

module.exports = {
    createVectorStore,
    getVectorStore
};
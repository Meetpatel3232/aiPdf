const fs = require("fs");
const pdfParse = require("pdf-parse");

const extractTextFromPDF = async (filePath) => {
    try {
        console.log("Reading file:", filePath);

        const dataBuffer = fs.readFileSync(filePath);

        const pdfData = await pdfParse(dataBuffer);

        return pdfData.text;

    } catch (error) {
        console.error("PDF Parse Error:", error);
        throw error; 
    }
};

module.exports = {
    extractTextFromPDF
};
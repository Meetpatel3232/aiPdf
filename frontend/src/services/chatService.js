import api from "./api";

export const askQuestion = async (
  conversationId,
  question
) => {
  const response = await api.post("/chat/ask", {
    conversationId,
    question,
  });

  return response.data;
};
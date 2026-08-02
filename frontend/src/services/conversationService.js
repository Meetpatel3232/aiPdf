import axios from "axios";

const API = "http://localhost:5000/api/conversations";

export const getConversations = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get(API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.conversations;
};

export const deleteConversation = async (conversationId) => {
  const token = localStorage.getItem("token");

  const response = await axios.delete(
    `${API}/${conversationId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const renameConversation = async (
  conversationId,
  title
) => {
  const token = localStorage.getItem("token");

  const response = await axios.patch(
    `${API}/${conversationId}`,
    { title },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.conversation;
};
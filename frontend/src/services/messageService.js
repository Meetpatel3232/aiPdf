import axios from "axios";

const API = "http://localhost:5000/api/conversations";

export const getMessages = async (conversationId) => {
  const token = localStorage.getItem("token");

  const response = await axios.get(
    `${API}/${conversationId}/messages`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.messages;
};
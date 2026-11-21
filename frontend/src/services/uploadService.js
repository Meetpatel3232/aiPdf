import api from "./api";

export const uploadDocument = async (file) => {
  const formData = new FormData();
  formData.append("pdf", file);

  const response = await api.post("/api/upload", formData);

  return response.data;
};
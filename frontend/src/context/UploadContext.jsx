import { createContext, useContext, useState } from "react";
import { STATUS } from "../utils/status";

const UploadContext = createContext();

export const UploadProvider = ({ children }) => {
  const resetChat = () => {
  setConversationId(null);
  setCurrentDocument(null);
  setMessages([]);
  setStatus(STATUS.IDLE);
};
  const [status, setStatus] = useState(STATUS.IDLE);
  const [documents, setDocuments] = useState([]);
  const [currentDocument, setCurrentDocument] = useState(null);
  const [messages, setMessages] = useState([]);
  const [conversationId, setConversationId] = useState(null);

  const value = {
    status,
    setStatus,

    documents,
    setDocuments,

    currentDocument,
    setCurrentDocument,

    conversationId,
    setConversationId,

    messages,
    setMessages,

    resetChat,
  };

  return (
    <UploadContext.Provider value={value}>
      {children}
    </UploadContext.Provider>
  );
};

export const useUpload = () => {
  return useContext(UploadContext);
};
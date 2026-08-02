import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import { askQuestion } from "../../services/chatService";
import { useUpload } from "../../context/UploadContext";

const ChatInput = ({ onQuestionAsked, onAnswerReceived }) => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const { conversationId } = useUpload();

  const handleAsk = async () => {
    if (!question.trim()) return;

    try {
      setLoading(true);

      const currentQuestion = question;

      setQuestion("");

      onQuestionAsked(currentQuestion);

      console.log("Conversation ID:", conversationId);

      const response = await askQuestion(conversationId, currentQuestion);

      await onAnswerReceived(response.answer);

      toast.success("Answer received!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to get answer");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-violet-900 rounded-2xl bg-slate-900 p-3 flex items-center gap-3">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAsk();
          }
        }}
        placeholder="Ask anything about your document..."
        className="
          flex-1
          bg-transparent
          outline-none
          text-white
          placeholder:text-slate-500
        "
      />

      <button
        onClick={handleAsk}
        disabled={loading}
        className="
          p-3
          rounded-xl
          bg-violet-600
          hover:bg-violet-700
          transition
          disabled:opacity-50
        "
      >
        <IoSendSharp className="text-white text-xl" />
      </button>
    </div>
  );
};

export default ChatInput;

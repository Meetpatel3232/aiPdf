import { FiPlus } from "react-icons/fi";
import { useUpload } from "../../context/UploadContext";
import toast from "react-hot-toast";

const NewChatButton = () => {
  const { resetChat } = useUpload();

  const handleNewChat = () => {
    resetChat();

    toast.success("Start by uploading a new PDF");
  };

  return (
    <button
      onClick={handleNewChat}
      className="
        w-full
        flex
        items-center
        justify-center
        gap-2
        bg-violet-600
        hover:bg-violet-700
        text-white
        rounded-xl
        py-3
        transition
      "
    >
      <FiPlus />
      New Chat
    </button>
  );
};

export default NewChatButton;
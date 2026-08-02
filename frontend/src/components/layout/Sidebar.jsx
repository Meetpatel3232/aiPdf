import { useState, useEffect } from "react";
import ConversationList from "../sidebar/ConversationList";
import NewChatButton from "../sidebar/NewChatButton";
import { getMessages } from "../../services/messageService";
import { useUpload } from "../../context/UploadContext";
import { STATUS } from "../../utils/status";
import toast from "react-hot-toast";
import {
  getConversations,
  deleteConversation,
  renameConversation,
} from "../../services/conversationService";
import SidebarHeader from "../sidebar/SidebarHeader";
import SearchBar from "../sidebar/SearchBar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FiMenu, FiX } from "react-icons/fi";

const Sidebar = () => {
  const navigate = useNavigate();

  const { logout, user } = useAuth();
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { documents, setDocuments, setConversationId, setMessages, setStatus } =
    useUpload();

  const filteredDocuments = documents.filter((conversation) =>
    conversation.title.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    loadConversations();
  }, []);

  const loadConversations = async () => {
    try {
      const data = await getConversations();

      setDocuments(data);
    } catch (error) {
      console.error("Load Error:", error);
    }
  };
  const handleSelectConversation = async (conversation) => {
    try {
      setSelectedConversation(conversation._id);

      setConversationId(conversation._id);

      const messages = await getMessages(conversation._id);

      const formattedMessages = messages.map((message) => ({
        role: message.role,
        text: message.content,
        loading: false,
      }));

      setMessages(formattedMessages);

      setStatus(STATUS.READY);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteConversation = async (conversationId) => {
    const confirmDelete = window.confirm(
      "Delete this conversation permanently?",
    );

    if (!confirmDelete) return;

    try {
      await deleteConversation(conversationId);

      setDocuments((prev) => prev.filter((doc) => doc._id !== conversationId));

      if (selectedConversation === conversationId) {
        setSelectedConversation(null);
        setConversationId(null);
        setMessages([]);
        setStatus(STATUS.IDLE);
      }

      toast.success("Conversation deleted!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete conversation");
    }
  };

  const handleRenameConversation = async (conversation) => {
    const newTitle = prompt("Enter new conversation name", conversation.title);

    if (!newTitle || newTitle.trim() === "") return;

    try {
      const updatedConversation = await renameConversation(
        conversation._id,
        newTitle,
      );

      setDocuments((prev) =>
        prev.map((doc) =>
          doc._id === conversation._id ? updatedConversation : doc,
        ),
      );

      toast.success("Conversation renamed!");
    } catch (error) {
      console.error(error);
      toast.error("Rename failed");
    }
  };

  const handleLogout = () => {
    logout();

    toast.success("Logged out successfully");

    navigate("/login");
  };

  return (
  <>
    <div className="md:hidden flex items-center justify-between h-16 px-4 bg-slate-900 border-b border-violet-900">
      <button
        onClick={() => setSidebarOpen(true)}
        className="text-white text-2xl"
      >
        <FiMenu />
      </button>

      <h1 className="text-lg font-bold text-white">
        DockMind AI
      </h1>

      <div className="w-7" />
    </div>

    {sidebarOpen && (
      <div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={() => setSidebarOpen(false)}
      />
    )}

    <aside
      className={`
        fixed
        top-0
        left-0
        z-50
        h-screen
        w-72
        bg-slate-900
        border-r
        border-violet-900
        flex
        flex-col
        transform
        transition-transform
        duration-300
        md:static
        md:translate-x-0
        md:flex
        md:h-auto
        md:w-64
        lg:w-72
        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }
      `}
    >

      <div className="md:hidden flex justify-end p-4">
        <button
          onClick={() => setSidebarOpen(false)}
          className="text-white text-2xl"
        >
          <FiX />
        </button>
      </div>

      <div className="p-4 lg:p-5">
        <SidebarHeader />

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <NewChatButton />
      </div>

      <div className="flex-1 overflow-y-auto px-4 lg:px-5">
        <ConversationList
          conversations={filteredDocuments}
          selectedConversation={selectedConversation}
          onSelect={(conversation) => {
            handleSelectConversation(conversation);

            if (window.innerWidth < 768) {
              setSidebarOpen(false);
            }
          }}
          onDelete={handleDeleteConversation}
          onRename={handleRenameConversation}
        />
      </div>

      <div className="border-t border-violet-900 p-4 lg:p-5 space-y-3">
        <div>
          <p className="text-white font-semibold text-sm lg:text-base">
            {user?.name}
          </p>

          <p className="text-slate-400 text-xs lg:text-sm break-all">
            {user?.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 rounded-lg py-2.5 text-white font-medium transition"
        >
          Logout
        </button>
      </div>
    </aside>
  </>
);
}

export default Sidebar;

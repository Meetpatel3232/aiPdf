import { FaTrash, FaPen } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";

const ConversationItem = ({
  conversation,
  active,
  onClick,
  onDelete,
  onRename,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
  }, []);

  return (
    <div
      className={`
        relative
        group
        rounded-xl
        transition

        ${
          active
            ? "bg-violet-700"
            : "hover:bg-slate-800"
        }
      `}
    >
      <button
        onClick={() => onClick(conversation)}
        className="w-full flex items-center justify-between px-4 py-3"
      >
        <span className="truncate text-left text-sm text-white">
          {conversation.title}
        </span>

        <HiDotsHorizontal
          onClick={(e) => {
            e.stopPropagation();
            setOpenMenu(!openMenu);
          }}
          className="
            text-slate-400
            opacity-0
            group-hover:opacity-100
            hover:text-white
            transition
            text-lg
          "
        />
      </button>

      {openMenu && (
        <div
          ref={menuRef}
          className="
            absolute
            right-3
            top-12
            w-44
            rounded-xl
            border
            border-violet-900
            bg-slate-900
            shadow-xl
            z-50
            overflow-hidden
          "
        >
          <button
  onClick={() => {
    setOpenMenu(false);
    onRename(conversation);
  }}
  className="
    w-full
    flex
    items-center
    gap-3
    px-4
    py-3
    text-slate-200
    hover:bg-slate-800
    hover:text-white
    transition
  "
>
  <FaPen className="text-violet-400" />
  <span>Rename</span>
</button>

          <button
            onClick={() => {
              setOpenMenu(false);
              onDelete(conversation._id);
            }}
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              text-red-400
              hover:bg-red-900/20
            "
          >
            <FaTrash />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ConversationItem;


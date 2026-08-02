import ConversationItem from "./ConversationItem";

const ConversationList = ({
  conversations,
  selectedConversation,
  onSelect,
  onDelete,
  onRename,
}) => {

  return (
    <div className="flex flex-col gap-2 mt-4">
      {conversations.length === 0 ? (
        <p className="text-center text-slate-500 py-8">
          No conversations found
        </p>
      ) : (
        conversations.map((conversation) => (
          <ConversationItem
            key={conversation._id}
            conversation={conversation}
            active={selectedConversation === conversation._id}
            onClick={onSelect}
            onDelete={onDelete}
            onRename={onRename}
          />
        ))
      )}
    </div>
  );
};

export default ConversationList;
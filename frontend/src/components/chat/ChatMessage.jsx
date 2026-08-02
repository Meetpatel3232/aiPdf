import ReactMarkdown from "react-markdown";
import { LuCopy } from "react-icons/lu";
import toast from "react-hot-toast";

const ChatMessage = ({ role, text, loading }) => {
  const isUser = role === "user";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    toast.success("Copied!");
  };

  return (
    <div className={`flex mb-6 ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-[95%]
sm:max-w-[90%]
md:max-w-[80%]
lg:max-w-[75%]
          px-4
py-3
md:px-5
md:py-4
          rounded-2xl
          whitespace-pre-wrap
          break-words
          shadow-lg

          ${
            isUser
              ? "bg-violet-600 text-white"
              : "bg-slate-900 border border-violet-900 text-slate-100"
          }
        `}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-violet-400 animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-violet-400 animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-2 h-2 rounded-full bg-violet-400 animate-bounce [animation-delay:0.4s]"></div>

            <span className="ml-2 text-slate-300">Thinking...</span>
          </div>
        ) : (

          <ReactMarkdown
            components={{
              h1({ children }) {
                return <h1 className="text-2xl md:text-3xl font-bold mb-4">{children}</h1>;
              },

              h2({ children }) {
                return (
                  <h2 className="text-xl md:text-2xl font-semibold mt-5 mb-3">
                    {children}
                  </h2>
                );
              },

              h3({ children }) {
                return (
                  <h3 className="text-lg md:text-xl font-semibold mt-4 mb-2">
                    {children}
                  </h3>
                );
              },

              p({ children }) {
                return (
                  <p className="leading-7 md:leading-8 mb-3 text-slate-200">{children}</p>
                );
              },

              ul({ children }) {
                return (
                  <ul className="list-disc ml-6 my-3 space-y-2">{children}</ul>
                );
              },

              ol({ children }) {
                return (
                  <ol className="list-decimal ml-6 my-3 space-y-2">
                    {children}
                  </ol>
                );
              },

              li({ children }) {
                return <li>{children}</li>;
              },

              blockquote({ children }) {
                return (
                  <blockquote className="border-l-4 border-violet-500 pl-4 italic my-4 text-slate-300">
                    {children}
                  </blockquote>
                );
              },

              a({ href, children }) {
                return (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-violet-400 underline hover:text-violet-300"
                  >
                    {children}
                  </a>
                );
              },

              strong({ children }) {
                return (
                  <strong className="font-bold text-white">{children}</strong>
                );
              },

              em({ children }) {
                return <em className="italic text-slate-300">{children}</em>;
              },

              hr() {
                return <hr className="my-6 border-slate-700" />;
              },

              table({ children }) {
                return (
                  <div className="overflow-x-auto my-5">
                    <table className="w-full border border-slate-700 border-collapse">
                      {children}
                    </table>
                  </div>
                );
              },

              thead({ children }) {
                return <thead className="bg-slate-800">{children}</thead>;
              },

              th({ children }) {
                return (
                  <th className="border border-slate-700 px-4 py-2 text-left">
                    {children}
                  </th>
                );
              },

              td({ children }) {
                return (
                  <td className="border border-slate-700 px-4 py-2">
                    {children}
                  </td>
                );
              },

              code({ inline, children }) {
                if (inline) {
                  return (
                    <code className="bg-slate-800 px-1.5 py-1 rounded text-violet-300 text-sm">
                      {children}
                    </code>
                  );
                }

                return (
                  <pre className="bg-slate-950 border border-slate-700 rounded-xl p-3 md:p-4 text-sm overflow-x-auto my-4">
                    <code>{children}</code>
                  </pre>
                );
              },
            }}
          >
            {text}
          </ReactMarkdown>
        )}

        {!loading && !isUser && (
          <div className="flex justify-end mt-5">
            <button
              onClick={handleCopy}
              className="
                flex
                items-center
                gap-2
                text-slate-400
                hover:text-violet-400
                transition
                text-sm
              "
            >
              <LuCopy />
             Copy Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;

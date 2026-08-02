import { useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import { useEffect, useRef } from "react";
import { typingEffect } from "../../utils/typingEffect";
import { useUpload } from "../../context/UploadContext";

const ChatScreen = () => {
  const { messages, setMessages } = useUpload();
  const messagesEndRef = useRef(null);

  const handleQuestionAsked = (question) => {
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: question,
      },
      {
        role: "assistant",
        text: "",
        loading: true,
      },
    ]);
  };

  const handleAnswerReceived = async (answer) => {
    setMessages((prev) => {
      const updated = [...prev];

      updated[updated.length - 1] = {
        role: "assistant",
        text: "",
        loading: false,
      };

      return updated;
    });

    await new Promise((resolve) => setTimeout(resolve, 0));

    await typingEffect(answer, (currentText) => {
      setMessages((prev) => {
        const updated = [...prev];

        updated[updated.length - 1] = {
          role: "assistant",
          text: currentText,
          loading: false,
        };

        return updated;
      });
    });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="w-full h-full max-w-5xl mx-auto flex flex-col">
      <div
        className="
    flex-1
    overflow-y-auto
    px-4
    md:px-6
    lg:px-8
    py-6
    md:py-8
  "
      >
        {messages.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">
            <div className="text-center">
              <h2
                className="
    text-2xl
    md:text-3xl
    font-bold
    text-white
  "
              >
                DockMind AI
              </h2>

              <p
                className="
    mt-3
    text-sm
    md:text-base
    text-slate-400
  "
              >
                Ask anything about your uploaded PDF.
              </p>
            </div>
          </div>
        ) : (
          messages.map((message, index) => (
            <ChatMessage
              key={index}
              role={message.role}
              text={message.text}
              loading={message.loading}
            />
          ))
        )}

        <div ref={messagesEndRef}></div>
      </div>

      <div
        className="
    px-4
    md:px-6
    lg:px-8
    pt-3
    pb-4
    md:pb-6
  "
      >
        <ChatInput
          onQuestionAsked={handleQuestionAsked}
          onAnswerReceived={handleAnswerReceived}
        />
      </div>
    </div>
  );
};

export default ChatScreen;

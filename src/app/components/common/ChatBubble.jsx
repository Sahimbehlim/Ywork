"use client";

export default function ChatBubble({ message }) {
  const isUser = message?.sender === "user";
  const isTyping = message?.typing;

  return (
    <div
      className={`flex flex-col gap-1 ${isUser ? "items-end" : "items-start"}`}
    >
      <div
        className={`max-w-xs md:max-w-md px-5 py-3 rounded-t-2xl ${
          isUser
            ? "bg-primary text-white rounded-l-2xl"
            : "bg-[#f0f0f5] rounded-r-2xl"
        }`}
      >
        {!isUser && isTyping ? (
          <span className="animate-pulse text-gray-600">Typing...</span>
        ) : (
          message?.text
        )}
      </div>
      <p className="ps-1 text-sm text-gray-500">
        {isUser ? "Sent ~ " : isTyping ? "" : "Received ~ "}
        {message?.currentTime || ""}
      </p>
    </div>
  );
}

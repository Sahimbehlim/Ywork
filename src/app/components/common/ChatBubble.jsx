"use client";

export default function ChatBubble({ message, time, type }) {
  const isUser = type === "user";

  return (
    <div className={`flex flex-col gap-1 items-${isUser ? "end" : "start"}`}>
      <div
        className={`max-w-xs md:max-w-md px-5 py-3 rounded-t-2xl ${
          isUser
            ? "bg-primary text-white rounded-l-2xl"
            : "bg-[#f0f0f5] rounded-r-2xl"
        }`}
      >
        {message}
      </div>
      <p className="ps-1 text-sm text-gray-500">{time}</p>
    </div>
  );
}

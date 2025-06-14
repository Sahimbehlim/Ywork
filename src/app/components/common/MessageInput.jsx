"use client";
import { useChat } from "@/app/context/ChatContext";
import { BiLogoTelegram } from "react-icons/bi";

export default function MessageInput() {
  const { newMessage, setNewMessage, sendMessage, loading } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return alert("Message can't be empty.");
    sendMessage();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-6 py-6 border-t border-gray-200 flex items-start mt-auto"
    >
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        className="flex-1 me-2 px-4 py-3.5 border focus:outline-none rounded-lg border-gray-300 disabled:cursor-not-allowed disabled:bg-gray-50"
        disabled={loading}
      />
      <button
        disabled={loading}
        className="bg-primary text-white rounded-lg w-10 h-10 p-2 flex items-center justify-center cursor-pointer active:scale-90 transition-all duration-300 disabled:cursor-not-allowed disabled:bg-primary/75"
      >
        <BiLogoTelegram size={21} />
      </button>
    </form>
  );
}

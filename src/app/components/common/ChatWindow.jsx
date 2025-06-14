"use client";

import { useChat } from "@/app/context/ChatContext";
import MessageInput from "./MessageInput";
import { IoMdContacts } from "react-icons/io";
import ChatBubble from "./ChatBubble";
import UserProfile from "./UserProfile";
import { useRef, useEffect } from "react";

export default function ChatWindow() {
  const chatInterfaceRef = useRef();
  const { activeContact, setSideBarOpen, sideBarOpen, activeContactMessage } =
    useChat();

  useEffect(() => {
    if (chatInterfaceRef.current) {
      chatInterfaceRef.current.scrollTop =
        chatInterfaceRef.current.scrollHeight;
    }
  }, [activeContactMessage]);

  return (
    <div className="w-full flex flex-col h-[calc(100vh-4rem)] md:flex-1 bg-rose-100 overflow-auto">
      {/* Top Bar */}
      <div className="px-6 py-3 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <UserProfile
            className="size-11 font-semibold"
            name={activeContact?.name}
            status={activeContact?.status}
          />
          <div className="flex flex-col">
            <h2 className="font-semibold">{activeContact?.name}</h2>
            <span
              className={`text-sm capitalize ${
                activeContact?.status == "online"
                  ? "text-green-500"
                  : "text-gray-500"
              }`}
            >
              {activeContact?.status}
            </span>
          </div>
        </div>

        {!sideBarOpen && (
          <IoMdContacts
            onClick={() => setSideBarOpen(true)}
            size={24}
            className="md:hidden cursor-pointer"
          />
        )}
      </div>

      {/* Chat Interface */}
      <div
        ref={chatInterfaceRef}
        className="px-6 py-3 overflow-y-auto space-y-4"
      >
        {activeContactMessage.length === 0 ? (
          <div className="text-gray-500 text-center mt-4">
            No conversations yet
          </div>
        ) : (
          activeContactMessage.map((message) => (
            <ChatBubble key={message.id} message={message} />
          ))
        )}
      </div>

      {/* Message Input  */}
      <MessageInput />
    </div>
  );
}

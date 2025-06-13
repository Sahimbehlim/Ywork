"use client";

import { useChat } from "@/app/context/ChatContext";
import MessageInput from "./MessageInput";
import { IoMdContacts } from "react-icons/io";
import ChatBubble from "./ChatBubble";
import UserProfile from "./UserProfile";

export default function ChatWindow() {
  const { activeContact, setSideBarOpen, sideBarOpen } = useChat();

  return (
    <div className="w-full flex flex-col min-h-full flex-1">
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
      <div className="px-6 py-3 overflow-y-auto space-y-4">
        <ChatBubble
          message="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quibusdam incidunt sint vitae dolore? Voluptatem."
          time="12:00 PM"
          type="modal"
        />
        <ChatBubble
          message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
            dolore?"
          time="12:05 PM"
          type="user"
        />
      </div>

      {/* Message Input  */}
      <MessageInput />
    </div>
  );
}

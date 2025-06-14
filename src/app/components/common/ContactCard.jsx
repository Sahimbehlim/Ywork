"use client";

import { useChat } from "@/app/context/ChatContext";
import UserProfile from "./UserProfile";

export default function ContactCard({ contact }) {
  const { activeContact, setActiveContact, setSideBarOpen } = useChat();

  const handleClick = () => {
    setActiveContact(contact);
    setSideBarOpen(false);
  };

  return (
    <div
      onClick={handleClick}
      className="py-3.5 px-5 flex items-center gap-3.5 relative hover:bg-gray-100 cursor-pointer transition-all duration-300"
    >
      <UserProfile
        className={`size-12 font-semibold`}
        name={contact.name}
        status={contact.status}
      />

      <div className="flex-1 flex-col truncate">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">{contact.name}</h2>
          <p className="text-sm text-gray-600">{contact.lastMessageTime}</p>
        </div>
        <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
      </div>

      {activeContact?.id === contact?.id && (
        <span className="absolute left-0 top-0 h-full w-1 bg-primary" />
      )}
    </div>
  );
}

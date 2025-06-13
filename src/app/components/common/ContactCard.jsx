"use client";

import { useChat } from "@/app/context/ChatContext";

export default function ContactCard({ contact }) {
  const { activeContact, setActiveContact, getInitials, getRandomColor } =
    useChat();

  const colors = getRandomColor(contact.name);

  return (
    <div
      onClick={() => setActiveContact(contact)}
      className="py-3.5 px-5 flex items-center gap-3.5 relative hover:bg-gray-100 cursor-pointer transition-all duration-300"
    >
      <div
        style={{
          backgroundColor: colors.bg,
          color: colors.text,
        }}
        className="relative size-12 rounded-full flex justify-center items-center font-semibold"
      >
        {getInitials(contact.name)}

        {contact.status && (
          <span
            className={`absolute bottom-1 right-0.5 w-[9px] h-[9px] rounded-full ${
              contact.status == "online" ? "bg-green-500 " : "bg-gray-500"
            }`}
          />
        )}
      </div>
      <div className="flex-1 flex-col">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">{contact.name}</h2>
          <p className="text-sm text-gray-600">{contact.lastMessageTime}</p>
        </div>
        <p className="text-sm text-gray-600">{contact.lastMessage}</p>
      </div>

      {activeContact?.id === contact?.id && (
        <span className="absolute left-0 top-0 h-full w-1 bg-primary" />
      )}
    </div>
  );
}

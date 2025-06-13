"use client";

import { useChat } from "../context/ChatContext";
import ContactCard from "./common/ContactCard";

export default function Chats() {
  const { contacts } = useChat();
  return (
    <div className="bg-white w-1/4 border-r border-gray-200 min-h-full h-max">
      <div className="px-4 py-5 font-semibold text-xl border-b border-gray-200">
        Chats
      </div>
      <div>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}

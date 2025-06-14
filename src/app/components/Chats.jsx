"use client";

import { useChat } from "../context/ChatContext";
import ContactCard from "./common/ContactCard";
import { IoClose } from "react-icons/io5";

export default function Chats() {
  const { contacts, sideBarOpen, setSideBarOpen } = useChat();

  return (
    <div
      className={`fixed md:relative top-16 md:top-0 left-0 z-20 bg-white md:border-r md:border-gray-200 w-full md:w-80 lg:w-96 transition-transform duration-300 ease-in-out
          ${
            sideBarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 h-[calc(100vh-4rem)] md:h-auto overflow-y-auto`}
    >
      <div className="px-4 py-5 border-b border-gray-200 flex items-center justify-between">
        <h2 className="font-semibold text-xl">Chats</h2>
        {sideBarOpen && (
          <IoClose
            onClick={() => setSideBarOpen(false)}
            size={24}
            className="cursor-pointer md:hidden"
          />
        )}
      </div>

      {/* List Contacts */}
      <div>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}

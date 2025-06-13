"use client";

import ContactCard from "./common/ContactCard";

export default function Chats() {
  return (
    <div className="bg-white w-1/4 border-r border-gray-200">
      <div className="px-4 py-5 font-semibold text-xl border-b border-gray-200">
        Chats
      </div>
      <div>
        <ContactCard />
      </div>
    </div>
  );
}

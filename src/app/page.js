"use client";

import Chats from "./components/Chats";
import ChatWindow from "./components/common/ChatWindow";
import Navbar from "./components/Navbar";
import { ChatProvider } from "./context/ChatContext";

export default function Home() {
  return (
    <ChatProvider>
      <div className="bg-white flex flex-col h-screen w-full">
        <Navbar />
        <div className="flex pt-16 h-[calc(100vh-4rem)]">
          <Chats />
          <ChatWindow />
        </div>
      </div>
    </ChatProvider>
  );
}

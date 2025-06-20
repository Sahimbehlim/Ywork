"use client";

import Chats from "./components/Chats";
import ChatWindow from "./components/common/ChatWindow";
import Navbar from "./components/Navbar";
import { ChatProvider } from "./context/ChatContext";

export default function Home() {
  return (
    <ChatProvider>
      <Navbar />
      <div className="flex pt-16">
        <Chats />
        <ChatWindow />
      </div>
    </ChatProvider>
  );
}

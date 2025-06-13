"use client";

import Chats from "./components/Chats";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-white h-screen w-full">
      <Navbar />
      <div className="flex pt-16 h-full">
        <Chats />
      </div>
    </div>
  );
}

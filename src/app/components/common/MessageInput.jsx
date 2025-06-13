"use client";
import { BiLogoTelegram } from "react-icons/bi";

export default function MessageInput() {
  return (
    <div className="px-6 py-6 border-t border-gray-200 flex items-start mt-auto">
      <input
        type="text"
        className="flex-1 me-2 px-4 py-3.5 border focus:outline-none rounded-lg border-gray-300"
      />
      <button className="bg-primary text-white rounded-lg w-10 h-10 p-2 flex items-center justify-center cursor-pointer active:scale-90 transition-all duration-300">
        <BiLogoTelegram size={21} />
      </button>
    </div>
  );
}

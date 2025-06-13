"use client";

import { useChat } from "@/app/context/ChatContext";
import MessageInput from "./MessageInput";
import { IoMdContacts } from "react-icons/io";

export default function ChatWindow() {
  const {
    activeContact,
    getInitials,
    getRandomColor,
    setSideBarOpen,
    sideBarOpen,
  } = useChat();

  const colors = getRandomColor(activeContact?.name);

  return (
    <div className="w-full flex flex-col min-h-full flex-1">
      {/* Top Bar */}
      <div className="px-6 py-3 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            style={{
              backgroundColor: colors.bg,
              color: colors.text,
            }}
            className="relative font-semibold size-11 rounded-full flex justify-center items-center"
          >
            {getInitials(activeContact?.name)}

            {activeContact?.status && (
              <span
                className={`absolute bottom-1 right-0.5 w-[7px] h-[7px] rounded-full ${
                  activeContact?.status == "online"
                    ? "bg-green-500 "
                    : "bg-gray-500"
                }`}
              />
            )}
          </div>

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
        <div className="flex flex-col gap-1 items-start">
          <div className="max-w-xs md:max-w-md bg-[#f0f0f5] px-5 py-3 rounded-r-2xl rounded-tl-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
            dolore?
          </div>
          <p className="ps-1 text-sm text-gray-500">12:00 PM</p>
        </div>

        <div className="flex flex-col gap-1 items-end">
          <div className="max-w-xs md:max-w-md bg-primary text-white px-5 py-3 rounded-l-2xl rounded-tr-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quibusdam incidunt sint vitae dolore? Voluptatem.
          </div>
          <p className="ps-1 text-sm text-gray-500">12:05 PM</p>
        </div>
        <div className="flex flex-col gap-1 items-start">
          <div className="max-w-xs md:max-w-md bg-[#f0f0f5] px-5 py-3 rounded-r-2xl rounded-tl-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
            dolore?
          </div>
          <p className="ps-1 text-sm text-gray-500">12:00 PM</p>
        </div>

        <div className="flex flex-col gap-1 items-end">
          <div className="max-w-xs md:max-w-md bg-primary text-white px-5 py-3 rounded-l-2xl rounded-tr-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quibusdam incidunt sint vitae dolore? Voluptatem.
          </div>
          <p className="ps-1 text-sm text-gray-500">12:05 PM</p>
        </div>
        <div className="flex flex-col gap-1 items-start">
          <div className="max-w-xs md:max-w-md bg-[#f0f0f5] px-5 py-3 rounded-r-2xl rounded-tl-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
            dolore?
          </div>
          <p className="ps-1 text-sm text-gray-500">12:00 PM</p>
        </div>

        <div className="flex flex-col gap-1 items-end">
          <div className="max-w-xs md:max-w-md bg-primary text-white px-5 py-3 rounded-l-2xl rounded-tr-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quibusdam incidunt sint vitae dolore? Voluptatem.
          </div>
          <p className="ps-1 text-sm text-gray-500">12:05 PM</p>
        </div>
        <div className="flex flex-col gap-1 items-start">
          <div className="max-w-xs md:max-w-md bg-[#f0f0f5] px-5 py-3 rounded-r-2xl rounded-tl-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
            dolore?
          </div>
          <p className="ps-1 text-sm text-gray-500">12:00 PM</p>
        </div>

        <div className="flex flex-col gap-1 items-end">
          <div className="max-w-xs md:max-w-md bg-primary text-white px-5 py-3 rounded-l-2xl rounded-tr-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quibusdam incidunt sint vitae dolore? Voluptatem.
          </div>
          <p className="ps-1 text-sm text-gray-500">12:05 PM</p>
        </div>
      </div>

      {/* Message Input  */}
      <MessageInput />
    </div>
  );
}

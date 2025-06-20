"use client";
import { getInitials, getRandomColor } from "@/app/utils/chatHelpers";

export default function UserProfile({ name = "", className = "", status }) {
  const colors = getRandomColor(name);

  return (
    <div
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
      }}
      className={`relative size-9 rounded-full flex justify-center items-center ${className}`}
    >
      {name ? getInitials(name) : "CL"}

      {status && (
        <span
          className={`absolute bottom-1 right-0.5 w-[9px] h-[9px] rounded-full ${
            status == "online" ? "bg-green-500 " : "bg-gray-500"
          }`}
        />
      )}
    </div>
  );
}

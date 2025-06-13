"use client";
import { getInitials, getRandomColor } from "@/app/utils/chatHelpers";

export default function UserProfile({
  name = "",
  styles,
  className = "",
  status,
}) {
  const colors = getRandomColor(name);

  return (
    <div
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
      }}
      className={`${className} relative bg-primary text-white size-9 rounded-full flex justify-center items-center`}
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

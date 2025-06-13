"use client";

export default function Navbar() {
  return (
    <div className="fixed inset-0 z-10 bg-white border-b border-gray-200 flex items-center justify-between h-16 px-4">
      <h2 className="font-semibold text-2xl text-primary font-logo">logo</h2>
      <div className="bg-primary text-white size-9 rounded-full flex justify-center items-center">
        CL
      </div>
    </div>
  );
}

"use client";

export default function ContactCard() {
  return (
    <div className="py-3.5 px-5 flex items-center gap-3.5 relative">
      <div className="bg-primary text-white size-12 rounded-full flex justify-center items-center">
        CL
      </div>
      <div className="flex-1 flex-col">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Emma Thompson</h2>
          <p className="text-sm text-gray-600">12:45 PM</p>
        </div>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet.</p>
      </div>
      {/* <span className="absolute left-0 top-0 h-full w-1 bg-primary" /> */}
    </div>
  );
}

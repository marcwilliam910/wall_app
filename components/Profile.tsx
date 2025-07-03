import React from "react";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="max-w-sm md:w-72 mx-auto mt-8 rounded-2xl py-8 md:p-0 flex flex-col items-center gap-6 ">
      <div className="relative">
        <Image
          src="/profile.png"
          alt="Profile"
          width={100}
          height={100}
          className="rounded-full border-4 border-blue-500 shadow-md object-cover"
        />
      </div>
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        Marc William Valiente
      </h1>
      <div className="w-full flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-widest text-blue-500 font-semibold">
          Information
        </span>
      </div>
      <div className="w-full flex flex-col items-center gap-1">
        <span className="text-sm text-gray-500 font-medium">Title</span>
        <span className="text-base text-gray-700 font-semibold">
          Software Developer
        </span>
      </div>
      <div className="w-full flex flex-col items-center gap-1">
        <span className="text-sm text-gray-500 font-medium">Location</span>
        <span className="text-base text-gray-700 font-semibold">
          Bulacan, Philippines
        </span>
      </div>
    </div>
  );
}

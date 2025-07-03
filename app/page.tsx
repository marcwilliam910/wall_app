import Hamburger from "@/components/Hamburger";
import Profile from "@/components/Profile";

import Wall from "@/components/Wall";
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 pb-10">
      <header className="bg-blue-600 z-50 text-white px-8 sticky top-0 left-0 right-0 h-16 rounded-b-2xl shadow-lg flex justify-between items-center">
        <span className="text-3xl font-bold tracking-tight">Wall App</span>
        <div className="md:hidden">
          <Hamburger />
        </div>
      </header>
      <main className="flex justify-center items-start w-full h-[calc(100vh-4rem)]">
        <div className="hidden md:block sticky top-20 self-start mt-4">
          <Profile />
        </div>
        <section className="px-3 w-full md:p-5 lg:p-10 h-full overflow-y-auto mt-5">
          <Wall />
        </section>
      </main>
    </div>
  );
}

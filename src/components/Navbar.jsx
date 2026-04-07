import React from "react";

const Navbar = () => {
  return (
    <div className="ml-64 h-16 bg-[#0E6BA8] text-white flex items-center justify-between px-6 shadow-md fixed top-0 right-0 left-64 z-10">

      {/* Page Title */}
      <h2 className="text-xl font-semibold">Dashboard</h2>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Search Box */}
        <div className="hidden md:flex items-center bg-white/20 px-3 py-1 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-white placeholder-white/70 text-sm"
          />
        </div>

        {/* Notification Icon */}
        <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
          🔔
        </div>

        {/* User Profile Icon */}
        <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center text-lg font-bold cursor-pointer">
          A
        </div>

      </div>
    </div>
  );
};

export default Navbar;
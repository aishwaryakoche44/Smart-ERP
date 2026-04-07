import React, { useState, useRef, useEffect } from "react";
import { FiSettings, FiLogOut, FiUser } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-64 w-[calc(100%-16rem)] h-16 bg-blue-900 shadow flex items-center justify-between px-6 z-40">

      {/* Header Title */}
      <h2 className="text-lg font-semibold text-white">My Home</h2>

      {/* Search + Button */}
      <div className="flex items-center gap-4">
        <input 
          type="text" 
          placeholder="Search in: Apps"
          className="border rounded-lg px-4 py-2 w-72"
        />

        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold hover:bg-blue-400 transition-colors shadow-lg active:scale-95"
          >
            AD
          </button>

          {/* DROPDOWN MENU */}
          {isOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in duration-200">
              <div className="px-4 py-3 border-b border-gray-50 mb-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Logged in as</p>
                <p className="text-sm font-bold text-gray-800">Admin User</p>
              </div>
              
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors group">
                <FiUser className="text-gray-400 group-hover:text-blue-600" /> My Profile
              </button>
              
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors group">
                <FiSettings className="text-gray-400 group-hover:text-blue-600" /> Account Settings
              </button>

              <hr className="my-1 border-gray-50" />
              
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors group">
                <FiLogOut className="text-red-400 group-hover:text-red-600" /> Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
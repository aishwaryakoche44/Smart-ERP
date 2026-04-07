import React from "react";
import { FiPlus, FiClipboard, FiCalendar } from "react-icons/fi";

export default function WorklistPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 bg-orange-500 text-white rounded-xl shadow-lg shadow-orange-100">
          <FiClipboard size={24} />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">My Worklist</h1>
      </div>

      {/* NEW ENTRY BOX */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 mb-8 hover:shadow-md transition-all duration-300">
        <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 flex items-center gap-2">
          <FiPlus className="text-orange-500" /> Create New Task
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Task title or Document ID..." 
            className="flex-[2] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
          />
          <input 
            type="date" 
            className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none bg-white text-gray-500"
          />
          <button className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-orange-100">
            Assign Task
          </button>
        </div>
      </div>

      {/* WORKLIST TABLE */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
        <div className="p-5 bg-gray-50/50 border-b border-gray-100 flex justify-between items-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Pending Assignments</p>
          <FiCalendar className="text-gray-400" />
        </div>
        <div className="divide-y divide-gray-50">
          <WorkItem id="INV-10023" desc="Supplier Invoice Approval" date="20-07-23" status="Pending" color="orange" />
          <WorkItem id="INV-10035" desc="Customer Credit Check" date="22-07-23" status="Urgent" color="red" />
          <WorkItem id="PAY-9921" desc="Payroll Processing" date="25-07-23" status="Pending" color="orange" />
          <WorkItem id="TAX-0012" desc="Monthly GST Filing" date="28-07-23" status="Completed" color="green" />
        </div>
      </div>
    </div>
  );
}

function WorkItem({ id, desc, date, status, color }) {
  const colorClasses = {
    orange: "bg-orange-50 text-orange-600",
    red: "bg-red-50 text-red-600",
    green: "bg-green-50 text-green-600",
  };

  return (
    <div className="p-5 flex items-center justify-between hover:bg-gray-50 transition-colors group cursor-pointer">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-800">{id}</span>
          <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase ${colorClasses[color]}`}>{status}</span>
        </div>
        <span className="text-xs text-gray-500 font-medium">{desc}</span>
      </div>
      <div className="text-right">
        <p className="text-[11px] font-bold text-gray-400 uppercase">Due Date</p>
        <p className="text-sm font-bold text-gray-600">{date}</p>
      </div>
    </div>
  );
}
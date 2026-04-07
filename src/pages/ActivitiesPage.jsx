import React from "react";
import { FiPlus, FiActivity, FiClock } from "react-icons/fi";

export default function ActivitiesPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-100">
          <FiActivity size={24} />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Activity History</h1>
      </div>

      {/* NEW ENTRY BOX */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 mb-8 hover:shadow-md transition-all duration-300">
        <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 flex items-center gap-2">
          <FiPlus className="text-blue-600" /> Log New Activity
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Describe the activity (e.g., Supplier meeting...)" 
            className="flex-[2] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
          <select className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white">
            <option>Payment Log</option>
            <option>Receipt Log</option>
            <option>Internal Task</option>
            <option>Audit Note</option>
          </select>
          <button className="bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-100">
            Add Entry
          </button>
        </div>
      </div>

      {/* HISTORY LIST */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
        <div className="p-5 bg-gray-50/50 border-b border-gray-100 flex justify-between items-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Recent Records</p>
          <FiClock className="text-gray-400" />
        </div>
        <div className="divide-y divide-gray-50">
          <ActivityRow title="Payment to ABC Ltd" time="10:30 AM" type="Payment" />
          <ActivityRow title="Receipt from XYZ Corp" time="09:45 AM" type="Receipt" />
          <ActivityRow title="Bank Reconciliation Complete" time="Yesterday" type="Bank" />
          <ActivityRow title="Journal Entry #882 posted" time="Yesterday" type="Journal" />
          <ActivityRow title="New Business Partner Added" time="2 days ago" type="Master Data" />
        </div>
      </div>
    </div>
  );
}

function ActivityRow({ title, time, type }) {
  return (
    <div className="p-5 flex items-center justify-between hover:bg-blue-50/30 transition-colors group cursor-pointer">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
          {title}
        </span>
        <span className="text-xs text-gray-400 font-semibold uppercase tracking-tighter">
          {time}
        </span>
      </div>
      <span className="text-[10px] font-extrabold px-3 py-1 bg-gray-100 text-gray-500 rounded-full uppercase group-hover:bg-blue-100 group-hover:text-blue-600 transition-all">
        {type}
      </span>
    </div>
  );
}
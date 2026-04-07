import React from "react";
import { FiEdit3, FiPlus, FiTrash2, FiSave } from "react-icons/fi";

export default function JournalEntry() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-purple-600 text-white rounded-xl shadow-lg">
            <FiEdit3 size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">New Journal Voucher</h1>
        </div>
        <button className="bg-purple-600 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-purple-700 flex items-center gap-2 transition-all shadow-lg shadow-purple-100">
          <FiSave /> Post Voucher
        </button>
      </div>

      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 mb-8 grid grid-cols-3 gap-6">
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-bold text-gray-400 uppercase">Posting Date</label>
          <input type="date" className="border-b border-gray-200 py-2 outline-none focus:border-purple-500 transition-colors" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-bold text-gray-400 uppercase">Reference #</label>
          <input placeholder="e.g., JV-2024-001" className="border-b border-gray-200 py-2 outline-none focus:border-purple-500 transition-colors" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-bold text-gray-400 uppercase">Header Remark</label>
          <input placeholder="Month end adjustment" className="border-b border-gray-200 py-2 outline-none focus:border-purple-500 transition-colors" />
        </div>
      </div>

      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">GL Account</th>
              <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Line Remark</th>
              <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Debit (₹)</th>
              <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Credit (₹)</th>
              <th className="px-6 py-4 text-center"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            <JournalLine />
            <JournalLine />
          </tbody>
        </table>
        <button className="m-4 flex items-center gap-2 text-purple-600 font-bold text-xs hover:underline uppercase tracking-widest"><FiPlus /> Add Line</button>
      </div>
    </div>
  );
}

function JournalLine() {
  return (
    <tr className="hover:bg-purple-50/20 transition-colors">
      <td className="px-6 py-4"><input className="w-full bg-transparent outline-none focus:text-purple-600 font-semibold" placeholder="Search account..." /></td>
      <td className="px-6 py-4"><input className="w-full bg-transparent outline-none text-gray-500" placeholder="Line description" /></td>
      <td className="px-6 py-4 text-right"><input className="w-24 bg-transparent outline-none text-right font-bold text-red-600" placeholder="0.00" /></td>
      <td className="px-6 py-4 text-right"><input className="w-24 bg-transparent outline-none text-right font-bold text-green-600" placeholder="0.00" /></td>
      <td className="px-6 py-4 text-center text-gray-300 hover:text-red-500 cursor-pointer"><FiTrash2 /></td>
    </tr>
  );
}
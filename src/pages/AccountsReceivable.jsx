import React, { useState } from "react";
import { FiPlus, FiUserCheck, FiSearch, FiFilter, FiDownload, FiClock } from "react-icons/fi";

export default function AccountsReceivable() {
  const [search, setSearch] = useState("");

  const receivableData = [
    { id: "INV-REC-001", customer: "Tech Solutions Inc", date: "2024-03-01", dueDate: "2024-03-15", amount: 25000, status: "Unpaid", priority: "High" },
    { id: "INV-REC-002", customer: "Global Trading Co", date: "2024-03-02", dueDate: "2024-03-10", amount: 12000, status: "Overdue", priority: "Urgent" },
    { id: "INV-REC-003", customer: "Creative Media", date: "2024-03-03", dueDate: "2024-03-30", amount: 8500, status: "Unpaid", priority: "Medium" },
    { id: "INV-REC-004", customer: "Retail Hub", date: "2024-02-25", dueDate: "2024-03-05", amount: 6000, status: "Paid", priority: "Low" },
  ];

  const filteredData = receivableData.filter((item) =>
    item.customer.toLowerCase().includes(search.toLowerCase()) || 
    item.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-green-600 text-white rounded-xl shadow-lg">
            <FiUserCheck size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Accounts Receivable</h1>
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
          <FiDownload /> Collection Report
        </button>
      </div>

      {/* Quick Entry Box */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 mb-8 hover:shadow-md transition-all duration-300">
        <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 flex items-center gap-2">
          <FiPlus className="text-green-600" /> Create New Customer Invoice
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Customer Name" 
            className="flex-[2] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 outline-none transition-all"
          />
          <input 
            type="number" 
            placeholder="Amount" 
            className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
          />
          <input 
            type="date" 
            className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 outline-none bg-white text-gray-500"
          />
          <button className="bg-green-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-700 flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-green-100">
            Post Invoice
          </button>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by customer or invoice #..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-green-500 outline-none transition-all"
          />
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-2xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
          <FiFilter /> Filters
        </button>
      </div>

      {/* Receivables Table */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Customer & Invoice</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Amount (₹)</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-center">Status</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredData.map((row, index) => (
                <tr key={index} className="hover:bg-green-50/30 transition-colors group cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-800 group-hover:text-green-600 transition-colors">{row.customer}</span>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{row.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-600">{row.date}</td>
                  <td className="px-6 py-4 font-semibold text-gray-600">
                    <div className="flex items-center gap-1">
                      <FiClock className={row.status === 'Overdue' ? 'text-red-500' : 'text-gray-400'} />
                      {row.dueDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-extrabold text-gray-800">
                    {row.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase ${
                      row.status === 'Paid' ? 'bg-green-50 text-green-600' : 
                      row.status === 'Overdue' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-green-600 font-bold hover:underline text-xs">Record Payment</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredData.length === 0 && (
          <div className="p-12 text-center text-gray-400 font-semibold">
            No receivables found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
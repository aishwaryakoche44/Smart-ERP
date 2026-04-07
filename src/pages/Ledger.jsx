// src/pages/Ledger.jsx

import React, { useState } from "react";
import { FiBook, FiSearch, FiFilter, FiPlus, FiDownload } from "react-icons/fi";

const Ledger = () => {
  const [search, setSearch] = useState("");

  const ledgerData = [
    { date: "2024-03-01", description: "Payment to Vendor A", ref: "PV-001", debit: 5000, credit: 0, balance: "5,000 DR" },
    { date: "2024-03-02", description: "Receipt from Customer X", ref: "RV-024", debit: 0, credit: 8000, balance: "3,000 CR" },
    { date: "2024-03-03", description: "Payment to Vendor B", ref: "PV-002", debit: 3000, credit: 0, balance: "0.00" },
    { date: "2024-03-04", description: "Office Rent - March", ref: "JE-102", debit: 12000, credit: 0, balance: "12,000 DR" },
    { date: "2024-03-05", description: "Interest Income", ref: "RV-025", debit: 0, credit: 450, balance: "11,550 DR" },
  ];

  const filteredData = ledgerData.filter((item) =>
    item.description.toLowerCase().includes(search.toLowerCase()) || 
    item.ref.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-900 text-white rounded-xl shadow-lg">
            <FiBook size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">General Ledger</h1>
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
          <FiDownload /> Export Report
        </button>
      </div>

      {/* Quick Entry Box */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 mb-8">
        <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 flex items-center gap-2">
          <FiPlus className="text-blue-600" /> New Journal Posting
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input type="date" className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" placeholder="Description..." className="flex-[2] border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="number" placeholder="Amount" className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
            Post Entry
          </button>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by description or reference..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-2xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
          <FiFilter /> Filters
        </button>
      </div>

      {/* Ledger Table */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Reference</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Description</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Debit (₹)</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Credit (₹)</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredData.map((row, index) => (
                <tr key={index} className="hover:bg-blue-50/30 transition-colors group cursor-pointer">
                  <td className="px-6 py-4 font-semibold text-gray-600">{row.date}</td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-1 rounded-md uppercase group-hover:bg-blue-100 group-hover:text-blue-600 transition-all">
                      {row.ref}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                    {row.description}
                  </td>
                  <td className="px-6 py-4 text-right font-extrabold text-red-600">
                    {row.debit ? row.debit.toLocaleString() : "-"}
                  </td>
                  <td className="px-6 py-4 text-right font-extrabold text-green-600">
                    {row.credit ? row.credit.toLocaleString() : "-"}
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-gray-800">
                    {row.balance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredData.length === 0 && (
          <div className="p-12 text-center text-gray-400 font-semibold">
            No transactions found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default Ledger;
import React, { useState } from "react";
import { FiBookOpen, FiSearch, FiFilter, FiDownload, FiPlus } from "react-icons/fi";

const CashBook = () => {
  const [search, setSearch] = useState("");

  // Sample data for the Cash Book
  const cashData = [
    { date: "2024-03-01", ref: "CB-001", description: "Opening Balance", type: "Inflow", amount: 50000, balance: 50000 },
    { date: "2024-03-02", ref: "PV-045", description: "Office Stationery", type: "Outflow", amount: 1200, balance: 48800 },
    { date: "2024-03-03", ref: "RV-012", description: "Cash Sale - Item A", type: "Inflow", amount: 5500, balance: 54300 },
    { date: "2024-03-04", ref: "PV-046", description: "Tea & Snacks", type: "Outflow", amount: 350, balance: 53950 },
    { date: "2024-03-05", ref: "JV-102", description: "Cash Withdrawn from Bank", type: "Inflow", amount: 10000, balance: 63950 },
  ];

  const filteredData = cashData.filter((item) =>
    item.description.toLowerCase().includes(search.toLowerCase()) || 
    item.ref.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-teal-600 text-white rounded-xl shadow-lg">
            <FiBookOpen size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Cash Book</h1>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
            <FiDownload /> Export PDF
          </button>
          <button className="flex items-center gap-2 bg-teal-600 px-4 py-2 rounded-xl text-sm font-bold text-white hover:bg-teal-700 transition-all shadow-lg shadow-teal-100">
            <FiPlus /> New Entry
          </button>
        </div>
      </div>

      {/* Summary Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Total Inflow</p>
          <p className="text-2xl font-black text-green-600">₹ 65,500</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Total Outflow</p>
          <p className="text-2xl font-black text-red-600">₹ 1,550</p>
        </div>
        <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100 shadow-sm">
          <p className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-1">Closing Balance</p>
          <p className="text-2xl font-black text-teal-700">₹ 63,950</p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-teal-500 outline-none transition-all"
          />
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-2xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
          <FiFilter /> Filters
        </button>
      </div>

      {/* Transaction Table */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Ref #</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Description</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Inflow (₹)</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Outflow (₹)</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredData.map((row, index) => (
                <tr key={index} className="hover:bg-teal-50/30 transition-colors group cursor-pointer">
                  <td className="px-6 py-4 font-semibold text-gray-600">{row.date}</td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-1 rounded-md uppercase group-hover:bg-teal-100 group-hover:text-teal-600 transition-all">
                      {row.ref}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-gray-700 group-hover:text-teal-600 transition-colors">
                    {row.description}
                  </td>
                  <td className="px-6 py-4 text-right font-extrabold text-green-600">
                    {row.type === "Inflow" ? row.amount.toLocaleString() : "-"}
                  </td>
                  <td className="px-6 py-4 text-right font-extrabold text-red-600">
                    {row.type === "Outflow" ? row.amount.toLocaleString() : "-"}
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-gray-800">
                    ₹ {row.balance.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CashBook;

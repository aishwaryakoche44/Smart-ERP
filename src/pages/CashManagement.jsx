import React, { useState } from "react";
import { 
  FiDollarSign, 
  FiSearch, 
  FiFilter, 
  FiDownload, 
  FiPlus, 
  FiRefreshCcw 
} from "react-icons/fi";

const CashManagement = () => {
  const [search, setSearch] = useState("");

  const cashMovements = [
    { id: "TRF-001", date: "2024-03-01", description: "Cash to Bank Transfer", amount: 20000, type: "Transfer", status: "Completed" },
    { id: "EXP-042", date: "2024-03-02", description: "Petty Cash Replenishment", amount: 5000, type: "Expense", status: "Pending" },
    { id: "INC-015", date: "2024-03-03", description: "Cash Sales Deposit", amount: 12000, type: "Income", status: "Completed" },
    { id: "TRF-002", date: "2024-03-04", description: "Inter-account Transfer", amount: 15000, type: "Transfer", status: "Completed" },
  ];

  const filteredData = cashMovements.filter((item) =>
    item.description.toLowerCase().includes(search.toLowerCase()) ||
    item.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-900 text-white rounded-xl shadow-lg">
            <FiDollarSign size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Cash Management</h1>
        </div>

        <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
          <FiDownload /> Cash Position Report
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Total Cash On Hand</p>
          <p className="text-2xl font-black text-blue-900">₹ 85,000</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Pending Requests</p>
          <p className="text-2xl font-black text-orange-600">₹ 5,000</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Liquidity Ratio</p>
          <p className="text-2xl font-black text-blue-700">1.25</p>
        </div>
      </div>

      {/* Quick Transfer Box */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 mb-8 hover:shadow-md transition-all duration-300">
        <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 flex items-center gap-2">
          <FiRefreshCcw className="text-blue-900" /> New Cash Transfer
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <select className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900 outline-none bg-white">
            <option>From Petty Cash</option>
            <option>From Main Safe</option>
          </select>

          <select className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900 outline-none bg-white">
            <option>To HDFC Bank</option>
            <option>To ICICI Bank</option>
          </select>

          <input
            type="number"
            placeholder="Amount"
            className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900 outline-none transition-all"
          />

          <button className="bg-blue-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-800 flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-100">
            Execute Transfer
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search cash movements..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-900 outline-none transition-all"
        />
      </div>

      {/* Table */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden mt-4">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Ref ID</th>
              <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Date</th>
              <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Description</th>
              <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Amount (₹)</th>
              <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-center">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50">
            {filteredData.map((row, i) => (
              <tr key={i} className="hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-gray-500">{row.id}</td>
                <td className="px-6 py-4 font-semibold text-gray-600">{row.date}</td>
                <td className="px-6 py-4 font-bold text-gray-700">{row.description}</td>
                <td className="px-6 py-4 text-right font-extrabold text-gray-800">{row.amount.toLocaleString()}</td>
                <td className="px-6 py-4 text-center">
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase ${
                    row.status === "Completed"
                      ? "bg-green-50 text-green-600"
                      : "bg-orange-50 text-orange-600"
                  }`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default CashManagement;
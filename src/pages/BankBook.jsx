import React, { useState } from "react";
import { FiCreditCard, FiSearch, FiFilter, FiDownload, FiPlus } from "react-icons/fi";

const BankBook = () => {
  const [search, setSearch] = useState("");

  // Sample data for the Bank Book
  const bankData = [
    { date: "2024-03-01", ref: "CHQ-8821", description: "Opening Balance", type: "Inflow", amount: 250000, balance: 250000 },
    { date: "2024-03-02", ref: "NEFT-001", description: "Payment to Vendor A", type: "Outflow", amount: 15000, balance: 235000 },
    { date: "2024-03-03", ref: "RV-024", description: "Customer Receipt - XYZ Corp", type: "Inflow", amount: 45000, balance: 280000 },
    { date: "2024-03-04", ref: "NEFT-002", description: "Office Rent Payment", type: "Outflow", amount: 12000, balance: 268000 },
    { date: "2024-03-05", ref: "CHQ-8822", description: "Utility Bill Payment", type: "Outflow", amount: 4500, balance: 263500 },
  ];

  const filteredData = bankData.filter((item) =>
    item.description.toLowerCase().includes(search.toLowerCase()) || 
    item.ref.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow-lg">
            <FiCreditCard size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Bank Book</h1>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
            <FiDownload /> Export Excel
          </button>
          <button className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-xl text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
            <FiPlus /> Record Transaction
          </button>
        </div>
      </div>

      {/* Summary Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Total Deposits</p>
          <p className="text-2xl font-black text-green-600">₹ 2,95,000</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Total Withdrawals</p>
          <p className="text-2xl font-black text-red-600">₹ 31,500</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Bank Balance</p>
          <p className="text-2xl font-black text-blue-700">₹ 2,63,500</p>
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

      {/* Transaction Table */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Reference</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Description</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Deposits (₹)</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Withdrawals (₹)</th>
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

export default BankBook;

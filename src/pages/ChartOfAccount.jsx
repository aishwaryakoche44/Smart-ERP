import React, { useState } from "react";
import { FiGrid, FiPlus, FiSearch, FiFilter, FiDownload, FiFolder } from "react-icons/fi";

const ChartOfAccounts = () => {
  const [search, setSearch] = useState("");

  const accountsData = [
    { code: "1001", name: "Cash in Hand", type: "Asset", category: "Current Asset", balance: 50000, status: "Active" },
    { code: "1002", name: "HDFC Bank", type: "Asset", category: "Bank Account", balance: 250000, status: "Active" },
    { code: "2001", name: "Accounts Payable", type: "Liability", category: "Current Liability", balance: 15000, status: "Active" },
    { code: "3001", name: "Sales Revenue", type: "Revenue", category: "Operating Revenue", balance: 85000, status: "Active" },
    { code: "4001", name: "Office Rent", type: "Expense", category: "Administrative Expense", balance: 12000, status: "Active" },
    { code: "5001", name: "Equity Capital", type: "Equity", category: "Owner's Equity", balance: 400000, status: "Active" },
  ];

  const filteredData = accountsData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) || 
    item.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-900 text-white rounded-xl shadow-lg">
            <FiGrid size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Chart of Accounts</h1>
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
          <FiDownload /> Export COA
        </button>
      </div>

      {/* Quick Entry Box */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 mb-8 hover:shadow-md transition-all duration-300">
        <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 flex items-center gap-2">
          <FiPlus className="text-blue-900" /> Define New Account
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Account Code" 
            className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900 outline-none transition-all"
          />
          <input 
            type="text" 
            placeholder="Account Name" 
            className="flex-[2] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900 outline-none transition-all"
          />
          <select className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900 outline-none bg-white">
            <option>Asset</option>
            <option>Liability</option>
            <option>Equity</option>
            <option>Revenue</option>
            <option>Expense</option>
          </select>
          <button className="bg-blue-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-800 flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-100">
            Create Account
          </button>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or code..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-900 outline-none transition-all"
          />
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-2xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
          <FiFilter /> Filters
        </button>
      </div>

      {/* Accounts Table */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Account Code</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Account Name</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Balance (₹)</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredData.map((row, index) => (
                <tr key={index} className="hover:bg-blue-50/30 transition-colors group cursor-pointer">
                  <td className="px-6 py-4 font-semibold text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded-md text-[10px] font-bold group-hover:bg-blue-100 group-hover:text-blue-900 transition-all">{row.code}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <FiFolder className="text-gray-400 group-hover:text-blue-900 transition-colors" />
                      <span className="font-bold text-gray-800 group-hover:text-blue-900 transition-colors">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-600">{row.type}</td>
                  <td className="px-6 py-4 font-medium text-gray-400 text-xs uppercase">{row.category}</td>
                  <td className="px-6 py-4 text-right font-extrabold text-gray-800">{row.balance.toLocaleString()}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase ${row.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-400'}`}>{row.status}</span>
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

export default ChartOfAccounts;

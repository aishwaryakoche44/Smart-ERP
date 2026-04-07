// src/pages/TrialBalance.jsx

import React, { useState } from "react";
import { FiPieChart, FiSearch, FiFilter, FiDownload, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const TrialBalance = () => {
  const [search, setSearch] = useState("");

  const trialData = [
    { account: "Cash in Hand", category: "Asset", debit: 50000, credit: 0 },
    { account: "HDFC Bank Account", category: "Asset", debit: 250000, credit: 0 },
    { account: "Accounts Receivable", category: "Asset", debit: 35000, credit: 0 },
    { account: "Office Equipment", category: "Asset", debit: 120000, credit: 0 },
    { account: "Accounts Payable", category: "Liability", debit: 0, credit: 15000 },
    { account: "Capital Account", category: "Equity", debit: 0, credit: 400000 },
    { account: "Sales Revenue", category: "Revenue", debit: 0, credit: 85000 },
    { account: "Purchase Account", category: "Expense", debit: 45000, credit: 0 },
  ];

  const totalDebit = trialData.reduce((sum, row) => sum + row.debit, 0);
  const totalCredit = trialData.reduce((sum, row) => sum + row.credit, 0);
  const difference = Math.abs(totalDebit - totalCredit);

  const filteredData = trialData.filter((item) =>
    item.account.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-600 text-white rounded-xl shadow-lg">
            <FiPieChart size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Trial Balance</h1>
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
          <FiDownload /> Export CSV
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Total Debits</p>
          <p className="text-2xl font-black text-gray-800">₹ {totalDebit.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Total Credits</p>
          <p className="text-2xl font-black text-gray-800">₹ {totalCredit.toLocaleString()}</p>
        </div>
        <div className={`${difference === 0 ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'} p-6 rounded-2xl border shadow-sm flex items-center justify-between`}>
          <div>
            <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${difference === 0 ? 'text-green-600' : 'text-red-600'}`}>Status</p>
            <p className={`text-xl font-black ${difference === 0 ? 'text-green-700' : 'text-red-700'}`}>
              {difference === 0 ? "Balanced" : `Unbalanced (₹ ${difference.toLocaleString()})`}
            </p>
          </div>
          {difference === 0 ? <FiCheckCircle size={32} className="text-green-500" /> : <FiAlertCircle size={32} className="text-red-500" />}
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search accounts or categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
        />
      </div>

      {/* Trial Balance Table */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Account Name</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Debit (₹)</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Credit (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredData.map((row, index) => (
                <tr key={index} className="hover:bg-indigo-50/30 transition-colors group cursor-pointer">
                  <td className="px-6 py-4 font-bold text-gray-700 group-hover:text-indigo-600 transition-colors">
                    {row.account}
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-1 rounded-md uppercase">
                      {row.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-extrabold text-gray-800">
                    {row.debit !== 0 ? row.debit.toLocaleString() : "-"}
                  </td>
                  <td className="px-6 py-4 text-right font-extrabold text-gray-800">
                    {row.credit !== 0 ? row.credit.toLocaleString() : "-"}
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

export default TrialBalance;
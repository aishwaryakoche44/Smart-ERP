import React, { useState } from 'react';
import { FiCheckCircle, FiSearch, FiFilter, FiDownload, FiRefreshCcw, FiAlertCircle } from "react-icons/fi";

const BankReconciliation = () => {
  const [search, setSearch] = useState("");

  // Sample reconciliation data
  const transactions = [
    { date: "2024-03-01", ref: "CHQ-8821", description: "Opening Balance Match", amount: 250000, status: "Matched" },
    { date: "2024-03-02", ref: "NEFT-001", description: "Payment to Vendor A", amount: -15000, status: "Matched" },
    { date: "2024-03-03", ref: "RV-024", description: "Customer Receipt - XYZ Corp", amount: 45000, status: "Unmatched" },
    { date: "2024-03-04", ref: "NEFT-002", description: "Office Rent Payment", amount: -12000, status: "Matched" },
    { date: "2024-03-05", ref: "CHQ-8822", description: "Utility Bill Payment", amount: -4500, status: "Unmatched" },
  ];

  const filteredData = transactions.filter((item) =>
    item.description.toLowerCase().includes(search.toLowerCase()) || 
    item.ref.toLowerCase().includes(search.toLowerCase())
  );

  const unreconciledCount = transactions.filter(t => t.status === "Unmatched").length;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow-lg">
            <FiCheckCircle size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Bank Reconciliation</h1>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
            <FiDownload /> Export Summary
          </button>
          <button className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-xl text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
            <FiRefreshCcw /> Run Auto-Match
          </button>
        </div>
      </div>

      {/* Summary Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Statement Balance</p>
          <p className="text-2xl font-black text-gray-800">₹ 2,65,000</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Book Balance</p>
          <p className="text-2xl font-black text-gray-800">₹ 2,63,500</p>
        </div>
        <div className={`${unreconciledCount === 0 ? 'bg-green-50 border-green-100' : 'bg-orange-50 border-orange-100'} p-6 rounded-2xl border shadow-sm flex items-center justify-between`}>
          <div>
            <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${unreconciledCount === 0 ? 'text-green-600' : 'text-orange-600'}`}>Difference</p>
            <p className={`text-2xl font-black ${unreconciledCount === 0 ? 'text-green-700' : 'text-orange-700'}`}>₹ 1,500</p>
          </div>
          {unreconciledCount === 0 ? <FiCheckCircle size={32} className="text-green-500" /> : <FiAlertCircle size={32} className="text-orange-500" />}
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Bank Account</label>
            <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option>HDFC Current Account (...8821)</option>
              <option>ICICI Savings Account (...0024)</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Statement Period</label>
            <input type="month" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-white" />
          </div>
          <div className="relative flex-[2] flex items-end">
            <FiSearch className="absolute left-4 bottom-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search reference or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Matching Table */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Transaction Details</th>
              <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Amount (₹)</th>
              <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-center">Reconciliation Status</th>
              <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredData.map((row, index) => (
              <tr key={index} className="hover:bg-blue-50/20 transition-colors group cursor-pointer">
                <td className="px-6 py-4">
                  <p className="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">{row.description}</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">{row.date} • {row.ref}</p>
                </td>
                <td className={`px-6 py-4 text-right font-extrabold ${row.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {row.amount.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-center">
                  <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase ${row.status === 'Matched' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-blue-600 font-bold hover:underline text-xs">
                    {row.status === 'Matched' ? 'Unmatch' : 'Match Manually'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BankReconciliation;

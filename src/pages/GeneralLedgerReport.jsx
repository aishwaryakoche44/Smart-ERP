import React, { useState } from "react";
import { FiBook, FiSearch, FiFilter, FiDownload, FiCalendar, FiPrinter } from "react-icons/fi";

const GeneralLedgerReport = () => {
  const [search, setSearch] = useState("");

  // Sample data for the report
  const reportData = [
    { date: "2024-03-01", account: "Cash Account", ref: "OB-2024", description: "Opening Balance", debit: 50000, credit: 0, balance: "50,000 DR" },
    { date: "2024-03-02", account: "Office Rent", ref: "JE-045", description: "March Rent Payment", debit: 12000, credit: 0, balance: "62,000 DR" },
    { date: "2024-03-03", account: "Sales Revenue", ref: "RV-012", description: "Customer Payment - Invoice #882", debit: 0, credit: 25000, balance: "37,000 DR" },
    { account: "HDFC Bank", date: "2024-03-04", ref: "PV-099", description: "Electricity Bill", debit: 4500, credit: 0, balance: "41,500 DR" },
    { account: "Accounts Payable", date: "2024-03-05", ref: "PV-100", description: "Vendor Payment - ABC Corp", debit: 15000, credit: 0, balance: "56,500 DR" },
  ];

  const filteredData = reportData.filter((item) =>
    item.description.toLowerCase().includes(search.toLowerCase()) || 
    item.account.toLowerCase().includes(search.toLowerCase()) ||
    item.ref.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-950 text-white rounded-xl shadow-lg">
            <FiBook size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">General Ledger Report</h1>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
            <FiPrinter /> Print
          </button>
          <button className="flex items-center gap-2 bg-blue-900 px-4 py-2 rounded-xl text-sm font-bold text-white hover:bg-blue-800 transition-all shadow-lg shadow-blue-100">
            <FiDownload /> Export PDF
          </button>
        </div>
      </div>

      {/* Report Criteria / Filters */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 mb-8">
        <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 flex items-center gap-2">
          <FiCalendar className="text-blue-900" /> Report Criteria
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">From Date</label>
            <input type="date" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-900 bg-white" />
          </div>
          <div className="flex-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">To Date</label>
            <input type="date" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-900 bg-white" />
          </div>
          <div className="flex-[2]">
            <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Account Filter</label>
            <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-900 bg-white">
              <option>All Accounts</option>
              <option>Cash in Hand</option>
              <option>Bank Accounts</option>
              <option>Revenue Accounts</option>
              <option>Expense Accounts</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="bg-blue-900 text-white font-bold px-8 py-2.5 rounded-xl hover:bg-blue-800 transition-all active:scale-95 shadow-lg shadow-blue-100">
              Generate
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by description, account, or reference..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-900 outline-none transition-all"
        />
      </div>

      {/* Report Table */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Account Name</th>
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
                  <td className="px-6 py-4 font-bold text-blue-900">{row.account}</td>
                  <td className="px-6 py-4 font-medium text-gray-500 text-xs">{row.ref}</td>
                  <td className="px-6 py-4 font-bold text-gray-700">{row.description}</td>
                  <td className="px-6 py-4 text-right font-extrabold text-red-600">{row.debit ? row.debit.toLocaleString() : "-"}</td>
                  <td className="px-6 py-4 text-right font-extrabold text-green-600">{row.credit ? row.credit.toLocaleString() : "-"}</td>
                  <td className="px-6 py-4 text-right font-bold text-gray-800">{row.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GeneralLedgerReport;

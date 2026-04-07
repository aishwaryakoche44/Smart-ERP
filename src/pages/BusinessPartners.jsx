import React, { useState } from "react";
import { FiUsers, FiPlus, FiSearch, FiFilter, FiDownload, FiUser } from "react-icons/fi";

export default function BusinessPartners() {
  const [search, setSearch] = useState("");

  const partnersData = [
    { id: "BP-001", name: "ABC Solutions Ltd", type: "Vendor", category: "Services", balance: 15000, status: "Active" },
    { id: "BP-002", name: "Tech Solutions Inc", type: "Customer", category: "IT Hardware", balance: -25000, status: "Active" },
    { id: "BP-003", name: "Global Supplies", type: "Vendor", category: "Raw Materials", balance: 8000, status: "Active" },
    { id: "BP-004", name: "Creative Media", type: "Customer", category: "Marketing", balance: -8500, status: "Inactive" },
  ];

  const filteredData = partnersData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) || 
    item.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-900 text-white rounded-xl shadow-lg">
            <FiUsers size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Business Partners</h1>
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
          <FiDownload /> Export Directory
        </button>
      </div>

      {/* Quick Entry Box */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 mb-8 hover:shadow-md transition-all duration-300">
        <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 flex items-center gap-2">
          <FiPlus className="text-blue-900" /> Register New Partner
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Partner Name" 
            className="flex-[2] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900 outline-none transition-all"
          />
          <select className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900 outline-none bg-white">
            <option>Customer</option>
            <option>Vendor</option>
          </select>
          <button className="bg-blue-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-800 flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-100">
            Create Partner
          </button>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or partner ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-900 outline-none transition-all"
          />
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-2xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
          <FiFilter /> Filters
        </button>
      </div>

      {/* Partners Table */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Partner Name</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Balance (₹)</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-center">Status</th>
                <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredData.map((row, index) => (
                <tr key={index} className="hover:bg-blue-50/30 transition-colors group cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 group-hover:text-blue-900 transition-colors">
                        <FiUser size={16} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-800 group-hover:text-blue-900 transition-colors">{row.name}</span>
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{row.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-600">{row.type}</td>
                  <td className={`px-6 py-4 text-right font-extrabold ${row.balance > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {Math.abs(row.balance).toLocaleString()} {row.balance > 0 ? 'Payable' : 'Receivable'}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase ${row.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-900 font-bold hover:underline text-xs">View Profile</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
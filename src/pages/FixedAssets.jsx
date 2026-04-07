import React from "react";
import { FiLayers, FiPlus, FiCpu, FiTrendingDown } from "react-icons/fi";

export default function FixedAssets() {
  const assets = [
    { name: "Office MacBook Pro", category: "IT Equipment", date: "2023-01-10", cost: 150000, dep: 30000, value: 120000 },
    { name: "Executive Desk", category: "Furniture", date: "2023-05-15", cost: 45000, dep: 4500, value: 40500 },
    { name: "Company Delivery Van", category: "Vehicles", date: "2022-11-20", cost: 850000, dep: 170000, value: 680000 },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 bg-indigo-600 text-white rounded-xl shadow-lg">
          <FiLayers size={24} />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Fixed Assets Management</h1>
      </div>

      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 mb-8">
        <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 flex items-center gap-2">
          <FiPlus className="text-indigo-600" /> Capitalize New Asset
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input placeholder="Asset Name" className="flex-[2] border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
          <select className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
            <option>IT Equipment</option>
            <option>Furniture</option>
            <option>Vehicles</option>
          </select>
          <input type="number" placeholder="Cost Price" className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
          <button className="bg-indigo-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">Add Asset</button>
        </div>
      </div>

      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Asset Details</th>
              <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider">Purchase Date</th>
              <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Original Cost</th>
              <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right">Depreciation</th>
              <th className="px-6 py-4 font-bold text-gray-400 uppercase tracking-wider text-right text-indigo-600">Net Book Value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {assets.map((item, i) => (
              <tr key={i} className="hover:bg-indigo-50/30 transition-colors cursor-pointer group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                      <FiCpu size={16} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{item.name}</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">{item.category}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-600">{item.date}</td>
                <td className="px-6 py-4 text-right font-bold text-gray-700">₹ {item.cost.toLocaleString()}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-1 text-red-500 font-bold italic">
                    <FiTrendingDown size={12} />
                    ₹ {item.dep.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4 text-right font-extrabold text-indigo-600">₹ {item.value.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
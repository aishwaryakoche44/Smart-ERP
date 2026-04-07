import React from "react";
import { FiPieChart, FiArrowRight, FiActivity, FiBriefcase, FiTrendingUp } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function FinancialStatements() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2.5 bg-cyan-600 text-white rounded-xl shadow-lg">
          <FiPieChart size={24} />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Financial Statements</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ReportCard title="Balance Sheet" desc="Real-time snapshot of assets, liabilities, and equity." icon={<FiBriefcase />} color="bg-blue-500" path="/balance-sheet" />
        <ReportCard title="Profit & Loss" desc="Analyze revenue vs expenses over selected periods." icon={<FiTrendingUp />} color="bg-emerald-500" path="/profit-loss" />
        <ReportCard title="Cash Flow" desc="Track inflow and outflow of cash across activities." icon={<FiActivity />} color="bg-orange-500" path="/cash-flow" />
        <ReportCard title="Trial Balance" desc="Verify mathematical accuracy of GL postings." icon={<FiPieChart />} color="bg-indigo-500" path="/trial-balance" />
      </div>

      <div className="mt-12 bg-white border border-dashed border-gray-300 rounded-2xl p-10 text-center">
        <p className="text-gray-400 font-medium mb-4 italic">Note: Reports are generated based on the current financial year (FY 2024-25).</p>
        <button className="bg-gray-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-all">Consolidate All Reports</button>
      </div>
    </div>
  );
}

function ReportCard({ title, desc, icon, color, path }) {
  return (
    <Link to={path} className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className={`${color} w-12 h-12 rounded-xl text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">{desc}</p>
      <div className="flex items-center gap-2 text-gray-800 font-bold text-sm">
        Generate Report <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
      </div>
    </Link>
  );
}
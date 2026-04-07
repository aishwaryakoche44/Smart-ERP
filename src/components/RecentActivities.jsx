import React from "react";
import { FiArrowUpRight, FiArrowDownLeft, FiBook, FiFileText, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function RecentActivities() {
  const activities = [
    { title: "Payment to ABC Ltd", time: "10:30 AM", icon: <FiArrowUpRight />, color: 'text-orange-600', bg: 'bg-orange-50' },
    { title: "Receipt from XYZ Corp", time: "09:45 AM", icon: <FiArrowDownLeft />, color: 'text-green-600', bg: 'bg-green-50' },
    { title: "Bank Reconciliation", time: "Yesterday", icon: <FiBook />, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: "Journal Entry Posted", time: "Yesterday", icon: <FiFileText />, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: "Expense Approved", time: "2 days ago", icon: <FiCheckCircle />, color: 'text-teal-600', bg: 'bg-teal-50' },
  ];

  return (
    <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 h-full flex flex-col hover:shadow-md transition-all duration-300">
      
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-800">Recent Activities</h3>
        <Link to="/activities" className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline transition-colors uppercase tracking-wider">
          View All
        </Link>
      </div>

      <div className="space-y-5">
        {activities.map((item, index) => (
          <div key={index} className="flex items-center gap-4 group cursor-pointer">
            <div className={`${item.bg} ${item.color} p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
              {item.icon}
            </div>
            <div className="flex flex-col border-b border-gray-50 pb-2 w-full group-last:border-none">
              <span className="text-sm font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                {item.title}
              </span>
              <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-tight">
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
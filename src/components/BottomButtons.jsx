import { FiPlusCircle, FiFileText, FiBook, FiLayers, FiTrendingUp, FiPieChart, FiGrid } from "react-icons/fi";

export default function BottomButtons() {
  const buttons = [
    { title: "Create Payment", icon: <FiPlusCircle size={20} />, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Create Receipt", icon: <FiPlusCircle size={20} />, color: "text-green-600", bg: "bg-green-50" },
    { title: "Journal Entry", icon: <FiFileText size={20} />, color: "text-purple-600", bg: "bg-purple-50" },
    { title: "Bank Reconciliation", icon: <FiBook size={20} />, color: "text-orange-600", bg: "bg-orange-50" },
    { title: "Trial Balance", icon: <FiTrendingUp size={20} />, color: "text-indigo-600", bg: "bg-indigo-50" },
    { title: "Profit & Loss", icon: <FiPieChart size={20} />, color: "text-pink-600", bg: "bg-pink-50" },
    { title: "Balance Sheet", icon: <FiLayers size={20} />, color: "text-cyan-600", bg: "bg-cyan-50" },
    { title: "More Apps", icon: <FiGrid size={20} />, color: "text-gray-600", bg: "bg-gray-100" },
  ];

  return (
    <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      {buttons.map((btn, index) => (
        <button
          key={index}
          className="flex items-center gap-3 p-4 rounded-xl border border-gray-50 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left group"
        >
          <div className={`${btn.bg} ${btn.color} p-2.5 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
            {btn.icon}
          </div>
          <span className="text-sm font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
            {btn.title}
          </span>
        </button>
      ))}
    </div>
  );
}
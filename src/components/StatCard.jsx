export default function StatCard({ title, value, change, icon, bgColor = "bg-blue-50", iconColor = "text-blue-600" }) {
  const isNegative = change.startsWith("-");

  return (
    <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-5 w-full hover:shadow-md transition-all duration-300">
      
      <div className="flex justify-between items-start">
        <div className={`${bgColor} ${iconColor} p-3 rounded-xl`}>
          {icon}
        </div>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
          isNegative ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"
        }`}>
          {change}
        </span>
      </div>

      <div className="mt-4">
        <h3 className="text-2xl font-extrabold text-gray-800">{value}</h3>
        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mt-1">{title}</p>
      </div>
    </div>
  );
}
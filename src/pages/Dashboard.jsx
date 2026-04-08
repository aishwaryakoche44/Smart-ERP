import StatCard from "../components/StatCard";
import CashFlowChart from "../components/CashFlowChart";
import ExpensePieChart from "../components/ExpensePieChart";
import BottomButtons from "../components/BottomButtons";
import RecentActivities from "../components/RecentActivities";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));
  const isAdmin = user?.role === 'Admin';

  return (
    <div className="p-6 bg-lightBg min-h-screen">

      <h1 className="text-xl font-bold text-gray-800 mb-6">Welcome back, {user?.name} ({user?.role})</h1>

      {/* STAT CARDS */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        <StatCard 
          title="Total Payables" 
          value="5.20 M" 
          change="+8.5%" 
          icon={<img src="https://img.freepik.com/premium-vector/vector-design-growth-icon-style_1134108-95628.jpg?semt=ais_rp_progressive&w=740&q=80" alt="" className="w-14 h-12 object-contain" />} 
          bgColor="bg-orange-50" 
          iconColor="text-orange-600"
        />
        {isAdmin && (
        <StatCard 
          title="Total Receivables" 
          value="3.80 M" 
          change="+12.3%" 
          icon={<img src="https://cdn-icons-png.flaticon.com/512/5562/5562807.png" alt="" className="w-14 h-12 object-contain" />} 
          bgColor="bg-green-50" 
          iconColor="text-green-600"
        />
        )}
        <StatCard 
          title="Bank Balance" 
          value="8.75 M" 
          change="+4.2%" 
          icon={<img src="https://img.freepik.com/premium-vector/bank-icon-vector-image-can-be-used-banking-finance_120816-210233.jpg" alt="" className="w-14 h-12 object-contain" />} 
        />
        <StatCard 
          title="Cash in Hand" 
          value="1.25 M" 
          change="-2.1%" 
          icon={<img src="https://cdn-icons-png.flaticon.com/512/9203/9203508.png" alt="" className="w-14 h-12 object-contain" />} 
          bgColor="bg-teal-50" 
          iconColor="text-teal-600"
        />
        <StatCard 
          title="Outstanding Amount" 
          value="1.40 M" 
          change="+9.7%" 
          icon={<img src="https://img.freepik.com/premium-vector/accounting-period-icon-vector-image-can-be-used-accounting_120816-252990.jpg?w=360" alt="" className="w-14 h-12 object-contain" />} 
          bgColor="bg-purple-50" 
          iconColor="text-purple-600"
        />
      </div>

      {/* CHARTS ROW: CASH FLOW & EXPENSES */}
      {isAdmin && (
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-[2]">
          <CashFlowChart />
        </div>
        <div className="flex-1 mt-5 h-80">
          <ExpensePieChart />
        </div>
      </div>
      )}

      {/* WORKLIST, BALANCES & ACTIVITIES */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
        <RecentActivities />

        {/* WORKLIST */}
        <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 h-full flex flex-col hover:shadow-md transition-all duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800">My Worklist</h3>
            <Link to="/worklist" className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline transition-colors uppercase tracking-wider">
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {[
              { id: "INV-10023", desc: "Supplier Invoice", date: "20-07-23", status: "Pending", color: "text-orange-600", bg: "bg-orange-50" },
              { id: "INV-10035", desc: "Customer Invoice", date: "22-07-23", status: "Urgent", color: "text-red-600", bg: "bg-red-50" },
              { id: "PAY-9921", desc: "Payroll Process", date: "25-07-23", status: "Pending", color: "text-orange-600", bg: "bg-orange-50" },
              { id: "TAX-0012", desc: "GST Filing", date: "28-07-23", status: "Completed", color: "text-green-600", bg: "bg-green-50" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer">
                <div>
                  <p className="text-sm font-bold text-gray-700">{item.id}</p>
                  <p className="text-[11px] text-gray-400 font-semibold">{item.desc}</p>
                </div>
                <div className="text-right">
                  <span className={`${item.bg} ${item.color} text-[10px] font-bold px-2 py-0.5 rounded-full uppercase`}>{item.status}</span>
                  <p className="text-[10px] text-gray-400 mt-1">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ACCOUNT BALANCES */}
        <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 h-full flex flex-col hover:shadow-md transition-all duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800">Account Balances</h3>
            <Link to="/bank-accounts" className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline transition-colors uppercase tracking-wider">
              Details
            </Link>
          </div>

          <div className="space-y-4">
            {[
              { name: "Cash in Hand", amount: "₹ 1,25,000", color: "text-teal-600", bg: "bg-teal-500" },
              { name: "HDFC Bank", amount: "₹ 2,50,000", color: "text-blue-600", bg: "bg-blue-500" },
              { name: "ICICI Bank", amount: "₹ 3,00,000", color: "text-indigo-600", bg: "bg-indigo-500" },
              { name: "Petty Cash", amount: "₹ 15,000", color: "text-gray-600", bg: "bg-gray-400" },
            ].map((acc, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${acc.bg}`}></div>
                  <span className="text-sm font-bold text-gray-700">{acc.name}</span>
                </div>
                <span className={`text-sm font-extrabold ${acc.color}`}>{acc.amount}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <BottomButtons />

    </div>
  );
}
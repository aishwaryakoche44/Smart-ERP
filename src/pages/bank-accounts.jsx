import React from "react";
import { FiPlus, FiDollarSign, FiCreditCard } from "react-icons/fi";

export default function BankAccounts() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-100">
          <FiDollarSign size={24} />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Bank Accounts & Balances</h1>
      </div>

      {/* NEW ENTRY BOX */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 mb-8 hover:shadow-md transition-all duration-300">
        <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 flex items-center gap-2">
          <FiPlus className="text-blue-600" /> Add New Bank Account
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Account Name (e.g., SBI Main Account)" 
            className="flex-[2] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
          <input 
            type="number" 
            placeholder="Opening Balance" 
            className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button className="bg-blue-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-blue-700 flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-100">
            Create Account
          </button>
        </div>
      </div>

      {/* ACCOUNTS LIST */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
        <div className="p-5 bg-gray-50/50 border-b border-gray-100 flex justify-between items-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Linked Accounts</p>
          <FiCreditCard className="text-gray-400" />
        </div>
        <div className="divide-y divide-gray-50">
          <AccountRow name="HDFC Bank" amount="₹ 2,50,000" type="Current Account" status="Active" color="blue" />
          <AccountRow name="ICICI Bank" amount="₹ 3,00,000" type="Savings Account" status="Active" color="indigo" />
          <AccountRow name="Cash in Hand" amount="₹ 1,25,000" type="Physical Cash" status="Primary" color="teal" />
          <AccountRow name="Petty Cash" amount="₹ 15,000" type="Office Expenses" status="Active" color="gray" />
        </div>
      </div>
    </div>
  );
}

function AccountRow({ name, amount, type, status, color }) {
  const colorClasses = {
    blue: "text-blue-600 bg-blue-500",
    indigo: "text-indigo-600 bg-indigo-500",
    teal: "text-teal-600 bg-teal-500",
    gray: "text-gray-600 bg-gray-400",
  };

  return (
    <div className="p-5 flex items-center justify-between hover:bg-gray-50 transition-colors group cursor-pointer">
      <div className="flex items-center gap-4">
        <div className={`w-2 h-2 rounded-full ${colorClasses[color].split(' ')[1]}`}></div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-gray-700">{name}</span>
          <span className="text-xs text-gray-400 font-medium">{type}</span>
        </div>
      </div>
      <div className="text-right">
        <p className={`text-sm font-extrabold ${colorClasses[color].split(' ')[0]}`}>{amount}</p>
        <span className="text-[9px] font-black px-2 py-0.5 rounded uppercase bg-green-50 text-green-600">{status}</span>
      </div>
    </div>
  );
}

// src/pages/ProfitLoss.jsx

import React from "react";

const ProfitLoss = () => {
  // Sample P&L data (replace with DB later)
  const revenue = [
    { item: "Sales", amount: 80000 },
    { item: "Service Income", amount: 20000 },
  ];

  const expenses = [
    { item: "Purchase", amount: 30000 },
    { item: "Salary Expense", amount: 15000 },
    { item: "Rent Expense", amount: 10000 },
  ];

  const totalRevenue = revenue.reduce((sum, r) => sum + r.amount, 0);
  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);

  const netProfit = totalRevenue - totalExpenses;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Profit & Loss Statement</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Revenue Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Revenue</h3>
          <table className="w-full">
            <tbody>
              {revenue.map((r, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{r.item}</td>
                  <td className="p-2 text-right text-green-600">
                    {r.amount.toLocaleString()}
                  </td>
                </tr>
              ))}
              <tr className="font-semibold bg-gray-100">
                <td className="p-2">Total Revenue</td>
                <td className="p-2 text-right text-green-700">
                  {totalRevenue.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Expense Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Expenses</h3>
          <table className="w-full">
            <tbody>
              {expenses.map((e, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{e.item}</td>
                  <td className="p-2 text-right text-red-600">
                    {e.amount.toLocaleString()}
                  </td>
                </tr>
              ))}
              <tr className="font-semibold bg-gray-100">
                <td className="p-2">Total Expenses</td>
                <td className="p-2 text-right text-red-700">
                  {totalExpenses.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      {/* Net Profit */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold">Net Profit</h3>
        <p
          className={`text-2xl font-bold mt-2 ${
            netProfit >= 0 ? "text-green-700" : "text-red-700"
          }`}
        >
          {netProfit.toLocaleString()}
        </p>
      </div>

    </div>
  );
};

export default ProfitLoss;
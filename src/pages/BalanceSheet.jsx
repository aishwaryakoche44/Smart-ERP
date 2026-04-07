// src/pages/BalanceSheet.jsx

import React from "react";

const BalanceSheet = () => {
  // Sample financial data (replace with backend later)
  const assets = [
    { item: "Cash in Hand", amount: 40000 },
    { item: "Bank Balance", amount: 60000 },
    { item: "Accounts Receivable", amount: 30000 },
    { item: "Inventory", amount: 20000 },
  ];

  const liabilities = [
    { item: "Vendor Payables", amount: 35000 },
    { item: "Outstanding Expenses", amount: 15000 },
    { item: "Short-term Loans", amount: 20000 },
  ];

  const equity = [
    { item: "Capital Account", amount: 50000 },
    { item: "Retained Earnings", amount: 30000 },
  ];

  const totalAssets = assets.reduce((sum, a) => sum + a.amount, 0);
  const totalLiabilities = liabilities.reduce((sum, l) => sum + l.amount, 0);
  const totalEquity = equity.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Balance Sheet</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* ASSETS */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Assets</h3>
          <table className="w-full">
            <tbody>
              {assets.map((a, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{a.item}</td>
                  <td className="p-2 text-right text-blue-700">
                    {a.amount.toLocaleString()}
                  </td>
                </tr>
              ))}
              <tr className="font-semibold bg-gray-100">
                <td className="p-2">Total Assets</td>
                <td className="p-2 text-right text-blue-900">
                  {totalAssets.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* LIABILITIES */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Liabilities</h3>
          <table className="w-full">
            <tbody>
              {liabilities.map((l, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{l.item}</td>
                  <td className="p-2 text-right text-red-700">
                    {l.amount.toLocaleString()}
                  </td>
                </tr>
              ))}
              <tr className="font-semibold bg-gray-100">
                <td className="p-2">Total Liabilities</td>
                <td className="p-2 text-right text-red-900">
                  {totalLiabilities.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      {/* EQUITY */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow max-w-xl">
        <h3 className="text-lg font-semibold mb-4">Equity</h3>
        <table className="w-full">
          <tbody>
            {equity.map((e, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{e.item}</td>
                <td className="p-2 text-right text-green-700">
                  {e.amount.toLocaleString()}
                </td>
              </tr>
            ))}
            <tr className="font-semibold bg-gray-100">
              <td className="p-2">Total Equity</td>
              <td className="p-2 text-right text-green-900">
                {totalEquity.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* BALANCING CHECK */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow max-w-xl">
        <h3 className="text-xl font-semibold">Balance Check</h3>
        <p className="mt-2 text-lg font-bold">
          {totalAssets === totalLiabilities + totalEquity
            ? "✔ Balanced"
            : "✘ Not Balanced"}
        </p>
      </div>
    </div>
  );
};

export default BalanceSheet;
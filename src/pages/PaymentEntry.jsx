// src/pages/PaymentEntry.jsx

import React, { useState } from "react";
import { FiEdit3 } from "react-icons/fi";

const PaymentEntry = () => {
  const [form, setForm] = useState({
    date: "",
    vendor: "",
    amount: "",
    mode: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Submitted:", form);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-100">
          <FiEdit3 size={24} />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">New Outgoing Payment</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
      >
        <div>
          <label className="block mb-1 font-semibold">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Vendor Name</label>
          <input
            type="text"
            name="vendor"
            value={form.vendor}
            onChange={handleChange}
            placeholder="Enter vendor name"
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Amount</label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Payment Mode</label>
          <select
            name="mode"
            value={form.mode}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option value="">Select</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Cheque">Cheque</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-semibold">Remarks</label>
          <textarea
            name="remarks"
            value={form.remarks}
            onChange={handleChange}
            placeholder="Enter details"
            className="w-full border rounded p-2"
            rows="3"
          ></textarea>
        </div>

        <button
          type="submit"
          className="md:col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentEntry;
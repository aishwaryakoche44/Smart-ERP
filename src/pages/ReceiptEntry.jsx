// src/pages/ReceiptEntry.jsx

import React, { useState } from "react";

const ReceiptEntry = () => {
  const [form, setForm] = useState({
    date: "",
    customer: "",
    amount: "",
    mode: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Receipt Submitted:", form);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Receipt Entry</h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow"
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
          <label className="block mb-1 font-semibold">Customer Name</label>
          <input
            type="text"
            name="customer"
            value={form.customer}
            onChange={handleChange}
            placeholder="Enter customer name"
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
          <label className="block mb-1 font-semibold">Receipt Mode</label>
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
          className="md:col-span-2 bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Submit Receipt
        </button>
      </form>
    </div>
  );
};

export default ReceiptEntry;
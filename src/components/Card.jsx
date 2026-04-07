// src/components/Card.jsx

import React from "react";

const Card = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow rounded-lg p-5 flex items-center justify-between hover:shadow-md transition">
      <div>
        <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>

      <div className="text-gray-400 text-4xl">
        {icon}
      </div>
    </div>
  );
};

export default Card;
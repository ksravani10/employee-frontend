import React from 'react'

const SummaryCard = ({ title, value, icon }) => (
  <div className="bg-white shadow rounded p-4 w-full sm:w-1/2 md:w-1/3 flex items-center">
    {/* Add icon logic here */}
    <div className="mr-4">{/* icon */}</div>
    <div>
      <div className="font-bold">{title}</div>
      <div className="text-xl">{value}</div>
    </div>
  </div>
);

export default SummaryCard;

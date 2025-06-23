'use client';
import React from 'react';

const DashboardItem = ({ isSelected, onClick }) => {
  const classes = isSelected
    ? 'bg-[#b1e1ff] text-[#163f98] font-semibold'
    : 'bg-[#ffffff] text-gray-800';

  return (
    <div
      className={`mx-4 rounded-lg p-3 duration-300 cursor-pointer transition-colors ${classes}`}
      onClick={onClick}
    >
      <div className="text-xl">Dashboard</div>
    </div>
  );
};

export default DashboardItem;
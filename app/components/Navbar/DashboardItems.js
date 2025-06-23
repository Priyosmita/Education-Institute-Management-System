'use client';
import React from 'react';

const DashboardItem = ({ isSelected, onClick }) => {
  const classes = isSelected
    ? 'bg-blue-600 text-[#163f98] text-white'
    : 'bg-gray-200 text-gray-800';

  return (
    <div
      className={`mx-4 hover:bg-gray-400 rounded-lg p-3 duration-300 cursor-pointer transition-colors ${classes}`}
      onClick={onClick}
    >
      <div className="text-xl">Dashboard</div>
    </div>
  );
};

export default DashboardItem;
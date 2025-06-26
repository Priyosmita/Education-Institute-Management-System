'use client';
import React from 'react';
import { BiSolidDashboard } from "react-icons/bi";

const DashboardItem = ({ isSelected, onClick }) => {
  const classes = isSelected
    ? 'bg-blue-600 text-[#163f98] text-white'
    : 'bg-gray-200 text-gray-800';

  return (
    <div
      className={`mx-4 hover:bg-gray-400 rounded-lg p-3 duration-300 cursor-pointer transition-colors ${classes}`}
      onClick={onClick}
    >
      <div className='flex flex-row gap-x-2'>
        <BiSolidDashboard className='text-2xl'/>
        <div className="text-xl">Dashboard</div>
      </div>
    </div>
  );
};

export default DashboardItem;
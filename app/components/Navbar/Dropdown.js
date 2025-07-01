'use client'
import React from 'react';

const DropdownSection = ({
  icon,
  title,
  isOpen,
  setIsOpen,
  options,
  selectedOption,
  onSelect,
  resetAllExcept,
  id
}) => {
  return (
    <div
      className={`mx-4 rounded-lg p-3 transition-colors duration-300 cursor-pointer ${
        isOpen ? 'bg-gray-200' : 'bg-gray-200 hover:bg-gray-400'
      }`}
      onClick={() => {
        setIsOpen(!isOpen);
        resetAllExcept(id);
      }}
    >
      {/* Section Header */}
      <div className="flex items-center gap-2 text-xl font-medium text-gray-800">
        {icon && <span className="text-3xl">{icon}</span>}
        <span>{title}</span>
      </div>

      {/* Dropdown Items */}
      {isOpen && options.length > 0 && (
        <ul className="mt-3 space-y-2 pl-2">
          {options.map((option) => (
            <li
              key={option}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(option);
              }}
              className={`p-2 rounded-md text-sm sm:text-base transition-colors ${
                selectedOption === option
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-800 hover:bg-gray-300'
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSection;
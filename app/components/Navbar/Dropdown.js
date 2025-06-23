'use client';
import React from 'react';

const DropdownSection = ({
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
      className="mx-4 rounded-lg p-3 bg-gray-200 duration-300 cursor-pointer"
      onClick={() => {
        setIsOpen(!isOpen);
        resetAllExcept(id);
      }}
    >
      <div className="text-xl text-gray-800">{title}</div>
      {isOpen && (
        <ul className="mt-3 space-y-2">
          {options.map((option) => (
            <li
              key={option}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(option);
              }}
              className={`p-2 rounded hover:bg-gray-400 transition-colors ${
                selectedOption === option
                  ? 'text-white bg-blue-600'
                  : 'text-gray-700'
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
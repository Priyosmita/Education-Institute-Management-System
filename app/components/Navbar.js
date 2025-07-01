'use client'
import React, { useState } from 'react';
import DropdownSection from './Navbar/Dropdown';
import { PiStudentBold } from "react-icons/pi";
import { FaChalkboardTeacher, FaMoneyBill } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { BiSolidDashboard } from "react-icons/bi";

const navSections = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: <BiSolidDashboard className='text-2xl' />,
    options: [],
  },
  {
    id: "student",
    title: "Students",
    icon: <PiStudentBold />,
    options: ['Add New Student', 'View Student Details'],
  },
  {
    id: "teacher",
    title: "Teachers",
    icon: <FaChalkboardTeacher />,
    options: ['Add New Teacher', 'View Teacher Details'],
  },
  {
    id: "fee",
    title: "Fees",
    icon: <FaMoneyBill />,
    options: ['Recieve Fees', 'Discounts to Students'],
  },
  {
    id: "batch",
    title: "Batches",
    icon: <RiTeamFill />,
    options: ['Add New Batch', 'Batch Details'],
  },
  // {
  //   id: "report",
  //   title: "Reports",
  //   icon: <TbReportAnalytics />,
  //   options: [
  //     'Student Report',
  //     'Teacher Report',
  //     'Course Report',
  //     'Expense Report',
  //     'Batch Report',
  //     'Fees Report',
  //   ],
  // }
];

const Navbar = ({ setSelectedView }) => {
  const [openStates, setOpenStates] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedSection, setSelectedSection] = useState(null);

  // Collapse all dropdowns except one
  const resetAllExcept = (sectionId) => {
    const newStates = {};
    navSections.forEach(({ id }) => {
      newStates[id] = id === sectionId;
    });
    setOpenStates(newStates);
  };

  // Handle option selection & reset other 
  const handleSelect = (sectionId, option) => {
    const newSelectedOptions = {};
    navSections.forEach(({ id }) => {
      newSelectedOptions[id] = id === sectionId ? option : null;
    });
    setSelectedOptions(newSelectedOptions);
    setSelectedView(option);
    setSelectedSection(null);
    resetAllExcept(sectionId);
  };

  const handleSingleClick = (sectionId, title) => {
    const newSelectedOptions = {};
    navSections.forEach(({ id }) => {
      newSelectedOptions[id] = null;
    });
    setSelectedOptions(newSelectedOptions);
    setSelectedSection(sectionId);
    setSelectedView(title);
    resetAllExcept(sectionId);
  };

  return (
    <div className="bg-white shadow-2xl h-fit w-64 rounded-lg flex flex-col gap-y-6 pb-6">
      <div className="text-xl font-bold text-gray-800 pl-4 pt-6">Navigation</div>

      {navSections.map(({ id, title, icon, options }) =>
        options.length === 0 ? (
          <div
            key={id}
            onClick={() => handleSingleClick(id, title)}
            className={`mx-4 text-xl rounded-lg p-3 duration-300 cursor-pointer transition flex items-center gap-2
              ${selectedSection === id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-400 text-gray-800'}`}
          >
            {icon}
            {title}
          </div>
        ) : (
          <DropdownSection
            key={id}
            id={id}
            icon={icon}
            title={title}
            isOpen={!!openStates[id]}
            setIsOpen={(value) => {
              setOpenStates((prev) => ({ ...prev, [id]: value }));
              resetAllExcept(id);
            }}
            options={options}
            selectedOption={selectedOptions[id]}
            onSelect={(option) => handleSelect(id, option)}
            resetAllExcept={resetAllExcept}
          />
        )
      )}
    </div>
  );
};

export default Navbar;
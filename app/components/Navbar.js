'use client';
import React, { useState } from 'react';

import DashboardItem from './Navbar/DashboardItems';
import DropdownSection from './Navbar/Dropdown';
import { PiStudentBold } from "react-icons/pi";
import { FaChalkboardTeacher, FaMoneyBill } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";

const Navbar = ({ setSelectedView }) => {
  const [selectedDashboard, setSelectedDashboard] = useState(false);

  const [isStudentOpen, setIsStudentOpen] = useState(false);
  const [selectedStudentOption, setSelectedStudentOption] = useState(null);
  const studentOptions = ['Add New Student', 'View Student Details'];

  const [isTeacherOpen, setIsTeacherOpen] = useState(false);
  const [selectedTeacherOption, setSelectedTeacherOption] = useState(null);
  const teacherOptions = ['Add New Teacher', 'View Teacher Details'];

  const [isFeeOpen, setIsFeeOpen] = useState(false);
  const [selectedFeeOption, setSelectedFeeOption] = useState(null);
  const feeOptions = ['Recieve Fees', 'Discounts to Students'];

  const [isBatchOpen, setIsBatchOpen] = useState(false);
  const [selectedBatchOption, setSelectedBatchOption] = useState(null);
  const batchOptions = ['Add New Batch', 'Batch Details', 'Add Subject'];

  const [isReportOpen, setIsReportOpen] = useState(false);
  const [selectedReportOption, setSelectedReportOption] = useState(null);
  const reportOptions = ['Student Report', 'Teacher Report', 'Course Report', 'Expense Report', 'Batch Report', 'Fees Report'];

  const resetAllExcept = (section) => {
    if (section !== 'dashboard') setSelectedDashboard(false);
    if (section !== 'student') setIsStudentOpen(false);
    if (section !== 'teacher') setIsTeacherOpen(false);
    if (section !== 'fee') setIsFeeOpen(false);
    if (section !== 'batch') setIsBatchOpen(false);
    if (section !== 'report') setIsReportOpen(false);
  };

  return (
    <div className="bg-white shadow-2xl h-fit w-64 rounded-lg flex flex-col gap-y-6 pb-6">
      <div className="text-xl font-bold text-gray-800 pl-4 pt-6">Navigation</div>

      <DashboardItem
        isSelected={selectedDashboard}
        onClick={() => {
          setSelectedDashboard(true);
          resetAllExcept('dashboard');
        }}
        resetAllExcept={resetAllExcept}
      />

      <DropdownSection
        icon={<PiStudentBold />}
        id="student"
        title="Students"
        isOpen={isStudentOpen}
        setIsOpen={setIsStudentOpen}
        options={studentOptions}
        selectedOption={selectedStudentOption}
        onSelect={(option) => {
          setSelectedStudentOption(option);
          setSelectedView(option); // triggers Window to update
          resetAllExcept('student');
        }}
        resetAllExcept={resetAllExcept}
      />

      <DropdownSection
        icon={<FaChalkboardTeacher />}
        id="teacher"
        title="Teachers"
        isOpen={isTeacherOpen}
        setIsOpen={setIsTeacherOpen}
        options={teacherOptions}
        selectedOption={selectedTeacherOption}
        onSelect={(option) => {
          setSelectedStudentOption(option);
          setSelectedView(option); // triggers Window to update
          resetAllExcept('teacher');
        }}
        resetAllExcept={resetAllExcept}
      />

      <DropdownSection
        icon={<FaMoneyBill />}
        id="fee"
        title="Fees"
        isOpen={isFeeOpen}
        setIsOpen={setIsFeeOpen}
        options={feeOptions}
        selectedOption={selectedFeeOption}
        onSelect={(option) => {
          setSelectedStudentOption(option);
          setSelectedView(option); // triggers Window to update
          resetAllExcept('fee');
        }}
        resetAllExcept={resetAllExcept}
      />

      <DropdownSection
        icon={<RiTeamFill />}
        id="batch"
        title="Batches"
        isOpen={isBatchOpen}
        setIsOpen={setIsBatchOpen}
        options={batchOptions}
        selectedOption={selectedBatchOption}
        onSelect={(option) => {
          setSelectedStudentOption(option);
          setSelectedView(option); // triggers Window to update
          resetAllExcept('batch');
        }}
        resetAllExcept={resetAllExcept}
      />

      <DropdownSection
        icon={<TbReportAnalytics />}
        id="report"
        title="Reports"
        isOpen={isReportOpen}
        setIsOpen={setIsReportOpen}
        options={reportOptions}
        selectedOption={selectedReportOption}
        onSelect={(option) => {
          setSelectedStudentOption(option);
          setSelectedView(option); // triggers Window to update
          resetAllExcept('report');
        }}
        resetAllExcept={resetAllExcept}
      />
    </div>
  );
};

export default Navbar;
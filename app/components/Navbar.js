'use client';
import React, { useState } from 'react';

import DashboardItem from './Navbar/DashboardItems';
import DropdownSection from './Navbar/Dropdown';

const Navbar = () => {
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
    <div className="bg-gray-100 shadow-xl h-fit w-72 rounded-lg flex flex-col gap-y-6 pb-6">
      <div className="text-xl font-bold text-gray-800 pl-4 pt-6">Navigation</div>

      <DashboardItem
        isSelected={selectedDashboard}
        onClick={() => {
          setSelectedDashboard(true);
          resetAllExcept('dashboard');
        }}
      />

      <DropdownSection
        id="student"
        title="Students"
        isOpen={isStudentOpen}
        setIsOpen={setIsStudentOpen}
        options={studentOptions}
        selectedOption={selectedStudentOption}
        onSelect={setSelectedStudentOption}
        resetAllExcept={resetAllExcept}
      />

      <DropdownSection
        id="teacher"
        title="Teachers"
        isOpen={isTeacherOpen}
        setIsOpen={setIsTeacherOpen}
        options={teacherOptions}
        selectedOption={selectedTeacherOption}
        onSelect={setSelectedTeacherOption}
        resetAllExcept={resetAllExcept}
      />

      <DropdownSection
        id="fee"
        title="Fees"
        isOpen={isFeeOpen}
        setIsOpen={setIsFeeOpen}
        options={feeOptions}
        selectedOption={selectedFeeOption}
        onSelect={setSelectedFeeOption}
        resetAllExcept={resetAllExcept}
      />

      <DropdownSection
        id="batch"
        title="Batches"
        isOpen={isBatchOpen}
        setIsOpen={setIsBatchOpen}
        options={batchOptions}
        selectedOption={selectedBatchOption}
        onSelect={setSelectedBatchOption}
        resetAllExcept={resetAllExcept}
      />

      <DropdownSection
        id="report"
        title="Reports"
        isOpen={isReportOpen}
        setIsOpen={setIsReportOpen}
        options={reportOptions}
        selectedOption={selectedReportOption}
        onSelect={setSelectedReportOption}
        resetAllExcept={resetAllExcept}
      />
    </div>
  );
};

export default Navbar;
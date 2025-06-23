'use client';
import React, { useState } from 'react';

const Navbar = () => {
  // Dashboard
  const [selectedDashboard, setSelectedDashboard] = useState(false);
  const getDashboardStyles = () =>
    selectedDashboard ? 'bg-[#b1e1ff] text-[#163f98] font-semibold' : 'bg-[#ffffff] text-gray-800';

  // Students
  const [isStudentOpen, setIsStudentOpen] = useState(false);
  const [selectedStudentOption, setSelectedStudentOption] = useState(null);
  const studentOptions = ['Add New Student', 'View Student Details'];
  const handleSelectStudentOption = (option) => {
    setSelectedStudentOption(option);
    setIsStudentOpen(true);
  };

  // Teachers
  const [isTeacherOpen, setIsTeacherOpen] = useState(false);
  const [selectedTeacherOption, setSelectedTeacherOption] = useState(null);
  const teacherOptions = ['Add New Teacher', 'View Teacher Details'];
  const handleSelectTeacherOption = (option) => {
    setSelectedTeacherOption(option);
    setIsTeacherOpen(true);
  };

  // Fees
  const [isFeeOpen, setIsFeeOpen] = useState(false);
  const [selectedFeeOption, setSelectedFeeOption] = useState(null);
  const feeOptions = ['Recieve Fees', 'Discounts to Students'];
  const handleSelectFeeOption = (option) => {
    setSelectedFeeOption(option);
    setIsFeeOpen(true);
  };

  // Batches
  const [isBatchOpen, setIsBatchOpen] = useState(false);
  const [selectedBatchOption, setSelectedBatchOption] = useState(null);
  const batchOptions = ['Add New Batch', 'Batch Details', 'Add Subject'];
  const handleSelectBatchOption = (option) => {
    setSelectedBatchOption(option);
    setIsBatchOpen(true);
  };

  // Reports
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [selectedReportOption, setSelectedReportOption] = useState(null);
  const reportOptions = ['Student Report', 'Teacher Report', 'Course Report', 'Expense Report', 'Batch Report', 'Fees Report'];
  const handleSelectReportOption = (option) => {
    setSelectedReportOption(option);
    setIsReportOpen(true);
  };

  // Reset all dropdowns
  const resetAllExcept = (section) => {
    if (section !== 'dashboard') setSelectedDashboard(false);
    if (section !== 'student') setIsStudentOpen(false);
    if (section !== 'teacher') setIsTeacherOpen(false);
    if (section !== 'fee') setIsFeeOpen(false);
    if (section !== 'batch') setIsBatchOpen(false);
    if (section !== 'report') setIsReportOpen(false);
  };

  return (
    <>
      <div className="bg-gray-100 shadow-xl h-fit w-72 rounded-lg flex flex-col gap-y-6 pb-6">
        <div className="text-xl font-bold text-gray-800 pl-4 pt-6">Navigation</div>

        {/* Dashboard */}
        <div
          className={`mx-4 rounded-lg p-3 duration-300 cursor-pointer transition-colors ${getDashboardStyles()}`}
          onClick={() => {
            setSelectedDashboard(true);
            resetAllExcept('dashboard');
          }}
        >
          <div className="text-xl">Dashboard</div>
        </div>

        {/* Students */}
        <div
          className="mx-4 rounded-lg p-3 bg-[#ffffff] duration-300 cursor-pointer"
          onClick={() => {
            setIsStudentOpen(!isStudentOpen);
            resetAllExcept('student');
          }}
        >
          <div className="text-xl text-gray-800">Students</div>
          {isStudentOpen && (
            <ul className="mt-3 space-y-2">
              {studentOptions.map((option) => (
                <li
                  key={option}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectStudentOption(option);
                  }}
                  className={`p-2 rounded hover:bg-blue-50 transition-colors ${
                    selectedStudentOption === option
                      ? 'text-[#163f98] font-semibold bg-[#b1e1ff]'
                      : 'text-gray-700'
                  }`}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Teachers */}
        <div
          className="mx-4 rounded-lg p-3 bg-[#ffffff] duration-300 cursor-pointer"
          onClick={() => {
            setIsTeacherOpen(!isTeacherOpen);
            resetAllExcept('teacher');
          }}
        >
          <div className="text-xl text-gray-800">Teachers</div>
          {isTeacherOpen && (
            <ul className="mt-3 space-y-2">
              {teacherOptions.map((option) => (
                <li
                  key={option}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectTeacherOption(option);
                  }}
                  className={`p-2 rounded hover:bg-blue-50 transition-colors ${
                    selectedTeacherOption === option
                      ? 'text-[#163f98] font-semibold bg-[#b1e1ff]'
                      : 'text-gray-700'
                  }`}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Fees */}
        <div
          className="mx-4 rounded-lg p-3 bg-[#ffffff] duration-300 cursor-pointer"
          onClick={() => {
            setIsFeeOpen(!isFeeOpen);
            resetAllExcept('fee');
          }}
        >
          <div className="text-xl text-gray-800">Fees</div>
          {isFeeOpen && (
            <ul className="mt-3 space-y-2">
              {feeOptions.map((option) => (
                <li
                  key={option}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectFeeOption(option);
                  }}
                  className={`p-2 rounded hover:bg-blue-50 transition-colors ${
                    selectedFeeOption === option
                      ? 'text-[#163f98] font-semibold bg-[#b1e1ff]'
                      : 'text-gray-700'
                  }`}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Batches */}
        <div
          className="mx-4 rounded-lg p-3 bg-[#ffffff] duration-300 cursor-pointer"
          onClick={() => {
            setIsBatchOpen(!isBatchOpen);
            resetAllExcept('batch');
          }}
        >
          <div className="text-xl text-gray-800">Batches</div>
          {isBatchOpen && (
            <ul className="mt-3 space-y-2">
              {batchOptions.map((option) => (
                <li
                  key={option}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectBatchOption(option);
                  }}
                  className={`p-2 rounded hover:bg-blue-50 transition-colors ${
                    selectedBatchOption === option
                      ? 'text-[#163f98] font-semibold bg-[#b1e1ff]'
                      : 'text-gray-700'
                  }`}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Reports */}
        <div
          className="mx-4 rounded-lg p-3 bg-[#ffffff] duration-300 cursor-pointer"
          onClick={() => {
            setIsReportOpen(!isReportOpen);
            resetAllExcept('report');
          }}
        >
          <div className="text-xl text-gray-800">Reports</div>
          {isReportOpen && (
            <ul className="mt-3 space-y-2">
              {reportOptions.map((option) => (
                <li
                  key={option}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectReportOption(option);
                  }}
                  className={`p-2 rounded hover:bg-blue-50 transition-colors ${
                    selectedReportOption === option
                      ? 'text-[#163f98] font-semibold bg-[#b1e1ff]'
                      : 'text-gray-700'
                  }`}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
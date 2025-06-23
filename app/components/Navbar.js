'use client'
import React, { useState } from 'react'

const Navbar = () => {

  // Students option
  const [isStudentOpen, setIsStudentOpen] = useState(false);
  const [selectedStudentOption, setSelectedStudentOption] = useState(null);
  const studentOptions = ['Add New Student', 'View Student Details'];
  const handleSelectStudentOption = (option) => {
    setSelectedStudentOption(option);
    setIsStudentOpen(true); // Keep the menu open after selection
  };

  // Teachers
  const [isTeacherOpen, setIsTeacherOpen] = useState(false);
  const [selectedTeacherOption, setSelectedTeacherOption] = useState(null);
  const teacherOptions = ['Add New Teacher', 'View Teacher Details'];
  const handleSelectTeacherOption = (option) => {
    setSelectedTeacherOption(option);
    setIsTeacherOpen(true); // Keep the menu open after selection
  };

  // Fees
  const [isFeeOpen, setIsFeeOpen] = useState(false);
  const [selectedFeeOption, setSelectedFeeOption] = useState(null);
  const feeOptions = ['Recieve Fees', 'Discounts to Students'];
  const handleSelectFeeOption = (option) => {
    setSelectedFeeOption(option);
    setIsFeeOpen(true); // Keep the menu open after selection
  };

  // Batches
  const [isBatchOpen, setIsBatchOpen] = useState(false);
  const [selectedBatchOption, setSelectedBatchOption] = useState(null);
  const batchOptions = ['Add New Batch', 'Batch Details', 'Add Subject'];
  const handleSelectBatchOption = (option) => {
    setSelectedBatchOption(option);
    setIsBatchOpen(true); // Keep the menu open after selection
  };

  return (
    <>
      <div className='bg-gray-100 shadow-xl h-fit w-72 rounded-lg flex flex-col gap-y-6 pb-6'>
        <div className='text-xl font-bold text-gray-800 p-6'>Navigation</div>

        <div>
          Dashboard
        </div>

        <div className={'mx-4 rounded-lg p-3 bg-[#ffffff] duration-300 cursor-pointer'}
          onClick={() => {setIsStudentOpen(!isStudentOpen);
            if (!isStudentOpen) setIsTeacherOpen(false);
            if (!isStudentOpen) setIsFeeOpen(false);
            if (!isStudentOpen) setIsBatchOpen(false);
          }}>

          <div className='text-xl text-gray-800'>Students</div>
          {isStudentOpen && (
            <ul className='mt-3 space-y-2'>
              {studentOptions.map((option) => (
                <li
                  key={option}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectStudentOption(option);
                  }}
                  className={`p-2 rounded hover:bg-blue-50 transition-colors ${selectedStudentOption === option
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

        <div className={'mx-4 rounded-lg p-3 bg-[#ffffff] duration-300 cursor-pointer'}
          onClick={() => {setIsTeacherOpen(!isTeacherOpen);
            if (!isTeacherOpen) setIsStudentOpen(false);
            if (!isTeacherOpen) setIsFeeOpen(false); 
            if (!isTeacherOpen) setIsBatchOpen(false);
          }}
          >

          <div className='text-xl text-gray-800'>Teachers</div>
          {isTeacherOpen && (
            <ul className='mt-3 space-y-2'>
              {teacherOptions.map((option) => (
                <li
                  key={option}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectTeacherOption(option);
                  }}
                  className={`p-2 rounded hover:bg-blue-50 transition-colors ${selectedTeacherOption === option
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

        <div className={'mx-4 rounded-lg p-3 bg-[#ffffff] duration-300 cursor-pointer'}
          onClick={() => {setIsFeeOpen(!isFeeOpen);
            if (!isFeeOpen) setIsStudentOpen(false); 
            if (!isFeeOpen) setIsTeacherOpen(false); 
            if (!isFeeOpen) setIsBatchOpen(false); 
          }}
          >

          <div className='text-xl text-gray-800'>Fees</div>
          {isFeeOpen && (
            <ul className='mt-3 space-y-2'>
              {feeOptions.map((option) => (
                <li
                  key={option}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectFeeOption(option);
                  }}
                  className={`p-2 rounded hover:bg-blue-50 transition-colors ${selectedFeeOption === option
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

        <div className={'mx-4 rounded-lg p-3 bg-[#ffffff] duration-300 cursor-pointer'}
          onClick={() => {setIsBatchOpen(!isBatchOpen);
            if (!isBatchOpen) setIsStudentOpen(false); 
            if (!isBatchOpen) setIsTeacherOpen(false); 
            if (!isBatchOpen) setIsFeeOpen(false); 
          }}
          >

          <div className='text-xl text-gray-800'>Batches</div>
          {isBatchOpen && (
            <ul className='mt-3 space-y-2'>
              {batchOptions.map((option) => (
                <li
                  key={option}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectBatchOption(option);
                  }}
                  className={`p-2 rounded hover:bg-blue-50 transition-colors ${selectedBatchOption === option
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

        <div>
          Reports
        </div>

      </div>
    </>
  )
}

export default Navbar
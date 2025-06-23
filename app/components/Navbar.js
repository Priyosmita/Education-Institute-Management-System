'use client'
import React, { useState } from 'react'

const Navbar = () => {

  const [isStudentOpen, setIsStudentOpen] = useState(false);
  const [selectedStudentOption, setSelectedStudentOption] = useState(null);
  const studentOptions = ['Add New Student', 'View Student Details'];
  const handleSelectStudentOption = (option) => {
    setSelectedStudentOption(option);
    setIsStudentOpen(true); // Keep the menu open after selection
  };

  return (
    <>
      <div className='bg-gray-100 shadow-xl h-fit w-72 rounded-lg flex flex-col gap-y-6 pb-6'>
        <div className='text-xl font-bold text-gray-800 p-6'>Navigation</div>

        <div>
          Dashboard
        </div>

        <div className={`rounded-lg p-4 duration-300 hover:bg-[#8ac7cd] transition-colors ${selectedStudentOption? 'bg-[#8ac7cd]':'bg-[#8ac7cd]'}`} onClick={setIsStudentOpen=(!isStudentOpen)}>
          
          <div className='text-xl text-gray-800'>Students</div>

          
        </div>

        <div>
          Teachers
        </div>

        <div>
          Fees
        </div>

        <div>
          Batch
        </div>

        <div>
          Reports
        </div>

      </div>
    </>
  )
}

export default Navbar

// 'use client'
// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isStudentOpen, setIsStudentOpen] = useState(false);
//   const [selectedStudentOption, setSelectedStudentOption] = useState(null);

//   const studentOptions = ['Add New Teacher', 'View Teacher Details'];

//   const handleSelectStudentOption = (option) => {
//     setSelectedStudentOption(option);
//     setIsStudentOpen(true); // Keep the menu open after selection
//   };

//   return (
//     <>
//       <div className='bg-gray-100 shadow-xl h-fit w-72 rounded-lg flex flex-col gap-y-6 pb-6'>
//         <div className='text-xl font-bold text-gray-800 p-6'>Navigation</div>

//         {/* Student Dropdown Box */}
//         <div
//           className={`mx-4 px-4 py-3 rounded-lg cursor-pointer border transition-colors ${
//             selectedStudentOption ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-300'
//           }`}
//           onClick={() => setIsStudentOpen(!isStudentOpen)}
//         >
//           <div className='font-medium text-gray-800'>Students</div>

//           {isStudentOpen && (
//             <ul className='mt-3 space-y-2'>
//               {studentOptions.map((option) => (
//                 <li
//                   key={option}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleSelectStudentOption(option);
//                   }}
//                   className={`p-2 rounded hover:bg-blue-50 transition-colors ${
//                     selectedStudentOption === option
//                       ? 'text-blue-600 font-semibold'
//                       : 'text-gray-700'
//                   }`}
//                 >
//                   {option}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

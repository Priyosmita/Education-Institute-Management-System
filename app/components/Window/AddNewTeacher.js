'use client'
import React, { useState } from 'react';

const AddNewTeacher = () => {
  const [formData, setFormData] = useState({
    TeacherFullName: '',
    TeacherID: '',
    DateOfJoining: '',
    Address: '',
    TeacherMobileNumber: '',
    DateOfResignation: '',
    RatePerUnit: '',
    TeacherSchool: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to clear the form?")) {
      setFormData({
        TeacherFullName: '',
        TeacherID: '',
        DateOfJoining: '',
        Address: '',
        TeacherMobileNumber: '',
        DateOfResignation: '',
        RatePerUnit: '',
        TeacherSchool: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send formData to your backend or database here
    console.log('Teacher Registered:', formData);
    alert('Teacher added successfully!');
    // Reset form (optional)
    setFormData({
      TeacherFullName: '',
      TeacherID: '',
      DateOfJoining: '',
      Address: '',
      TeacherMobileNumber: '',
      DateOfResignation: '',
      RatePerUnit: '',
      TeacherSchool: '',
    });
  };

  // const schoolOptions = [
  //   'Sunrise Public School',
  //   'Green Valley Academy',
  //   'St. Xavier’s School',
  //   'National English School',
  //   'DPS Megacity',
  // ];

  return (
    <>
      <div className="bg-white shadow-2xl h-fit w-full rounded-lg p-10">
        <div className="text-2xl font-semibold text-gray-700 pb-3">Add New Teacher</div>
        <hr className="font-bold border-1 text-gray-200" />

        <div className='rounded-lg p-7 bg-blue-50 shadow-xl'>
          <p className='text-gray-700 text-xl font-semibold mb-4'>Teacher Details</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name & Teacher ID*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  name="TeacherFullName"
                  value={formData.TeacherFullName}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                  placeholder="Enter Teacher's Full Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Teacher ID</label>
                <input
                  type="text"
                  name="TeacherID"
                  value={formData.TeacherID}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                  placeholder="Enter Teacher's ID"
                />
              </div>
            </div>

            {/* Date of Joining & School/Institution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Date of Joining</label>
                <input
                  type="date"
                  name="DateofJoining<"
                  value={formData.DateofJoining}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                />
              </div>
              {/* <div>
                <label className="block text-gray-700 font-medium">School/Institution</label>
                <select
                  name="SchoolName"
                  value={formData.SchoolName}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                >
                  <option value="">Select Institution</option>
                  {schoolOptions.map((school, i) => (
                    <option key={i} value={school}>{school}</option>
                  ))}
                </select>
              </div> */}
              <div>
              <label className="block text-gray-700 font-medium">School</label>
              <input
                type="text"
                name="TeacherSchool"
                value={formData.TeacherSchool}
                onChange={handleChange}
                required
                className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                placeholder="Enter Teacher's School"
              />
            </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700 font-medium">Address</label>
              <input
                type="text"
                name="Address"
                value={formData.Address}
                onChange={handleChange}
                required
                className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                placeholder="Enter Teacher's Address"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-gray-700 font-medium">Mobile Number</label>
              <input
                type="text"
                name="TeacherMobileNumber"
                value={formData.TeacherMobileNumber}
                onChange={handleChange}
                required
                className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                placeholder="Enter Teacher's Mobile Number"
              />
            </div>

            {/* Subject Details */}
            <div className='bg-white shadow-sm h-fit w-full rounded-lg p-5 space-y-6'>
              <p className='text-gray-600 text-xl font-semibold mb-4'>Subjects Taken</p>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <label className="block text-gray-700 font-medium">Subject</label>
                <label className="block text-gray-700 font-medium">Class</label>
                <label className="block text-gray-700 font-medium">Board</label>
                <label className="block text-gray-700 font-medium">Years of Experience</label>
              </div>
              <div className="pt-4 text-center flex justify-start">
                <button
                  type="button"
                  className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition text-sm font-semibold"
                >
                  Add More Subjects
                </button>
              </div>
            </div>

            {/* Teacher Remuneration */}
            <div className='bg-white shadow-sm h-fit w-full rounded-lg p-5 space-y-6'>
              <p className='text-gray-600 text-xl font-semibold mb-4'>Teacher Remuneration</p>

              <div className='bg-gray-50 shadow-sm h-fit w-full rounded-lg p-5 space-y-6'>
                <p className='text-gray-600 text-md font-semibold'>Subject-wise Remuneration</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block text-gray-700 font-medium">Subject</label>
                  <label className="block text-gray-700 font-medium">Rate Per Subject</label>
                </div>
                <div className="pt-4 text-center flex justify-start">
                  <button
                    type="button"
                    className="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600 transition text-sm font-semibold"
                  >
                    Add More Remuneration
                  </button>
                </div>
              </div>

              <p className='text-gray-600 text-md font-semibold'>Payment Calculation Mode</p>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <label className="block text-gray-700 font-medium">Select Mode</label>
                <div>
                  <label className="block text-gray-700 font-medium">Rate Per Unit</label>
                  <input
                    type="text"
                    name="RatePerUnit"
                    value={formData.RatePerUnit}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                    placeholder="Enter Rate Per Unit of Teacher"
                  />
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className='bg-white shadow-sm h-fit w-full rounded-lg p-5 space-y-6'>
              <p className='text-gray-600 text-xl font-semibold mb-4'>Availability Details</p>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <label className="block text-gray-700 font-medium">Day</label>
                <label className="block text-gray-700 font-medium">Start Time</label>
                <label className="block text-gray-700 font-medium">End Time</label>
              </div>
              <div className="pt-4 text-center flex justify-start">
                <button
                  type="button"
                  className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition text-sm font-semibold"
                >
                  Add More Availability
                </button>
              </div>
            </div>

            {/* Teacher Status */}
            <div className='bg-white shadow-sm h-fit w-full rounded-lg p-5 space-y-6'>
              <p className='text-gray-600 text-xl font-semibold mb-4'>Teacher Status</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="block text-gray-700 font-medium">Active</label>
                <label className="block text-gray-700 font-medium">Resigned</label>
                <label className="block text-gray-700 font-medium">Panel Teacher</label>
              </div>
            </div>

            {/* Joining Details */}
            <div className='bg-white shadow-sm h-fit w-full rounded-lg p-5 space-y-6'>
              <p className='text-gray-600 text-xl font-semibold mb-4'>Joining Details</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium">Date of Joining</label>
                  <input
                    type="date"
                    name="DateOfJoining"
                    value={formData.DateOfJoining}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">Date of Resignation</label>
                  <input
                    type="date"
                    name="DateOfResignation"
                    value={formData.DateOfResignation}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className='flex flex-row justify-end gap-x-4'>
              {/* Submit Button */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition font-semibold"
                >
                  Save Teacher
                </button>
              </div>

              {/* Cancel Button */}
              <div className="pt-4 text-center">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-400 text-white px-6 py-2 rounded-md hover:bg-gray-500 transition font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default AddNewTeacher



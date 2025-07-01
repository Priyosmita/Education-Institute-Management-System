'use client';
import React, { useState } from 'react';

const AddNewStudent = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    course: '',
    guardianName: '',
    guardianContact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send formData to your backend or database here
    console.log('Student Registered:', formData);
    alert('Student added successfully!');
    // Reset form (optional)
    setFormData({
      fullName: '',
      dob: '',
      gender: '',
      email: '',
      phone: '',
      address: '',
      course: '',
      guardianName: '',
      guardianContact: '',
    });
  };

  return (
    <div className="bg-white shadow-2xl h-fit w-full rounded-lg p-10">
      <div className="text-2xl font-semibold text-gray-700 pb-3">Add New Student</div>
      <hr className="font-bold border-1 text-gray-200 mb-6" />

      <div className='rounded-lg p-7 bg-blue-50 shadow-xl'>
        <p className='text-gray-700 text-xl font-medium mb-4'>Student Details</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date of Admission & Full Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Date of Admission</label>
              <input
                type="date"
                name="DateOfAdmission"
                value={formData.DateOfAdmission}
                onChange={handleChange}
                required
                className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                name="FullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                placeholder="Enter full name"
              />
            </div>
          </div>

          {/* Student ID & Class */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Student ID</label>
              <input
                type="text"
                name="StudentID"
                value={formData.StudentID}
                onChange={handleChange}
                required
                className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                placeholder="Enter Student ID"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Class</label>
              <input
                type="text"
                name="Class"
                value={formData.Class}
                onChange={handleChange}
                required
                className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                placeholder="Enter Class"
              />
            </div>
          </div>


          {/* Date of Birth & School Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Date of Birth</label>
              <input
                type="date"
                name="DateOfBirth"
                value={formData.DateOfBirth}
                onChange={handleChange}
                required
                className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">School Name</label>
              <input
                type="text"
                name="SchoolName"
                value={formData.SchoolName}
                onChange={handleChange}
                required
                className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                placeholder="Enter School Name"
              />
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                placeholder="10-digit phone number"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows={3}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Enter full address"
            />
          </div>

          {/* Course Selection */}
          <div>
            <label className="block text-gray-700 font-medium">Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select course</option>
              <option value="Science Foundation">Science Foundation</option>
              <option value="JEE/NEET">JEE/NEET</option>
              <option value="Olympiad Prep">Olympiad Prep</option>
              <option value="Board Coaching">Board Coaching</option>
            </select>
          </div>

          {/* Guardian Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Guardian's Name</label>
              <input
                type="text"
                name="guardianName"
                value={formData.guardianName}
                onChange={handleChange}
                required
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                placeholder="Guardian's full name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Guardian's Contact</label>
              <input
                type="tel"
                name="guardianContact"
                value={formData.guardianContact}
                onChange={handleChange}
                required
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                placeholder="10-digit phone number"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default AddNewStudent;
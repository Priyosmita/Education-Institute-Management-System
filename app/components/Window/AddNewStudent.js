'use client';
import React, { useState, useEffect } from 'react';

const AddNewStudent = () => {
  const [formData, setFormData] = useState({
    DateOfAdmission: '',
    StudentFullName: '',
    StudentID: '',
    StudentClass: '',
    DateOfBirth: '',
    StudentSchoolName: '',
    FatherName: '',
    MotherName: '',
    FatherMobileNumber: '',
    MotherMobileNumber: '',
    StudentWhatsappNumber: '',
    SiblingName: '',
    SiblingClass: '',
    SiblingSchool: '',
    MedicalConditions: '',

  });

  const [subjectsTaken, setSubjectsTaken] = useState([
    { StudentSubject: '', StudentClass: formData.StudentClass || '', StudentBatch: '', StudentTeacher: '' },
  ]);

  const subjectOptions = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'];
  // const classOptions = ['6', '7', '8', '9', '10', '11', '12'];
  const batchOptions = ['A', 'B', 'C', 'D'];
  const teacherOptions = ['Mr. Sharma', 'Ms. Roy', 'Dr. Khan', 'Mrs. Das'];

  const handleSubjectChange = (index, field, value) => {
    const updatedSubjects = [...subjectsTaken];
    updatedSubjects[index][field] = value;
    setSubjectsTaken(updatedSubjects);
  };

  const canAddMoreSubjects = () => {
    const last = subjectsTaken[subjectsTaken.length - 1];
    return last.StudentSubject && last.StudentClass && last.StudentBatch && last.StudentTeacher;
  };

  const addSubjectRow = () => {
    if (canAddMoreSubjects()) {
      setSubjectsTaken([...subjectsTaken, { StudentSubject: '', StudentClass: formData.StudentClass || '', StudentBatch: '', StudentTeacher: '' }]);
    } else {
      alert('Please fill all fields of the current subject before adding a new one.');
    }
  };

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
        DateOfAdmission: '',
        StudentFullName: '',
        StudentID: '',
        StudentClass: '',
        DateOfBirth: '',
        StudentSchoolName: '',
        FatherName: '',
        MotherName: '',
        FatherMobileNumber: '',
        MotherMobileNumber: '',
        StudentWhatsappNumber: '',
        SiblingName: '',
        SiblingClass: '',
        SiblingSchool: '',
        MedicalConditions: '',
      });
      setSubjectsTaken([{ StudentSubject: '', StudentClass: '', StudentBatch: '', StudentTeacher: '' }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send formData to your backend or database here
    console.log('Student Registered:', formData);
    alert('Student added successfully!');
    // Reset form (optional)
    setFormData({
      DateOfAdmission: '',
      StudentFullName: '',
      StudentID: '',
      StudentClass: '',
      DateOfBirth: '',
      StudentSchoolName: '',
      FatherName: '',
      MotherName: '',
      FatherMobileNumber: '',
      MotherMobileNumber: '',
      StudentWhatsappNumber: '',
      SiblingName: '',
      SiblingClass: '',
      SiblingSchool: '',
      StudentSubjectsTaken: subjectsTaken,
      MedicalConditions: '',
    });
    setSubjectsTaken([{ StudentSubject: '', StudentClass: '', StudentBatch: '', StudentTeacher: '' }]);
  };

  useEffect(() => {
  setSubjectsTaken((prevSubjects) =>
    prevSubjects.map((subject) => ({
      ...subject,
      StudentClass: formData.StudentClass || '',
    }))
  );
}, [formData.StudentClass]);

  return (
    <div className="bg-white shadow-2xl h-fit w-full rounded-lg p-10">
      <div className="text-2xl font-semibold text-gray-700 pb-3">Add New Student</div>
      <hr className="font-bold border-1 text-gray-200 mb-6" />

      <div className='rounded-lg p-7 bg-blue-50 shadow-xl'>
        <p className='text-gray-700 text-xl font-semibold mb-4'>Student Details</p>

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
                name="StudentFullName"
                value={formData.StudentFullName}
                onChange={handleChange}
                required
                className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                placeholder="Enter Student's Full Name"
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
                name="StudentClass"
                value={formData.StudentClass}
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

          {/* Parents Details */}
          <div className='bg-white shadow-sm h-fit w-full rounded-lg p-5 space-y-6'>
            <p className='text-gray-600 text-xl font-semibold mb-4'>Parents Details</p>
            {/* Father & Mother's names */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Father&apos;s Name</label>
                <input
                  type="text"
                  name="FatherName"
                  value={formData.FatherName}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                  placeholder="Enter Father's Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Mother&apos;s Name</label>
                <input
                  type="text"
                  name="MotherName"
                  value={formData.MotherName}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                  placeholder="Enter Mother's Name"
                />
              </div>
            </div>

            {/* Mobile numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Father&apos;s Mobile Number</label>
                <input
                  type="text"
                  name="FatherMobileNumber"
                  value={formData.FatherMobileNumber}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                  placeholder="Enter Father's Mobile Number"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Mother&apos;s Mobile Number</label>
                <input
                  type="text"
                  name="MotherMobileNumber"
                  value={formData.MotherMobileNumber}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                  placeholder="Enter Mother's Mobile Number"
                />
              </div>
            </div>

            {/* Whatsapp number */}
            <div>
              <label className="block text-gray-700 font-medium">Whatsapp Number</label>
              <input
                type="text"
                name="StudentWhatsappNumber"
                value={formData.StudentWhatsappNumber}
                onChange={handleChange}
                required
                className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                placeholder="Enter Whatsapp Number"
              />
            </div>
          </div>

          {/* Siblings Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Sibling&apos;s Name</label>
              <input
                type="text"
                name="SiblingName"
                value={formData.SiblingName}
                onChange={handleChange}
                className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                placeholder="Enter Sibling's Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Sibling&apos;s Class</label>
              <input
                type="text"
                name="SiblingClass"
                value={formData.SiblingClass}
                onChange={handleChange}
                className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                placeholder="Enter Sibling's Class"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Sibling&apos;s School</label>
            <input
              type="text"
              name="SiblingSchool"
              value={formData.SiblingSchool}
              onChange={handleChange}
              className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
              placeholder="Enter Sibling's School"
            />
          </div>

          {/* Subjects Taken */}
          <div className='bg-white shadow-sm h-fit w-full rounded-lg p-5 space-y-6'>
            <p className='text-gray-600 text-xl font-semibold mb-4'>Subjects Taken</p>
            {subjectsTaken.map((entry, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium">Subject</label>
                  <select
                    value={entry.StudentSubject}
                    onChange={(e) => handleSubjectChange(index, 'StudentSubject', e.target.value)}
                    className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-white text-gray-700"
                  >
                    <option value="">Select Subject</option>
                    {subjectOptions.map((s, i) => (
                      <option key={i} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                {/* <div>
                  <label className="block text-gray-700 font-medium">Class</label>
                  <select
                    value={entry.StudentClass}
                    onChange={(e) => handleSubjectChange(index, 'StudentClass', e.target.value)}
                    className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-white text-gray-700"
                  >
                    <option value="">Select Class</option>
                    {classOptions.map((c, i) => (
                      <option key={i} value={c}>{c}</option>
                    ))}
                  </select>
                </div> */}
                <div>
                  <label className="block text-gray-700 font-medium">Class</label>
                  <input
                    type="text"
                    value={formData.StudentClass}
                    readOnly
                    className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">Batch</label>
                  <select
                    value={entry.StudentBatch}
                    onChange={(e) => handleSubjectChange(index, 'StudentBatch', e.target.value)}
                    className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-white text-gray-700"
                  >
                    <option value="">Select Batch</option>
                    {batchOptions.map((b, i) => (
                      <option key={i} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Teacher Name</label>
                  <select
                    value={entry.StudentTeacher}
                    onChange={(e) => handleSubjectChange(index, 'StudentTeacher', e.target.value)}
                    className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-white text-gray-700"
                  >
                    <option value="">Select Teacher</option>
                    {teacherOptions.map((t, i) => (
                      <option key={i} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}

            <div className="text-center flex justify-start">
              <button
                type="button"
                onClick={addSubjectRow}
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition text-sm font-semibold"
              >
                Add More Subjects
              </button>
            </div>
          </div>

          {/* Medical Conditions */}
          <div>
            <label className="block text-gray-700 font-medium">Any Medical Conditions</label>
            <input
              type="text"
              name="MedicalConditions"
              value={formData.MedicalConditions}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
              placeholder="Enter Any Medical Conditions"
            />
          </div>

          {/* Buttons */}
          <div className='flex flex-row justify-end gap-x-4'>
            {/* Submit Button */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition font-semibold"
              >
                Save Student
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
  );
};

export default AddNewStudent;
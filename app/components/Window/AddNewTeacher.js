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
    Status: '',
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
        Status: '',
      });
      setSubjectsTaken([{ TeacherSubject: '', TeacherClass: '', TeacherBoard: '', YearsOfExperience: '' }]),
      setRemunerations([{ TeacherSubject: '', Rate: '', Mode: '' }]),
      setAvailability([{Day: '', StartTime: '', EndTime: ''}]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to your backend or database here
    console.log('Teacher Registered:', formData);
    alert('Teacher added successfully!');
    // Reset form
    setFormData({
      TeacherFullName: '',
      TeacherID: '',
      DateOfJoining: '',
      Address: '',
      TeacherMobileNumber: '',
      DateOfResignation: '',
      RatePerUnit: '',
      TeacherSchool: '',
      Status: '',
    });
    setSubjectsTaken([{ TeacherSubject: '', TeacherClass: '', TeacherBoard: '', YearsOfExperience: '' }]),
    setRemunerations([{ TeacherSubject: '', Rate: '', Mode: '' }]),
    setAvailability([{Day: '', StartTime: '', EndTime: ''}]);
  };

  const [subjectsTaken, setSubjectsTaken] = useState([
    { TeacherSubject: '', TeacherClass: '', TeacherBoard: '', YearsOfExperience: '' },
  ]);

  const subjectOptions = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'];
  const classOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  const boardOptions = ['CBSE', 'ICSE', 'State Board'];

  const handleSubjectChange = (index, field, value) => {
    const updated = [...subjectsTaken];
    updated[index][field] = value;
    setSubjectsTaken(updated);
  };

  const canAddMoreSubjects = () => {
    const last = subjectsTaken[subjectsTaken.length - 1];
    return last.TeacherSubject && last.TeacherClass && last.TeacherBoard && last.YearsOfExperience;
  };

  const addSubjectRow = () => {
    if (canAddMoreSubjects()) {
      setSubjectsTaken([...subjectsTaken, { TeacherSubject: '', TeacherClass: '', TeacherBoard: '', YearsOfExperience: '' }]);
    } else {
      alert('Please fill all fields of the current subject before adding a new one.');
    }
  };

  const [remunerations, setRemunerations] = useState([
    { TeacherSubject: '', Rate: '', Mode: '' }
  ]);

  const handleRemunerationChange = (index, field, value) => {
    const updated = [...remunerations];
    updated[index][field] = value;
    setRemunerations(updated);
  };

  const canAddMoreRemunerations = () => {
    const last = remunerations[remunerations.length - 1];
    return last.TeacherSubject && last.Rate && last.Mode;
  };

  const addRemunerationRow = () => {
    if (canAddMoreRemunerations()) {
      setRemunerations([...remunerations, { TeacherSubject: '', Rate: '', Mode: '' }]);
    } else {
      alert('Please fill all fields of the current remuneration before adding a new one.');
    }
  };

  const [availability, setAvailability] = useState([
    { Day: '', StartTime: '', EndTime: '' }
  ]);

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleAvailabilityChange = (index, field, value) => {
    const updated = [...availability];
    updated[index][field] = value;
    setAvailability(updated);
  };

  const canAddMoreAvailability = () => {
    const last = availability[availability.length - 1];
    return last.Day && last.StartTime && last.EndTime;
  };

  const addAvailabilityRow = () => {
    if (canAddMoreAvailability()) {
      setAvailability([...availability, { Day: '', StartTime: '', EndTime: '' }]);
    } else {
      alert('Please fill all fields of the current availability before adding a new one.');
    }
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
                  name="DateOfJoining"
                  value={formData.DateOfJoining}
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
              {subjectsTaken.map((entry, index) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  {/* Subject Dropdown */}
                  <div>
                    <label className="block text-gray-700 font-medium">Subject</label>
                    <select
                      value={entry.TeacherSubject}
                      onChange={(e) => handleSubjectChange(index, 'TeacherSubject', e.target.value)}
                      className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-white text-gray-700"
                    >
                      <option value="">Select Subject</option>
                      {subjectOptions.map((s, i) => (
                        <option key={i} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Class Dropdown */}
                  <div>
                    <label className="block text-gray-700 font-medium">Class</label>
                    <select
                      value={entry.TeacherClass}
                      onChange={(e) => handleSubjectChange(index, 'TeacherClass', e.target.value)}
                      className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-white text-gray-700"
                    >
                      <option value="">Select Class</option>
                      {classOptions.map((c, i) => (
                        <option key={i} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Board Dropdown */}
                  <div>
                    <label className="block text-gray-700 font-medium">Board</label>
                    <select
                      value={entry.TeacherBoard}
                      onChange={(e) => handleSubjectChange(index, 'TeacherBoard', e.target.value)}
                      className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-white text-gray-700"
                    >
                      <option value="">Select Board</option>
                      {boardOptions.map((b, i) => (
                        <option key={i} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  {/* Experience Input */}
                  <div>
                    <label className="block text-gray-700 font-medium">Years of Experience</label>
                    <input
                      type="text"
                      value={entry.YearsOfExperience}
                      onChange={(e) => handleSubjectChange(index, 'YearsOfExperience', e.target.value)}
                      className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-white text-gray-700"
                      placeholder="Enter Years of Experience"
                      required
                    />
                  </div>
                </div>
              ))}

              <div className="text-left">
                <button
                  type="button"
                  onClick={addSubjectRow}
                  className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition text-sm font-semibold"
                >
                  Add More Subjects
                </button>
              </div>
            </div>

            {/* Teacher Remuneration */}
            <div className='bg-white shadow-sm h-fit w-full rounded-lg p-5 space-y-6'>
              <p className='text-gray-600 text-xl font-semibold mb-4'>Teacher Remuneration</p>

              {/* Dynamic Subject-wise Remuneration */}
              {remunerations.map((entry, index) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Subject Dropdown */}
                  <div>
                    <label className="block text-gray-700 font-medium">Subject</label>
                    <select
                      value={entry.TeacherSubject}
                      onChange={(e) => handleRemunerationChange(index, 'TeacherSubject', e.target.value)}
                      className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-white text-gray-700"
                    >
                      <option value="">Select Subject</option>
                      {subjectOptions.map((subj, i) => (
                        <option key={i} value={subj}>{subj}</option>
                      ))}
                    </select>
                  </div>

                  {/* Rate Per Subject */}
                  <div>
                    <label className="block text-gray-700 font-medium">Rate/Subject</label>
                    <input
                      type="text"
                      value={entry.Rate}
                      onChange={(e) => handleRemunerationChange(index, 'Rate', e.target.value)}
                      className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-white text-gray-700"
                      placeholder="Enter Rate"
                    />
                  </div>

                  {/* Mode Dropdown */}
                  <div>
                    <label className="block text-gray-700 font-medium">Select Mode</label>
                    <select
                      value={entry.Mode}
                      onChange={(e) => handleRemunerationChange(index, 'Mode', e.target.value)}
                      className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-white text-gray-700"
                    >
                      <option value="">Payment Calculation Mode</option>
                      {['Per day', 'Per Mnth', 'Per Hour', 'Per Class', 'Per Week', 'Per Batch'].map((mode, i) => (
                        <option key={i} value={mode}>{mode}</option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}

              <div className="text-left">
                <button
                  type="button"
                  onClick={addRemunerationRow}
                  className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition text-sm font-semibold"
                >
                  Add More Remuneration
                </button>
              </div>
            </div>

            {/* Availability */}
            <div className='bg-white shadow-sm h-fit w-full rounded-lg p-5 space-y-6'>
              <p className='text-gray-600 text-xl font-semibold mb-4'>Availability Details</p>

              {availability.map((slot, index) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Day Dropdown */}
                  <div>
                    <label className="block text-gray-700 font-medium">Day</label>
                    <select
                      value={slot.Day}
                      onChange={(e) => handleAvailabilityChange(index, 'Day', e.target.value)}
                      className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-white text-gray-700"
                    >
                      <option value="">Select Day</option>
                      {daysOfWeek.map((day, i) => (
                        <option key={i} value={day}>{day}</option>
                      ))}
                    </select>
                  </div>

                  {/* Start Time */}
                  <div>
                    <label className="block text-gray-700 font-medium">Start Time</label>
                    <input
                      type="time"
                      value={slot.StartTime}
                      onChange={(e) => handleAvailabilityChange(index, 'StartTime', e.target.value)}
                      className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-white text-gray-700"
                    />
                  </div>

                  {/* End Time */}
                  <div>
                    <label className="block text-gray-700 font-medium">End Time</label>
                    <input
                      type="time"
                      value={slot.EndTime}
                      onChange={(e) => handleAvailabilityChange(index, 'EndTime', e.target.value)}
                      className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-white text-gray-700"
                    />
                  </div>
                </div>
              ))}

              <div className="text-left">
                <button
                  type="button"
                  onClick={addAvailabilityRow}
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
                <div>
                  <label className="inline-flex items-center text-gray-700 font-medium">
                    <input
                      type="radio"
                      name="TeacherStatus"
                      value="Active"
                      checked={formData.TeacherStatus === 'Active'}
                      onChange={handleChange}
                      style={{ accentColor: '#4f46e5' }}
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Active</span>
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center text-gray-700 font-medium">
                    <input
                      type="radio"
                      name="TeacherStatus"
                      value="Resigned"
                      checked={formData.TeacherStatus === 'Resigned'}
                      onChange={handleChange}
                      style={{ accentColor: '#4f46e5' }}
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Resigned</span>
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center text-gray-700 font-medium">
                    <input
                      type="radio"
                      name="TeacherStatus"
                      value="Panel Teacher"
                      checked={formData.TeacherStatus === 'Panel Teacher'}
                      onChange={handleChange}
                      style={{ accentColor: '#4f46e5' }}
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Panel Teacher</span>
                  </label>
                </div>
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
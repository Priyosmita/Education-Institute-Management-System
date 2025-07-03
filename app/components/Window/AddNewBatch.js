'use client'
import React, { useState } from 'react';

const AddNewBatch = () => {
  const [formData, setFormData] = useState({
    BatchID: '',
    Size: '',
    StartDate: '',
    EndDate: '',
    Cost: '',
    Revenue: '',
    Profit: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };

      const cost = parseFloat(name === 'Cost' ? value : updated.Cost) || 0;
      const revenue = parseFloat(name === 'Revenue' ? value : updated.Revenue) || 0;

      updated.Profit = (revenue - cost).toFixed(2); 

      return updated;
    });
  };


  const handleCancel = () => {
    if (window.confirm("Are you sure you want to clear the form?")) {
      setFormData({
        BatchID: '',
        Size: '',
        StartDate: '',
        EndDate: '',
        Cost: '',
        Revenue: '',
        Profit: '',
      });
      setSchedule([{ BatchDay: '', BatchStartTime: '', BatchEndTime: '', Duration: '' }])
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to your backend or database here
    console.log('Batch Registered:', formData);
    alert('Batch added successfully!');
    // Reset form
    setFormData({
      BatchID: '',
      Size: '',
      StartDate: '',
      EndDate: '',
      Cost: '',
      Revenue: '',
      Profit: '',
      Schedule:schedule,
    });
    setSchedule([{ BatchDay: '', BatchStartTime: '', BatchEndTime: '', Duration: '' }])
  };

  const [schedule, setSchedule] = useState([
    { BatchDay: '', BatchStartTime: '', BatchEndTime: '', Duration: '' }
  ]);

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleScheduleChange = (index, field, value) => {
    const updated = [...schedule];
    updated[index][field] = value;

    // Duration calculation if start and end time are present
    const startTime = field === 'BatchStartTime' ? value : updated[index].BatchStartTime;
    const endTime = field === 'BatchEndTime' ? value : updated[index].BatchEndTime;

    if (startTime && endTime) {
      const start = new Date(`1970-01-01T${startTime}:00`);
      const end = new Date(`1970-01-01T${endTime}:00`);
      const diffMs = end - start;

      if (diffMs >= 0) {
        const hours = Math.floor(diffMs / (1000 * 60 * 60));
        const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        updated[index].BatchDuration = `${hours}h ${minutes}m`;
      } else {
        updated[index].BatchDuration = 'Invalid time';
      }
    }

    setSchedule(updated);
  };

  const canAddMoreSchedule = () => {
    const last = schedule[schedule.length - 1];
    return last.BatchDay && last.BatchStartTime && last.BatchEndTime;
  };

  const addScheduleRow = () => {
    if (canAddMoreSchedule()) {
      setSchedule([...schedule, { BatchDay: '', BatchStartTime: '', BatchEndTime: '', Duration: '' }]);
    } else {
      alert('Please fill all fields of the current schedule before adding a new one.');
    }
  };


  return (
    <>
      <div className="bg-white shadow-2xl h-fit w-full rounded-lg p-10">
        <div className="text-2xl font-semibold text-gray-700 pb-3">Add New Batch</div>
        <hr className="font-bold border-1 text-gray-200 mb-7" />

        <div className='rounded-lg p-7 bg-blue-50 shadow-xl'>
          <p className='text-gray-700 text-xl font-semibold mb-4'>Batch Details</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Batch ID & Batch Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Batch ID</label>
                <input
                  type="text"
                  name="BatchID"
                  value={formData.BatchID}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                  placeholder="Enter Batch ID"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Batch Size</label>
                <input
                  type="text"
                  name="Size"
                  value={formData.Size}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                  placeholder="Enter Batch Size"
                />
              </div>
            </div>

            {/* Batch Teacher & Batch Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Teacher</label>
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Subject</label>
              </div>
            </div>

            {/* Batch Class & Batch Board */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Class</label>
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Board</label>
              </div>
            </div>

            {/* Batch Schedule Details */}
            <div className='bg-white shadow-sm h-fit w-full rounded-lg p-5 space-y-6'>
              <p className='text-gray-600 text-xl font-semibold mb-4'>Batch Schedule Details</p>
              {/* Start Date & End Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium">Start Date</label>
                  <input
                    type="date"
                    name="StartDate"
                    value={formData.StartDate}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium">End Date</label>
                  <input
                    type="date"
                    name="EndDate"
                    value={formData.EndDate}
                    onChange={handleChange}
                    className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                  />
                </div>
              </div>

              {/* Schedule */}
              {schedule.map((slot, index) => (
                <div key={index} className="mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Day Dropdown */}
                    <div>
                      <label className="block text-gray-700 font-medium">Day</label>
                      <select
                        value={slot.BatchDay}
                        onChange={(e) => handleScheduleChange(index, 'BatchDay', e.target.value)}
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
                        value={slot.BatchStartTime}
                        onChange={(e) => handleScheduleChange(index, 'BatchStartTime', e.target.value)}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-white text-gray-700"
                      />
                    </div>

                    {/* End Time */}
                    <div>
                      <label className="block text-gray-700 font-medium">End Time</label>
                      <input
                        type="time"
                        value={slot.BatchEndTime}
                        onChange={(e) => handleScheduleChange(index, 'BatchEndTime', e.target.value)}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-white text-gray-700"
                      />
                    </div>
                  </div>

                  {/* Duration Row - below the above grid */}
                  <div className="mt-4">
                    <label className="block text-gray-700 font-medium">Duration</label>
                    <input
                      type="text"
                      value={slot.BatchDuration || ''}
                      readOnly
                      className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                      placeholder="Duration"
                    />
                  </div>
                </div>
              ))}

              <div className="text-left">
                <button
                  type="button"
                  onClick={addScheduleRow}
                  className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition text-sm font-semibold"
                >
                  Add More Schedule
                </button>
              </div>
            </div>

            {/* Batch Profitability */}
            <div className='bg-white shadow-sm h-fit w-full rounded-lg p-5 space-y-6'>
              <p className='text-gray-600 text-xl font-semibold mb-4'>Batch Profitability</p>
              <div className='bg-white shadow-sm h-fit w-full rounded-lg p-5 space-y-6'>
                <p className='text-gray-600 text-xl font-semibold mb-4'>Batch Profitability</p>

                {/* Cost & Revenue */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium">Cost</label>
                    <input
                      type="text"
                      name="Cost"
                      value={formData.Cost}
                      onChange={handleChange}
                      required
                      className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                      placeholder="Enter Batch Cost"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium">Revenue</label>
                    <input
                      type="text"
                      name="Revenue"
                      value={formData.Revenue}
                      onChange={handleChange}
                      required
                      className="w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-white text-gray-700"
                      placeholder="Enter Batch Revenue"
                    />
                  </div>
                </div>

                {/* Auto-Calculated Profit */}
                <div>
  <label className="block text-gray-700 font-medium">Profit</label>
  <input
    type="text"
    name="Profit"
    value={formData.Profit}
    readOnly
    className={`w-full mt-2 p-2 border border-gray-300 shadow-sm rounded-md bg-gray-100 
      ${parseFloat(formData.Profit) > 0 ? 'text-green-600' : 
        parseFloat(formData.Profit) < 0 ? 'text-red-600' : 'text-black'}`}
    placeholder="Profit will be auto-calculated"
  />
</div>

              </div>

            </div>
          </form>


        </div>

      </div>
    </>
  )
}

export default AddNewBatch
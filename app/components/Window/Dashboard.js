import React from 'react'

const Dashboard = () => {
    return (
        <>
            <div className="bg-white shadow-xl h-fit w-full rounded-lg p-10">
                <div className="text-2xl font-semibold text-gray-700 pb-3">Dashboard Overview</div>
                <hr className="font-bold border-1 text-gray-200" />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8 pt-6">

                    <div className="bg-blue-100 shadow-xl p-6 rounded-lg flex items-center justify-center text-center">
                        <div className="text-blue-800 text-lg">Total Students</div>
                    </div>

                    <div className="bg-green-100 shadow-xl p-6 rounded-lg flex items-center justify-center text-center">
                        <div className="text-green-800 text-lg">Total Teachers</div>
                    </div>

                    <div className="bg-yellow-100 shadow-xl p-6 rounded-lg flex items-center justify-center text-center">
                        <div className="text-yellow-800 text-lg">New Admissions This Month</div>
                    </div>

                    <div className="bg-purple-100 shadow-xl p-6 rounded-lg flex items-center justify-center text-center">
                        <div className="text-purple-800 text-lg">Total Batches</div>
                    </div>

                    <div className="bg-red-100 shadow-xl p-6 rounded-lg flex items-center justify-center text-center">
                        <div className="text-red-800 text-lg">Fees Due</div>
                    </div>

                    <div className="bg-teal-100 shadow-xl p-6 rounded-lg flex items-center justify-center text-center">
                        <div className="text-teal-800 text-lg">Collections This Month</div>
                    </div>

                </div>

                <div className='bg-white border-2 shadow-md rounded-lg'>
                    <p className='text-xl font-semibold text-gray-700 p-6'>Month-wise Student Enrollment</p>
                </div>
            </div>

        </>
    )
}

export default Dashboard
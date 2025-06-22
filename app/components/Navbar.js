import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='bg-gray-100 shadow-xl h-fit w-72 rounded-lg flex flex-col gap-y-6'>
                <div className='text-xl font-bold text-gray-800 p-6'>Navigation</div>

                <div>
                    Students
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
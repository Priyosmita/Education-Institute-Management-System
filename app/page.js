import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Window from './components/Window'

const page = () => {
  return (
    <>
      <div className='min-h-screen bg-gray-300'>
        <Header />

        <div className='flex flex-row'>
          <div className='p-6'>
            <Navbar />
          </div>

          <div className='pt-6 pr-6 pb-6'><Window /></div>
        </div>

      </div>
    </>
  )
}

export default page
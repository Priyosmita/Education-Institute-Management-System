import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'

const page = () => {
  return (
    <>
      <div className='min-h-screen bg-gray-300'> 
        <Header />

        <div className='p-6'>
          <Navbar />
        </div>
        
      </div>
    </>
  )
}

export default page
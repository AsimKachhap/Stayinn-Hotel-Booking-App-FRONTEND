import React from 'react'

const formPage1 = () => {
  return (
   <form className='bg-white rounded-lg w-1/2'>
    <div className='flex flex-col mb-2'>
      <label htmlFor="roomNo">Room No</label>
      <input className='border-2 border-gray-500 p-2 rounded-md focus:border-teal-500 focus:ring-teal-500' type="number" name='roomNo' placeholder='Enter Room No.' />
      </div>

      <div className='flex flex-col mb-2'>
      <label htmlFor="roomNo">Floor No</label>
      <input className='border-2 border-gray-500 p-2 rounded-md focus:border-teal-500 focus:ring-teal-500' type="number" name='FloorNo' placeholder='Enter Floor No.' />
      </div>

      <div className='flex flex-col mb-2'>
      <label htmlFor="roomNo">Number of Beds</label>
      <input className='border-2 border-gray-500 p-2 rounded-md focus:border-teal-500 focus:ring-teal-500' type="number" name='numberOfBeds' placeholder='Enter No. of Beds in Room' />
      </div>
   </form>
  )
}

export default formPage1
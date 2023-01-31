import React from 'react'

const formPage2 = () => {
  return (
    <form className='bg-white rounded-lg w-1/2'>

    <div className='flex flex-col mb-2'>
      <label htmlFor='hotelName'>Hotel Name</label>
      <input type="text"  placeholder='Enter the name of Hotel' name='hotelName'
      className='border-2 border-gray-500 p-2 rounded-md focus:border-teal-500 focus:ring-teal-500'/>
      </div>

      <div className='flex flex-col mb-2'>
      <label htmlFor='hotelName'>Address</label>
      <input type="text"  placeholder='Enter the Address of Hotel' name='hotelAddress'
      className='border-2 border-gray-500 p-2 rounded-md focus:border-teal-500 focus:ring-teal-500'/>
      </div>

      <div className='flex flex-col mb-2'>
      <label htmlFor='hotelName'>City</label>
      <input type="text"  placeholder='Enter the City' name='hotelCity'
      className='border-2 border-gray-500 p-2 rounded-md focus:border-teal-500 focus:ring-teal-500'/>
      </div>

      <div className='flex flex-col mb-2'>
      <label htmlFor='hotelName'>State</label>
      <input type="text"  placeholder='Enter the State' name='hotelState'
      className='border-2 border-gray-500 p-2 rounded-md focus:border-teal-500 focus:ring-teal-500'/>
      </div>

      <div className='flex flex-col mb-2'>
      <label htmlFor='hotelName'>PIN</label>
      <input type="number"  placeholder='Enter the PIN' name='hotelName'
      className='border-2 border-gray-500 p-2 rounded-md focus:border-teal-500 focus:ring-teal-500'/>
      </div>

      <div className='flex flex-col mb-2'>
      <label htmlFor='hotelName'>Hotel Description</label>
      <input type="text"  placeholder='Enter the name of Hotel' name='hotelName'
      className='border-2 border-gray-500 p-2 rounded-md focus:border-teal-500 focus:ring-teal-500'/>
      </div>
    </form>
  )
}

export default formPage2
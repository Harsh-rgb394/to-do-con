import React from 'react'
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-24'>
      <h1 className='my-5 text-5xl  text-black'>404</h1>
      <p className='text-2xl font-bold'>Sorry! This Page is Found</p>
      <p className='mt-4 mb-8 dark:text-gray-500'>But don't worry, you can find plenty of other things on our homepage.</p>
      <Link to='/' className='px-8 py-4 font-bold rounded-sm bg-blue-500 text-white hover:bg-blue-600'>Go to HomePage</Link>
    </div>
  )
}

export default NotFound
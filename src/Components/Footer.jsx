import React from 'react'

function Footer() {
  return (
    <div className='text-center bg-gray-100 dark:bg-gray-800 shadow-md bottom-0 mt-24 border-t border-gray-300 dark:border-gray-700'>
      <div className='container mx-auto py-20 px-16'>
        <p className='text-gray-600 dark:text-gray-400 text-lg font-semibold'>
        &copy; {new Date().getFullYear()} Rameez Aslam. All rights reserved.
      </p>
      </div>
    </div>
  )
}

export default Footer
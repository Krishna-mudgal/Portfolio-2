
import React from 'react'
import mailIcon from './../assets/mailIcon.png'

const Footer = () => {
  return (
    <div className='mt-2'>

      <div className='w-max flex items-center gap-2 mx-auto'>
        <img src={mailIcon} alt='' className='w-6' />
        krishnamudgal44@gmail.com
      </div>

      <div className='text-center sm:flex items-center justify-center border-t border-gray-400 mx-[10%] mt-6 py-6'>
        <p>© 2025 Krishna Mudgal. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer

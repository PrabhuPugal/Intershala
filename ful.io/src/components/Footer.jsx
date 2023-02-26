import React from 'react'

import {logo,facebook,linkedin} from '../assets'

const Footer = () => {
  return (
    <div className={`flex flex-row  justify-center items-center bg-footer text-white mt-10 gap-5 rounded`}>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <img className='flex h-20 w-20' src={logo} alt={'Logo'}/>
        <span className='flex'>© 2023 Ful, Inc.</span>
        <span className='flex'>All rights reserved</span>
        <div className='flex gap-3'>
          <img src={facebook} alt={'Facebook'}/><img src={linkedin} alt={'LinkedIn'}/>
        </div>
      </div>
      <div className='flex'>
        
      </div>
      <div className='flex'>
        
      </div>
    </div>
  )
}

export default Footer
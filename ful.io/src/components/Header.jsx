import React from 'react'
import { logo } from '../assets'

const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center bg-black'>
        <div className='flex'>
            <img className='flex h-6 w-6' src={logo} alt={'Logo'}/>
        </div>
        <div className='flex text-black font-bold justify-between items-center'>
            <div className='flex'>Home</div>
            <div className='flex'>Features</div>
            <div className='flex'>Pricing</div>
            <div className='flex'>Blog</div>
        </div>
        <div className='flex'>
            Signin
        </div>
    </div>
  )
}

export default Header
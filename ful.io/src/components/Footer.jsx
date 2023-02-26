import React from 'react'

import {logo,facebook,linkedin,loc,call,emailcont} from '../assets'

import {footerLinks} from '../constants'

const Footer = () => {
  return (
    <div className={`flex flex-col bg-footer text-white mt-10 gap-5 rounded p-10`}>
      <div className={`flex sm:flex-row flex-col  justify-center sm:items-start items.center`}>
        <div className='flex flex-col gap-2 justify-center items-center'>
          <img className='flex h-20 w-20' src={logo} alt={'Logo'}/>
          <span className='flex'>© 2023 Ful, Inc.</span>
          <span className='flex'>All rights reserved</span>
          <div className='flex gap-3'>
            <img src={facebook} alt={'Facebook'}/><img src={linkedin} alt={'LinkedIn'}/>
          </div>
        </div>
        <div className='flex sm:flex-row flex-col gap-10 px-5'>
          {footerLinks.map((main)=>( 
            <div className='flex flex-col px-5 w-[18rem]' key={main.id}>
              <span className='flex border-b font-bold py-2'>{main.title}</span>
              {main.links.map((item)=>(
                <ul className='flex flex-col' key={item.id}>
                  <li className='flex py-1 hover:text-black hover:cursor-pointer'>{item.name}</li>
                </ul>
              ))}
            </div>
          ))}
        </div>
        <div className='flex gap-10 px-5 text-lg'>
          <div className='flex flex-col px-5 w-[18rem]' >
            <span className='flex border-b font-bold py-2'>Contact</span>
            <ul className='flex flex-col '>
              <li className='flex py-1 hover:text-black hover:cursor-pointer gap-3 items-center'><img src={emailcont} className='flex h-5 w-5'/>support@ful.io</li>
              <li className='flex py-1 hover:text-black hover:cursor-pointer gap-3 items-center'><img src={call} className='flex h-5 w-5'/>+1 343 303 6668</li>
              <li className='flex py-1 flex-col text-sm'>
                <span className='flex gap-3 items-center'><img src={loc} className='flex h-5 w-5'/>Ful, Inc.</span>
                <span className='flex ml-8'>1207 Delaware Ave</span>
                <span className='flex ml-8'>#348 Wilmington, DE 19806</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex flex-col text-xl justify-center items-center mt-5'>
        <span className='flex'>Made with ❤️ from Bangalore</span>
        <span className='flex'>By Prabhu</span>
      </div>
    </div>
  )
}

export default Footer
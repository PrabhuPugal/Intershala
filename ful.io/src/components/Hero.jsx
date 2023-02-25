import React from 'react'
import styles from '../style'
import Button from '@mui/material/Button';

const Hero = () => {
  return (
    <div className={`flex flex-col  justify-center items-center`}>
      <div className='flex border-2 shadow-2xl font-medium rounded-lg px-8 py-2'>
        <span>🎉 97563 new domains added on 24 February 2023</span><span className='flex text-primary cursor-pointer pl-5'> Read More</span>
      </div>
      <div className='flex mt-20'>
        <p className='flex flex-col justify-center items-center'>
          <span className='flex text-[2rem] font-bold'>What Is The Web Built On?</span>
          <span className='flex mt-5'>Uncover the technology stack behind any website.</span>
          <span className='flex'>Use our tools for lead generation, market analysis and competitor research.</span>
        </p>
      </div>
      <div className='flex flex-row m-5 w-[50%] gap-5'>
        <input type="text" required placeholder="Enter URL for lookup" className="drop-shadow-lg w-full rounded border border-gray-300 focus:ring-2 
        focus:ring-primary focus:border-primary text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        <Button variant="contained">Search</Button>
      </div>

      <div className='flex mt-20'>
        <p>We periodically scan <span className='bg-primary px-4 rounded text-base font-bold bg-opacity-50'>210,924,846</span> websites and provide up-to-date information.</p>
      </div>

    </div>
  )
}

export default Hero
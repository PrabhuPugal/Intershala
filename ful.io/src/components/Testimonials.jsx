import React from 'react'

import {testimonial} from '../constants'

const Testimonials = () => {
  return (
    <div className={`z-10 flex flex-col  justify-center items-center bg-white mt-10 gap-5 rounded`}>
      <div className='flex text-2xl font-extrabold py-8'>
        Testimonials
      </div>

      <div className='flex flex-wrap justify-center items-start border shadow-lg sm:w-[70%] gap-10 p-4'>
        {testimonial.map((item)=>( 
          <div className='flex flex-col max-w-[20rem]'>
            <div className='flex flex-row py-5 '>
              <div className='flex'><img src={item.img} className='flex h-12 w-12 rounded-full'/></div>
              <div className='flex flex-col px-5'>
                <span className='flex text-base font-bold'>
                  {item.title}
                </span>
                <span className='flex text-base font-semibold'>
                  {item.subtitle}
                </span>
              </div>
            </div>
            <div className='flex ml-[4.25rem]'>
              <span className='flex text-sm text-gray-500 text-justify'>{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
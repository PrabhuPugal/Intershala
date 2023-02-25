import React from 'react'
import styles from '../style'
import {read} from '../assets'
import {business} from '../constants'
const Business = () => {
  return (
    <div className={`flex flex-col ${styles.paddingX} `}>
    {business.map((item)=>(
      <div className={`flex ${item.id%2==0? 'sm:flex-row-reverse flex-col':'sm:flex-row flex-col'} justify-center items-center`} key={item.id}>
        <div className='flex'>
          <img src={item.img} className='h-[30rem] w-[30rem]'/>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-row gap-5 py-3'>
            <img src={item.img1} className='flex h-8 w-8'/>
            <span className='flex text-primary text-2xl font-semibold'>{item.title}</span>
          </div>
          <div className='flex'><span className='flex text-3xl font-semibold'>{item.subtitle}</span></div>
          <div className='flex'><span className='flex text-sm max-w-[40rem] py-3'>{item.desc}</span></div>
          <div className='flex flex-col'>
            <span className='flex text-base font-semibold py-3'>Key Highlights:</span>
            <div className='flex flex-row gap-4 py-1'><img src={read} className='flex h-5 w-5'/>{item.high1}</div>
            <div className='flex flex-row gap-4 py-1'><img src={read} className='flex h-5 w-5'/>{item.high2}</div>
            <div className='flex flex-row gap-4 py-1'><img src={read} className='flex h-5 w-5'/>{item.high3}</div>
          </div>
        </div>
      </div>
    ))}
      
    </div>
  )
}

export default Business


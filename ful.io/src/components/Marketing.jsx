import React from 'react'
import styles from '../style'
import Button from '@mui/material/Button';
import {marketing} from '../constants'
const Marketing = () => {
  return (
    <div className={`z-10 flex flex-col  justify-center items-center bg-white mt-10 gap-5 rounded`}>
      <div className='flex text-xl font-extrabold'>
        Power Your Sales And Marketing Teams
      </div>
      <div className='flex gap-5 flex-wrap justify-center items-center'>
        {marketing.map((item)=>(
          <div className='flex flex-col bg-white shadow-lg border-2 rounded max-w-[20rem] h-[20rem] justify-center items-center' key={item.id}>
            <div className='flex'>
              <img src={item.img} className=' h-32 w-32'/>
            </div>
            <div className='flex flex-col text-center'>
              <span><span className='flex text-lg font-bold justify-center items-center text-center'>{item.name}</span>{item.desc}</span>
            </div>
          </div>
        ))}
        
      </div>
      <div className='flex flex-row gap-10 mt-5'>
        <Button variant="contained"><span className='text-xs'>Try For free</span></Button>
        <Button variant="outlined"><span className='text-xs'>How we are Better</span></Button>
      </div>
    </div>
  )
}

export default Marketing
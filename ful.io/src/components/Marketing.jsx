import React,{useState} from 'react'
import styles from '../style'
import Button from '@mui/material/Button';
import {marketing} from '../constants'
const Marketing = () => {

  const [toggle,setToggle] = useState(false);
  const [select,setSelect] = useState(null);

  const handleSelect = (id) => {
    setSelect(id);
  };

  const handleDropClick = (id) => {
    if(!toggle)
    {
      handleSelect(id);
    }
    else
    {
      handleSelect(null);
    }
    setToggle(!toggle);
  };

  return (
    <div className={`z-10 flex flex-col justify-center items-center bg-gray-100 mt-10 gap-5 rounded py-5`}>
      <div className='flex text-xl font-extrabold py-8'>
        Power Your Sales And Marketing Teams
      </div>
      <div className='flex gap-5 flex-wrap justify-center items-center'>
        {marketing.map((item)=>(
          <div className={`flex flex-col rounded ${select===item.id?'bg-white rounded-xl':''} transition duration-300 w-[20rem] h-[20rem] justify-center items-center`} key={item.id} onMouseEnter={() => handleDropClick(item.id)}
        onMouseLeave={() => handleDropClick(item.id)}>
            <div className='flex'>
              <img src={item.img} className=' h-32 w-32 rounded-full bg-white'/>
            </div>
            <div className='flex flex-col text-center transition duration-300 delay-500'>
              <span className='flex text-lg font-bold justify-center items-center text-center'>{item.name}</span>
              { select===item.id && <span className='flex p-2 transition duration-300 delay-1000'>{item.desc}</span>}
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
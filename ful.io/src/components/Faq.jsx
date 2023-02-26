import React,{useState} from 'react'

import {faq,downarrow,uparrow} from '../assets'
import {faq as f} from '../constants'

const Faq = () => {

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
    <div className={`z-10 flex sm:flex-row flex-col justify-center items-center bg-white mt-10 gap-5 rounded`}>
      <div className='flex flex-col justify-center items-center '>
        <div className='flex text-3xl font-extrabold py-8'>
          Frequently Asked Questions
        </div>
        <div className='flex flex-col gap-10'>
          {f.map((item)=>(
            <div className='flex flex-col bg-gray-100 shadow-xl p-5 sm:w-[40rem] w-[20rem]' key={item.id}>
              <div className='flex flex-row text-lg font-semibold justify-between items-center cursor-pointer' onClick={()=>handleDropClick(item.id)}>
                <span>{item.ques}</span>
                {select!==item.id && <img className='flex h-6 w-6' src={downarrow} alt={'Downarrow'}/>}
                {select===item.id && <img className='flex h-6 w-6' src={uparrow} alt={'Uparrow'} />}
              </div>
              { select===item.id && <span className='flex'>{item.ans}</span>}
            </div>
          ))}
        </div>
      </div>
      <div className='flex'>
        <img src={faq} className='flex h-[40rem] w-[40rem]'/>
      </div>
    </div>
  )
}

export default Faq
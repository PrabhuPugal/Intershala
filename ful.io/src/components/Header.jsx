import React,{useState} from 'react'
import { logo,uparrow,downarrow,dropdown1,dropdown2,dropdown3,dropdown4,dropdown5,dropdown6 } from '../assets'
import Button from '@mui/material/Button'

const Header = () => {

  const [toggle,setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className='sm:flex hidden flex-row justify-between items-center '>
        <div className='flex'>
            <img className='flex h-28 w-28' src={logo} alt={'Logo'}/>
        </div>
        <div className='flex text-black font-bold gap-10 justify-center items-center'>
            <div className='flex hover:text-primary cursor-pointer'>Home</div>
            <div className='flex flex-row'>
              <div className='flex hover:text-primary cursor-pointer px-4'>Features</div>
            
              {!toggle && <img className='flex h-6 w-6' src={downarrow} alt={'Downarrow'} onClick={handleClick} />}
              { toggle && <img className='flex h-6 w-6' src={uparrow} alt={'Uparrow'} onClick={handleClick}/>}
              <div className={`flex absolute flex-col mt-10 shadow-xl w-72 text-[13px] font-normal p-2 ${toggle?'flex':'hidden'}`}>
                <div className='p-2 h-10 flex flex-row gap-3'><img src={dropdown1} className='flex h-6 w-6'/><span className='flex'>Technology Search</span></div>
                <div className='p-2 h-10 flex flex-row gap-3 border-b'><img src={dropdown2} className='flex h-6 w-6'/><span className='flex'>Category Search</span></div>
                <div className='p-2 h-10 flex flex-row gap-3'><img src={dropdown3} className='flex h-6 w-6'/><span className='flex'>Email Verification</span></div>
                <div className='p-2 h-10 flex flex-row gap-3'><img src={dropdown4} className='flex h-6 w-6'/><span className='flex'>Professional Domain Data</span></div>
                <div className='p-2 h-10 flex flex-row gap-3'><img src={dropdown5} className='flex h-6 w-6'/><span className='flex'>Technology Compare</span></div>
                <div className='p-2 h-10 flex flex-row gap-3 border-t'><img src={dropdown6} className='flex h-6 w-6'/><span className='flex'>Keyword Search</span><span className='text-red-700 ml-6'>coming soon</span></div>
              </div>
            </div>
            <div className='flex hover:text-primary cursor-pointer'>Pricing</div>
            <div className='flex hover:text-primary cursor-pointer'>Blog</div>
        </div>
        <div className='flex text-black font-bold gap-10 justify-center items-center'>
            <div className='flex'>Login</div>
            <Button variant="outlined"><span className='text-primary font-bold'>Sign Up</span></Button>
        </div>
      </div>
      <div className='flex sm:hidden flex-row justify-between items-center '>
        <div className='flex'>
            <img className='flex h-28 w-28' src={logo} alt={'Logo'}/>
        </div>
        {/* <div className='flex text-black font-bold gap-10 justify-center items-center'>
            <div className='flex hover:text-primary cursor-pointer'>Home</div>
            <div className='flex flex-row'>
              <div className='flex hover:text-primary cursor-pointer px-4'>Features</div>
            
              {!toggle && <img className='flex h-6 w-6' src={downarrow} alt={'Downarrow'} onClick={handleClick} />}
              { toggle && <img className='flex h-6 w-6' src={uparrow} alt={'Uparrow'} onClick={handleClick}/>}
              <div className={`flex absolute flex-col mt-10 shadow-xl w-72 text-[13px] font-normal p-2 ${toggle?'flex':'hidden'}`}>
                <div className='p-2 h-10 flex flex-row gap-3'><img src={dropdown1} className='flex h-6 w-6'/><span className='flex'>Technology Search</span></div>
                <div className='p-2 h-10 flex flex-row gap-3 border-b'><img src={dropdown2} className='flex h-6 w-6'/><span className='flex'>Category Search</span></div>
                <div className='p-2 h-10 flex flex-row gap-3'><img src={dropdown3} className='flex h-6 w-6'/><span className='flex'>Email Verification</span></div>
                <div className='p-2 h-10 flex flex-row gap-3'><img src={dropdown4} className='flex h-6 w-6'/><span className='flex'>Professional Domain Data</span></div>
                <div className='p-2 h-10 flex flex-row gap-3'><img src={dropdown5} className='flex h-6 w-6'/><span className='flex'>Technology Compare</span></div>
                <div className='p-2 h-10 flex flex-row gap-3 border-t'><img src={dropdown6} className='flex h-6 w-6'/><span className='flex'>Keyword Search</span><span className='text-red-700 ml-6'>coming soon</span></div>
              </div>
            </div>
            <div className='flex hover:text-primary cursor-pointer'>Pricing</div>
            <div className='flex hover:text-primary cursor-pointer'>Blog</div>
        </div>
        <div className='flex text-black font-bold gap-10 justify-center items-center'>
            <div className='flex'>Login</div>
            <Button variant="outlined"><span className='text-primary font-bold'>Sign Up</span></Button>
        </div> */}
      </div>
    </>
  )
}

export default Header
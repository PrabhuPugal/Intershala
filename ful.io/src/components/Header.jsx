import React,{useState} from 'react'
import { logo,uparrow,rightarrow,downarrow,dropdown1,dropdown2,dropdown3,dropdown4,dropdown5,dropdown6,menu,cross,search } from '../assets'
import Button from '@mui/material/Button'
import styles from '../style'

const Header = () => {

  const [toggle,setToggle] = useState(false);
  const [menuToggle,setMenuToggle] = useState(false);

  const handleDropClick = () => {
    setToggle(!toggle);
  };

  const handleMenuClick = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <>
      <div className={`sm:flex hidden flex-row justify-between items-center ${styles.paddingX}`}>
        <div className='flex'>
            <img className='flex h-28 w-28' src={logo} alt={'Logo'}/>
        </div>
        <div className='flex text-black font-bold gap-10 justify-center items-center'>
            <div className='flex hover:text-primary cursor-pointer'>Home</div>
            <div className='flex flex-row'>
              <div className='flex hover:text-primary cursor-pointer px-4'>Features</div>
            
              {!toggle && <img className='flex h-6 w-6' src={downarrow} alt={'Downarrow'} onClick={handleDropClick} />}
              { toggle && <img className='flex h-6 w-6' src={uparrow} alt={'Uparrow'} onClick={handleDropClick}/>}
              <div className={`flex absolute flex-col mt-10 shadow-xl w-72 text-[13px] font-normal p-2 ${toggle?'flex':'hidden'} z-10 bg-white`}>
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
      
      <div className={`flex sm:hidden flex-col ${styles.paddingX}`}>
      
        {!menuToggle && <div className='flex flex-row justify-between items-center'>
          <img className='flex h-28 w-28' src={logo} alt={'Logo'}/>
          <img className='flex h-8 w-8' src={menu} alt={'Menu'} onClick={handleMenuClick}/>
        </div>}
        
        {menuToggle && <div className='flex flex-col h-screen w-full bg-black text-white'>
          <div className='flex flex-row justify-between items-center px-3 py-6 border-b '>
            <img className='flex h-8 w-8' src={search} alt={'Search'}/>
            <img className='flex h-8 w-8' src={cross} alt={'Close'} onClick={handleMenuClick}/>
          </div>
          <div className='flex flex-col mt-5'>
            <div className='p-2 h-10 flex flex-row gap-3 justify-between items-center'><span className='flex'>Home</span><img src={rightarrow} className='flex h-4 w-4'/></div>
            <div className='p-2 h-10 flex flex-row gap-3 justify-between items-center'><span className='flex'>Category Search</span><img src={rightarrow} className='flex h-4 w-4'/></div>
            <div className='p-2 h-10 flex flex-row gap-3 justify-between items-center'><span className='flex'>Technology Search</span><img src={rightarrow} className='flex h-4 w-4'/></div>
            <div className='p-2 h-10 flex flex-row gap-3 justify-between items-center'><span className='flex'>Professional Domain Data</span><img src={rightarrow} className='flex h-4 w-4'/></div>
            <div className='p-2 h-10 flex flex-row gap-3 justify-between items-center'><span className='flex'>Technology Compare</span><img src={rightarrow} className='flex h-4 w-4'/></div>
            <div className='p-2 h-10 flex flex-row gap-3 justify-between items-center'><span className='flex'>Email verification</span><img src={rightarrow} className='flex h-4 w-4'/></div>
            <div className='p-2 h-10 flex flex-row gap-3 justify-between items-center'><span className='flex'>Pricing</span><img src={rightarrow} className='flex h-4 w-4'/></div>
            <div className='p-2 h-10 flex flex-row gap-3 justify-between items-center'><span className='flex'>Blog</span><img src={rightarrow} className='flex h-4 w-4'/></div>
            <div className='p-2 h-10 flex flex-row gap-3 justify-between items-center'><span className='flex'>Log In</span></div>
            <div className='p-2 h-10 flex flex-row gap-3 justify-between items-center'><span className='flex'>Sign Up</span></div>
          </div>
        </div>}
      
      </div>
    </>
  )
}

export default Header
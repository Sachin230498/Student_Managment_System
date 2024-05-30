import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { MdOutlineMenuBook } from "react-icons/md";
import logo from '../Assets/logo1.png';
import SignUp from './SignUp';

const Header = ({onClose}) => {
  const[showSignUp,setshowSignUp] = useState(false);
  return (
    <>
    <div className='flex justify-between p-1 items-center fixed top-0 w-full h-16 bg-white shadow-md z-10'>
      <img src={logo} alt="logo" className='w-32'/>
      <MdOutlineMenuBook className='md:hidden text-3xl'/>
     <div className='hidden md:block'>
       <div className='flex items-center w-full gap-9 font-sans'>
        <Link to="home"><a className='hover:text-red-400' href="#">Home</a></Link>
        <a className='hover:text-red-400' href="#">Courses</a>
        <a className='hover:text-red-400' href="#">Fee</a>
        <a className='hover:text-red-400' href="#">About Us</a>
        <a className='hover:text-red-400' href="#">Contact Us</a>
        <div className='flex gap-2 p-2'>
          <button className='bg-[#101735] text-white rounded-full px-2 p-1 w-20'>SignIn</button>
          <button className='bg-[#101735] text-white rounded-full px-2 p-1 w-20' onClick={() => setshowSignUp(true)}>SignUp</button>
        </div>
      </div>
     </div>
    </div>
    <div>
    { showSignUp &&  <SignUp className='blur-lg'  onClose={()=> setshowSignUp(false) }/>}
    </div>
    </>
  )
}

export default Header;

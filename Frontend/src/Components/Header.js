import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineMenuBook } from 'react-icons/md';
import logo from '../Assets/logo1.png';
import SignUp from './SignUp';
import Login from './Login';

const Header = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className='flex justify-between p-1 items-center fixed top-0 w-full h-16 bg-white shadow-md z-10 mt-2 mb-2'>
        <img src={logo} alt="Website Logo" className='w-32 m-6' />
        <div className='md:hidden'>
          <MdOutlineMenuBook className='text-3xl' onClick={toggleMenu} />
        </div>
        <div className={`md:block ${menuOpen ? 'block' : 'hidden'}`}>
          <div className='flex flex-col md:flex-row mt-80 md:m-0 p-3 md:p-0 items-center w-full md:gap-9 gap-2 font-sans bg-white font-semibold md:font-normal'>
            <Link className='hover:text-red-400' to="/home" onClick={closeMenu}>Home</Link>
            <Link className='hover:text-red-400' to="/ourCourses" onClick={closeMenu}>Courses</Link>
            <a className='hover:text-red-400' href="#" onClick={closeMenu}>Fee</a>
            <a className='hover:text-red-400' href="#" onClick={closeMenu}>About Us</a>
            <a className='hover:text-red-400' href="#" onClick={closeMenu}>Contact Us</a>
            <div className='flex flex-col md:flex-row gap-2 p-2'>
              <Link to="/login"><button className='bg-[#101735] text-white rounded-full px-2 p-1 w-20' >SignIn</button></Link>
              <Link to="/signUp"><button className='bg-[#101735] text-white rounded-full px-2 p-1 w-20'>SignUp</button></Link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;

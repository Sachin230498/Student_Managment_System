import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from '../Assets/logo1.png'



const Login = () => {
  return (
      <div className='flex flex-col md:flex-row justify-evenly items-center  md:h-screen '>
      <div className=''>
        <img src={logo} alt="logo"  className='h-64 w-80 md:h-full md:w-full'/>
      </div>
      <div className='shadow-2xl p-2 flex flex-col gap-3 justify-center w-full max-w-80'>
        <h1 className='font-bold font-serif text-xl sm:text-2xl text-center'>Hi, Welcome!👋</h1>
        <form action="" className='flex flex-col justify-center gap-3'>
          <label className='text-xs'>Email Address</label>
          <input className='border-2 pl-2 rounded' type="email" placeholder='Email Address' />
          <label className='text-xs'>Password</label>
          <input className='border-2 pl-2 rounded' type="password" placeholder='Password' />
          <div className='md:flex justify-between items-center'>
           <div className='flex justify-start gap-1 items-center text-xs'>
           <input type="checkbox" />
           <label htmlFor="">Remember me</label>
           </div>
           <a href="#" className='text-blue-600 font-semibold text-xs'>Forgot password?</a>
          </div>
          <button className='bg-[#101735] text-white font-semibold font-serif rounded-full h-8 mt-3'>Log in</button>
        </form>
        <div className='mt-4'>
        <hr />
      <p className='text-xs font-serif relative bottom-2 left-32'>Or with</p>
        </div>
         <div className='grid grid-cols-2 gap-2'>
          <FaGoogle className='border rounded w-full h-8 p-1 col-span-2 bg-red-500 text-white' /> 
          <FaApple className='border rounded w-full h-8 p-1 col-span-1 bg-blue-800 text-white' />  
          <MdEmail className='border rounded w-full h-8 p-1 col-span-1 bg-blue-500 text-white' /> 
         </div>
        <p className='flex justify-between text-xs font-serif p-2'>
          <p>Dont't have an account?</p>
          <a href='#' className='font-semibold text-blue-400 '>Sign Up</a>
        </p>
      </div>
    </div>
  )
}

export default Login
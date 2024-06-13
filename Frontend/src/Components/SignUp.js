// import React from 'react'
// import { FaGoogle } from "react-icons/fa";
// import { FaApple } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import logo from '../Assets/logo1.png'

// const SignUp = ({onClose}) => {
//   return (
//     <>
//     <div className='flex flex-col md:flex-row justify-evenly items-center  md:h-full  mt-16 m-8'>
//     {/* <div className=''>
//       <img src={logo} alt="logo"  className='h-64 w-80 md:h-full md:w-full'/>
//     </div> */}
//     <div className='shadow-2xl p-2 flex flex-col gap-3 justify-center w-full max-w-80'>
//     <p className='text-3xl ml-auto  text-black ' onClick={onClose}>x</p>
//       <h1 className='font-bold font-serif text-xl sm:text-2xl text-center'>Create account</h1>
//       <form action="" className='flex flex-col justify-center gap-3'>
//         <input className='border-2 pl-2 rounded' type="email" placeholder='Email Address' />
//         <input className='border-2 pl-2 rounded' type="password" placeholder='Password' />
//         <input className='border-2 pl-2 rounded' type="password" placeholder='Confirm Password' />
//         <button className='bg-[#101735] text-white font-semibold font-serif rounded-full h-8'>Create Account</button>
//       </form>
//       <div className='mt-4'>
//         <hr />
//       <p className='text-xs font-serif relative bottom-2 left-32'>Or with</p>
//         </div>
//         <div className='grid grid-cols-2 gap-2'>
//           <FaGoogle className='border rounded w-full h-8 p-1 col-span-2 bg-red-500 text-white' /> 
//           <FaApple className='border rounded w-full h-8 p-1 col-span-1 bg-blue-800 text-white' />  
//           <MdEmail className='border rounded w-full h-8 p-1 col-span-1 bg-blue-500 text-white' /> 
//          </div>
//       <p className='flex justify-between text-xs font-serif p-2'>
//         <p>Already have an account?</p>
//         <a href='#' className='font-semibold text-blue-400 '>Log in</a>
//       </p>
//     </div>
//   </div>
//     </>
//   )
// }

// export default SignUp
import React, { useState } from 'react';
import axios from 'axios';
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from '../Assets/logo1.png';

const SignUp = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '', 
    gender: '',
    phone: '',
    subject: ''
  });

  const { name, email, password, confirmPassword, role, gender, phone, subject } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/api/register', {
        name,
        email,
        password,
        role,
        gender,
        phone,
        subject
      });

      console.log('Registration successful:', response.data);
      // Handle success (e.g., show a success message, redirect to login)
    } catch (error) {
      console.error('Registration failed:', error.message);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <>
      <div className='flex flex-col md:flex-row justify-evenly items-center md:h-full mt-16 m-8'>
        {/* <div className=''>
          <img src={logo} alt="logo"  className='h-64 w-80 md:h-full md:w-full'/>
        </div> */}
        <div className='shadow-2xl p-2 flex flex-col gap-3 justify-center w-full max-w-80'>
          <p className='text-3xl ml-auto text-black' onClick={onClose}>x</p>
          <h1 className='font-bold font-serif text-xl sm:text-2xl text-center'>Create account</h1>
          <form onSubmit={handleSignUp} className='flex flex-col justify-center gap-3'>
            <input
              className='border-2 pl-2 rounded'
              type="text"
              placeholder='Name'
              name='name'
              value={name}
              onChange={handleChange}
              required
            />
            <input
              className='border-2 pl-2 rounded'
              type="email"
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={handleChange}
              required
            />
            <input
              className='border-2 pl-2 rounded'
              type="password"
              placeholder='Password'
              name='password'
              value={password}
              onChange={handleChange}
              required
            />
            <input
              className='border-2 pl-2 rounded'
              type="password"
              placeholder='Confirm Password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={handleChange}
              required
            />
            <input
              className='border-2 pl-2 rounded'
              type="text"
              placeholder='Gender'
              name='gender'
              value={gender}
              onChange={handleChange}
            />
            <input
              className='border-2 pl-2 rounded'
              type="text"
              placeholder='Phone'
              name='phone'
              value={phone}
              onChange={handleChange}
            />
            <input
              className='border-2 pl-2 rounded'
              type="text"
              placeholder='Subject'
              name='subject'
              value={subject}
              onChange={handleChange}
            />
            <button
              type='submit'
              className='bg-[#101735] text-white font-semibold font-serif rounded-full h-8'
            >
              Create Account
            </button>
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
            <p>Already have an account?</p>
            <a href='#' className='font-semibold text-blue-400'>Log in</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;

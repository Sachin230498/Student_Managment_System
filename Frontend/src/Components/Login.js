// import React from 'react';
// import { FaGoogle } from "react-icons/fa";
// import { FaApple } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import logo from '../Assets/logo1.png';

// const Login = ({ onClose }) => {
  
//   return (
//     <div className='flex flex-col md:flex-row justify-evenly items-center md:h-screen'>
//       <div className='shadow-2xl p-2 flex flex-col gap-3 justify-center w-full max-w-sm'>
//         <button className='text-3xl ml-auto text-black' onClick={onClose}>x</button>
//         <h1 className='font-bold font-serif text-xl sm:text-2xl text-center'>Hi, Welcome!👋</h1>
//         <form action="" className='flex flex-col justify-center gap-3'>
//           <label className='text-xs'>Email Address</label>
//           <input className='border-2 pl-2 rounded' type="email" placeholder='Email Address' />
//           <label className='text-xs'>Password</label>
//           <input className='border-2 pl-2 rounded' type="password" placeholder='Password' />
//           <div className='md:flex justify-between items-center'>
//             <div className='flex justify-start gap-1 items-center text-xs'>
//               <input type="checkbox" />
//               <label htmlFor="">Remember me</label>
//             </div>
//             <a href="#" className='text-blue-600 font-semibold text-xs'>Forgot password?</a>
//           </div>
//           <button className='bg-[#101735] text-white font-semibold font-serif rounded-full h-8 mt-3'>Log in</button>
//         </form>
//         <div className='mt-4'>
//           <hr />
//           <p className='text-xs font-serif relative bottom-2 text-center'>Or with</p>
//         </div>
//         <div className='grid grid-cols-2 gap-2'>
//           <FaGoogle className='border rounded w-full h-8 p-1 col-span-2 bg-red-500 text-white' />
//           <FaApple className='border rounded w-full h-8 p-1 col-span-1 bg-blue-800 text-white' />
//           <MdEmail className='border rounded w-full h-8 p-1 col-span-1 bg-blue-500 text-white' />
//         </div>
//         <div className='flex justify-between text-xs font-serif p-2'>
//           <span>Don't have an account?</span>
//           <a href='#' className='font-semibold text-blue-400'>Sign Up</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { FaGoogle, FaApple } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';

// const Login = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const navigate = useNavigate();

//   const { email, password } = formData;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8081/api/login', {
//         email,
//         password
//       });

//       const { token, role } = response.data;
//       console.log('Login successful:', token,role);

//       // Save the token in localStorage or a context
//       localStorage.setItem('token', token);
//       localStorage.setItem('role', role);


//       if (role === 'Admin' || role === 'Instructor') {
//         navigate('/dashboard');
//       } else {
//         navigate('/');
//       }
//     } catch (error) {
//       if (error.response) {
//         console.error('Login failed:', error.response.data);
//       } else if (error.request) {
//         console.error('Login failed:', error.request);
//       } else {
//         console.error('Login failed:', error.message);
//       }
//     }
//   };

//   return (
//     <div className='flex flex-col md:flex-row justify-evenly items-center md:h-screen'>
//       <div className='shadow-2xl p-2 flex flex-col gap-3 justify-center w-full max-w-sm'>
//         <button className='text-3xl ml-auto text-black' onClick={onClose}>
//           x
//         </button>
//         <h1 className='font-bold font-serif text-xl sm:text-2xl text-center'>
//           Hi, Welcome!👋
//         </h1>
//         <form onSubmit={handleLogin} className='flex flex-col justify-center gap-3'>
//           <label className='text-xs'>Email Address</label>
//           <input
//             className='border-2 pl-2 rounded'
//             type='email'
//             placeholder='Email Address'
//             name='email'
//             value={email}
//             onChange={handleChange}
//             required
//           />
//           <label className='text-xs'>Password</label>
//           <input
//             className='border-2 pl-2 rounded'
//             type='password'
//             placeholder='Password'
//             name='password'
//             value={password}
//             onChange={handleChange}
//             required
//           />
//           <div className='md:flex justify-between items-center'>
//             <div className='flex justify-start gap-1 items-center text-xs'>
//               <input type='checkbox' />
//               <label htmlFor=''>Remember me</label>
//             </div>
//             <a href='#' className='text-blue-600 font-semibold text-xs'>
//               Forgot password?
//             </a>
//           </div>
//           <button
//             type='submit'
//             className='bg-[#101735] text-white font-semibold font-serif rounded-full h-8 mt-3'
//           >
//             Log in
//           </button>
//         </form>
//         <div className='mt-4'>
//           <hr />
//           <p className='text-xs font-serif relative bottom-2 text-center'>Or with</p>
//         </div>
//         <div className='grid grid-cols-2 gap-2'>
//           <FaGoogle className='border rounded w-full h-8 p-1 col-span-2 bg-red-500 text-white' />
//           <FaApple className='border rounded w-full h-8 p-1 col-span-1 bg-blue-800 text-white' />
//           <MdEmail className='border rounded w-full h-8 p-1 col-span-1 bg-blue-500 text-white' />
//         </div>
//         <div className='flex justify-between text-xs font-serif p-2'>
//           <span>Don't have an account?</span>
//           <a href='#' className='font-semibold text-blue-400'>
//             Sign Up
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



//---------------------------///
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaGoogle, FaApple } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Login = ({ onClose }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/api/login', { email, password });
      const { token, role } = response.data;

      // Save the token and role in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      if (role === 'Admin' || role === 'Instructor') {
        navigate('/dashboard');
      } else {
        navigate('/home');
      }
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='flex flex-col md:flex-row justify-evenly items-center md:h-screen'>
      <div className='shadow-2xl p-2 flex flex-col gap-3 justify-center w-full max-w-sm'>
        <button className='text-3xl ml-auto text-black' onClick={onClose}>x</button>
        <h1 className='font-bold font-serif text-xl sm:text-2xl text-center'>Hi, Welcome!👋</h1>
        <form onSubmit={handleLogin} className='flex flex-col justify-center gap-3'>
          <label className='text-xs'>Email Address</label>
          <input
            className='border-2 pl-2 rounded'
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={handleChange}
            required
          />
          <label className='text-xs'>Password</label>
          <input
            className='border-2 pl-2 rounded'
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={handleChange}
            required
          />
          <div className='md:flex justify-between items-center'>
            <div className='flex justify-start gap-1 items-center text-xs'>
              <input type='checkbox' />
              <label htmlFor=''>Remember me</label>
            </div>
            <a href='#' className='text-blue-600 font-semibold text-xs'>Forgot password?</a>
          </div>
          <button type='submit' className='bg-[#101735] text-white font-semibold font-serif rounded-full h-8 mt-3'>Log in</button>
        </form>
        <div className='mt-4'>
          <hr />
          <p className='text-xs font-serif relative bottom-2 text-center'>Or with</p>
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <FaGoogle className='border rounded w-full h-8 p-1 col-span-2 bg-red-500 text-white' />
          <FaApple className='border rounded w-full h-8 p-1 col-span-1 bg-blue-800 text-white' />
          <MdEmail className='border rounded w-full h-8 p-1 col-span-1 bg-blue-500 text-white' />
        </div>
        <div className='flex justify-between text-xs font-serif p-2'>
          <span>Don't have an account?</span>
          <a href='#' className='font-semibold text-blue-400'>Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;


import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import logo from '../Assets/logo4.png'


const Footer = () => {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2   md:grid-cols-4 font-serif bg-black text-white p-4 space-y-4'>
        
        <div className='flex justify-center  items-center  '>
          <img src={logo} className='w-60' />
        </div>

          <div className='flex justify-center  items-center      text-sm '>
            <div className='flex flex-col gap-4 items-center sm:items-start'>
            <h1 className='font-semibold'>Explore</h1>
            <a href="#">Home</a>
            <a href="#">Courses</a>
            <a href="#">Fee</a>
            <a href="#">About Us</a>
            </div>
          </div>
          <div className='flex justify-center  items-center      text-sm'>
          <div className='flex flex-col gap-4 items-center sm:items-start'>
            <h1 className='font-semibold'>Company</h1>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact Us</a>
            <a href="#">Features</a>
          </div>
          </div>

          <div className='flex justify-center  items-center      text-sm'>
          <div className='flex flex-col gap-4 items-center sm:items-start'>
            <h1 className='font-semibold'>Get in Touch</h1>
            <p >Plort no 70, 1st & 3rd floor, PU4, scheme no.54, Behind C21 Mall, Indore - 452010</p>
            <a href="#">+91-8815531673 <br/> +91-8827631146</a>
            <a href="#">training@shantiinfosoft.com</a>
          </div>
          </div>
      </div>


     <div className='flex flex-col sm:flex-row justify-evenly items-center text-white bg-black p-2'>
       <h3 className='text-sm text-center font-semibold w-full'>
        2024 Future Edge. All rights reserved.
       </h3>
      <div className='flex  justify-center sm:justify-evenly w-full items-center gap-3 text-3xl  '>
          <FaLinkedin/>
          <FaFacebookSquare/>
          <FaSquareInstagram/>
          <FaYoutube className='text-4xl'/>
        </div>
     </div>
    </>
  )
}

export default Footer

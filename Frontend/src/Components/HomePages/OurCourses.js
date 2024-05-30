import React from 'react'
import mern from '../../Assets/mern.jpg'
import python from '../../Assets/java.jpg'
import dm from '../../Assets/dm.jpg'
import { TiTick } from "react-icons/ti";

const OurCourses = () => {
  return (
    <>
      <h1 className='text-2xl sm:text-5xl font-bold text-center mb-4'>
      Our Courses
      </h1>
      <p className='text-xl sm:text-2xl font-semibold text-[#4e4c4c] text-center mb-4'>
       Practice-Based Learning Tracks, 
        <strong className='text-[#f55454] font-bold'>Supercharged By A.I.</strong>
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 sm:gap-10 sm:px-12 p-5'>
        <div className='flex flex-col font-semibold gap-3 shadow-2xl rounded-md p-2 '>
          <img src={mern} alt='mern logo' className='w-64 md:w-full h-64 rounded-t-lg m-auto'/>
          <h1 className='font-bold text-center sm:text-left'>Full Stack Web Development</h1>
          <h2 className='rounded-full p-2 border-blue-400 border-2 pl-4 '>For 12th, Diploma & College Graduates, 18-28 years</h2>
          <h2 className='flex items-center'> <TiTick className="text-green-600"/>Become job-ready in 30 weeks</h2>
          <h2 className='flex items-center'> <TiTick className="text-green-600"/> <p><strong>Opportunities:</strong> Full Stack Developer, Software Engineer & much more.</p></h2>
          <h2 className='flex items-center'> <TiTick className="text-green-600"/>100% live learning with expert instructors.</h2>
          <h2 className='flex items-center'> <TiTick className="text-green-600"/>Pay After Placement</h2>
          <button className='bg-[#4e51f0] p-1 m-auto w-fit px-5 rounded-full text-white '>View More</button>
          <button className='bg-[#e44141] text-white p-1 w-fit px-4 m-auto rounded-full'>Buy Now</button>
        </div>

        <div className='flex flex-col font-semibold gap-3 shadow-2xl rounded-md p-2 '>
          <img src={python} alt='mern logo' className='w-64 md:w-full h-64 rounded-t-lg m-auto '/>
          <h1 className='font-bold text-center sm:text-left'>Python</h1>
          <h2 className='rounded-full p-2 border-blue-400 border-2 pl-4 '>For 12th, Diploma & College Graduates, 18-28 years</h2>
          <h2 className='flex items-center'> <TiTick className="text-green-600"/>Become job-ready in 30 weeks</h2>
          <h2 className='flex items-center'> <TiTick className="text-green-600"/> <p><strong>Opportunities:</strong> Full Stack Developer, Software Engineer & much more.</p></h2>
          <h2 className='flex items-center'> <TiTick className="text-green-600"/>100% live learning with expert instructors.</h2>
          <h2 className='flex items-center'> <TiTick className="text-green-600"/>Pay After Placement</h2>
          <button className='bg-[#4e51f0] p-1 m-auto w-fit px-5 rounded-full text-white '>View More</button>
          <button className='bg-[#e44141] text-white p-1 w-fit px-4 m-auto rounded-full'>Buy Now</button>
        </div>

        <div className='flex flex-col font-semibold gap-3 shadow-2xl rounded-md p-2 '>
          <img src={dm} alt='mern logo' className='w-64 md:w-full h-64 rounded-t-lg m-auto'/>
          <h1 className='font-bold text-center sm:text-left'>Digital Marketing</h1>
          <h2 className='rounded-full p-2 border-blue-400 border-2 pl-4 '>For 12th, Diploma & College Graduates, 18-28 years</h2>
          <h2 className='flex items-center'> <TiTick className="text-green-600"/>Become job-ready in 30 weeks</h2>
          <h2 className='flex items-center'> <TiTick className="text-green-600"/> <p><strong>Opportunities:</strong> Full Stack Developer, Software Engineer & much more.</p></h2>
          <h2 className='flex items-center'> <TiTick className="text-green-600"/>100% live learning with expert instructors.</h2>
          <h2 className='flex items-center'> <TiTick className="text-green-600"/>Pay After Placement</h2>
          <button className='bg-[#4e51f0] p-1 m-auto w-fit px-5 rounded-full text-white '>View More</button>
          <button className='bg-[#e44141] text-white p-1 w-fit px-4 m-auto rounded-full'>Buy Now</button>
        </div>
      </div>
    </>
  )
}

export default OurCourses

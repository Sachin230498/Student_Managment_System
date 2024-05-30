import React from 'react'
import { TiTick } from "react-icons/ti";
import { MdComputer } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { ImPower } from "react-icons/im";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiMedal2Fill } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { FaRegAddressCard } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { GiPublicSpeaker } from "react-icons/gi";
import { RiContactsFill } from "react-icons/ri";
import { IoVideocam } from "react-icons/io5";




const Python = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center  p-3 mt-16' style={{ backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2aSeZzdpm2l6y9vpmllV33BImkP9D6PeO_PsWGTOLq6sGpp7)" , backgroundRepeat:"no-repeat", backgroundSize:"cover" }} >
     <div className='flex flex-col justify-center items-center gap-2  mt-6 mb-6'>
      <p className='sm:text-4xl text-2xl font-bold mb-6 '>Become a Python Developer </p>
      <p className='font-bold text-md flex justify-center items-center gap-2'><TiTick className='text-green-500  border border-black rounded-full'/> No prior coding experience required</p>
      <p className='font-bold text-md flex justify-center items-center gap-2'><TiTick className='text-green-500  border border-black rounded-full'/> 30 weeks full-time program with live classes</p>
      <p className='font-bold text-md flex justify-center items-center gap-2'><TiTick className='text-green-500  border border-black rounded-full'/> Top recruiters from PayTM, Walmart, Amazon</p>
      <button className='bg-red-600 text-white  p-1 w-56 rounded-full'>DOWNLOAD BROCHURE</button>
     </div>
    </div>

    <div className='grid grid-cols-2 sm:grid-cols-4 p-10'>
      <div className='flex flex-col gap-3 items-center p-4 m-4 rounded-lg shadow-2xl border-2'>
        <MdComputer className='text-3xl'/>
        <h1>Batch Starting</h1>
        <p>17 June, 2024</p>
      </div>
      <div className='flex flex-col gap-3 items-center p-4 m-4 rounded-lg shadow-2xl border-2'>
        <SlCalender className='text-3xl'/>
        <h1>Duration</h1>
        <p>30 weeks</p>
      </div>
      <div className='flex flex-col gap-3 items-center p-4 m-4 rounded-lg shadow-2xl border-2'>
        <ImPower className='text-3xl'/>
        <h1>Timings</h1>
        <p>*11 am to 11 pm
Monday to Saturday</p>
      </div>
      <div className='flex flex-col gap-3 items-center p-4 m-4 rounded-lg shadow-2xl border-2'>
        <HiMiniUserGroup className='text-3xl'/>
        <h1>Eligibility</h1>
        <p>12th Pass, Diploma & College Graduates,
18 - 28 years</p>
      </div>
    </div>

    <div className='flex flex-col items-center gap-2 '>
      <h1 className='sm:text-4xl text-2xl font-bold'>Minimum criteria</h1>
      <h1 className='sm:text-4xl text-2xl font-bold'>for Python Program</h1>
      <p className='sm:text-2xl text-xl '>You should meet the following requirements to be eligible for this course.</p>
      <div className='grid grid-cols-2 sm:grid-cols-3  m-5 p-4 gap-4 border-2 border-blue-500 rounded-lg'>
        <div className='flex flex-col justify-center items-center m-3 p-3 shadow-2xl'>
          <RiMedal2Fill className='text-3xl'/>
          <h1>Qualification</h1>
          <p>12th Pass, Diploma & College Graduates</p>
        </div>
        <div className='flex flex-col justify-center items-center m-3 p-3 shadow-2xl'>
          <IoMdPerson className='text-3xl'/>
          <h1>Age</h1>
          <p>18 - 28 years</p>
        </div>
        <div className='flex flex-col justify-center items-center m-3 p-3 shadow-2xl'>
          <FaRegAddressCard className='text-3xl'/>
          <h1>ID</h1>
          <p>Valid Aadhaar Card</p>
        </div>
        <div className='flex flex-col justify-center items-center m-3 p-3 shadow-2xl'>
          <TbWorld className='text-3xl'/>
          <h1>Internet</h1>
          <p>A desktop or laptop with an uninterrupted service connection.</p>
        </div>
        <div className='flex flex-col justify-center items-center m-3 p-3 shadow-2xl'>
          <GiPublicSpeaker className='text-3xl'/>
          <h1>Communication Skills</h1>
          <p>Basic English - speaking, reading and writing</p>
        </div>
        <div className='flex flex-col justify-center items-center m-3 p-3 shadow-2xl'>
          <h1 className='text-3xl font-bold'> +1 </h1>
          <h1>CIBIL Score</h1>
          <p>650+</p>
        </div>
      </div>
    </div>

    <div className='flex flex-col items-center gap-2 m-4 '>
      <h1 className='sm:text-4xl text-2xl font-bold'>Admission Process for Python Program</h1>
      <div className='grid grid-cols-2 sm:grid-cols-4  m-5 p-4 gap-4'>
        <div className='flex flex-col justify-center items-center m-3 p-3 shadow-2xl'>
        <RiContactsFill className='text-3xl'/>
        <h1>Crack the Admissions Test (MSAT)</h1>
      </div>
        <div className='flex flex-col justify-center items-center m-3 p-3 shadow-2xl'>
        <MdComputer className='text-3xl'/>
        <h1>Choose a course</h1>
      </div>
        <div className='flex flex-col justify-center items-center m-3 p-3 shadow-2xl'>
        <TiTick className='text-3xl'/>
        <h1>Complete KYC</h1>
      </div>
        <div className='flex flex-col justify-center items-center m-3 p-3 shadow-2xl'>
        <IoVideocam className='text-3xl'/>
        <h1>You are ready to join the batch</h1>
      </div>
    </div>
      <button className='bg-red-500 p-1 w-28  rounded-full'>Buy course</button>
    </div>


    </>
  )
}

export default Python

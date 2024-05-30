
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { CiHeadphones } from "react-icons/ci";
import AddInstructor from './AddInstructor';
import LeftNavbar from '../students/LeftNavbar';
import Header from '../students/Header';

export default function Instructor() {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [showAddInstructor, setShowAddnIstructor] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
      <LeftNavbar />

      <div className="flex flex-col flex-1 p-4 md:p-6">
        <Header />
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">Students</h2>
      
      <button onClick={()=> setShowAddnIstructor(true)} className="bg-blue-400 text-white px-4 py-2 rounded-lg">Add Instructor</button>
      </div>
      
      <div className="flex flex-col sm:flex-row mb-4 space-x-2 gap-y-2">
        <div className="relative flex items-center  w-52 md:w-auto">
          <IoIosArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Add Filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="relative flex items-center justify-center w-full md:flex-1">
          <CiSearch className="absolute left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search for a student by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 pl-10 border border-gray-300 rounded"
          />
        </div>
      </div>
      
      {/* <div className="flex justify-center">
        <img src={sleep} alt="Sleeping" className="w-90 h-96" />
      </div> */}
      
      <h3 className='flex justify-center text-3xl font-bold mt-36'>No Instructor at this time</h3>
      <p className='flex justify-center'>Instructor will appear here after they enroll in your academy</p>
      
      <div className="flex justify-end items-center w-full  gap-8 mt-4 md:mt-0 md:float-right mb-4  ">
          <div className="flex items-center w-fit  gap-2 bg-blue-900 rounded-xl  h-10">
            <CiHeadphones className="text-white" />
            <button className="text-white">Support</button>
          <IoIosArrowDropup className="text-2xl cursor-pointer text-white" />
          </div>
        </div>
      {showAddInstructor && <AddInstructor className='device-addDevice' onClose={() => setShowAddnIstructor(false)} />}
    </div>
    </div>
  );
}

import React, { useState } from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { CiHeadphones } from "react-icons/ci";
import AddInstructor from './AddInstructor';

export default function Instructor() {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [showAddInstructor, setShowAddnIstructor] = useState(false);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-center items-center float-right">
          <IoIosNotificationsOutline className="text-2xl mr-4" />
          <p className="cursor-pointer">Log out</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Instructor</h2>
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
      <div className="flex justify-center items-center gap-8 float-right mb-4 bg-blue-900 w-36 h-10 rounded-xl ">
      <div className='flex items-center gap-2'><CiHeadphones className='text-white' />
<button className="text-white">Support</button>
</div>
        <IoIosArrowDropup className="text-2xl cursor-pointer text-white" />
      </div>
      {showAddInstructor && <AddInstructor className='device-addDevice' onClose={() => setShowAddnIstructor(false)} />}
    </div>
  );
}
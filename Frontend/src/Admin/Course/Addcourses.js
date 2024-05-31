
import React from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";




export default function Addcourses({onClose}) {
  const handleClose = () => {
    onClose();
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 overflow-y-scroll ">

    <div className="bg-white p-4 max-w-xl mx-auto  rounded-lg mt-32">
    <div className='flex justify-end'> <button onClick={handleClose}> <RxCross2 /></button></div>

      <h3 className="text-2xl font-bold mb-4">Add Courses</h3>
    
      <div className="space-y-4">

        <div className='flex space-x-4'>
          <div className="flex-1">
            <label className="block mb-1 font-medium"> Courses Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className='flex space-x-4'>
          <div className="flex-1">
            <label className="block mb-1 font-medium"> Instructor Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
        </div>



        <div className='flex space-x-4'>
        <div className='flex-1'>
          <label className="block mb-1 font-medium">Course Description</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div className="relative flex-1">
          <RiArrowDropDownLine className='absolute left-14 top-12 transform -translate-y-1/2 text-gray-500' />

            <label className="block mb-1 font-medium">Course Duration </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

         

        </div>

<div className='flex space-x-4'>
        <div className='flex-1'>
        <label class="block text-gray-700 mb-2" for="start-date">Start Date</label>
        <input type="date" id="start-date" class="w-full px-3 py-2 border rounded"/>
        </div>

        <div className='flex-1'>
        <label class="block text-gray-700 mb-2" for="start-date">End Date</label>
        <input type="date" id="start-date" class="w-full px-3 py-2 border rounded"/>
        </div>
   </div>

            <div class="flex space-x-4">
                <div className='flex-1'>
                <select name="class" class= "w-full mt-2 p-2 border border-gray-300 rounded-md">
                    <option value="">Course Level</option>
                    <option value="class-1">Beginner</option>
                    <option value="class-2">Intermediate</option>
                    <option value="class-2">Intermediate</option>
                </select>
                </div>


                <div className='flex-1'>
                <select name="class" class= "w-full mt-2 p-2 border border-gray-300 rounded-md">
                    <option value="">Course Category</option>
                    <option value="class-1">Programming</option>
                    <option value="class-2">Design</option>
                    <option value="class-2">Marketing</option>
                </select>
                </div>

            </div>

      <div className='flex space-x-4'>
          <div className="flex-1">
            <label className="block mb-2 font-medium">  Course Price </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>

        <div class="mb-4">
        <label class="block mb-1 font-medium" for="course-image">Course Image</label>
        <input type="file" id="course-image" class="w-full px-3 py-2 border rounded"/>
      </div>

     </div>




      </div>

      <div className='flex items-center gap-24 mb-16'>
        <div className='flex items-center gap-2 cursor-pointer'>
          <IoIosAddCircleOutline className='text-gray-700' />
          <p>Add another h</p>
        </div>
        <button className='bg-gray-300 flex items-center text-gray-700 rounded-md mt-4 px-6 py-2 '>Add Course</button>
      </div>
    </div>
    </div>
  );
}

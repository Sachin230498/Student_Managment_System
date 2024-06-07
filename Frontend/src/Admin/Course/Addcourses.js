
import React,{useState} from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";




export default function Addcourses({onClose}) {

  const [formData, setFormData] = useState({
    courseName: '',
    instructorName: '',
    courseDescription: '',
    courseDuration: '',
    startDate: '',
    endDate: '',
    courseLevel: '',
    courseCategory: '',
    coursePrice: ''
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    // Submit your form data to your API or handle it according to your needs
  };






  const handleClose = () => {
    onClose();
  };



  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 overflow-y-scroll ">

    <div className="bg-white p-4 max-w-xl mx-auto  rounded-lg mt-32">
    <div className='flex justify-end'> <button onClick={handleClose}> <RxCross2 /></button></div>
    <form onSubmit={handleSubmit}>

      <h3 className="text-2xl font-bold mb-4">Add Courses</h3>
    
      <div className="space-y-4">

        <div className='flex space-x-4'>
          <div className="flex-1">
            <label className="block mb-1 font-medium"> Courses Name</label>
            <input

              name="courseName"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Course Name"
              onChange={handleChange}
              value={formData.courseName}

            />
          </div>
        </div>

        <div className='flex space-x-4'>
          <div className="flex-1">
            <label className="block mb-1 font-medium"> Instructor Name</label>
            <input
              name="instructorName"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Instructor Name"
              onChange={handleChange}
              value={formData.instructorName}
            />
          </div>
        </div>



        <div className='flex space-x-4'>
        <div className='flex-1'>
          <label className="block mb-1 font-medium">Course Description</label>
          
            <input
            name="courseDuration"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Course Duration"
            onChange={handleChange}
            value={formData.courseDuration}
          />       
        </div>

        <div className="relative flex-1">
          <RiArrowDropDownLine className='absolute left-14 top-12 transform -translate-y-1/2 text-gray-500' />

            <label className="block mb-1 font-medium">Course Duration </label>
            <input
              name="courseDuration"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Course Duration"
              onChange={handleChange}
              value={formData.courseDuration}

            />
          </div>

         

        </div>

         <div className='flex space-x-4'>
           <div className='flex-1'>
            < label class="block text-gray-700 mb-2" for="start-date">Start Date</label>
            <input
              name="startDate"
              type="date"
              className="w-full px-3 py-2 border rounded"
              onChange={handleChange}
              value={formData.startDate}
            />

        </div>

        <div className='flex-1'>
        <label class="block text-gray-700 mb-2" for="start-date">End Date</label>
        <input
              name="endDate"
              type="date"
              className="w-full px-3 py-2 border rounded"
              onChange={handleChange}
              value={formData.endDate}
            />

        </div>
   </div>

            <div class="flex space-x-4">
                <div className='flex-1'>
                {/* <select name="class" class= "w-full mt-2 p-2 border border-gray-300 rounded-md">
                    <option value="">Course Level</option>
                    <option value="class-1">Beginner</option>
                    <option value="class-2">Intermediate</option>
                    <option value="class-2">Intermediate</option>
                </select> */}

                   <select
              name="courseLevel"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              value={formData.courseLevel}
            >
              <option value="">Course Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

                </div>


                <div className='flex-1'>
                <select
              name="courseCategory"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              value={formData.courseCategory}
            >
              <option value="">Course Category</option>
              <option value="Programming">Programming</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
            </select>

                </div>

            </div>

      <div className='flex space-x-4'>
          <div className="flex-1">
            <label className="block mb-2 font-medium">  Course Price </label>
            <input
              name="coursePrice"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Course Price"
              onChange={handleChange}
              value={formData.coursePrice}
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
          <p>Add another </p>
        </div>
        
        <button type="submit" className="bg-blue-300 text-black hover:bg-indigo-100 transition duration-300 ease-out hover:ease-in px-4 py-2 mt-2 rounded-lg">Add Courses</button>

      </div>
      </form>

    </div>
    </div>
  );
}









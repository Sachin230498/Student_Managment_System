
import React,{useState} from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
// import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";


export default function AddInstructor({onClose}) {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    gender: '',
    password: '',
    phoneNumber: '',
    subject: '',
    profileImage: null
});
const handleChange = (event) => {
  const { name, value, files } = event.target;
  if (files) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
  } else {
      setFormData(prev => ({ ...prev, [name]: value }));
  }
};


const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Form Data:', formData);
  // You can add your submission logic here, sending data to an API
};


  const handleClose = () => {
    onClose();
  };



  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 overflow-y-scroll mt-5">

    <div className="bg-white p-4 max-w-xl mx-auto  rounded-lg">
    <div className='flex justify-end mt-36'> <button onClick={handleClose}> <RxCross2 /></button></div>
    <form  onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold mb-4">Add Instructor</h3>
    
      <div className="space-y-4">

        <div className='flex space-x-4'>
          <div className="flex-1">
            <label className="block mb-1 font-medium"> Full Name</label>
            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                value={formData.fullName}
                                onChange={handleChange}
                            />

          </div>
        </div>

        <div className='flex space-x-4'>
        <div className='flex-1'>
          <label className="block mb-1 font-medium">Email Address</label>
          <input
                                type="email"
                                name="email"
                                id="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                value={formData.email}
                                onChange={handleChange}
                            />
        </div>

       

     

               <div class="relative  space-x-4 flex-1 mt-5">
               <select
                                name="gender"
                                id="gender"
                                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>


            </div>




        </div>

<div className='flex space-x-4'>
        <div className='flex-1'>
          <label className="block mb-1 font-medium">Password</label>
          <input
                                type="password"
                                name="password"
                                id="password"
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                value={formData.password}
                                onChange={handleChange}
                            />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
                                type="tel"
                                name="phoneNumber"
                                id="phoneNumber"
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
        </div>
     </div>

            <div class="mb-4">
                
            <select
                            name="subject"
                            id="subject"
                            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                            value={formData.subject}
                            onChange={handleChange}
                        >
                            <option value="">Select Subject</option>
                            <option value="Subject 1">Subject 1</option>
                            <option value="Subject 2">Subject 2</option>
                        </select>

            </div>

            <div class="mb-4">
        <label class="block mb-1 font-medium" for="course-image">Instructor Profile</label>
        <input
                            type="file"
                            name="profileImage"
                            id="profileImage"
                            className="w-full px-3 py-2 border rounded"
                            onChange={handleChange}
                        />

      </div>




      </div>

      <div className='flex items-center gap-24 mb-16'>
        <div className='flex items-center gap-2 cursor-pointer'>
          <IoIosAddCircleOutline className='text-gray-700 mt-10' />
          <p className='mt-10'>Add another </p>
        </div>
        {/* <button className='bg-gray-300 flex items-center text-gray-700 rounded-md mt-4 px-6 py-2 '>Add Instructor</button> */}

        <button type="submit" className="bg-blue-300  text-black hover:bg-indigo-100 transition duration-300 ease-out hover:ease-in  px-4 py-2 mt-8 rounded-lg"> Add Instructor</button>
      </div>
      </form>
    </div>
    </div>
  );
}

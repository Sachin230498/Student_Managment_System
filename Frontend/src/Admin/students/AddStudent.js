// import React from 'react';
// import { IoIosAddCircleOutline } from "react-icons/io";
// import { RiArrowDropDownLine } from "react-icons/ri";

// export default function AddStudent() {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 overflow-y-scroll mt-5">

//     <div className="bg-white p-4 rounded-lg">
//       <h3 className="text-2xl font-bold mb-4">Add Student</h3>
    
//       <div className="space-y-4">
//         <div className='flex space-x-10'>
//           <div className="flex-1">
//             <label className="block mb-1 font-medium">Name</label>
//             <input
//               type="text"
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div className="relative flex-1">
//           <RiArrowDropDownLine className='absolute left-14 top-12 transform -translate-y-1/2 text-gray-500' />

//             <label className="block mb-1 font-medium">Class</label>
//             <input
//               type="text"
//               placeholder='Class'
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div className="relative flex-1">
//           <RiArrowDropDownLine className='absolute left-20 top-12 transform -translate-y-1/2 text-gray-500' />

//             <label className="block mb-1 font-medium">Gender</label>
//             <input
//               type="text"
//               placeholder='Gender'
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//             />
//           </div>
//         </div>
//         <div className='grid grid-cols-2 gap-y-6 gap-x-6'>
//         <div className='flex-1'>
//           <label className="block mb-1 font-medium">Email Address</label>
//           <input
//             type="email"
//             className="w-full px-3 py-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium">Phone Number</label>
//           <input
//             type="tel"
//             className="w-full px-3 py-2 border border-gray-300 rounded"
//           />
//         </div>
       
//         <div>
//           <label className="block font-medium">Password</label>
//           <input
//             type="password"
//             className="w-full px-3 py-2 border border-gray-300 rounded mb-16"
//           />
//         </div>
//         </div>
//       </div>

//       <div className='flex items-center gap-24 mb-16'>
//         <div className='flex items-center gap-2 cursor-pointer'>
//           <IoIosAddCircleOutline className='text-gray-700' />
//           <p>Add another </p>
//         </div>
//         <button className='bg-gray-300 flex items-center text-gray-700 rounded-md px-6 py-2 '>Add Student</button>
//       </div>
//     </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";


export default function AddStudent({ onClose, onAddStudent }) {
  const [name, setName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = { name, class: studentClass, gender, email, phone, password };
    onAddStudent(newStudent);
    onClose(); 
  };
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 overflow-y-scroll mt-5">
      <div className="bg-white p-4 rounded-lg">
     <div className='flex justify-end'> <button onClick={handleClose}> <RxCross2 /></button></div>

        <h3 className="text-2xl font-bold mb-4">Add Student</h3>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className='flex space-x-10'>
              <div className="flex-1">
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="relative flex-1">
                <RiArrowDropDownLine className='absolute left-14 top-12 transform -translate-y-1/2 text-gray-500' />
                <label className="block mb-1 font-medium">Class</label>
                <input
                  type="text"
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="relative flex-1">
                <RiArrowDropDownLine className='absolute left-20 top-12 transform -translate-y-1/2 text-gray-500' />
                <label className="block mb-1 font-medium">Gender</label>
                <input
                  type="text"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-y-6 gap-x-6'>
              <div className='flex-1'>
                <label className="block mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block font-medium">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded mb-16"
                  required
                />
              </div>
            </div>
          </div>
          <div className='flex items-center gap-24 mb-16'>
            <div className='flex items-center gap-2 cursor-pointer'>
              <IoIosAddCircleOutline className='text-gray-700' />
              <p>Add another </p>
            </div>
            <button type="submit" className='bg-gray-300 flex items-center text-gray-700 rounded-md px-6 py-2'>Add Student</button>
          </div>
        </form>
      </div>
    </div>
  );
}

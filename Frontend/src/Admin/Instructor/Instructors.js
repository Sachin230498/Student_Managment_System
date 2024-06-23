// import React, { useState, useEffect } from 'react';
// import { CiSearch } from "react-icons/ci";
// import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
// import { CiHeadphones } from "react-icons/ci";
// import AddInstructor from './AddInstructor';
// import LeftNavbar from '../students/LeftNavbar';
// import Header from '../students/Header';
// import axios from 'axios';

// const Instructors = () => {
//   const [filter, setFilter] = useState('');
//   const [search, setSearch] = useState('');
//   const [showAddInstructor, setShowAddInstructor] = useState(false);
//   const [instructors, setInstructors] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchInstructors();
//   }, []);

//   const fetchInstructors = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('No token found, please login first.');
//       }

//       const response = await axios.get('http://localhost:8081/api/instructors', {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//       });

//       setInstructors(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching instructors:', error);
//       setError('Failed to fetch instructors. Please try again later.');
//       setLoading(false);
//     }
//   };

//   const handleAddInstructor = () => {
//     setShowAddInstructor(true);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="flex flex-col md:flex-row">
//       <LeftNavbar />

//       <div className="flex flex-col flex-1 p-4 md:p-6">
//         <Header />

//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl md:text-3xl font-bold">Instructors</h2>
//           <button onClick={handleAddInstructor} className="bg-blue-400 text-white px-4 py-2 rounded-lg">Add Instructor</button>
//         </div>

//         <div className="flex flex-col sm:flex-row mb-4 space-x-2 gap-y-2">
//           <div className="relative flex items-center w-52 md:w-auto">
//             <IoIosArrowDropdown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Add Filter"
//               value={filter}
//               onChange={(e) => setFilter(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div className="relative flex items-center justify-center w-full md:flex-1">
//             <CiSearch className="absolute left-3 text-gray-500" />
//             <input
//               type="text"
//               placeholder="Search for an instructor by name or email"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full px-3 py-2 pl-10 border border-gray-300 rounded"
//             />
//           </div>
//         </div>

//         {instructors.length === 0 ? (
//           <div className="flex flex-col items-center">
//             <h3 className="text-center text-lg md:text-xl">No instructors at this time</h3>
//             <p className="text-center text-sm md:text-base">Instructors will appear here after they are added to your academy</p>
//           </div>
//         ) : (
//           <div className="">
//             <table className="min-w-full bg-white border shadow-md rounded-lg overflow-hidden mb-5">
//               <thead className="bg-gray-200">
//                 <tr className="text-left">
//                   <th className="py-2 px-4 border-b">Name</th>
//                   <th className="py-2 px-4 border-b">Email</th>
//                   <th className="py-2 px-4 border-b">Phone</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {instructors.map((instructor, index) => (
//                   <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
//                     <td className="py-2 px-4 border-b">{instructor.name}</td>
//                     <td className="py-2 px-4 border-b">{instructor.email}</td>
//                     <td className="py-2 px-4 border-b">{instructor.phone}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         <div className="flex justify-end items-center w-full gap-8 mt-4 md:mt-0 md:float-right mb-4">
//           <div className="flex items-center w-fit gap-2 bg-indigo-600 rounded-lg shadow-md h-10 p-5">
//             <CiHeadphones className="text-white" />
//             <button className="text-white">Support</button>
//             <IoIosArrowDropup className="text-2xl cursor-pointer text-white" />
//           </div>
//         </div>

//         {showAddInstructor && <AddInstructor onClose={() => setShowAddInstructor(false)} />}
//       </div>
//     </div>
//   );
// }

// export default Instructors;



import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { CiHeadphones } from "react-icons/ci";
import AddInstructor from './AddInstructor';
// import UpdateInstructor from './UpdateInstructor'; // New component for updating instructor
import UpdateInstructor from './UpdateIntructor';
import LeftNavbar from '../students/LeftNavbar';
import Header from '../students/Header';
import axios from 'axios';

const Instructors = () => {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [showAddInstructor, setShowAddInstructor] = useState(false);
  const [showUpdateInstructor, setShowUpdateInstructor] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found, please login first.');
      }

      const response = await axios.get('http://localhost:8081/api/instructors', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      });

      setInstructors(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching instructors:', error);
      setError('Failed to fetch instructors. Please try again later.');
      setLoading(false);
    }
  };

  const handleAddInstructor = () => {
    setShowAddInstructor(true);
  };

  const handleDeleteInstructor = async (instructorId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found, please login first.');
      }

      await axios.delete(`http://localhost:8081/api/instructors/${instructorId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });

      setInstructors(instructors.filter(instructor => instructor._id !== instructorId));
    } catch (error) {
      console.error('Error deleting instructor:', error);
      setError('Failed to delete instructor. Please try again later.');
    }
  };

  const handleUpdateInstructor = (instructor) => {
    setSelectedInstructor(instructor);
    setShowUpdateInstructor(true);
  };

  const handleInstructorUpdate = (updatedInstructor) => {
    setInstructors(instructors.map(instructor => 
      instructor._id === updatedInstructor._id ? updatedInstructor : instructor
    ));
    setShowUpdateInstructor(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col md:flex-row">
      <LeftNavbar />

      <div className="flex flex-col flex-1 p-4 md:p-6">
        <Header />

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">Instructors</h2>
          {/* <button onClick={handleAddInstructor} className="bg-blue-400 text-white px-4 py-2 rounded-lg">Add Instructor</button> */}
        </div>

        <div className="flex flex-col sm:flex-row mb-4 space-x-2 gap-y-2">
          <div className="relative flex items-center w-52 md:w-auto">
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
              placeholder="Search for an instructor by name or email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 pl-10 border border-gray-300 rounded"
            />
          </div>
        </div>

        {instructors.length === 0 ? (
          <div className="flex flex-col items-center">
            <h3 className="text-center text-lg md:text-xl">No instructors at this time</h3>
            <p className="text-center text-sm md:text-base">Instructors will appear here after they are added to your academy</p>
          </div>
        ) : (
          <div className="">
            <table className="min-w-full bg-white border shadow-md rounded-lg overflow-hidden mb-5">
              <thead className="bg-gray-200">
                <tr className="text-left">
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Phone</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {instructors.map((instructor, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                    <td className="py-2 px-4 border-b">{instructor.name}</td>
                    <td className="py-2 px-4 border-b">{instructor.email}</td>
                    <td className="py-2 px-4 border-b">{instructor.phone}</td>
                    <td className="py-2 px-4 border-b">
                      <button onClick={() => handleUpdateInstructor(instructor)} className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-700 mr-2">Edit</button>
                      <button onClick={() => handleDeleteInstructor(instructor._id)} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="flex justify-end items-center w-full gap-8 mt-4 md:mt-0 md:float-right mb-4">
          <div className="flex items-center w-fit gap-2 bg-indigo-600 rounded-lg shadow-md h-10 p-5">
            <CiHeadphones className="text-white" />
            <button className="text-white">Support</button>
            <IoIosArrowDropup className="text-2xl cursor-pointer text-white" />
          </div>
        </div>

        {showAddInstructor && <AddInstructor onClose={() => setShowAddInstructor(false)} />}
        {showUpdateInstructor && <UpdateInstructor instructor={selectedInstructor} onClose={() => setShowUpdateInstructor(false)} onUpdate={handleInstructorUpdate} />}
      </div>
    </div>
  );
}

export default Instructors;

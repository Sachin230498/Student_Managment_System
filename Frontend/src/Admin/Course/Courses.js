
// import React, { useState } from 'react';
// import { CiSearch } from "react-icons/ci";
// import { IoIosArrowDropdown } from "react-icons/io";
// // import { CiHeadphones } from "react-icons/ci";
// import LeftNavbar from '../students/LeftNavbar';
// import Header from '../students/Header';
// import Addcourses from './Addcourses';
// import Addoncourse from './Addoncourse';

// export default function Courses() {
//   const [filter, setFilter] = useState('');
//   const [search, setSearch] = useState('');
//   const [showAddCourses, setShowAddCourses] = useState(false);
//   const [courses, setCourses] = useState([]);





//   const handleAddCourse = async (course) => {
//     console.log('Adding course:', course);
//     try {
//       const response = await fetch('http://localhost:8081/api/course', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(course),
//       });
//       if (!response.ok) {
//         const text = await response.text();
//         throw new Error(`Network response was not ok: ${text}`);
//       }
//       const newCourse = await response.json();
//       console.log('New course added:', newCourse);
//       setCourses(prevCourses => [...prevCourses, newCourse]);
//       setShowAddCourses(false);
//     } catch (error) {
//       console.error('Error adding course:', error);
//     }
//   };

//   const [showAddCourse, setShowAddCourse] = useState(false);



//   return (
//     <div className="flex flex-col md:flex-row">
//       <LeftNavbar />

//       <div className="flex flex-col flex-1 p-4 md:p-6">
//         <Header />

//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl md:text-3xl font-bold">Courses</h2>
//           <button onClick={() => setShowAddCourses(true)} className="bg-blue-400 text-white px-4 py-2 rounded-lg"> Add Courses</button>
//         </div>

//         <div className="flex flex-col sm:flex-row mb-4 space-x-2 gap-y-2">

//           <div className="relative flex items-center  w-52 md:w-auto">
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
//               placeholder="Search for a student by name or email"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full px-3 py-2 pl-10 border border-gray-300 rounded"
//             />
//           </div>

//         </div>


//         <div className="p-6 bg-white shadow rounded-lg">
//           <table className="w-full border">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="p-2 border">Courses</th>
//                 <th className="p-2 border">Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="p-2 border">Full stack developer</td>
//                 <td className="p-2 border flex justify-center space-x-2">
//                   <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">View</button>
//                   <button  onClick={() => setShowAddCourse(true)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-green-700">Add Course</button>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="p-2 border ">Python</td>
//                 <td className="p-2 border flex justify-center space-x-2">
//                   <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">View </button>
//                   <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-green-700">Add Course</button>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="p-2 border"> Digital Marketing</td>
//                 <td className="p-2 border flex  justify-center space-x-2">
//                   <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">View </button>
//                   <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-green-700">Add Course</button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>





//         {showAddCourses && <Addcourses className='device-addDevice' onClose={() => setShowAddCourses(false)} />}
//         {showAddCourse && <Addoncourse className='device-addDevice' onClose={() => setShowAddCourse(false)} />}


//       </div>

//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
import LeftNavbar from '../students/LeftNavbar';
import Header from '../students/Header';
import Addcourses from './Addcourses';
import Addoncourse from './Addoncourse';

export default function Courses() {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [showAddCourses, setShowAddCourses] = useState(false);
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/courses');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleAddCourse = async (course) => {
    console.log('Adding course:', course);
    try {
      const response = await fetch('http://localhost:8081/api/course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(course),
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Network response was not ok: ${text}`);
      }
      const newCourse = await response.json();
      console.log('New course added:', newCourse);
      setCourses(prevCourses => [...prevCourses, newCourse]);
      setShowAddCourses(false);
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    console.log('Deleting course:', courseId);
    try {
      const response = await fetch(`http://localhost:8081/api/course/${courseId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Network response was not ok: ${text}`);
      }
      console.log('Course deleted successfully');
      setCourses(prevCourses => prevCourses.filter(course => course._id !== courseId));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <LeftNavbar />

      <div className="flex flex-col flex-1 p-4 md:p-6">
        <Header />

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">Courses</h2>
          <button onClick={() => setShowAddCourses(true)} className="bg-blue-400 text-white px-4 py-2 rounded-lg"> Add Courses</button>
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

        <div className="p-6 bg-white shadow rounded-lg">
          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Courses</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course._id}>
                  <td className="p-2 border">{course.title}</td>
                  <td className="p-2 border flex justify-center space-x-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">View</button>
                    <button onClick={() => handleDeleteCourse(course._id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-green-700">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showAddCourses && <Addcourses onAddCourse={handleAddCourse} onClose={() => setShowAddCourses(false)} />}
        {showAddCourse && <Addoncourse onClose={() => setShowAddCourse(false)} />}
      </div>
    </div>
  );
}

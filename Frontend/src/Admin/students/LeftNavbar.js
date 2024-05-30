// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { MdOutlineDashboard } from "react-icons/md";
// import { GiTeacher } from "react-icons/gi";
// import { RiArrowDropUpLine, RiBankFill } from "react-icons/ri";
// import { PiStudentBold } from "react-icons/pi";
// import { IoSettingsSharp } from "react-icons/io5";
// import { FaBookReader } from "react-icons/fa";
// import logo3 from '../Assets/logo3.png';
// import { RiArrowDropDownLine } from "react-icons/ri";

// export default function LeftNavbar() {
//     const [showStudentDropdown, setShowStudentDropdown] = useState(false);

//     const toggleStudentDropdown = () => {
//         setShowStudentDropdown(!showStudentDropdown);
//     };

//     return (
//         <div className="left-navbar h-full bg-blue-950">
//             <div className="flex justify-center items-center w-full pt-8">
//                 <img src={logo3} alt="Logo" className="w-26 h-28" />
//             </div>
//             <hr />
//             <ul className="p-4 pt-18 text-white">
//                 <li className="mb-12 text-xl">
//                     <Link to="/dashboard" className="flex items-center text-primary">
//                         <MdOutlineDashboard className="mr-2" /> <div className="hidden md:block">Dashboard</div>
//                     </Link>
//                 </li>
//                 <li className="mb-12 text-xl">
//                     <Link to="/teachers" className="flex items-center text-primary">
//                         <GiTeacher className="mr-2" /> <div className="hidden md:block">Instructor</div>
//                     </Link>
//                 </li>

//                 <li className="mb-12 text-xl relative">
//                     <div className="flex justify-between items-center text-primary cursor-pointer" onClick={toggleStudentDropdown}>
//                         <div className='flex items-center'>
//                             <PiStudentBold className="mr-2" />
//                             <div className="hidden md:block">Students</div>
//                         </div>
//                         {
//                             showStudentDropdown ?
//                                 <RiArrowDropUpLine size={24} /> : <RiArrowDropDownLine size={24} />
//                         }
//                     </div>

//                     {showStudentDropdown && (
//                         <div className=" mt-2 w-40  rounded-md shadow-lg z-10">
//                             <div className="px-2 py-2 rounded-md shadow">
//                                 <Link to="/classes" className="block px-4 py-2 text-sm font-semibold text-white  rounded-lg">
//                                     All Students
//                                 </Link>
//                                 <Link to="/upgrade" className="block px-4 py-2 text-sm font-semibold text-white  rounded-lg">
//                                     Upgrade Students
//                                 </Link>
//                             </div>
//                         </div>
//                     )}


//                 </li>

//                 <li className="mb-12 text-xl">
//                     <Link to="/course" className="flex items-center text-primary">
//                         <FaBookReader className="mr-2" /> <div className="hidden md:block">Courses</div>
//                     </Link>
//                 </li>
//                 <li className="mb-12 text-xl">
//                     <Link to="/billing" className="flex items-center text-primary">
//                         <RiBankFill className="mr-2" /> <div className="hidden md:block">Billing</div>
//                     </Link>
//                 </li>
//                 <li className="mb-12 text-xl">
//                     <Link to="/settings" className="flex items-center text-primary">
//                         <IoSettingsSharp className="mr-2" /> <div className="hidden md:block">Settings and Profile</div>
//                     </Link>
//                 </li>
//             </ul>
//         </div>
//     );
// }

// LeftNavbar.js
// LeftNavbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { RiArrowDropUpLine, RiArrowDropDownLine, RiBankFill } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import { IoSettingsSharp, IoReorderThreeOutline, IoClose } from "react-icons/io5"; // Importing close icon
import { FaBookReader } from "react-icons/fa";
import logo3 from '../../Assets/logo3.png';

export default function LeftNavbar() {
  const [showStudentDropdown, setShowStudentDropdown] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleStudentDropdown = () => {
    setShowStudentDropdown(!showStudentDropdown);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Hamburger Menu for small screens */}
      <div className="md:hidden p-4">
        <IoReorderThreeOutline className=" text-3xl cursor-pointer" onClick={toggleSidebar} />
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

       {/* Sidebar */}
      <div className={`left-navbar h-full bg-blue-950 fixed top-0 left-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:relative md:translate-x-0`}>
        <div className="flex justify-between items-center w-full pt-8 px-4">
          <img src={logo3} alt="Logo" className="w-26 h-28" />
        {/* Close Button for small screens  */}
          <IoClose className="text-white text-2xl cursor-pointer md:hidden" onClick={closeSidebar} />
        </div>
        <hr />
        <ul className="p-4 pt-20 text-white">
          <li className="mb-12 text-xl">
            <Link to="/dashboard" className="flex items-center text-primary" onClick={closeSidebar}>
              <MdOutlineDashboard className="mr-2" /> <div className="hidden md:block">Dashboard</div>
            </Link>
          </li>
          <li className="mb-12 text-xl">
            <Link to="/teachers" className="flex items-center text-primary" onClick={closeSidebar}>
              <GiTeacher className="mr-2" /> <div className="hidden md:block">Instructor</div>
            </Link>
          </li>
          <li className="mb-12 text-xl relative">
            <div className="flex justify-between items-center text-primary cursor-pointer" onClick={toggleStudentDropdown}>
              <div className='flex items-center'>
                <PiStudentBold className="mr-2" />
                <div className="hidden md:block">Students</div>
              </div>
              {showStudentDropdown ? <RiArrowDropUpLine size={24} /> : <RiArrowDropDownLine size={24} />}
            </div>

            {showStudentDropdown && (
              <div className="mt-2 w-40 rounded-md shadow-lg z-10">
                <div className="px-2 py-2 rounded-md shadow">
                  <Link to="/classes" className="block px-4 py-2 text-sm font-semibold text-white rounded-lg" onClick={closeSidebar}>
                    All Students
                  </Link>
                  <Link to="/upgrade" className="block px-4 py-2 text-sm font-semibold text-white rounded-lg" onClick={closeSidebar}>
                    Upgrade Students
                  </Link>
                </div>
              </div>
            )}
          </li>
          <li className="mb-12 text-xl">
            <Link to="/course" className="flex items-center text-primary" onClick={closeSidebar}>
              <FaBookReader className="mr-2" /> <div className="hidden md:block">Courses</div>
            </Link>
          </li>
          <li className="mb-12 text-xl">
            <Link to="/billing" className="flex items-center text-primary" onClick={closeSidebar}>
              <RiBankFill className="mr-2" /> <div className="hidden md:block">Billing</div>
            </Link>
          </li>
          <li className="mb-12 text-xl">
            <Link to="/settings" className="flex items-center text-primary" onClick={closeSidebar}>
              <IoSettingsSharp className="mr-2" /> <div className="hidden md:block">Settings and Profile</div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}


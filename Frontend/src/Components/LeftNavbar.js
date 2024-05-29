// import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
// import { MdOutlineDashboard } from "react-icons/md";
// import { GiTeacher } from "react-icons/gi";
// import { RiBankFill } from "react-icons/ri";
// import { PiStudentBold } from "react-icons/pi";
// import { IoSettingsSharp } from "react-icons/io5";
// import { FaBookReader } from "react-icons/fa";
// import logo3 from '../Assets/logo3.png'; 


// export default function LeftNavbar() {

//   return (
//     <div className="left-navbar h-full  bg-blue-950">
//     <div className="flex justify-center items-center w-full pt-8">

//           <img src={logo3} alt="Logo" className="w-26 h-28 " />
//           </div>
//           <hr />
//       <ul className="p-4 pt-16 text-white">
//         <li className="mb-10 text-xl">
//           <Link to="/dashboard" className="flex items-center text-primary">
//             <MdOutlineDashboard className="mr-2" /> <div className="hidden md:block">Dashboard</div>
//           </Link>
//         </li>
//         <li className="mb-10 text-xl">
//           <Link to="/teachers" className="flex items-center text-primary">
//             <GiTeacher className="mr-2" /> <div className="hidden md:block">Instructor</div>
//           </Link>
//         </li>
//         <li className="mb-10 text-xl">
//           <Link to="/students" className="flex items-center text-primary">
//             <PiStudentBold className="mr-2" /> <div className="hidden md:block">Students</div>
//           </Link>

//         </li>
//         <li className="mb-10 text-xl">
//           <Link to="/students" className="flex items-center text-primary">
//             <FaBookReader className="mr-2" /> <div className="hidden md:block">Course</div>
//           </Link>
//         </li>
//         <li className="mb-10 text-xl">
//           <Link to="/billing" className="flex items-center text-primary">
//             <RiBankFill className="mr-2" /> <div className="hidden md:block">Billing</div>
//           </Link>
//         </li>
//         <li className="mb-10 text-xl">
//           <Link to="/settings" className="flex items-center text-primary">
//             <IoSettingsSharp className="mr-2" /> <div className="hidden md:block">Settings and Profile</div>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { RiArrowDropUpLine, RiBankFill } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import logo3 from '../Assets/logo3.png';
import { RiArrowDropDownLine } from "react-icons/ri";

export default function LeftNavbar() {
    const [showStudentDropdown, setShowStudentDropdown] = useState(false);

    const toggleStudentDropdown = () => {
        setShowStudentDropdown(!showStudentDropdown);
    };

    return (
        <div className="left-navbar h-full bg-blue-950">
            <div className="flex justify-center items-center w-full pt-8">
                <img src={logo3} alt="Logo" className="w-26 h-28" />
            </div>
            <hr />
            <ul className="p-4 pt-18 text-white">
                <li className="mb-12 text-xl">
                    <Link to="/dashboard" className="flex items-center text-primary">
                        <MdOutlineDashboard className="mr-2" /> <div className="hidden md:block">Dashboard</div>
                    </Link>
                </li>
                <li className="mb-12 text-xl">
                    <Link to="/teachers" className="flex items-center text-primary">
                        <GiTeacher className="mr-2" /> <div className="hidden md:block">Instructor</div>
                    </Link>
                </li>

                <li className="mb-12 text-xl relative">
                    <div className="flex justify-between items-center text-primary cursor-pointer" onClick={toggleStudentDropdown}>
                        <div className='flex items-center'>
                            <PiStudentBold className="mr-2" />
                            <div className="hidden md:block">Students</div>
                        </div>
                        {
                            showStudentDropdown ?
                                <RiArrowDropUpLine size={24} /> : <RiArrowDropDownLine size={24} />
                        }
                    </div>

                    {showStudentDropdown && (
                        <div className=" mt-2 w-40  rounded-md shadow-lg z-10">
                            <div className="px-2 py-2 rounded-md shadow">
                                <Link to="/classes" className="block px-4 py-2 text-sm font-semibold text-white  rounded-lg">
                                    All Students
                                </Link>
                                <Link to="/upgrade" className="block px-4 py-2 text-sm font-semibold text-white  rounded-lg">
                                    Upgrade Students
                                </Link>
                            </div>
                        </div>
                    )}


                </li>

                <li className="mb-12 text-xl">
                    <Link to="/course" className="flex items-center text-primary">
                        <FaBookReader className="mr-2" /> <div className="hidden md:block">Courses</div>
                    </Link>
                </li>
                <li className="mb-12 text-xl">
                    <Link to="/billing" className="flex items-center text-primary">
                        <RiBankFill className="mr-2" /> <div className="hidden md:block">Billing</div>
                    </Link>
                </li>
                <li className="mb-12 text-xl">
                    <Link to="/settings" className="flex items-center text-primary">
                        <IoSettingsSharp className="mr-2" /> <div className="hidden md:block">Settings and Profile</div>
                    </Link>
                </li>
            </ul>
        </div>
    );
}


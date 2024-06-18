// import React from 'react'
// import { IoIosNotificationsOutline } from "react-icons/io";


// export default function Header() {
//   return (
    
//       <div className="flex justify-end  mb-4">
//         <div className="flex text-right gap-3 ">
//           <IoIosNotificationsOutline className="text-2xl" />
//           <p className="cursor-pointer">Log out</p>
//         </div>
//       </div>
    
//   )
// }
import React from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token and role from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('role');

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="flex justify-end mb-4">
      <div className="flex text-right gap-3">
        <IoIosNotificationsOutline className="text-2xl" />
        <p className="cursor-pointer" onClick={handleLogout}>Log out</p>
      </div>
    </div>
  );
}

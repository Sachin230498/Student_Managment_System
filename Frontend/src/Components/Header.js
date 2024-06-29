// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { MdOutlineMenuBook } from 'react-icons/md';
// // import logo from '../Assets/logo1.png';

// // const Header = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [navbar, setNavbar] = useState(false);

// //   const toggleMenu = () => setMenuOpen(!menuOpen);

// //   const closeMenu = () => setMenuOpen(false);

// //   const handleResize = () => {
// //     if (window.innerWidth >= 768) {
// //       setMenuOpen(false);
// //     }
// //   };

// //   const handleScroll = () => {
// //     setNavbar(window.scrollY > 50);
// //   };

// //   useEffect(() => {
// //     window.addEventListener('resize', handleResize);
// //     window.addEventListener('scroll', handleScroll);

// //     return () => {
// //       window.removeEventListener('resize', handleResize);
// //       window.removeEventListener('scroll', handleScroll);
// //     };
// //   }, []);

// //   return (
// //     <>
// //       <div className={`flex justify-between items-center sticky top-0 w-full h-16 shadow-md z-10 mt-2 mb-2 transition-colors duration-300 ${navbar ? 'bg-indigo-100 text-black' : 'bg-transparent text-black'}`}>
// //         <img src={logo} alt="Website Logo" className='w-32 m-6' />
// //         <div className='md:hidden'>
// //           <MdOutlineMenuBook className='text-3xl absolute md:static right-3 md:right-0 top-3' onClick={toggleMenu} />
// //         </div>
// //         <div className={`md:block ${menuOpen ? 'block' : 'hidden'}`}>
// //           <div className='flex flex-col md:flex-row mt-80 md:m-0 p-3 md:p-0 items-center w-full md:gap-9 gap-2    md:font-normal'>
// //             <Link className='hover:border-black hover:border-b-2 font-bold ' to="/home" onClick={closeMenu}>Home</Link>
// //             <Link className='hover:border-black hover:border-b-2 font-bold' to="/ourCourses" onClick={closeMenu}>Courses</Link>
// //             <a className='hover:border-black hover:border-b-2 font-bold' href="#" onClick={closeMenu}>Fee</a>
// //             <a className='hover:border-black hover:border-b-2 font-bold' href="#" onClick={closeMenu}>About Us</a>
// //             <a className='hover:border-black hover:border-b-2 font-bold' href="#" onClick={closeMenu}>Contact Us</a>
// //               <Link to="/login"><button className='border-2 px-2 border-indigo-900 rounded-md  '>Login</button></Link>
// //               <Link to="/signUp"><button className='   '>SignUp</button></Link>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Header;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { MdOutlineMenuBook } from 'react-icons/md';
// import logo from '../Assets/logo1.png';

// const Header = ({ isLoggedIn, logout }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [navbar, setNavbar] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const closeMenu = () => setMenuOpen(false);

//   const handleResize = () => {
//     if (window.innerWidth >= 768) {
//       setMenuOpen(false);
//     }
//   };

//   const handleScroll = () => {
//     setNavbar(window.scrollY > 50);
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <div className={`flex justify-between items-center sticky top-0 w-full h-16 shadow-md z-10 mt-2 mb-2 transition-colors duration-300 ${navbar ? 'bg-indigo-100 text-black' : 'bg-transparent text-black'}`}>
//         <img src={logo} alt="Website Logo" className='w-32 m-6' />
//         <div className='md:hidden'>
//           <MdOutlineMenuBook className='text-3xl absolute md:static right-3 md:right-0 top-3' onClick={toggleMenu} />
//         </div>
//         <div className={`md:block ${menuOpen ? 'block' : 'hidden'}`}>
//           <div className='flex flex-col md:flex-row mt-80 md:m-0 p-3 md:p-0 items-center w-full md:gap-9 gap-2 md:font-normal'>
//             <Link className='hover:border-black hover:border-b-2 font-bold ' to="/home" onClick={closeMenu}>Home</Link>
//             <Link className='hover:border-black hover:border-b-2 font-bold' to="/ourCourses" onClick={closeMenu}>Courses</Link>
//             <a className='hover:border-black hover:border-b-2 font-bold' href="#" onClick={closeMenu}>Fee</a>
//             <a className='hover:border-black hover:border-b-2 font-bold' href="#" onClick={closeMenu}>About Us</a>
//             <a className='hover:border-black hover:border-b-2 font-bold' href="#" onClick={closeMenu}>Contact Us</a>
//             {isLoggedIn ? (
//               <button className='border-2 px-2 border-indigo-900 rounded-md' onClick={logout}>Logout</button>
//             ) : (
//               <>
//                 <Link to="/login"><button className='border-2 px-2 border-indigo-900 rounded-md'>Login</button></Link>
//                 <Link to="/signUp"><button className=''>SignUp</button></Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;




// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { MdOutlineMenuBook } from 'react-icons/md';
// import logo from '../Assets/logo1.png';

// const Header = ({ isLoggedIn, logout }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [navbar, setNavbar] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const closeMenu = () => setMenuOpen(false);

//   const handleResize = () => {
//     if (window.innerWidth >= 768) {
//       setMenuOpen(false);
//     }
//   };

//   const handleScroll = () => {
//     setNavbar(window.scrollY > 50);
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`flex justify-between items-center sticky top-0 w-full h-16 shadow-md z-10 mt-2 mb-2 transition-colors duration-300 ${navbar ? 'bg-indigo-100 text-black' : 'bg-transparent text-black'}`}>
//       <img src={logo} alt="Website Logo" className='w-32 m-6' />
//       <div className='md:hidden'>
//         <MdOutlineMenuBook className='text-3xl absolute md:static right-3 md:right-0 top-3' onClick={toggleMenu} />
//       </div>
//       <div className={`md:block ${menuOpen ? 'block' : 'hidden'}`}>
//         <div className='flex flex-col md:flex-row mt-80 md:m-0 p-3 md:p-0 items-center w-full md:gap-9 gap-2 md:font-normal'>
//           <Link className='hover:border-black hover:border-b-2 font-bold ' to="/home" onClick={closeMenu}>Home</Link>
//           <Link className='hover:border-black hover:border-b-2 font-bold' to="/ourCourses" onClick={closeMenu}>Courses</Link>
//           <a className='hover:border-black hover:border-b-2 font-bold' href="#" onClick={closeMenu}>Fee</a>
//           <a className='hover:border-black hover:border-b-2 font-bold' href="#" onClick={closeMenu}>About Us</a>
//           <a className='hover:border-black hover:border-b-2 font-bold' href="#" onClick={closeMenu}>Contact Us</a>
//           {isLoggedIn ? (
//             <button className='border-2 px-2 border-indigo-900 rounded-md' onClick={logout}>Logout</button>
//           ) : (
//             <>
//               <Link to="/login"><button className='border-2 px-2 border-indigo-900 rounded-md'>Login</button></Link>
//               <Link to="/signUp"><button className=''>SignUp</button></Link>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;



import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineMenuBook } from 'react-icons/md';
import logo from '../Assets/logo1.png';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate(); // Import useNavigate hook

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMenuOpen(false);
    }
  };

  const handleScroll = () => {
    setNavbar(window.scrollY > 50);
  };

  const logout = () => {
    // Perform logout logic here (e.g., clear tokens, user data)
    localStorage.removeItem('token'); // Clear token from localStorage
    setIsLoggedIn(false); // Update isLoggedIn state
    navigate('/login'); // Navigate to login page
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Check if user is logged in (e.g., check token in localStorage)
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className={`flex justify-between items-center sticky top-0 w-full h-16 shadow-md z-10 mt-2 mb-2 transition-colors duration-300 ${navbar ? 'bg-indigo-100 text-black' : 'bg-transparent text-black'}`}>
      <img src={logo} alt="Website Logo" className='w-32 m-6' />
      <div className='md:hidden'>
        <MdOutlineMenuBook className='text-3xl absolute md:static right-3 md:right-0 top-3' onClick={toggleMenu} />
      </div>
      <div className={`md:block ${menuOpen ? 'block' : 'hidden'}`}>
        <div className='flex flex-col md:flex-row mt-80 md:m-0 p-3 md:p-0 items-center w-full md:gap-9 gap-2 md:font-normal'>
          <Link className='hover:border-black hover:border-b-2 font-bold ' to="/home" onClick={closeMenu}>Home</Link>
          <Link className='hover:border-black hover:border-b-2 font-bold' to="/ourCourses" onClick={closeMenu}>Courses</Link>
          <a className='hover:border-black hover:border-b-2 font-bold' href="#" onClick={closeMenu}>Fee</a>
          <a className='hover:border-black hover:border-b-2 font-bold' href="#" onClick={closeMenu}>About Us</a>
          <a className='hover:border-black hover:border-b-2 font-bold' href="#" onClick={closeMenu}>Contact Us</a>
          {isLoggedIn ? (
            <button className='border-2 px-2 border-indigo-900 rounded-md' onClick={logout}>Logout</button>
          ) : (
            <>
              <Link to="/login"><button className='border-2 px-2 border-indigo-900 rounded-md'>Login</button></Link>
              <Link to="/signUp"><button className='border-2 px-2 border-indigo-900 rounded-md'>Sign Up</button></Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;


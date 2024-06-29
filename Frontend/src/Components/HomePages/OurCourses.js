// import React from 'react';
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { TiTick } from 'react-icons/ti';

// import mern from '../../Assets/mernn.jpg';
// import python from '../../Assets/pythonn.jpg';
// import dm from '../../Assets/dmm.jpg';

// const OurCourses = () => {
//   // Settings for the carousel
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   return (
//     <>
    
//         <div className='lg:hidden flex flex-col justify-center items-center w-full bg-blue-200 rounded-s-lg mt-24'>
//         <h1 className='text-2xl sm:text-5xl font-bold text-center mb-4'>
//           Our Courses
//         </h1>
//         <p className='text-xl sm:text-2xl font-semibold text-[#4e4c4c] text-center mb-4'>
//           Practice-Based Learning Tracks,
//           <strong className='text-[#f55454] font-bold'>Supercharged By A.I.</strong>
//         </p>
//         </div>

//     <div className='grid grid-flow-row lg:grid-flow-col grid-cols-4 mb-36 lg:mt-36'>
      

//       {/* Carousel */}
//       <Slider {...settings} className='lg:col-span-3 col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 sm:px-12 p-5'>
//         {/* Course 1: Full Stack Web Development */}
//         <div className='flex flex-col font-semibold gap-3 shadow-2xl rounded-md p-2'>
//           <img src={mern} alt='mern logo' className=' rounded-t-lg m-auto' />
//           <h1 className='font-bold text-center sm:text-left'>Full Stack Web Development</h1>
//           <h2 className='rounded-full p-2 border-blue-400 border-2 pl-4'>For 12th, Diploma & College Graduates, 18-28 years</h2>
//           <h2 className='flex items-center'> <TiTick className="text-green-600" />Become job-ready in 30 weeks</h2>
//           <h2 className='flex items-center'> <TiTick className="text-green-600" /> <p><strong>Opportunities:</strong> Full Stack Developer, Software Engineer & much more.</p></h2>
//           <h2 className='flex items-center'> <TiTick className="text-green-600" />100% live learning with expert instructors.</h2>
//           <h2 className='flex items-center'> <TiTick className="text-green-600" />Pay After Placement</h2>
//           <Link to="/ourCourses/fullStack" className='bg-[#4e51f0] p-1 m-auto w-fit px-5 rounded-full text-white' ><button>View More</button></Link>
//           <button className='bg-[#e44141] text-white p-1 w-fit px-4 m-auto rounded-full' >Buy Now</button>
//         </div>

//         {/* Course 2: Python */}
//         <div className='flex flex-col font-semibold gap-3 shadow-2xl rounded-md p-2'>
//           <img src={python} alt='python logo' className=' rounded-t-lg m-auto' />
//           <h1 className='font-bold text-center sm:text-left'>Python</h1>
//           <h2 className='rounded-full p-2 border-blue-400 border-2 pl-4'>For 12th, Diploma & College Graduates, 18-28 years</h2>
//           <h2 className='flex items-center'> <TiTick className="text-green-600" />Become job-ready in 30 weeks</h2>
//           <h2 className='flex items-center'> <TiTick className="text-green-600" /> <p><strong>Opportunities:</strong> Full Stack Developer, Software Engineer & much more.</p></h2>
//           <h2 className='flex items-center'> <TiTick className="text-green-600" />100% live learning with expert instructors.</h2>
//           <h2 className='flex items-center'> <TiTick className="text-green-600" />Pay After Placement</h2>
//           <Link to="/ourCourses/Python" className='bg-[#4e51f0] p-1 m-auto w-fit px-5 rounded-full text-white' ><button>View More</button></Link>
//           <button className='bg-[#e44141] text-white p-1 w-fit px-4 m-auto rounded-full'>Buy Now</button>
//         </div>

//         {/* Course 3: Digital Marketing */}
//         <div className='flex flex-col font-semibold gap-3 shadow-2xl rounded-md p-2'>
//           <img src={dm} alt='digital marketing logo' className=' rounded-t-lg m-auto' />
//           <h1 className='font-bold text-center sm:text-left'>Digital Marketing</h1>
//           <h2 className='rounded-full p-2 border-blue-400 border-2 pl-4'>For 12th, Diploma & College Graduates, 18-28 years</h2>
//           <h2 className='flex items-center'> <TiTick className="text-green-600" />Become job-ready in 30 weeks</h2>
//           <h2 className='flex items-center'> <TiTick className="text-green-600" /> <p><strong>Opportunities:</strong> Full Stack Developer, Software Engineer & much more.</p></h2>
//           <h2 className='flex items-center'> <TiTick className="text-green-600" />100% live learning with expert instructors.</h2>
//           <h2 className='flex items-center'> <TiTick className="text-green-600" />Pay After Placement</h2>
//           <Link to="/ourCourses/DigitalMar" className='bg-[#4e51f0] p-1 m-auto w-fit px-5 rounded-full text-white' ><button>View More</button></Link>
//           <button className='bg-[#e44141] text-white p-1 w-fit px-4 m-auto rounded-full'>Buy Now</button>
//         </div>
//       </Slider>


      // <div className=' flex flex-col justify-center items-center lg:col-span-1  bg-blue-200 rounded-s-lg'>
      //   <div className='hidden lg:block'>
      //   <h1 className='text-2xl sm:text-5xl font-bold text-center mb-4'>
      //     Our Courses
      //   </h1>
      //   <p className='text-xl sm:text-2xl font-semibold text-[#4e4c4c] text-center mb-4'>
      //     Practice-Based Learning Tracks,
      //     <strong className='text-[#f55454] font-bold'>Supercharged By A.I.</strong>
      //   </p>
      //   </div>
      // </div>

//     </div>
//     </>
//   );
// };

// export default OurCourses;






// import React from 'react';
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { TiTick } from 'react-icons/ti';

// import mern from '../../Assets/mernn.jpg';
// import python from '../../Assets/pythonn.jpg';
// import dm from '../../Assets/dmm.jpg';
// import mernstack from '../../Assets/mernstack.jpg'

// const OurCourses = () => {
//   // Settings for the carousel
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   return (
//     <>
//       <div className='lg:hidden flex flex-col justify-center items-center w-full bg-blue-200 rounded-s-lg mt-24'>
//         <h1 className='text-2xl sm:text-5xl font-bold text-center mb-4'>
//           Our Courses
//         </h1>
//         <p className='text-xl sm:text-2xl font-semibold text-[#4e4c4c] text-center mb-4'>
//           Practice-Based Learning Tracks,
//           <strong className='text-[#f55454] font-bold'>Supercharged By A.I.</strong>
//         </p>
//       </div>

//       <div className='grid grid-flow-row lg:grid-flow-col grid-cols-4 mb-36 lg:mt-36'>
//         {/* Carousel */}
//         <Slider {...settings} className='lg:col-span-3 col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 sm:px-12 p-5'>
//           {/* Course 1: Full Stack Web Development */}
//           <div className='flex flex-col font-semibold gap-3 shadow-2xl rounded-md p-2'>
//             <img src={mern} alt='mern logo' className=' rounded-t-lg m-auto' />
//             <h1 className='font-bold text-center sm:text-left'>Full Stack Web Development</h1>
//             <h2 className='rounded-full p-2 border-blue-400 border-2 pl-4'>For 12th, Diploma & College Graduates, 18-28 years</h2>
//             <h2 className='flex items-center'> <TiTick className="text-green-600" />Become job-ready in 30 weeks</h2>
//             <h2 className='flex items-center'> <TiTick className="text-green-600" /> <p><strong>Opportunities:</strong> Full Stack Developer, Software Engineer & much more.</p></h2>
//             <h2 className='flex items-center'> <TiTick className="text-green-600" />100% live learning with expert instructors.</h2>
//             <h2 className='flex items-center'> <TiTick className="text-green-600" />Pay After Placement</h2>
//             <Link to="/ourCourses/fullStack" className='bg-[#4e51f0] p-1 m-auto w-fit px-5 rounded-full text-white' ><button>View More</button></Link>
//             <button className='bg-[#e44141] text-white p-1 w-fit px-4 m-auto rounded-full' >Buy Now</button>
//           </div>

//           {/* Course 2: Python */}
//           <div className='flex flex-col font-semibold gap-3 shadow-2xl rounded-md p-2'>
//             <img src={python} alt='python logo' className=' rounded-t-lg m-auto' />
//             <h1 className='font-bold text-center sm:text-left'>Python</h1>
//             <h2 className='rounded-full p-2 border-blue-400 border-2 pl-4'>For 12th, Diploma & College Graduates, 18-28 years</h2>
//             <h2 className='flex items-center'> <TiTick className="text-green-600" />Become job-ready in 30 weeks</h2>
//             <h2 className='flex items-center'> <TiTick className="text-green-600" /> <p><strong>Opportunities:</strong> Full Stack Developer, Software Engineer & much more.</p></h2>
//             <h2 className='flex items-center'> <TiTick className="text-green-600" />100% live learning with expert instructors.</h2>
//             <h2 className='flex items-center'> <TiTick className="text-green-600" />Pay After Placement</h2>
//             <Link to="/ourCourses/Python" className='bg-[#4e51f0] p-1 m-auto w-fit px-5 rounded-full text-white' ><button>View More</button></Link>
//             <button className='bg-[#e44141] text-white p-1 w-fit px-4 m-auto rounded-full'>Buy Now</button>
//           </div>

//           {/* Course 3: Digital Marketing */}
//           <div className='flex flex-col font-semibold gap-3 shadow-2xl rounded-md p-2'>
//             <img src={dm} alt='digital marketing logo' className=' rounded-t-lg m-auto' />
//             <h1 className='font-bold text-center sm:text-left'>Digital Marketing</h1>
//             <h2 className='rounded-full p-2 border-blue-400 border-2 pl-4'>For 12th, Diploma & College Graduates, 18-28 years</h2>
//             <h2 className='flex items-center'> <TiTick className="text-green-600" />Become job-ready in 30 weeks</h2>
//             <h2 className='flex items-center'> <TiTick className="text-green-600" /> <p><strong>Opportunities:</strong> Full Stack Developer, Software Engineer & much more.</p></h2>
//             <h2 className='flex items-center'> <TiTick className="text-green-600" />100% live learning with expert instructors.</h2>
//             <h2 className='flex items-center'> <TiTick className="text-green-600" />Pay After Placement</h2>
//             <Link to="/ourCourses/DigitalMar" className='bg-[#4e51f0] p-1 m-auto w-fit px-5 rounded-full text-white' ><button>View More</button></Link>
//             <button className='bg-[#e44141] text-white p-1 w-fit px-4 m-auto rounded-full'>Buy Now</button>
//           </div>

//           {/* Course 4: MERN Stack Developer */}
//           <div className='flex flex-col font-semibold gap-3 shadow-2xl rounded-md p-2'>
//             <img src={mernstack} alt='mern logo' className=' rounded-t-lg m-auto' />
//             <h1 className='font-bold text-center sm:text-left'>MERN Stack Developer</h1>
//             <h2 className='rounded-full p-2 border-blue-400 border-2 pl-4'>For 12th, Diploma & College Graduates, 18-28 years</h2>
//             <h2 className='flex items-center'> <TiTick className="text-green-600" />Become job-ready in 30 weeks</h2>
//             <h2 className='flex items-center'> <TiTick className="text-green-600" /> <p><strong>Opportunities:</strong> Full Stack Developer, Software Engineer & much more.</p></h2>
//             <h2 className='flex items-center'> <TiTick className="text-green-600" />100% live learning with expert instructors.</h2>
//             <h2 className='flex items-center'> <TiTick className="text-green-600" />Pay After Placement</h2>
//             <Link to="/ourCourses/mernStack" className='bg-[#4e51f0] p-1 m-auto w-fit px-5 rounded-full text-white' ><button>View More</button></Link>
//             <button className='bg-[#e44141] text-white p-1 w-fit px-4 m-auto rounded-full'>Buy Now</button>
//           </div>
//         </Slider>

//         <div className=' flex flex-col justify-center items-center lg:col-span-1  bg-blue-200 rounded-s-lg'>
//           <div className='hidden lg:block'>
//             <h1 className='text-2xl sm:text-5xl font-bold text-center mb-4'>
//               Our Courses
//             </h1>
//             <p className='text-xl sm:text-2xl font-semibold text-[#4e4c4c] text-center mb-4'>
//               Practice-Based Learning Tracks,
//               <strong className='text-[#f55454] font-bold'>Supercharged By A.I.</strong>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OurCourses;





import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TiTick } from 'react-icons/ti';

import mern from '../../Assets/mernn.jpg';
import python from '../../Assets/pythonn.jpg';
import dm from '../../Assets/dmm.jpg';
import mernStack from '../../Assets/mernstack.jpg'; // corrected import statement

const OurCourses = () => {
  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='lg:hidden flex flex-col justify-center items-center w-full bg-blue-200 rounded-s-lg mt-24'>
        <h1 className='text-2xl sm:text-5xl font-bold text-center mb-4'>
          Our Courses
        </h1>
        <p className='text-xl sm:text-2xl font-semibold text-[#4e4c4c] text-center mb-4'>
          Practice-Based Learning Tracks,
          <strong className='text-[#f55454] font-bold'>Supercharged By A.I.</strong>
        </p>
      </div>

      <div className='grid grid-flow-row lg:grid-flow-col grid-cols-4 mb-36 lg:mt-36'>
        {/* Carousel */}
        <Slider {...settings} className='lg:col-span-3 col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 sm:px-12 p-5'>
          {/* Course 1: Full Stack Web Development */}
          <div className='flex flex-col font-semibold gap-3 shadow-2xl rounded-md p-2'>
            <img src={mern} alt='mern logo' className=' rounded-t-lg m-auto' />
            <h1 className='font-bold text-center sm:text-left'>Full Stack Web Development</h1>
            <h2 className='rounded-full p-2 border-blue-400 border-2 pl-4'>For 12th, Diploma & College Graduates, 18-28 years</h2>
            <h2 className='flex items-center'> <TiTick className="text-green-600" />Become job-ready in 30 weeks</h2>
            <h2 className='flex items-center'> <TiTick className="text-green-600" /> <p><strong>Opportunities:</strong> Full Stack Developer, Software Engineer & much more.</p></h2>
            <h2 className='flex items-center'> <TiTick className="text-green-600" />100% live learning with expert instructors.</h2>
            <h2 className='flex items-center'> <TiTick className="text-green-600" />Pay After Placement</h2>
            <Link to="/ourCourses/fullStack" className='bg-[#4e51f0] p-1 m-auto w-fit px-5 rounded-full text-white' ><button>View More</button></Link>
            <button className='bg-[#e44141] text-white p-1 w-fit px-4 m-auto rounded-full' >Buy Now</button>
          </div>

          {/* Course 2: Python */}
          <div className='flex flex-col font-semibold gap-3 shadow-2xl rounded-md p-2'>
            <img src={python} alt='python logo' className=' rounded-t-lg m-auto' />
            <h1 className='font-bold text-center sm:text-left'>Python</h1>
            <h2 className='rounded-full p-2 border-blue-400 border-2 pl-4'>For 12th, Diploma & College Graduates, 18-28 years</h2>
            <h2 className='flex items-center'> <TiTick className="text-green-600" />Become job-ready in 30 weeks</h2>
            <h2 className='flex items-center'> <TiTick className="text-green-600" /> <p><strong>Opportunities:</strong> Full Stack Developer, Software Engineer & much more.</p></h2>
            <h2 className='flex items-center'> <TiTick className="text-green-600" />100% live learning with expert instructors.</h2>
            <h2 className='flex items-center'> <TiTick className="text-green-600" />Pay After Placement</h2>
            <Link to="/ourCourses/Python" className='bg-[#4e51f0] p-1 m-auto w-fit px-5 rounded-full text-white' ><button>View More</button></Link>
            <button className='bg-[#e44141] text-white p-1 w-fit px-4 m-auto rounded-full'>Buy Now</button>
          </div>

          {/* Course 3: Digital Marketing */}
          <div className='flex flex-col font-semibold gap-3 shadow-2xl rounded-md p-2'>
            <img src={dm} alt='digital marketing logo' className=' rounded-t-lg m-auto' />
            <h1 className='font-bold text-center sm:text-left'>Digital Marketing</h1>
            <h2 className='rounded-full p-2 border-blue-400 border-2 pl-4'>For 12th, Diploma & College Graduates, 18-28 years</h2>
            <h2 className='flex items-center'> <TiTick className="text-green-600" />Become job-ready in 30 weeks</h2>
            <h2 className='flex items-center'> <TiTick className="text-green-600" /> <p><strong>Opportunities:</strong> Full Stack Developer, Software Engineer & much more.</p></h2>
            <h2 className='flex items-center'> <TiTick className="text-green-600" />100% live learning with expert instructors.</h2>
            <h2 className='flex items-center'> <TiTick className="text-green-600" />Pay After Placement</h2>
            <Link to="/ourCourses/DigitalMar" className='bg-[#4e51f0] p-1 m-auto w-fit px-5 rounded-full text-white' ><button>View More</button></Link>
            <button className='bg-[#e44141] text-white p-1 w-fit px-4 m-auto rounded-full'>Buy Now</button>
          </div>

          {/* Course 4: MERN Stack Developer */}
          <div className='flex flex-col font-semibold gap-3 shadow-2xl rounded-md p-2'>
            <img src={mernStack} alt='mern logo' className=' rounded-t-lg m-auto mb-28' />
            <h1 className='font-bold text-center sm:text-left'>MERN Stack Developer</h1>
            <h2 className='rounded-full p-2 border-blue-400 border-2 pl-4'>For 12th, Diploma & College Graduates, 18-28 years</h2>
            <h2 className='flex items-center'> <TiTick className="text-green-600" />Become job-ready in 30 weeks</h2>
            <h2 className='flex items-center'> <TiTick className="text-green-600" /> <p><strong>Opportunities:</strong> Full Stack Developer, Software Engineer & much more.</p></h2>
            <h2 className='flex items-center'> <TiTick className="text-green-600" />100% live learning with expert instructors.</h2>
            <h2 className='flex items-center'> <TiTick className="text-green-600" />Pay After Placement</h2>
            <Link to="/ourCourses/mernStack" className='bg-[#4e51f0] p-1 m-auto w-fit px-5 rounded-full text-white' ><button>View More</button></Link>
            <button className='bg-[#e44141] text-white p-1 w-fit px-4 m-auto rounded-full'>Buy Now</button>
          </div>
        </Slider>

      


<div className=' flex flex-col justify-center items-center lg:col-span-1  bg-blue-200 rounded-s-lg'>
        <div className='hidden lg:block'>
        <h1 className='text-2xl sm:text-5xl font-bold text-center mb-4'>
          Our Courses
        </h1>
        <p className='text-xl sm:text-2xl font-semibold text-[#4e4c4c] text-center mb-4'>
          Practice-Based Learning Tracks,
          <strong className='text-[#f55454] font-bold'>Supercharged By A.I.</strong>
        </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default OurCourses;

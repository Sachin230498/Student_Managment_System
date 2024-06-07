import React from 'react'
import fsd from '../../Assets/fsd.jpg';

const Viewfsddetail = () => {
  return (
    
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden my-4">
    <img src={fsd} alt="Fellowship Program in Software Development" className="w-full h-full object-cover" />
    <div className="px-4 py-3">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Fellowship Program in Software Development</h2>
      <p className="text-gray-700 text-xl mb-4">Full Stack Specialization</p>
      <p className="text-gray-700 text-lg">Build professional work-like projects to master React, Node JS, MongoDB, JavaScript, and more to land a top career as a full-stack developer with guaranteed placement.</p>
    </div>
  </div>


  )
}

export default Viewfsddetail
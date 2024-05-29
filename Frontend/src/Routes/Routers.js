import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddStudent from '../Components/students/AddStudent';
import Students from '../Components/students/Students';
import Instructor from '../Admin/Instructor/instructor';
import AddInstructor from '../Admin/Instructor/AddInstructor';
export default function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Students/>}/>
      <Route path='/instructor' element={<Instructor/>}/>
      <Route path='/addinstructor' element={<AddInstructor/>}/>
    </Routes>
  );
}

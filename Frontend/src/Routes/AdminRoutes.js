import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Students from '../Admin/students/Students';
import Instructor from '../Admin/Instructor/instructor';
import Courses  from '../Admin/Course/Courses';


export default function Routers() {
  return (
    <Routes>

      <Route path='/students' element={<Students/>}/>
      <Route path='/instructor' element={<Instructor/>}/>
      <Route path='/course' element={<Courses/>}/>
     
    </Routes>
  );
}

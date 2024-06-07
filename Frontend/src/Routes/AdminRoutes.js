import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Students from '../Admin/students/Students';
import Instructor from '../Admin/Instructor/instructor';
// import AddInstructor from '../Admin/Instructor/AddInstructor';
import Dashboard from '../Admin/Dashboard';
import Courses from "../Admin/Course/Courses"
import Addoncourse from '../Admin/Course/Addoncourse';
import Viewfsddetail from '../Admin/Course/Viewfsddetail';
import Pythondetails from '../Admin/Course/Pythondetails';
import Dmdetails from '../Admin/Course/Dmdetails';

export default function Routers() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/students' element={<Students/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/instructor' element={<Instructor/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/viewfsd' element={<Viewfsddetail/>}/>
      <Route path='/viewpython' element={<Pythondetails/>}/>
      <Route path='/viewdmdetails' element={<Dmdetails/>}/>
     
    </Routes>
    </BrowserRouter>
  );
}

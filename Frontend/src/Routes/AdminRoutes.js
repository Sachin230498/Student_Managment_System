import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Students from '../Admin/students/Students';
import Instructor from '../Admin/Instructor/instructor';
import AddInstructor from '../Admin/Instructor/AddInstructor';
import Dashboard from '../Admin/Dashboard';

export default function Routers() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/students' element={<Students/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/instructor' element={<Instructor/>}/>
      <Route path='/addinstructor' element={<AddInstructor/>}/>
    </Routes>
    </BrowserRouter>
  );
}

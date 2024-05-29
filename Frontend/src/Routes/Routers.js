import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddStudent from '../Components/students/AddStudent';
import Students from '../Components/students/Students';
export default function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Students/>}/>
    </Routes>
  );
}

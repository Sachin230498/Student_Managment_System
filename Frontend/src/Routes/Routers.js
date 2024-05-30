import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Students from '../Admin/students/Students';
export default function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Students/>}/>
    </Routes>
  );
}

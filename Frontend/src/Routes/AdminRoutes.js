import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Students from '../Admin/students/Students';
import Instructor from '../Admin/Instructor/instructor';
import Dashboard from '../Admin/Dashboard';
import Courses from "../Admin/Course/Courses";
import CourseDetails from '../Admin/Course/CourseDetails';
import Addoncourse from '../Admin/Course/Addoncourse';
export default function AdminRoutes() {
  return (
    <Routes>
      <Route path='/students' element={<Students />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/instructor' element={<Instructor />} />
      <Route path='/course' element={<Courses />} />
      <Route path='/addoncourse' element={<Addoncourse />} />
      <Route path='/courseDetails/:id' element={<CourseDetails />} />  
      <Route path="*" element={<Navigate to="/dashboard" />} /> {/* Fallback to dashboard */}
    </Routes>
  );
}

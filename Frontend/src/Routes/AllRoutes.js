
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from '../Components/HomePages/Home';
import FullStack from '../Components/HomePages/FullStack';
import Python from '../Components/HomePages/Python';
import DigitalMar from '../Components/HomePages/DigitalMar';
import OurCourses from '../Components/HomePages/OurCourses';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';

const AllRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ourCourses" element={<OurCourses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/ourCourses/fullStack" element={<FullStack />} />
        <Route path="/ourCourses/python" element={<Python />} />
        <Route path="/ourCourses/digitalMar" element={<DigitalMar />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;

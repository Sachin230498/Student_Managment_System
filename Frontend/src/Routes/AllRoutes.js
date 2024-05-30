import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from '../Components/HomePages/Home';

const AllRoutes = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="Home" element={<Home />} />
          {/* <Route path="Courses" element={<Courses />} />
          <Route path="Fee" element={<Fee />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} /> */}
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AllRoutes

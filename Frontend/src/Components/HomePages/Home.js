import React, {useState} from 'react';
import Carousel from "./Carousel"
import HomeTwo from "./HomeTwo"
import OurCourses from "./OurCourses"
import FullStack from './FullStack';
import WhatOur from './WhatOur';
import WhatOurTwo from './WhatOurTwo';
import Header from '../Header';

// for carousel 

const Home = () => {
  return (
    <>
  <Header/>
    <Carousel/>
    <HomeTwo />
    <WhatOur />
    <OurCourses />
    <WhatOurTwo />
   
    
    
    </>
  )
}

export default Home

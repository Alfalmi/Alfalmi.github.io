import React, { useEffect, useState } from 'react';

import Landing from './landing/landing-container';
import InstaFeed from './instagram/instafeed'

import { GutterLeft, GutterRight } from './gutter/gutter';
import { Parallax } from 'react-scroll-parallax';

import './home.css';



const Home = () => (
  <>
  
  
        <Landing />
    
    <div className="home__layout">
      <GutterLeft />
         
        <InstaFeed />
   
        
      
      <GutterRight />
    </div>
  </>
);

export default Home;
import React from 'react';


import Landing from './landing/landing-container';

import Research from './research/research-container';
import { GutterLeft, GutterRight } from './gutter/gutter';

import './home.css';
import InstaFeed from './instagram/instafeed';

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
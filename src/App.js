import React, { Component, useEffect, useRef, useState } from 'react';
import logo from './Logo.png'
import naturefinder from './Naturefinder.png'
import starbucks from './Starbucks.png'
import './App.css';
import { Menu } from '@material-ui/icons';
import BurgerMenu from './animations/BurgerMenu';


function App() {
  return (
    <div className="App">
      <header>
        <div class="container">
        <nav>
          <img src={logo} alt="Logo" height='60' width='60'/>
          <button class="hamburger" id="hamburger">
            <Menu/>
          </button>
          <ul class="sections" id="sections">
            <li><a href="#">Project</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Photography</a></li>
          </ul>
        </nav>
        </div>
      </header>
    
      <h3 className="subheading1">
        Hello~
      </h3>
      <body className="body-text">
      My name is Amanda. <br />
      I strive to use research to propel the creation of benevolent and practical products.
      </body>
      <p className="subheading2">
        UX <div className="specialSize"> &#123; </div> 
      </p>
      <div class="project" >
        <img src={naturefinder} alt="naturefinder" alt = "NatureFinder" class = "image"/>
        <div class="overlay">
          <div class="title">Nature Finder</div>
          <div class = "subtitle">Curating a Mobile Experience for Hikers</div>
        </div>
      </div>
      
      <img src={starbucks} alt="starbucks" style={{paddingLeft: 22, height: 300}}/>
      <p style={{paddingLeft:22, fontSize:12, fontStyle:'light'}}>
      Understanding the Waiting Line Experience
      </p>
    </div>
  );
}

export default App;

import React, { Component, useEffect, useRef, useState } from 'react';

import Header from './components/header.js'
import Projects from './components/projects.js'
import Footer from './components/footer.js'
import { BrowserRouter, Route } from 'react-router-dom'
import About from './components/about.js'
import Photography from './components/photography.js'
import './App.css';
import BurgerMenu from './animations/BurgerMenu';

{/* change React App for title */}


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Route path="/" exact component={Projects} />
          {/*<Route path="/about" exact component={About} />
              <Route path="/photography" exact component={Photography} />
        <Route path="/naturefinder" exact component={NatureFinder} />
          <Route path="/starbucksstudy" exacty component={StarbucksStudy} />  */}

        <Footer /> 
      </div>
    </BrowserRouter>
  );
}

export default App;



import React, { Component, useEffect, useRef, useState } from 'react';

import Header from './components/header.js'
import Projects from './components/projects.js'
import Research from './components/research.js'
import About from './components/about.js'
import Footer from './components/footer.js'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';



function App() {
  return (
   

    <BrowserRouter>
      <div className="App">
          <Header />
          <Route path="/" exact component={Projects} />
          <Route path="/research" exact component={Research} />
          <Route path="/about" exact component={About} />
          <Route path='/resume' component={() => { 
     window.location.href = 'http://www.amandazhu.org/resume'; return null;}}/>
            {/*  <Route path="/photography" exact component={Photography} />
        <Route path="/naturefinder" exact component={NatureFinder} />
          <Route path="/starbucksstudy" exacty component={StarbucksStudy} />  */}

        <Footer /> 
      </div>
    </BrowserRouter>
  );
}

export default App;



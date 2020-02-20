import React, { Component } from 'react';
import logo from './Logo.png'
import naturefinder from './Naturefinder.png'
import starbucks from './Starbucks.png'
import './App.css';
import { Menu } from '@material-ui/icons';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" height='60' width='60' />
        <div className="Menu" >
          <Menu/ >
        </div> 
      </header>
      <body className="body-text">
      Hello~
      My name is Amanda.
      I strive to use research to propel the creation of benevolent and practical products.
      </body>
      <p style={{paddingLeft:22, fontSize:32, fontWeight:'700'}}>
        UX
      </p>
      <img src={naturefinder} alt="naturefinder" style={{paddingLeft: 22, height: 300, fontStyle:'light'}}/>
      <p style={{paddingLeft:22, fontSize:12}}>
      Curating a Mobile Experience for Hikers
      </p>
      <img src={starbucks} alt="starbucks" style={{paddingLeft: 22, height: 300}}/>
      <p style={{paddingLeft:22, fontSize:12, fontStyle:'light'}}>
      Understanding the Waiting Line Experience
      </p>
    </div>
  );
}

export default App;

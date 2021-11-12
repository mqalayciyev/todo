import React, { useRef, useReducer, useState } from 'react';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Header from './Components/Header';

import "./CSS/style.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App(props) {
  return (

    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<Notfound />}/> */}
        </Routes>
      </Router>
    </div>

  );
}

export default App;



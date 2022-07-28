import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Dicari from './Dicari';
import { Route, Routes } from 'react-router-dom';

function Pages() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/dicari/:pencarian" element={<Dicari />} />
      </Routes>
  );
}

export default Pages;
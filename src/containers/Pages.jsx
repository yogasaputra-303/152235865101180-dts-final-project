import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Dicari from './Dicari';
import Resep from './Resep';
import { Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/dicari/:pencarian" element={<Dicari />} />
          <Route path="/resep/:name" element={<Resep />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
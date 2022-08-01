import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Dicari from './Dicari';
import Resep from './Resep';
import { Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import ProtectedRoute from '../components/ProtectedRoute';
import Register from './Register';
import Login from './Login';
import About from './About';
import Kategori from '../components/Kategori';
import Pencarian from '../components/Pencarian';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={
          <>
            <Pencarian />
            <Kategori />
            <Home />
          </>

          } />
          <Route path="/cuisine/:type" element={
          <>
            <Pencarian />
            <Kategori />
            <Cuisine />
          </>
          } />
          <Route path="/about" element={         
            <About />
        } />
          <Route path="/dicari/:pencarian" element={
          <>
            <Pencarian />
            <Dicari />
          </>
          } />
          <Route path="/resep/:name" element={
          <ProtectedRoute loginOnly={true}>
            <Resep />
          </ProtectedRoute>
          } />
          <Route path='login' element={
          <ProtectedRoute loginOnly={false}>
            <Login />
          </ProtectedRoute>
        } />
        <Route path='register' element={
          <ProtectedRoute loginOnly={false}>
            <Register />
          </ProtectedRoute>
        } />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;


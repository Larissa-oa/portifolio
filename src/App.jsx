import React, { useState } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './pages/Homepage';
import AboutPage from './pages/Aboutpage';
import Footer from './components/Footer';
import PortfolioPage from './pages/PortfolioPage';



function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element= {<HomePage />} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/portfolio" element={<PortfolioPage/>} />
    </Routes>
    </>
  )
}

export default App
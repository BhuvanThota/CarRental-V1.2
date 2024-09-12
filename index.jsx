import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Layout from './pages/components/Layout.jsx'
import About from './pages/About.jsx'
import Cars from './pages/Cars.jsx'
import CarDetail from './pages/CarDetail.jsx'

import './server'; 


ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}  >
        <Route index element = {<Home />} />
        <Route path="about" element={<About />}  /> 
        <Route path="cars" element={<Cars />}  />
        <Route path="cars/:id" element={<CarDetail />}>

          
        </Route> 
      </Route> 
    </Routes>
  </BrowserRouter>
)
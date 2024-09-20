import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from './pages/components/ScrollToTop.jsx'

import Home from './pages/Home.jsx'
import Layout from './pages/components/Layout.jsx'
import About from './pages/About.jsx'
import Cars from './pages/Cars.jsx'
import CarDetail from './pages/CarDetail.jsx'

import HostLayout from './pages/components/HostLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Income from './pages/Income.jsx'
import Reviews from './pages/Reviews.jsx'

import HostCars from './pages/HostCars.jsx'
import HostCarLayout from './pages/components/host/HostCarLayout.jsx'
import HostCarDetails from './pages/components/host/HostCarDetails.jsx'
import HostCarPricing from './pages/components/host/HostCarPricing.jsx'
import HostCarPhotos from './pages/components/host/HostCarPhotos'

import './server'; 


ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout />}  >
        <Route index element = {<Home />} />
        <Route path="about" element={<About />}  /> 
        <Route path="cars" element={<Cars />}  />
        <Route path="cars/:id" element={<CarDetail />} />
        <Route path="admin" element={<HostLayout />}>
          <Route index element = {<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="cars" element={<HostCars /> } />
          <Route path="cars/:id" element={< HostCarLayout/>} >
            <Route index element={<HostCarDetails />}/>
            <Route path="pricing" element={<HostCarPricing />} />
            <Route path="photos" element={<HostCarPhotos />} />


          </Route>
        </Route> 
      </Route> 
    </Routes>
  </BrowserRouter>
)

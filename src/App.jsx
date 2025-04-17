import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import PropertyDetails from './pages/PropertyDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import { PropertyProvider } from './context/PropertyContext';
import BecomeHost from './pages/BecomeHost';
import HostRegistration from './pages/HostRegistration';


function App() {
  return (
    <BrowserRouter>
      <PropertyProvider>
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/host" element={<BecomeHost />} />
            <Route path="/host-registration" element={<HostRegistration />} />
          </Routes>
          <Footer />
        </div>
      </PropertyProvider>
    </BrowserRouter>
  );
}

export default App;

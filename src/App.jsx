import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import { HostProvider } from './context/HostContext';
import BecomeHost from './pages/BecomeHost';
import HostRegistration from './pages/HostRegistration';
import AccountSettings from './pages/AccountSettings';
import AddProperty from './pages/AddProperty';
import HostDashboard from './pages/HostDashboard';
import HostDashboardLogin from './pages/HostDashboardLogin';
import EditProperty from './pages/EditProperty';
import ScrollToTop from './components/ScrollToTop';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <PropertyProvider>
      <HostProvider>
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
          <Navbar />

          <ScrollToTop />

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
            <Route path="/host/dashboard" element={<HostDashboard />} />
            <Route path="/host/settings" element={<AccountSettings />} />
            <Route path="/host/add-property" element={<AddProperty />} />
            <Route path="/host-dashboard-login" element={<HostDashboardLogin />} />
            <Route path="/host/edit-property/:index" element={<EditProperty />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>

          <Footer />
        </div>
      </HostProvider>
    </PropertyProvider>
  );
}

export default App;

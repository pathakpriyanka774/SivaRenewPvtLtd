import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Process from './components/Process';
import Projects from './components/Projects';
import Calculator from './components/Calculator';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import ResidentialSolarPage from './pages/ResidentialSolarPage';
import CommercialSolarPage from './pages/CommercialSolarPage';
import IndustrialSolarPage from './pages/IndustrialSolarPage';
import SolarEPCPage from './pages/SolarEPCPage';
import EnergyStoragePage from './pages/EnergyStoragePage';
import SolarMaintenancePage from './pages/SolarMaintenancePage';
import SolarProductsPage from './pages/SolarProductsPage';
import InvestorRelations from './pages/InvestorRelations';
import Sustainability from './pages/Sustainability';
import Partners from './pages/Partners';
import Distributors from './pages/Distributors';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/solutions/residential-solar" element={<ResidentialSolarPage />} />
          <Route path="/solutions/commercial-solar" element={<CommercialSolarPage />} />
          <Route path="/solutions/industrial-solar" element={<IndustrialSolarPage />} />
          <Route path="/solutions/solar-epc" element={<SolarEPCPage />} />
          <Route path="/solutions/energy-storage" element={<EnergyStoragePage />} />
          <Route path="/solutions/solar-maintenance" element={<SolarMaintenancePage />} />
          <Route path="/solar-products" element={<SolarProductsPage />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/distributors" element={<Distributors />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

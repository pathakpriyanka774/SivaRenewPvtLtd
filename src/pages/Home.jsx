import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import Process from '../components/Process';
import Projects from '../components/Projects';
import Calculator from '../components/Calculator';
import PMYojanaSection from '../components/PMYojanaSection';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ContactPopup from '../components/ContactPopup';

function Home() {
  return (
    <div className="home">
      <ContactPopup />
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <Process />
      <Projects />
      <Calculator />
      {/* <PMYojanaSection /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default Home
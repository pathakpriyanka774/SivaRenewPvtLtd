import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import Process from '../components/Process';
import Projects from '../components/Projects';
import Calculator from '../components/Calculator';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Process />
      <Projects />
      <Calculator />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home
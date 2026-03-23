import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/ServiceDetail.css";

function ResidentialSolarPage() {
  return (
    <>
      <Navbar />
      <main className="service-detail">
        <section className="service-hero">
          <div className="hero-content">
            <h1>Residential Solar Solutions</h1>
            <p>Power your home with clean, renewable energy and reduce your electricity bills</p>
          </div>
        </section>

        <section className="service-overview">
          <div className="container">
            <h2>Complete Home Solar Solutions</h2>
            <p>
              Our residential solar solutions are designed to provide maximum energy savings 
              for homeowners across India. From initial consultation to final installation, 
              we ensure a seamless transition to solar power.
            </p>
            
            <div className="features-grid">
              <div className="feature">
                <h3>🏠 Custom Design</h3>
                <p>Solar solutions designed specifically for your home's roof and family's energy needs</p>
              </div>
              <div className="feature">
                <h3>💡 Easy Installation</h3>
                <p>Quick and clean installation process that doesn't disrupt your daily routine</p>
              </div>
              <div className="feature">
                <h3>� Lower Monthly Bills</h3>
                <p>Start saving money from day one with reduced electricity costs every month</p>
              </div>
              <div className="feature">
                <h3>🌱 Eco-Friendly</h3>
                <p>Help protect the environment while powering your home with clean energy</p>
              </div>
              <div className="feature">
                <h3>� Smart Monitoring</h3>
                <p>Track your solar power generation and savings through your smartphone</p>
              </div>
              <div className="feature">
                <h3>�️ Quality Assurance</h3>
                <p>High-quality equipment with reliable performance for years to come</p>
              </div>
            </div>
          </div>
        </section>

        
          
        <section className="cta">
          <div className="container">
            <h2>Ready to Go Solar?</h2>
            <p>Get a free consultation and quote for your home solar system</p>
            <button className="cta-button">Get Free Quote</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ResidentialSolarPage;

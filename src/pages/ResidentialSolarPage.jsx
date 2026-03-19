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
                <p>Tailored solar solutions based on your roof structure and energy consumption patterns</p>
              </div>
              <div className="feature">
                <h3>📊 Net Metering</h3>
                <p>Sell excess power back to the grid and earn credits on your electricity bill</p>
              </div>
              <div className="feature">
                <h3>🛡️ 25 Year Warranty</h3>
                <p>Long-term warranty on solar panels with performance guarantees</p>
              </div>
              <div className="feature">
                <h3>💰 Cost Savings</h3>
                <p>Reduce electricity bills by up to 80% with solar energy</p>
              </div>
            </div>
          </div>
        </section>

        <section className="process">
          <div className="container">
            <h2>Installation Process</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Site Assessment</h3>
                <p>Technical evaluation of your location and energy requirements</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>System Design</h3>
                <p>Custom solar system design optimized for your home</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Installation</h3>
                <p>Professional installation by certified technicians</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Commissioning</h3>
                <p>System testing and connection to the grid</p>
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

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/service-detail.css";

function SolarMaintenancePage() {
  return (
    <>
      <Navbar />
      <main className="service-detail solar-maintenance">
        <section className="service-hero">
          <div className="hero-content">
            <h1>Solar Maintenance Services</h1>
            <p>Keep your solar investment performing at peak efficiency with our comprehensive maintenance and monitoring services</p>
          </div>
        </section>

        <section className="service-overview">
          <div className="container">
            <h2>Professional Solar Care</h2>
            <p>
              Our solar maintenance services ensure your system continues to deliver maximum performance and return on investment. From routine inspections to emergency repairs, we keep your solar panels operating at optimal efficiency throughout their entire lifespan.
            </p>
            
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🔧</div>
                <h3>Regular Inspections</h3>
                <p>Comprehensive system checks to identify and prevent potential issues before they impact performance</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <h3>Performance Monitoring</h3>
                <p>24/7 remote monitoring to track energy production and system health in real-time</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🧹</div>
                <h3>Panel Cleaning</h3>
                <p>Professional cleaning services to maintain optimal energy absorption and efficiency</p>
              </div>
            </div>
          </div>
        </section>

        <section className="service-benefits">
          <div className="container">
            <h2>Why Choose Our Maintenance?</h2>
            
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <h3>Maximized Efficiency</h3>
                <p>Ensure your system operates at peak performance for maximum energy generation</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">🛡️</div>
                <h3>Extended Lifespan</h3>
                <p>Professional care extends equipment life and protects your investment</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">💰</div>
                <h3>Cost Savings</h3>
                <p>Prevent costly repairs and maintain consistent energy production</p>
              </div>
            </div>
          </div>
        </section>

        <section className="service-process">
          <div className="container">
            <h2>Our Maintenance Process</h2>
            
            <div className="process-steps">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>System Assessment</h3>
                  <p>Comprehensive evaluation of your current solar system performance and condition</p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Customized Plan</h3>
                  <p>Tailored maintenance schedule based on your system type and usage patterns</p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Professional Service</h3>
                  <p>Expert technicians perform scheduled maintenance and optimization</p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Performance Report</h3>
                  <p>Detailed analysis of system performance and recommendations for improvement</p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Ongoing Support</h3>
                  <p>Continuous monitoring and priority support for maintenance needs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-cta">
          <div className="container">
            <h2>Keep Your Solar System Perfect?</h2>
            <p>Protect your investment and ensure optimal performance with our professional solar maintenance services</p>
            <div className="cta-buttons">
              <button className="primary-cta">Schedule Maintenance</button>
              <button className="secondary-cta">Learn More</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SolarMaintenancePage;

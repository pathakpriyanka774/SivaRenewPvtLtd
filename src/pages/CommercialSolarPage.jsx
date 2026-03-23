import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/ServiceDetail.css";

function CommercialSolarPage() {
  return (
    <>
      <Navbar />
      <main className="service-detail">
        <section className="service-hero commercial-hero">
          <div className="hero-content">
            <h1>Commercial Solar Solutions</h1>
            <p>Empower your business with sustainable energy and reduce operational costs significantly</p>
          </div>
        </section>

        <section className="service-overview">
          <div className="container">
            <h2>Smart Energy for Smart Business</h2>
            <p>
              Our commercial solar solutions are engineered to maximize ROI for businesses across India. 
              From small offices to large industrial facilities, we deliver scalable solar power systems 
              that reduce electricity costs, enhance sustainability credentials, and provide long-term energy security.
            </p>
            
            <div className="features-grid">
              <div className="feature">
                <h3>📊 ROI Analysis</h3>
                <p>Comprehensive financial analysis showing clear return on investment and payback periods</p>
              </div>
              <div className="feature">
                <h3>💰 Tax Benefits</h3>
                <p>Maximize government incentives, tax credits, and depreciation benefits for solar investments</p>
              </div>
              <div className="feature">
                <h3>🔧 O&M Support</h3>
                <p>Complete operations and maintenance support with 24/7 monitoring and rapid response</p>
              </div>
              <div className="feature">
                <h3>⚡ Peak Load Management</h3>
                <p>Optimize energy consumption during peak hours to reduce demand charges</p>
              </div>
              <div className="feature">
                <h3>🌱 Carbon Credits</h3>
                <p>Generate and monetize carbon credits through renewable energy production</p>
              </div>
              <div className="feature">
                <h3>📈 Energy Independence</h3>
                <p>Reduce dependency on grid power and protect against rising electricity costs</p>
              </div>
            </div>
          </div>
        </section>

        <section className="business-sectors">
          <div className="container">
            <h2>Industries We Serve</h2>
            <div className="sectors-grid">
              <div className="sector">
                <div className="sector-icon">🏢</div>
                <h3>Office Buildings</h3>
                <p>Corporate offices and business parks with optimized energy solutions</p>
              </div>
              <div className="sector">
                <div className="sector-icon">🏭</div>
                <h3>Manufacturing</h3>
                <p>Industrial facilities with high energy consumption requirements</p>
              </div>
              <div className="sector">
                <div className="sector-icon">🏪</div>
                <h3>Retail & Malls</h3>
                <p>Shopping complexes and retail centers with large roof spaces</p>
              </div>
              <div className="sector">
                <div className="sector-icon">🏨</div>
                <h3>Hospitality</h3>
                <p>Hotels and resorts with 24/7 energy requirements</p>
              </div>
              <div className="sector">
                <div className="sector-icon">🏥</div>
                <h3>Healthcare</h3>
                <p>Hospitals and medical facilities requiring reliable power backup</p>
              </div>
              <div className="sector">
                <div className="sector-icon">🎓</div>
                <h3>Education</h3>
                <p>Schools, colleges, and educational institutions</p>
              </div>
            </div>
          </div>
        </section>

        <section className="process">
          <div className="container">
            <h2>Commercial Installation Process</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Energy Audit</h3>
                <p>Comprehensive analysis of current energy consumption and load patterns</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>System Design</h3>
                <p>Custom solar system design optimized for your business requirements</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Financial Planning</h3>
                <p>Detailed cost-benefit analysis and financing options</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Installation</h3>
                <p>Professional installation with minimal business disruption</p>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <h3>Commissioning</h3>
                <p>System testing, grid connection, and performance verification</p>
              </div>
              <div className="step">
                <div className="step-number">6</div>
                <h3>O&M Support</h3>
                <p>Long-term monitoring, maintenance, and performance optimization</p>
              </div>
            </div>
          </div>
        </section>

        

        <section className="cta">
          <div className="container">
            <h2>Transform Your Business Energy Costs</h2>
            <p>Get a comprehensive commercial solar assessment and ROI analysis</p>
            <button className="cta-button">Get Business Quote</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default CommercialSolarPage;

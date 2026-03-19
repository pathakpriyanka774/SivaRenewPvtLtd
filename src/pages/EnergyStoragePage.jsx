import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/service-detail.css";

function EnergyStoragePage() {
  return (
    <>
      <Navbar />
      <main className="service-detail energy-storage">
        <section className="service-hero">
          <div className="hero-content">
            <h1>Energy Storage Solutions</h1>
            <p>Maximize your energy independence with advanced battery storage systems for round-the-clock power availability</p>
          </div>
        </section>

        <section className="service-overview">
          <div className="container">
            <h2>Smart Energy Management</h2>
            <p>
              Our energy storage solutions integrate seamlessly with your solar system to provide reliable power when sunlight is unavailable. Store excess solar energy during the day and use it during peak hours or emergencies.
            </p>
            
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <h3>24/7 Power Backup</h3>
                <p>Uninterrupted power supply during grid outages and nighttime</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🔋</div>
                <h3>Smart Energy Management</h3>
                <p>Intelligent monitoring and optimization of energy usage</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <h3>Grid Independence</h3>
                <p>Reduce dependency on utility power and lower electricity costs</p>
              </div>
            </div>
          </div>
        </section>

        <section className="service-benefits">
          <div className="container">
            <h2>Why Choose Energy Storage?</h2>
            
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">💰</div>
                <h3>Cost Savings</h3>
                <p>Reduce peak hour electricity rates and maximize solar investment returns</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">🌙</div>
                <h3>Energy Security</h3>
                <p>Reliable backup power for emergencies and critical loads</p>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">🌱</div>
                <h3>Environmental Impact</h3>
                <p>Reduce carbon footprint and support renewable energy adoption</p>
              </div>
            </div>
          </div>
        </section>

        <section className="service-process">
          <div className="container">
            <h2>Our Energy Storage Process</h2>
            
            <div className="process-steps">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Energy Assessment</h3>
                  <p>Comprehensive analysis of your energy needs and consumption patterns</p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>System Design</h3>
                  <p>Customized storage solution tailored to your specific requirements</p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Professional Installation</h3>
                  <p>Expert installation by certified technicians with safety compliance</p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>System Integration</h3>
                  <p>Seamless connection with existing solar and grid systems</p>
                </div>
              </div>
              
              <div className="step-item">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Monitoring & Support</h3>
                  <p>Ongoing performance tracking and maintenance services</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-cta">
          <div className="container">
            <h2>Ready to Optimize Your Energy?</h2>
            <p>Contact our experts for a customized energy storage solution that maximizes your solar investment</p>
            <div className="cta-buttons">
              <button className="primary-cta">Get Free Consultation</button>
              <button className="secondary-cta">Learn More</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default EnergyStoragePage;

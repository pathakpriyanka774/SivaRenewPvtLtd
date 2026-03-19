import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/ServiceDetail.css";

function IndustrialSolarPage() {
  return (
    <>
      <Navbar />
      <main className="service-detail">
        <section className="service-hero industrial-hero">
          <div className="hero-content">
            <h1>Industrial Solar Solutions</h1>
            <p>MW-scale solar power plants for heavy industries requiring reliable, high-capacity energy solutions</p>
          </div>
        </section>

        <section className="service-overview">
          <div className="container">
            <h2>Powering Heavy Industry with Solar</h2>
            <p>
              Our industrial solar solutions deliver megawatt-scale power generation for manufacturing plants, 
              industrial facilities, and large-scale operations. We engineer robust solar power systems designed 
              for 24/7 industrial loads, ensuring energy security and significant operational cost reduction.
            </p>
            
            <div className="features-grid">
              <div className="feature">
                <h3>⚡ MW Scale</h3>
                <p>Large-scale solar installations from 1MW to 100MW+ capacity for industrial power requirements</p>
              </div>
              <div className="feature">
                <h3>🔌 Grid Integration</h3>
                <p>Seamless integration with industrial grid systems and existing power infrastructure</p>
              </div>
              <div className="feature">
                <h3>📊 24/7 Monitoring</h3>
                <p>Advanced SCADA systems with real-time monitoring, predictive maintenance, and performance analytics</p>
              </div>
              <div className="feature">
                <h3>🏭 Heavy-Duty Equipment</h3>
                <p>Industrial-grade solar panels, inverters, and mounting systems designed for harsh environments</p>
              </div>
              <div className="feature">
                <h3>🔋 Energy Storage</h3>
                <p>Integrated battery storage solutions for continuous power supply and load shifting</p>
              </div>
              <div className="feature">
                <h3>🛡️ Asset Protection</h3>
                <p>Comprehensive insurance coverage and performance guarantees for industrial investments</p>
              </div>
            </div>
          </div>
        </section>

        <section className="industrial-applications">
          <div className="container">
            <h2>Industrial Applications</h2>
            <div className="applications-grid">
              <div className="application">
                <div className="application-icon">🏭</div>
                <h3>Manufacturing Plants</h3>
                <p>Continuous power for assembly lines, heavy machinery, and production facilities</p>
                <ul>
                  <li>Automotive manufacturing</li>
                  <li>Steel and metal processing</li>
                  <li>Chemical production</li>
                  <li>Textile industries</li>
                </ul>
              </div>
              <div className="application">
                <div className="application-icon">⛽</div>
                <h3>Oil & Gas</h3>
                <p>Remote power solutions for extraction, refining, and pipeline operations</p>
                <ul>
                  <li>Offshore platforms</li>
                  <li>Refinery operations</li>
                  <li>Pipeline monitoring</li>
                  <li>Storage facilities</li>
                </ul>
              </div>
              <div className="application">
                <div className="application-icon">⚒️</div>
                <h3>Mining Operations</h3>
                <p>Heavy-duty power for mining equipment, processing plants, and site operations</p>
                <ul>
                  <li>Open-pit mining</li>
                  <li>Mineral processing</li>
                  <li>Site infrastructure</li>
                  <li>Remote operations</li>
                </ul>
              </div>
              <div className="application">
                <div className="application-icon">🏗️</div>
                <h3>Construction</h3>
                <p>Mobile and fixed power solutions for construction sites and infrastructure projects</p>
                <ul>
                  <li>Large-scale construction</li>
                    <li>Infrastructure projects</li>
                    <li>Cement plants</li>
                    <li>Material processing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="technical-specs">
          <div className="container">
            <h2>Technical Specifications</h2>
            <div className="specs-grid">
              <div className="spec-category">
                <h3>Power Capacity</h3>
                <div className="spec-items">
                  <div className="spec-item">
                    <span className="spec-label">Range:</span>
                    <span className="spec-value">1MW - 100MW+</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Panel Type:</span>
                    <span className="spec-value">Monocrystalline PERC</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Efficiency:</span>
                    <span className="spec-value">Up to 22%</span>
                  </div>
                </div>
              </div>
              <div className="spec-category">
                <h3>System Components</h3>
                <div className="spec-items">
                  <div className="spec-item">
                    <span className="spec-label">Inverters:</span>
                    <span className="spec-value">String & Central</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Mounting:</span>
                    <span className="spec-value">Ground-mounted</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Tracking:</span>
                    <span className="spec-value">Single/Dual-axis</span>
                  </div>
                </div>
              </div>
              <div className="spec-category">
                <h3>Performance</h3>
                <div className="spec-items">
                  <div className="spec-item">
                    <span className="spec-label">Generation:</span>
                    <span className="spec-value">4.5-6.5 kWh/kWp/day</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Degradation:</span>
                    <span className="spec-value">&lt;0.5% per year</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Warranty:</span>
                    <span className="spec-value">25 years performance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="process">
          <div className="container">
            <h2>Industrial Project Implementation</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Feasibility Study</h3>
                <p>Comprehensive site assessment, energy audit, and technical feasibility analysis</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>System Engineering</h3>
                <p>Detailed engineering design, load analysis, and grid integration planning</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Regulatory Approval</h3>
                <p>Permits, clearances, and compliance with industrial safety standards</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Civil Works</h3>
                <p>Land preparation, foundation work, and infrastructure development</p>
              </div>
              <div className="step">
                <div className="step-number">5</div>
                <h3>Installation</h3>
                <p>Panel mounting, electrical work, and equipment installation</p>
              </div>
              <div className="step">
                <div className="step-number">6</div>
                <h3>Commissioning</h3>
                <p>System testing, grid synchronization, and performance validation</p>
              </div>
              <div className="step">
                <div className="step-number">7</div>
                <h3>Operations</h3>
                <p>24/7 monitoring, maintenance, and performance optimization</p>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="container">
            <h2>Industrial Benefits</h2>
            <div className="benefits-stats">
              <div className="benefit-stat">
                <h3>50-80%</h3>
                <p>Energy Cost Reduction</p>
              </div>
              <div className="benefit-stat">
                <h3>2-4 Years</h3>
                <p>Payback Period</p>
              </div>
              <div className="benefit-stat">
                <h3>30+ Years</h3>
                <p>System Lifespan</p>
              </div>
              <div className="benefit-stat">
                <h3>99.5%</h3>
                <p>System Uptime</p>
              </div>
              <div className="benefit-stat">
                <h3>100%</h3>
                <p>Custom Engineering</p>
              </div>
              <div className="benefit-stat">
                <h3>24/7</h3>
                <p>Technical Support</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <h2>Power Your Industrial Operations</h2>
            <p>Get a customized MW-scale solar solution for your industrial facility</p>
            <button className="cta-button">Get Industrial Quote</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default IndustrialSolarPage;

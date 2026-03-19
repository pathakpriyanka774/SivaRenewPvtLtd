import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/ServiceDetail.css";

function SolarEPCPage() {
  return (
    <>
      <Navbar />
      <main className="service-detail">
        <section className="service-hero epc-hero">
          <div className="hero-content">
            <h1>Solar EPC Solutions</h1>
            <p>Complete turnkey solar project solutions from concept to commissioning and beyond</p>
          </div>
        </section>

        <section className="service-overview">
          <div className="container">
            <h2>End-to-End Solar Project Excellence</h2>
            <p>
              Our Solar EPC (Engineering, Procurement, and Construction) services deliver comprehensive 
              turnkey solutions for solar power projects. From initial feasibility studies to final 
              commissioning and long-term operations, we manage every aspect of your solar project 
              with precision, expertise, and commitment to excellence.
            </p>
            
            <div className="features-grid">
              <div className="feature">
                <h3>🔧 Turnkey Solution</h3>
                <p>Complete project delivery from concept to commissioning under single responsibility</p>
              </div>
              <div className="feature">
                <h3>⚙️ Engineering</h3>
                <p>Detailed engineering design, structural analysis, and electrical system planning</p>
              </div>
              <div className="feature">
                <h3>📦 Procurement</h3>
                <p>Strategic sourcing of high-quality solar components at competitive prices</p>
              </div>
              <div className="feature">
                <h3>🏗️ Construction</h3>
                <p>Professional project management and quality construction with safety compliance</p>
              </div>
              <div className="feature">
                <h3>🔌 Commissioning</h3>
                <p>System testing, grid integration, and performance validation</p>
              </div>
              <div className="feature">
                <h3>📊 Project Management</h3>
                <p>Dedicated project managers ensuring timely delivery within budget</p>
              </div>
            </div>
          </div>
        </section>

        <section className="epc-process">
          <div className="container">
            <h2>EPC Project Lifecycle</h2>
            <div className="epc-timeline">
              <div className="timeline-phase">
                <div className="phase-number">1</div>
                <div className="phase-content">
                  <h3>Feasibility & Planning</h3>
                  <p>Site assessment, resource analysis, and preliminary design</p>
                  <ul>
                    <li>Site selection and evaluation</li>
                    <li>Solar resource assessment</li>
                    <li>Regulatory compliance review</li>
                    <li>Initial cost-benefit analysis</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-phase">
                <div className="phase-number">2</div>
                <div className="phase-content">
                  <h3>Detailed Engineering</h3>
                  <p>Comprehensive design and engineering documentation</p>
                  <ul>
                    <li>Civil and structural engineering</li>
                    <li>Electrical system design</li>
                    <li>Single line diagrams</li>
                    <li>Protection and control systems</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-phase">
                <div className="phase-number">3</div>
                <div className="phase-content">
                  <h3>Procurement & Logistics</h3>
                  <p>Strategic sourcing and supply chain management</p>
                  <ul>
                    <li>Equipment specification and selection</li>
                    <li>Vendor evaluation and selection</li>
                    <li>Quality assurance protocols</li>
                    <li>Logistics and delivery coordination</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-phase">
                <div className="phase-number">4</div>
                <div className="phase-content">
                  <h3>Construction & Installation</h3>
                  <p>On-site construction and system installation</p>
                  <ul>
                    <li>Civil works and foundations</li>
                    <li>Structural installation</li>
                    <li>Electrical installation</li>
                    <li>Quality control and testing</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-phase">
                <div className="phase-number">5</div>
                <div className="phase-content">
                  <h3>Commissioning & Handover</h3>
                  <p>System testing, commissioning, and project handover</p>
                  <ul>
                    <li>Pre-commissioning checks</li>
                    <li>Grid synchronization</li>
                    <li>Performance testing</li>
                    <li>Documentation handover</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-phase">
                <div className="phase-number">6</div>
                <div className="phase-content">
                  <h3>Operations & Maintenance</h3>
                  <p>Long-term O&M support and performance optimization</p>
                  <ul>
                    <li>Preventive maintenance</li>
                    <li>Performance monitoring</li>
                    <li>Corrective maintenance</li>
                    <li>Technical support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="epc-services">
          <div className="container">
            <h2>Comprehensive EPC Services</h2>
            <div className="services-grid">
              <div className="epc-service">
                <div className="service-icon">📋</div>
                <h3>Project Development</h3>
                <p>Complete project development from concept to financial closure</p>
                <div className="service-features">
                  <span>Land acquisition support</span>
                  <span>Permitting and approvals</span>
                  <span>Financial modeling</span>
                  <span>Risk assessment</span>
                </div>
              </div>
              <div className="epc-service">
                <div className="service-icon">🏗️</div>
                <h3>Civil & Structural Works</h3>
                <p>Comprehensive civil engineering and structural solutions</p>
                <div className="service-features">
                  <span>Site preparation</span>
                  <span>Foundation design</span>
                  <span>Structural engineering</span>
                  <span>Access roads</span>
                </div>
              </div>
              <div className="epc-service">
                <div className="service-icon">⚡</div>
                <h3>Electrical Systems</h3>
                <p>Complete electrical system design and installation</p>
                <div className="service-features">
                  <span>Power evacuation</span>
                  <span>Switchyard design</span>
                  <span>Control systems</span>
                  <span>Protection systems</span>
                </div>
              </div>
              <div className="epc-service">
                <div className="service-icon">📊</div>
                <h3>Quality Assurance</h3>
                <p>Rigorous quality control throughout project lifecycle</p>
                <div className="service-features">
                  <span>Material testing</span>
                  <span>Installation quality</span>
                  <span>Performance validation</span>
                  <span>Compliance verification</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project-types">
          <div className="container">
            <h2>Project Types We Handle</h2>
            <div className="project-grid">
              <div className="project-type">
                <h3>Utility-Scale Solar</h3>
                <p>Large-scale solar farms (10MW - 500MW+)</p>
                <div className="project-stats">
                  <div className="stat">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">2GW+</span>
                    <span className="stat-label">Capacity Installed</span>
                  </div>
                </div>
              </div>
              <div className="project-type">
                <h3>Commercial Solar</h3>
                <p>Commercial and industrial solar installations (1MW - 10MW)</p>
                <div className="project-stats">
                  <div className="stat">
                    <span className="stat-number">200+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">500MW+</span>
                    <span className="stat-label">Capacity Installed</span>
                  </div>
                </div>
              </div>
              <div className="project-type">
                <h3>Solar Parks</h3>
                <p>Development of solar parks and energy hubs</p>
                <div className="project-stats">
                  <div className="stat">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Solar Parks</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">1GW+</span>
                    <span className="stat-label">Park Capacity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="container">
            <h2>EPC Service Benefits</h2>
            <div className="benefits-stats">
              <div className="benefit-stat">
                <h3>Single Point</h3>
                <p>of Contact</p>
              </div>
              <div className="benefit-stat">
                <h3>100%</h3>
                <p>Quality Assurance</p>
              </div>
              <div className="benefit-stat">
                <h3>On-Time</h3>
                <p>Project Delivery</p>
              </div>
              <div className="benefit-stat">
                <h3>Cost</h3>
                <p>Optimization</p>
              </div>
              <div className="benefit-stat">
                <h3>25+ Years</h3>
                <p>Experience</p>
              </div>
              <div className="benefit-stat">
                <h3>24/7</h3>
                <p>Project Support</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <h2>Partner with Solar EPC Experts</h2>
            <p>Get comprehensive turnkey solar solutions for your next project</p>
            <button className="cta-button">Get EPC Consultation</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SolarEPCPage;

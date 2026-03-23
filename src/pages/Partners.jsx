import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/Partners.css';

function Partners() {
  return (
    <div className="partners">
      <Navbar />
      
      <section className="partners-hero">
        <div className="container">
          <h1>Our Partners</h1>
          <p>Building strong collaborations to accelerate the renewable energy transition</p>
        </div>
      </section>

      <section className="partners-content">
        <div className="container">
          <div className="partners-intro">
            <h2>Strategic Partnerships</h2>
            <p>We collaborate with industry leaders, technology providers, and local organizations to deliver comprehensive renewable energy solutions. Our partnerships are built on trust, innovation, and shared commitment to sustainability.</p>
          </div>

          <div className="partners-categories">
            <div className="category-section">
              <h3>Technology Partners</h3>
              <div className="partners-grid">
                <div className="partner-card">
                  <div className="partner-logo">
                    <div className="logo-placeholder">Tech Partner 1</div>
                  </div>
                  <h4>Solar Technology Innovators</h4>
                  <p>Leading providers of advanced solar panels and energy storage solutions, ensuring cutting-edge technology for our projects.</p>
                </div>
                <div className="partner-card">
                  <div className="partner-logo">
                    <div className="logo-placeholder">Tech Partner 2</div>
                  </div>
                  <h4>Smart Energy Systems</h4>
                  <p>Specialists in IoT and AI-powered energy management systems that optimize solar installations for maximum efficiency.</p>
                </div>
                <div className="partner-card">
                  <div className="partner-logo">
                    <div className="logo-placeholder">Tech Partner 3</div>
                  </div>
                  <h4>Energy Storage Experts</h4>
                  <p>Providers of innovative battery storage solutions that enable reliable solar power 24/7.</p>
                </div>
              </div>
            </div>

            <div className="category-section">
              <h3>Installation & Service Partners</h3>
              <div className="partners-grid">
                <div className="partner-card">
                  <div className="partner-logo">
                    <div className="logo-placeholder">Service Partner 1</div>
                  </div>
                  <h4>Certified Installers Network</h4>
                  <p>Nationwide network of certified solar installation professionals ensuring quality workmanship and safety standards.</p>
                </div>
                <div className="partner-card">
                  <div className="partner-logo">
                    <div className="logo-placeholder">Service Partner 2</div>
                  </div>
                  <h4>Maintenance & Support</h4>
                  <p>Specialized teams providing ongoing maintenance, monitoring, and support services for optimal system performance.</p>
                </div>
                <div className="partner-card">
                  <div className="partner-logo">
                    <div className="logo-placeholder">Service Partner 3</div>
                  </div>
                  <h4>Electrical Contractors</h4>
                  <p>Licensed electrical contractors specializing in solar installations and grid integration.</p>
                </div>
              </div>
            </div>

            <div className="category-section">
              <h3>Financial & Insurance Partners</h3>
              <div className="partners-grid">
                <div className="partner-card">
                  <div className="partner-logo">
                    <div className="logo-placeholder">Finance Partner 1</div>
                  </div>
                  <h4>Renewable Energy Financing</h4>
                  <p>Financial institutions providing specialized loans and leasing options for solar projects across residential and commercial sectors.</p>
                </div>
                <div className="partner-card">
                  <div className="partner-logo">
                    <div className="logo-placeholder">Finance Partner 2</div>
                  </div>
                  <h4>Insurance Providers</h4>
                  <p>Insurance companies offering comprehensive coverage for solar installations, equipment, and performance guarantees.</p>
                </div>
                <div className="partner-card">
                  <div className="partner-logo">
                    <div className="logo-placeholder">Finance Partner 3</div>
                  </div>
                  <h4>Investment Partners</h4>
                  <p>Investment firms and funds focused on renewable energy projects and sustainable infrastructure development.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="partnership-benefits">
            <h2>Why Partner With Us?</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h4>Extensive Network</h4>
                <p>Access to our growing network of clients, projects, and industry connections.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h4>Quality Standards</h4>
                <p>Commitment to excellence and industry best practices in all partnerships.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h4>Growth Opportunities</h4>
                <p>Shared growth in the expanding renewable energy market with mutual benefits.</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
                    <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h4>Reliable Support</h4>
                <p>Dedicated support and resources to ensure successful partnership outcomes.</p>
              </div>
            </div>
          </div>

          <div className="become-partner">
            <div className="partner-cta">
              <h2>Become Our Partner</h2>
              <p>Join us in our mission to accelerate the adoption of renewable energy. We're always looking for innovative companies and talented professionals to collaborate with.</p>
              <div className="cta-buttons">
                <button className="primary-btn">Apply to Partner</button>
                <button className="secondary-btn">Download Partnership Info</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Partners;

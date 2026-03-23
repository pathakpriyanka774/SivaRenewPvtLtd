import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/Distributors.css';

function Distributors() {
  return (
    <div className="distributors">
      <Navbar />
      
      <section className="distributors-hero">
        <div className="container">
          <h1>Distributors</h1>
          <p>Join our network of authorized distributors and bring renewable energy solutions to your community</p>
        </div>
      </section>

      <section className="distributors-content">
        <div className="container">
          <div className="distributors-intro">
            <h2>Our Distribution Network</h2>
            <p>We partner with qualified distributors worldwide to expand access to high-quality solar solutions. Our distribution program offers comprehensive support, competitive pricing, and growth opportunities for businesses passionate about renewable energy.</p>
          </div>

          <div className="distributor-benefits">
            <h2>Why Become Our Distributor?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#2a5298" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Premium Products</h3>
                <p>Access to industry-leading solar panels, inverters, and energy storage solutions with proven performance and reliability.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="#2a5298" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Competitive Pricing</h3>
                <p>Exclusive distributor pricing and volume discounts to ensure healthy profit margins and market competitiveness.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path d="M9 11l3 3L22 4" stroke="#2a5298" strokeWidth="2"/>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="#2a5298" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Technical Support</h3>
                <p>Comprehensive technical training, installation support, and ongoing assistance from our expert team.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#2a5298" strokeWidth="2"/>
                    <circle cx="9" cy="7" r="4" stroke="#2a5298" strokeWidth="2"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#2a5298" strokeWidth="2"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#2a5298" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Marketing Support</h3>
                <p>Marketing materials, brand guidelines, and promotional campaigns to help you grow your business effectively.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" stroke="#2a5298" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Inventory Management</h3>
                <p>Flexible ordering systems, inventory management tools, and logistics support to streamline your operations.</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="#2a5298" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Growth Opportunities</h3>
                <p>Access to new product launches, exclusive territories, and opportunities for business expansion and development.</p>
              </div>
            </div>
          </div>

          <div className="distributor-requirements">
            <h2>Distributor Requirements</h2>
            <div className="requirements-grid">
              <div className="requirement-item">
                <h3>Business Registration</h3>
                <p>Valid business license and registration in your operating region with at least 2 years in business.</p>
              </div>
              <div className="requirement-item">
                <h3>Technical Expertise</h3>
                <p>Knowledge of solar energy systems or willingness to complete our certification program.</p>
              </div>
              <div className="requirement-item">
                <h3>Infrastructure</h3>
                <p>Adequate warehouse space, showroom, and team to handle sales, installation, and support.</p>
              </div>
              <div className="requirement-item">
                <h3>Financial Stability</h3>
                <p>Strong financial standing and ability to maintain inventory levels as per agreement.</p>
              </div>
              <div className="requirement-item">
                <h3>Customer Service</h3>
                <p>Commitment to excellent customer service and after-sales support for end customers.</p>
              </div>
              <div className="requirement-item">
                <h3>Market Knowledge</h3>
                <p>Understanding of local renewable energy market, regulations, and customer preferences.</p>
              </div>
            </div>
          </div>

          <div className="distributor-cta">
            <h2>Ready to Join Our Network?</h2>
            <p>Become part of our growing family of authorized distributors and contribute to the renewable energy revolution.</p>
            <div className="cta-buttons">
              <button className="primary-btn">Apply Now</button>
              <button className="secondary-btn">Download Brochure</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Distributors;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/InvestorRelations.css';

function InvestorRelations() {
  return (
    <div className="investor-relations">
      <Navbar />
      
      <section className="investor-hero">
        <div className="container">
          <h1>Investor Relations</h1>
          <p>Building lasting partnerships through transparency, growth, and shared success</p>
        </div>
      </section>

      <section className="investor-content">
        <div className="container">
          <div className="investor-grid">
            <div className="investor-card">
              <h3>Our Commitment</h3>
              <p>We are committed to maintaining open and transparent communication with our investors. Our approach focuses on delivering sustainable growth while creating long-term value for all stakeholders who believe in our vision.</p>
            </div>

            <div className="investor-card">
              <h3>Investment Philosophy</h3>
              <p>We believe in responsible investment that drives positive change. Our business model combines innovation with sustainability, offering investors an opportunity to participate in the growing renewable energy sector while contributing to a cleaner future.</p>
            </div>

            <div className="investor-card">
              <h3>Growth Opportunities</h3>
              <p>The renewable energy sector presents significant growth potential. We continuously explore new markets, technologies, and partnerships that can enhance value creation for our investors while maintaining our commitment to environmental stewardship.</p>
            </div>

            <div className="investor-card">
              <h3>Financial Transparency</h3>
              <p>We maintain rigorous financial standards and provide regular updates on our performance. Our reporting practices ensure investors have access to accurate, timely information to make informed decisions about their investment.</p>
            </div>

            <div className="investor-card">
              <h3>Sustainable Returns</h3>
              <p>Our focus on operational excellence and strategic growth initiatives aims to deliver sustainable returns. We balance short-term performance with long-term value creation, ensuring stability and growth for our investment partners.</p>
            </div>

            <div className="investor-card">
              <h3>Join Our Journey</h3>
              <p>We welcome investors who share our vision for a sustainable future. Whether you're an individual investor or representing an institution, we offer various opportunities to participate in our growth story and contribute to renewable energy development.</p>
            </div>
          </div>



          <div className="investor-info">
            <div className="info-grid">
              <div className="info-item">
                <h4>Regular Updates</h4>
                <p>Stay informed with quarterly reports and performance updates</p>
              </div>
              <div className="info-item">
                <h4>Direct Access</h4>
                <p>Connect with our investor relations team for personalized assistance</p>
              </div>
              <div className="info-item">
                <h4>Growth Potential</h4>
                <p>Participate in the expanding renewable energy market</p>
              </div>
              <div className="info-item">
                <h4>Impact Investment</h4>
                <p>Contribute to environmental sustainability while generating returns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default InvestorRelations;

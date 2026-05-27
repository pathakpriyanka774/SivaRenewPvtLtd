import React from 'react';
import '../css/PMYojanaSection.css';

const PMYojanaSection = () => {
  return (
    <section className="pm-yojana-section">
      <div className="pm-yojana-container">
        <div className="pm-yojana-header">
          <h2>Government Solar Initiatives</h2>
          <p className="pm-yojana-subtitle">Transforming India with Prime Minister's Vision</p>
        </div>
        
        <div className="pm-yojana-content">
          <div className="pm-image-section">
            <div className="pm-image-container">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Prime_Minister_Narendra_Modi_%28cropped%29.jpg/800px-Prime_Minister_Narendra_Modi_%28cropped%29.jpg"
                alt="Prime Minister Narendra Modi" 
                className="pm-image"
              />
              <div className="pm-image-overlay">
                <div className="pm-quote">
                  "Solar energy is the key to India's sustainable future"
                </div>
              </div>
            </div>
          </div>
          
          <div className="yojana-details">
            <div className="yojana-card">
              <div className="yojana-icon"> rooftop</div>
              <h3>PM Surya Ghar Yojana</h3>
              <div className="yojana-benefits">
                <div className="benefit-item">
                  <span className="benefit-highlight">Free Electricity</span>
                  <p>Generate up to 300 units free electricity per month</p>
                </div>
                <div className="benefit-item">
                  <span className="benefit-highlight">Subsidy Support</span>
                  <p>Up to 40% government subsidy on installation</p>
                </div>
                <div className="benefit-item">
                  <span className="benefit-highlight">Net Metering</span>
                  <p>Sell excess electricity back to grid</p>
                </div>
                <div className="benefit-item">
                  <span className="benefit-highlight">Low Interest Loans</span>
                  <p>Easy financing options with reduced interest rates</p>
                </div>
              </div>
            </div>
            
            <div className="yojana-card">
              <div className="yojana-icon">agriculture</div>
              <h3>PM KUSUM Yojana</h3>
              <div className="yojana-benefits">
                <div className="benefit-item">
                  <span className="benefit-highlight">Farmers Support</span>
                  <p>Solar pumps for agricultural use at 90% subsidy</p>
                </div>
                <div className="benefit-item">
                  <span className="benefit-highlight">Income Generation</span>
                  <p>Sell solar power to earn additional income</p>
                </div>
                <div className="benefit-item">
                  <span className="benefit-highlight">Water Security</span>
                  <p>Reliable irrigation with solar-powered pumps</p>
                </div>
                <div className="benefit-item">
                  <span className="benefit-highlight">Drought Resilience</span>
                  <p>Reduce dependence on monsoon for farming</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pm-yojana-cta">
          <h3>Join the Solar Revolution</h3>
          <p>Be part of India's clean energy mission with government-backed solar solutions</p>
          <button className="pm-yojana-btn">
            Learn More About Subsidies
          </button>
        </div>
      </div>
    </section>
  );
};

export default PMYojanaSection;

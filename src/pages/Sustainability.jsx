import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/Sustainability.css';

function Sustainability() {
  return (
    <div className="sustainability">
      <Navbar />
      
      <section className="sustainability-hero">
        <div className="container">
          <h1>Sustainability</h1>
          <p>Committed to creating a sustainable future through renewable energy and responsible business practices</p>
        </div>
      </section>

      <section className="sustainability-content">
        <div className="container">
          <div className="sustainability-intro">
            <h2>Our Environmental Commitment</h2>
            <p>At the core of our mission is a deep commitment to environmental stewardship and sustainable development. We believe that renewable energy is not just a business opportunity, but a responsibility to future generations.</p>
          </div>

          <div className="sustainability-grid">
            <div className="sustainability-card">
              <div className="card-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Carbon Reduction</h3>
              <p>We actively work to reduce carbon emissions through our solar solutions and help businesses and households transition to clean energy, significantly reducing their environmental footprint.</p>
            </div>

            <div className="sustainability-card">
              <div className="card-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Environmental Protection</h3>
              <p>Our projects are designed with minimal environmental impact, ensuring that we protect ecosystems while delivering clean energy solutions that benefit communities and nature.</p>
            </div>

            <div className="sustainability-card">
              <div className="card-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Social Responsibility</h3>
              <p>We engage with local communities, create employment opportunities, and ensure that our projects contribute positively to the social and economic development of the regions we serve.</p>
            </div>

            <div className="sustainability-card">
              <div className="card-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Sustainable Innovation</h3>
              <p>We continuously invest in research and development to improve solar technology efficiency, reduce costs, and make renewable energy more accessible to everyone.</p>
            </div>

            <div className="sustainability-card">
              <div className="card-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3.27 6.96L12 12.01l8.73-5.05" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Circular Economy</h3>
              <p>We promote circular economy principles in our operations, from responsible sourcing of materials to end-of-life recycling of solar components, minimizing waste and maximizing resource efficiency.</p>
            </div>

            <div className="sustainability-card">
              <div className="card-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Transparency & Reporting</h3>
              <p>We maintain transparent reporting on our environmental impact, sustainability goals, and progress, ensuring accountability to our stakeholders and continuous improvement in our practices.</p>
            </div>
          </div>

        
          <div className="sustainability-goals">
            <h2>Our Sustainability Goals</h2>
            <div className="goals-timeline">
              <div className="goal-item">
                <div className="goal-year">2025</div>
                <div className="goal-content">
                  <h3>Expand Clean Energy Access</h3>
                  <p>Double our installed capacity and reach underserved communities with affordable solar solutions.</p>
                </div>
              </div>
              <div className="goal-item">
                <div className="goal-year">2026</div>
                <div className="goal-content">
                  <h3>Achieve Carbon Neutrality</h3>
                  <p>Implement comprehensive carbon offset programs and achieve carbon neutrality in our operations.</p>
                </div>
              </div>
              <div className="goal-item">
                <div className="goal-year">2027</div>
                <div className="goal-content">
                  <h3>Enhance Community Impact</h3>
                  <p>Launch educational programs and training initiatives to build local capacity in renewable energy.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sustainability-cta">
            <h2>Join Us in Building a Sustainable Future</h2>
            <p>Together, we can make a significant impact on climate change and create a cleaner, greener world for future generations.</p>
            <button className="primary-btn">Learn More About Our Initiatives</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Sustainability;

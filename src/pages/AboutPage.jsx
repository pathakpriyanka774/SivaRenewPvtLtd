import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/AboutPage.css";

function AboutPage() {
  const pageRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [pageRef.current, missionRef.current, teamRef.current, valuesRef.current];
    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="about-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="about-hero" ref={pageRef}>
        <div className="about-hero-container">
          <div className="about-hero-content">
            <h1>About Siva Renew</h1>
            <p className="hero-subtitle">
              Your trusted partner in renewable energy solutions, committed to powering a sustainable future for India
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">25 Years</span>
                <span className="stat-label">Panel Warranty</span>
              </div>
            </div>
          </div>
          <div className="about-hero-image">
            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276" alt="Solar Installation" />
          </div>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="two-column-section" ref={missionRef}>
        <div className="two-column-container">
          <div className="column-content">
            <h2>Powering India's Solar Future</h2>
            <p>
              Siva Renew is a emerging leader in renewable energy solutions, dedicated to making solar power accessible and affordable for every Indian home and business.
            </p>
            <p>
              Founded by a team of passionate engineers and environmental advocates, Siva Renew started with a clear vision: to bridge the gap between India's growing energy needs and sustainable solutions. Our journey began with small residential installations and has quickly grown to serve commercial and industrial clients across multiple states.
            </p>
            <p>
              We believe in providing end-to-end solar solutions that are tailored to each client's unique needs. From initial consultation and site assessment to design, installation, and ongoing support, we ensure a seamless transition to clean energy.
            </p>
          </div>
          <div className="column-image">
            <img src="https://images.unsplash.com/photo-1519124327891-7a3cf4e5c8c5" alt="Solar Engineering" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" ref={valuesRef}>
        <div className="services-container">
          <h2>What We Do</h2>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">🏠</div>
              <h3>Residential Solar</h3>
              <p>Customized solar solutions for homes and apartments, helping families reduce electricity bills and achieve energy independence.</p>
            </div>
            <div className="service-item">
              <div className="service-icon">🏢</div>
              <h3>Commercial Solar</h3>
              <p>Efficient solar systems for businesses and offices, designed to maximize ROI and enhance corporate sustainability profiles.</p>
            </div>
            <div className="service-item">
              <div className="service-icon">🏭</div>
              <h3>Industrial Solar</h3>
              <p>Large-scale solar installations for industries and manufacturing facilities, reducing operational costs and carbon footprint.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section" ref={teamRef}>
        <div className="values-container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-number">01</div>
              <h3>Quality First</h3>
              <p>We never compromise on quality, using only premium materials and following industry best practices for every installation.</p>
            </div>
            <div className="value-item">
              <div className="value-number">02</div>
              <h3>Customer Focus</h3>
              <p>Our clients are at the heart of everything we do. We listen, understand, and deliver solutions that truly meet their needs.</p>
            </div>
            <div className="value-item">
              <div className="value-number">03</div>
              <h3>Innovation</h3>
              <p>We continuously explore new technologies and methods to improve efficiency and deliver better solar solutions.</p>
            </div>
            <div className="value-item">
              <div className="value-number">04</div>
              <h3>Sustainability</h3>
              <p>We're committed to environmental responsibility in every project, helping create a cleaner, greener future for generations to come.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <h2>Why Choose Siva Renew?</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">✓</div>
              <h3>Expert Team</h3>
              <p>Certified solar professionals with extensive experience in design and installation</p>
            </div>
            <div className="why-item">
              <div className="why-icon">✓</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing without compromising on quality or service</p>
            </div>
            <div className="why-item">
              <div className="why-icon">✓</div>
              <h3>25-Year Warranty</h3>
              <p>Long-term warranty and support for peace of mind</p>
            </div>
            <div className="why-item">
              <div className="why-icon">✓</div>
              <h3>Custom Solutions</h3>
              <p>Tailored designs to meet your specific energy requirements</p>
            </div>
            <div className="why-item">
              <div className="why-icon">✓</div>
              <h3>End-to-End Service</h3>
              <p>Complete support from consultation to maintenance</p>
            </div>
            <div className="why-item">
              <div className="why-icon">✓</div>
              <h3>Fast Installation</h3>
              <p>Quick and efficient installation process with minimal disruption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Go Solar?</h2>
          <p>Join hundreds of satisfied customers who have made the switch to clean, renewable energy with Siva Renew.</p>
          <button className="cta-button">Get Free Consultation</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;

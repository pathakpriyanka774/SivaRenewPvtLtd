import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <Navbar />

      <section className="about-banner">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=80"
          alt="Solar panel field"
          className="about-banner-image"
        />
        <div className="about-banner-overlay">
          <div className="about-banner-content">

          </div>
        </div>
      </section>

      <section className="about-content-section">
        <div className="about-content-wrap">
          <div className="about-intro">
            <h2>Who are we?</h2>
            <p>
              Brightening lives across India, Siva Renew delivers practical and reliable solar energy solutions for homes, businesses, and industries.
            </p>
            <p>
              We are focused on helping organizations and families move toward cleaner power through quality engineering, transparent project execution, and long-term service support.
            </p>
            <p>
              From system design and procurement to installation and maintenance, our team works end-to-end to build solutions that reduce electricity costs and improve energy independence.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Our Mission</h3>
              <p>
                Make renewable energy affordable, dependable, and easy to adopt for every segment of society.
              </p>
            </div>
            <div className="highlight-card">
              <h3>Our Approach</h3>
              <p>
                Blend technical depth, quality components, and responsive support to deliver measurable outcomes.
              </p>
            </div>
            <div className="highlight-card">
              <h3>Our Commitment</h3>
              <p>
                Build long-term partnerships through on-time delivery, honest communication, and strong after-sales care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;

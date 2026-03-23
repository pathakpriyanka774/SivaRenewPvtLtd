import React from "react";
import "../css/testimonials.css";

function Testimonials() {
  return (
    <section className="solar-info-section">
      <div className="solar-image-wrapper">
        <img
          src="/images/solar-banner.jpg"
          alt="Solar Installation"
          className="solar-image"
        />

        <div className="solar-hero-content container">
          <p className="solar-kicker">Green Power. Smart Savings.</p>
          <h2 className="section-title">Power Your Home with Solar Energy</h2>
          <p className="solar-hero-subtitle">
            A cleaner source of electricity designed for long-term value and reliable day-to-day performance.
          </p>
        </div>
      </div>

      <div className="solar-content container">
        <div className="solar-copy-grid">
          <p className="section-description section-description-lead">
            Solar energy is a practical way to lower monthly electricity bills while making better use of your rooftop space. By converting sunlight into clean electricity, your home or business can reduce dependence on conventional power and move toward long-term energy stability.
          </p>

          <p className="section-description">
            From site evaluation and system design to installation and support, our team explains each step in clear language so you can make confident decisions.
          </p>

          <p className="section-description">
            Whether you are a homeowner, shop owner, or running a small business, we focus on reliable systems, honest guidance, and outcomes that fit your actual needs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
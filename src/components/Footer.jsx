import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>
      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>
      <div className="footer-particles" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="footer-container">
        <div className="footer-top">
          <h2>Powering A Cleaner Tomorrow</h2>
          <p>End-to-end solar solutions for residential, commercial, and industrial energy needs.</p>
        </div>

        <div className="footer-content">
          <div className="footer-brand">
            <h3>Siva Renew</h3>
            <p className="tagline">Clean Energy For A Sustainable Future</p>
            <p className="brand-copy">
              We design and deliver dependable solar systems with strong engineering, transparent execution, and responsive support.
            </p>
          </div>

          <div className="footer-info">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <div className="quick-links">
                <Link to="/" className="link">Home</Link>
                <Link to="/about" className="link">About Us</Link>
                <a href="#services" className="link">Services</a>
                <a href="#projects" className="link">Projects</a>
                <Link to="/contact" className="link">Contact</Link>
              </div>
            </div>

            <div className="footer-section">
              <h4>Solutions</h4>
              <div className="quick-links">
                <Link to="/solutions/residential-solar" className="link">Residential Solar</Link>
                <Link to="/solutions/commercial-solar" className="link">Commercial Solar</Link>
                <Link to="/solutions/industrial-solar" className="link">Industrial Solar</Link>
                <Link to="/solutions/solar-epc" className="link">Solar EPC</Link>
                <Link to="/solutions/energy-storage" className="link">Energy Storage</Link>
              </div>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <div className="contact-list">
                <div className="contact-item">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Sector 63 H-block Noida Uttar Pradesh</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Phone</span>
                  <a href="tel:8800107293" className="contact-value">+91 88001 07293</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Email</span>
                  <a href="mailto:info@Sivarenew.com" className="contact-value">info@Sivarenew.com</a>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Siva Renew Pvt Ltd. All rights reserved.</p>
          <p className="footer-bottom-note">Built for energy savings, sustainability, and long-term reliability.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
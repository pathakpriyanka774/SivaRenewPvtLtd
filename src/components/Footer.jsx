import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Siva Renew</h3>
            <p className="tagline">Clean Energy For A Sustainable Future</p>
          </div>
          
          <div className="footer-info">
            <div className="footer-section">
              <h4>Address</h4>
              <div className="address-info">
                <p className="address">
                  <span className="icon">📍</span>
                  Sector 63, Noida
                </p>
                <p className="metro-info">
                  <span className="icon">🚇</span>
                  Nearest Metro Station: Electronic City (Blue Line)
                </p>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Contact Details</h4>
              <div className="contact-info">
                <p className="phone">
                  <span className="icon">📞</span>
                  <a href="tel:8800107293">8800107293</a>
                </p>
                <p className="email">
                  <span className="icon">✉️</span>
                  <a href="mailto:info@Sivarenew.com">info@Sivarenew.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 Siva Renew Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
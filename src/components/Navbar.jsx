import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import logo2 from "../assets/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Handle hash scrolling on page load
  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const targetId = location.hash;
      setTimeout(() => {
        handleSmoothScroll(targetId);
      }, 300);
    }
  }, [location.hash, location.pathname]);

  const handleSmoothScroll = (targetId) => {
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (path.startsWith('/#')) {
      const targetId = path.substring(1);
      
      if (location.pathname !== '/') {
        // Navigate to home with hash, then scroll after component mounts
        navigate('/');
        setTimeout(() => {
          handleSmoothScroll(targetId);
        }, 100);
      } else {
        // Already on home page, just scroll
        handleSmoothScroll(targetId);
      }
    } else {
      navigate(path);
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={navbarRef}>

      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo animate-fade-in">
          <img src={logo2} alt="Siva Renew logo" className="logo-image" />
        </Link>

        {/* Navigation Links */}
        <nav className={`nav-container ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><a href="#solutions" onClick={(e) => handleNavClick(e, '/#solutions')} className="nav-link">Solutions</a></li>
            <li><a href="#projects" onClick={(e) => handleNavClick(e, '/#projects')} className="nav-link">Projects</a></li>
            <li><a href="#calculator" onClick={(e) => handleNavClick(e, '/#calculator')} className="nav-link">Calculator</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, '/#contact')} className="nav-link">Contact</a></li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="cta-container animate-fade-in">
          <a href="#contact" onClick={(e) => handleNavClick(e, '/#contact')} className="quote-btn">
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </header>
  );
}

export default Navbar;
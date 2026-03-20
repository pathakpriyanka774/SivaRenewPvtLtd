import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import logo2 from "../assets/logdesign.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
    setActiveDropdown(null);
    
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

  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleDropdownClick = (e, path) => {
    e.preventDefault();
    setActiveDropdown(null);
    navigate(path);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={navbarRef}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-content">
            <img src={logo2} alt="Siva Renew logo" className="logo-image" />
           
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className={`nav-container ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links">
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => handleDropdownToggle('company')}
              >
                Company
                <span className="dropdown-arrow"></span>
              </button>
              <div className={`dropdown-menu ${activeDropdown === 'company' ? 'show' : ''}`}>
                <Link to="/about" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/about')}>About Us</Link>
                <Link to="/team" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/team')}>Our Team</Link>
                <Link to="/careers" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/careers')}>Careers</Link>
              </div>
            </li>
            
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => handleDropdownToggle('business')}
              >
                Group Business
                <span className="dropdown-arrow"></span>
              </button>
              <div className={`dropdown-menu ${activeDropdown === 'business' ? 'show' : ''}`}>
                <Link to="/solutions/residential-solar" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/solutions/residential-solar')}>Residential Solar</Link>
                <Link to="/solutions/commercial-solar" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/solutions/commercial-solar')}>Commercial Solar</Link>
                <Link to="/solutions/industrial-solar" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/solutions/industrial-solar')}>Industrial Solar</Link>
              </div>
            </li>
            
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => handleDropdownToggle('product')}
              >
                Product
                <span className="dropdown-arrow"></span>
              </button>
              <div className={`dropdown-menu ${activeDropdown === 'product' ? 'show' : ''}`}>
                <Link to="/solutions/solar-epc" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/solutions/solar-epc')}>Solar EPC</Link>
                <Link to="/solutions/energy-storage" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/solutions/energy-storage')}>Energy Storage</Link>
                <Link to="/solutions/solar-maintenance" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/solutions/solar-maintenance')}>Solar Maintenance</Link>
              </div>
            </li>
            
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => handleDropdownToggle('solutions')}
              >
                Solutions
                <span className="dropdown-arrow"></span>
              </button>
              <div className={`dropdown-menu ${activeDropdown === 'solutions' ? 'show' : ''}`}>
                <a href="#solutions" onClick={(e) => handleNavClick(e, '/#solutions')} className="dropdown-item">Solar Solutions</a>
                <a href="#projects" onClick={(e) => handleNavClick(e, '/#projects')} className="dropdown-item">Our Projects</a>
                <a href="#calculator" onClick={(e) => handleNavClick(e, '/#calculator')} className="dropdown-item">Solar Calculator</a>
              </div>
            </li>
            
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => handleDropdownToggle('investor')}
              >
                Investor
                <span className="dropdown-arrow"></span>
              </button>
              <div className={`dropdown-menu ${activeDropdown === 'investor' ? 'show' : ''}`}>
                <Link to="/investor-relations" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/investor-relations')}>Investor Relations</Link>
                <Link to="/financial-reports" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/financial-reports')}>Financial Reports</Link>
                <Link to="/sustainability" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/sustainability')}>Sustainability</Link>
              </div>
            </li>
            
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => handleDropdownToggle('people')}
              >
                People
                <span className="dropdown-arrow"></span>
              </button>
              <div className={`dropdown-menu ${activeDropdown === 'people' ? 'show' : ''}`}>
                <Link to="/leadership" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/leadership')}>Leadership Team</Link>
                <Link to="/culture" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/culture')}>Company Culture</Link>
                <Link to="/diversity" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/diversity')}>Diversity & Inclusion</Link>
              </div>
            </li>
            
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => handleDropdownToggle('network')}
              >
                Network
                <span className="dropdown-arrow"></span>
              </button>
              <div className={`dropdown-menu ${activeDropdown === 'network' ? 'show' : ''}`}>
                <Link to="/partners" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/partners')}>Our Partners</Link>
                <Link to="/distributors" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/distributors')}>Distributors</Link>
                <Link to="/contact" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/contact')}>Contact Us</Link>
              </div>
            </li>
          </ul>
        </nav>

        {/* Right Side Actions */}
        <div className="nav-actions">
          <button className="action-btn dms-btn">
            <span>DMS</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2L8 6L4 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button className="action-btn cart-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" fill="white"/>
              <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" fill="white"/>
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button className="action-btn search-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
              <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
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
      </div>
    </header>
  );
}

export default Navbar;
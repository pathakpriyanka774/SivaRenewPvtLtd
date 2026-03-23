import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import logo2 from "../assets/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navbarRef = useRef(null);
  const searchRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const searchItems = [
    { label: "About Us", path: "/about", type: "Company" },
    { label: "Residential Solar", path: "/solutions/residential-solar", type: "Service" },
    { label: "Commercial Solar", path: "/solutions/commercial-solar", type: "Service" },
    { label: "Industrial Solar", path: "/solutions/industrial-solar", type: "Service" },
    { label: "Solar EPC", path: "/solutions/solar-epc", type: "Service" },
    { label: "Solar Maintenance", path: "/solutions/solar-maintenance", type: "Service" },
    { label: "Solar Products", path: "/solar-products", type: "Products" },
    { label: "Investor Relations", path: "/investor-relations", type: "Investor" },
    { label: "Sustainability", path: "/sustainability", type: "Investor" },
    { label: "Partners", path: "/partners", type: "Network" },
    { label: "Distributors", path: "/distributors", type: "Network" },
    { label: "Contact Us", path: "/contact", type: "Network" },
    { label: "Solar Calculator", path: "/#calculator", type: "Tools" },
    { label: "Our Projects", path: "/#projects", type: "Solutions" },
    { label: "Solar Solutions", path: "/#solutions", type: "Solutions" }
  ];

  const filteredSearchResults = searchItems
    .filter((item) => item.label.toLowerCase().includes(searchQuery.toLowerCase().trim()))
    .slice(0, 8);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscClose);
    };
  }, []);

  const findFirstOnPage = (query) => {
    if (!query) {
      return false;
    }

    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
    }

    return window.find(query, false, false, true, false, false, false);
  };

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

  const navigateToPath = (path) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setSearchOpen(false);
    setSearchQuery("");
    
    if (path.startsWith('/#')) {
      const targetId = path.substring(1);
      
      if (location.pathname !== '/') {
        // Navigate to home with hash, then scroll after component mounts
        navigate('/');
        setTimeout(() => {
          handleSmoothScroll(targetId);
        }, 150);
      } else {
        // Already on home page, just scroll
        handleSmoothScroll(targetId);
      }
    } else {
      navigate(path);
    }
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    navigateToPath(path);
  };

  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleDropdownClick = (e, path) => {
    e.preventDefault();
    navigateToPath(path);
  };

  const handleDirectLinkClick = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setSearchOpen(false);
    setSearchQuery("");
  };

  const handleFindOnPage = () => {
    const query = searchQuery.trim();

    if (!query) {
      return;
    }

    const found = window.find(query, false, false, true, false, false, false);

    if (!found) {
      window.alert("No matching text found on this page.");
    }
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
                {/* <Link to="/team" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/team')}>Our Team</Link> */}

                {/* <Link to="/careers" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/careers')}>Careers</Link> */}
              </div>
            </li>
            
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => handleDropdownToggle('business')}
              >
                Solar Services
                <span className="dropdown-arrow"></span>
              </button>
              <div className={`dropdown-menu ${activeDropdown === 'business' ? 'show' : ''}`}>
                <Link to="/solutions/residential-solar" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/solutions/residential-solar')}>Residential Solar</Link>
                <Link to="/solutions/commercial-solar" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/solutions/commercial-solar')}>Commercial Solar</Link>
                <Link to="/solutions/industrial-solar" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/solutions/industrial-solar')}>Industrial Solar</Link>
                <Link to="/solutions/solar-epc" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/solutions/solar-epc')}>Solar EPC</Link>
                {/* <Link to="/solutions/energy-storage" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/solutions/energy-storage')}>Energy Storage</Link> */}
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

            <li className="nav-item">
              <Link to="/solar-products" className="nav-link" onClick={handleDirectLinkClick}>
                Solar Products
              </Link>
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
                {/* <Link to="/financial-reports" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/financial-reports')}>Financial Reports</Link> */}
                <Link to="/sustainability" className="dropdown-item" onClick={(e) => handleDropdownClick(e, '/sustainability')}>Sustainability</Link>
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
          <Link to="/contact" className="action-btn dms-btn" onClick={handleDirectLinkClick}>
            <span>GET DEMO</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2L8 6L4 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          
          {/* <button className="action-btn cart-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" fill="white"/>
              <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" fill="white"/>
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
           */}
          <div className="nav-search" ref={searchRef}>
            <button
              className="action-btn search-btn"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="Open search"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
                <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {searchOpen && (
              <div className="nav-search-panel">
                <input
                  type="text"
                  className="nav-search-input"
                  placeholder="Search services, pages..."
                  value={searchQuery}
                  onChange={(e) => {
                    const nextQuery = e.target.value;
                    setSearchQuery(nextQuery);

                    if (nextQuery.trim()) {
                      findFirstOnPage(nextQuery.trim());
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleFindOnPage();
                    }
                  }}
                  autoFocus
                />

                <div className="nav-search-tools">
                  <button
                    type="button"
                    className="nav-find-btn"
                    onClick={handleFindOnPage}
                  >
                    Find on this page
                  </button>
                  <span className="nav-search-hint">Press Enter to find next</span>
                </div>

                <div className="nav-search-results">
                  {filteredSearchResults.length > 0 ? (
                    filteredSearchResults.map((item) => (
                      <button
                        key={item.path}
                        type="button"
                        className="nav-search-result"
                        onClick={() => navigateToPath(item.path)}
                      >
                        <span>{item.label}</span>
                        <small>{item.type}</small>
                      </button>
                    ))
                  ) : (
                    <p className="nav-search-empty">No matching results</p>
                  )}
                </div>
              </div>
            )}
          </div>
          
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
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/services.css";
import residential from "../assets/images/Residential.png";
import industrialSolar from "../assets/images/industrialSolar.png";
import maintenace from "../assets/images/maintenance.png";
import storage from "../assets/images/storage.png";

function Services() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

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

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) observer.unobserve(currentSectionRef);
    };
  }, []);

  const handleExplore = (serviceType) => {
    navigate(`/solutions/${serviceType.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const solutions = [
    {
      title: "Residential Solar",
      subtitle: "Power Your Home",
      description: "Transform your home into an energy-independent powerhouse with our cutting-edge solar solutions.",
      icon: "⚡",
      image: residential,
      features: ["70% Bill Reduction", "Smart Monitoring"]
    },
    {
      title: "Commercial Solar", 
      subtitle: "Grow Your Business",
      description: "Elevate your business with sustainable energy solutions that drive profitability and environmental responsibility.",
      icon: "🏢",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
      features: [ "Brand Enhancement", "Zero Downtime"]
    },
    {
      title: "Industrial Solar",
      subtitle: "Scale Your Industry", 
      description: "Power large-scale operations with unlimited clean energy designed for industrial demands.",
      icon: "🏭",
      image: industrialSolar,
      features: ["Unlimited Power", "24/7 Support"]
    },
    {
      title: "Solar EPC",
      subtitle: "Engineering Excellence",
      description: "Complete Engineering, Procurement, and Construction services for utility-scale solar projects with industry-leading expertise.",
      icon: "⚙️",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=250&fit=crop",
      features: ["Quality Assurance", "Timeline Delivery"]
    },
    {
      title: "Energy Storage",
      subtitle: "Store Your Power",
      description: "Maximize your energy independence with advanced battery storage solutions for round-the-clock power availability.",
      icon: "🔋",
      image: storage,
      features: ["24/7 Power Backup", "Smart Energy Management"]
    },
    {
      title: "Solar Maintenance",
      subtitle: "Optimize Performance",
      description: "Keep your solar investment performing at peak efficiency with our comprehensive maintenance and monitoring services.",
      icon: "🔧",
      image: maintenace,
      features: ["Regular Inspections", "Emergency Support"]
    }
  ];

  return (
    <section className="solar-solutions" id="solutions">
      <div className="container">
        <div ref={sectionRef} className="section-header animate-fade-in">
          <h2>Renewable <span className="highlight">Energy Services</span></h2>
          <p>Empowering every space with sustainable energy innovation</p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="solution-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-header">
                <div className="icon-container">
                  <span className="icon">{solution.icon}</span>
                </div>
                <div className="header-content">
                  <h3>{solution.title}</h3>
                  <p className="subtitle">{solution.subtitle}</p>
                </div>
              </div>

              <div className="card-image">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="solution-image"
                />
              </div>

              <div className="card-body">
                <p className="description">{solution.description}</p>
                
                <div className="features-list">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <div className="check-icon">✓</div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="explore-btn"
                  onClick={() => handleExplore(solution.title)}
                >
                  Explore Solution
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
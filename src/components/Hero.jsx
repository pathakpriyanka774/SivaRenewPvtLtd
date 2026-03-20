import React, { useState, useEffect } from "react";
import "../css/Hero.css";
import hero1 from "../assets/images/hero1.jpeg";
import hero2 from "../assets/images/hero2.jpeg";
import hero3 from "../assets/images/hero3.png";
import wind from "../assets/images/wind.png";
import hero4 from "../assets/images/hero4.png";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const heroContent = [
    {
      title: "SHIVA RENEW SOLAR ROOFTOP",
      subtitle: "POWERING THE ROOFS",
      metric: "1.6 GWP",
      buttonText: "KNOW MORE",
      isTataSlide: true,
      bgImage: hero1
    },
    {
      title: "Stop Paying Electricity Bills!",
      highlight: "Go Solar Today",
      description: "Generate your own FREE electricity at home - save up to ₹90,000 every year with solar power!",
      bgImage: hero2
    },
    {
      title: "Government Gives You 40% Money Back",
      highlight: "Limited Time Offer",
      description: "Install solar with just 60% cost - government pays the rest! We handle all paperwork for FREE.",
      bgImage: hero3
    },
    {
      title: "Your Roof Can Earn Money!",
      highlight: "Sell Extra Power",
      description: "Sell unused electricity back to the grid - your home becomes a money-making machine for 25 years!",
      bgImage: hero3
    },
    {
      title: "Harvest the Wind, Grow Your Wealth!",
      highlight: "High-Yield Passive Income",
      description: "Turn your open land into a powerhouse! Generate massive clean energy and enjoy steady returns by feeding the national grid for decades.",
      bgImage: wind
    },
    {
      title: "Powering a Greener Tomorrow, Together.",
      highlight: "Integrated Renewable Solutions",
      description: "From industrial wind farms to residential solar, we provide a 360-degree ecosystem of clean energy. Maximize your efficiency and ROI with India's most versatile renewable power partner.",
      bgImage: hero4
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroContent.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroContent.length]);

  const handleSlideChange = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 500);
  };

  const current = heroContent[currentSlide];

  return (
    <>
      <LeftSidebar currentSlide={currentSlide} onSlideChange={handleSlideChange} />
      <RightSidebar />
      <section 
        className="hero" 
        id="home"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(5, 22, 45, 0.7), rgba(10, 77, 140, 0.6)),
            url("${current.bgImage}")
          `
        }}
      >
        <div className="hero-overlay">
          <div className={`hero-content ${isAnimating ? 'fade-out' : 'fade-in'}`}>
            {current.isTataSlide ? (
              <>
                <h1>{current.title}</h1>
                <h2>{current.subtitle}</h2>
                <div className="hero-metric">{current.metric}</div>
                <button className="hero-cta">{current.buttonText}</button>
              </>
            ) : (
              <>
                <h1>
                  {current.title} <span>{current.highlight}</span>
                </h1>
                <p>
                  {current.description}
                </p>
                <div className="hero-buttons">
                  <button className="hero-btn-primary">
                    Calculate My Savings
                  </button>
                  <a href="#contact" className="hero-btn-secondary">
                    Get Free Consultation
                  </a>
                </div>
              </>
            )}
          </div>
          
          <div className="hero-indicators">
            {heroContent.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => handleSlideChange(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
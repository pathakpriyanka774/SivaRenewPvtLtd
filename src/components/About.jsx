import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/About.css";

function About() {
  const navigate = useNavigate();
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

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

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <section className="about-section" id="about" ref={aboutRef}>

      <div className="about-container">

        {/* Left Image */}
        <div className="about-image animate-slide-left" ref={imageRef}>
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
            alt="Solar Panels"
          />
 <div className="about-stats">

            <div className="stat-box">
              <h3>500+</h3>
              <p>Installations</p>
            </div>

            <div className="stat-box">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>

            <div className="stat-box">
              <h3>25 Years</h3>
              <p>Panel Warranty</p>
            </div>

          </div>

          <button className="about-btn" onClick={handleLearnMore}>
            Learn More
          </button>

        
        </div>

        {/* Right Content */}
        <div className="about-content animate-slide-right" ref={contentRef}>

          <h2>🌱 Who We Are?</h2>

          <p>
            Siva Renew Pvt. Ltd. is a forward-thinking renewable energy company committed to driving India’s transition towards a cleaner, greener, and more sustainable future.
          </p>

          <p>
           At Siva Renew, we specialize in end-to-end solar energy services, including design, engineering, procurement, installation, and monitoring of solar power systems for residential, commercial, and industrial applications. Our solutions are built to maximize energy efficiency, reduce operational costs, and contribute to environmental sustainability.
          </p>
          <p>
           With the growing demand for renewable energy in India, we actively participate in and execute government and private renewable energy tenders, helping organizations adopt clean energy at scale. Our approach combines technical expertise, quality execution, and transparent processes, ensuring that every project meets the highest industry standards.
          </p>
          <p>
           By leveraging modern technology and smart monitoring systems, we empower our clients to track performance, optimize usage, and achieve long-term energy independence.
          </p>
         <p>Our mission is simple yet powerful:
        <b>👉 To make renewable energy accessible, affordable, and reliable for every segment of society.</b>

       At Siva Renew Pvt. Ltd., we are not just installing solar panels—we are building a sustainable tomorrow.</p>
         

      </div>
      </div>

    </section>
  );
}

export default About;
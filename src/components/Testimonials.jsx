import React from "react";
import "../css/testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      text: "Siva Renew helped us reduce our electricity cost by 60%. Highly professional installation team and excellent after-sales support.",
      author: "Industrial Client",
      company: "Manufacturing Plant",
      rating: 5,
      image: "🏭"
    },
    {
      text: "Best investment decision for our business. The solar system exceeded our expectations and ROI was achieved in just 3 years.",
      author: "Commercial Client", 
      company: "Tech Park",
      rating: 5,
      image: "🏢"
    },
    {
      text: "Outstanding service from consultation to installation. The team was knowledgeable and completed the project on time.",
      author: "Residential Client",
      company: "Home Owner",
      rating: 5,
      image: "🏠"
    },
    
  ];
 
  return (
    <section className="testimonials">
      <div className="container">
                <div  className="section-header animate-fade-in">
          <h2>What Our <span className="highlight-black">Clients Say</span></h2>
           <p>Trusted by businesses and homes across India</p>
        </div>
       
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="client-image">{testimonial.image}</div>
                <div className="client-info">
                  <h4>{testimonial.author}</h4>
                  <p className="company">{testimonial.company}</p>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
              </div>
              <div className="testimonial-footer">
                <div className="quote-icon">❝</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
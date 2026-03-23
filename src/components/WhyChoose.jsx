import React, { useEffect, useRef } from "react";
import "../css/whychoose.css";

function WhyChoose() {

  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

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

    // Observe section title
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe cards with staggered delay
    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        setTimeout(() => {
          observer.observe(ref);
        }, index * 100);
      }
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

 const features = [
  {
    title: "Save on Electricity Bills",
    desc: "Installing solar can help reduce your monthly electricity expenses over time and support your household savings.",
    icon: "💰",
    color: "#10b981"
  },
  {
    title: "Government Subsidy Support",
    desc: "We guide you through the government subsidy process and help you understand the steps involved.",
    icon: "🏛️",
    color: "#8b5cf6"
    },
    {
    title: "24×7 Customer Support",
    desc: "Our team is available anytime to assist you with your queries, service needs, or guidance.",
    icon: "📞",
    color: "#ef4444"
  },
  {
    title: "Reliable & Long-Lasting System",
    desc: "Solar systems are designed for long-term use and can perform efficiently with proper care and maintenance.",
    icon: "🛡️",
    color: "#f59e0b"
  },
  {
    title: "Make Use of Extra Power",
    desc: "If your system generates extra electricity, you may benefit through net metering as per local policies.",
    icon: "⚡",
    color: "#fbbf24"
  },
  {
    title: "Complete End-to-End Service",
    desc: "From site visit to installation and basic guidance, we support you at every step of your solar journey.",
    icon: "🤝",
    color: "#3b82f6"
  }
];

  return (
    <section className="whychoose" id="whychoose">

      <h2 ref={sectionRef} className="section-title animate-slide-down">
       <span className="highlight-black">Why Choose Siva Renew</span>
      </h2>

      <div className="whychoose-grid">

        {features.map((feature, index) => (
          <div 
            key={index} 
            className="why-card animate-fade-up"
            ref={(el) => cardRefs.current[index] = el}
            style={{ '--card-color': feature.color }}
          >

            <div className="icon-wrapper">
              <div className="icon">{feature.icon}</div>
              <div className="icon-bg"></div>
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.desc}</p>

            <div className="card-hover-effect"></div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyChoose;
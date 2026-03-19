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
      title: "Save Money Every Month",
      desc: "Reduce your electricity bills by up to 90% with solar power - more savings for your family!",
      icon: "💰",
      color: "#10b981"
    },
     {
      title: "Government Money Support",
      desc: "Get up to 40% subsidy from government - we handle all paperwork for you!",
      icon: "🏛️",
      color: "#8b5cf6"
    },
    {
      title: "24*7 Customer Support",
      desc: "We're always here for you! Call us anytime day or night for help and guidance.",
      icon: "�",
      color: "#ef4444"
    },
    {
      title: "25 Years Guarantee",
      desc: "Your solar panels work for 25+ years - we promise quality that lasts a lifetime!",
      icon: "🛡️",
      color: "#f59e0b"
    },
    
    {
      title: "Earn From Your Solar",
      desc: "Sell extra electricity back to grid - your roof becomes a money-making machine!",
      icon: "�",
      color: "#fbbf24"
    },
    {
      title: "One Complete Solution",
      desc: "From first visit to final connection - we take care of everything, no tension for you!",
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
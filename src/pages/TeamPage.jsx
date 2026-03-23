import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/TeamPage.css";

function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Raj Kumar",
      role: "Founder & CEO",
      bio: "Visionary leader with 15+ years in renewable energy sector.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=60",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Chief Technology Officer",
      bio: "Expert in solar engineering and system optimization with 12+ years experience.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=60",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Arun Patel",
      role: "Operations Director",
      bio: "Ensures flawless project delivery and customer satisfaction across all regions.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=60",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "Neha Singh",
      role: "Head of Sales",
      bio: "Drives business growth and builds lasting relationships with clients.",
      image: "https://images.unsplash.com/photo-1507495341519-bd8e7e7e5e9d?auto=format&fit=crop&w=500&q=60",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "Vikram Desai",
      role: "Finance Manager",
      bio: "Manages financial strategy and ensures sustainable business growth.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=60",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 6,
      name: "Anjali Verma",
      role: "Customer Success Lead",
      bio: "Dedicated to providing excellent support and long-term client satisfaction.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=60",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <div className="team-page">
      <Navbar />

      <section className="team-banner">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80"
          alt="Team collaboration"
          className="team-banner-image"
        />
        <div className="team-banner-overlay">
          <div className="team-banner-content">
            <h1>Meet Our Team</h1>
            <p>Passionate experts dedicated to renewable energy solutions</p>
          </div>
        </div>
      </section>

      <section className="team-intro-section">
        <div className="team-intro-wrap">
          <div className="team-intro-text">
            <h2>Our Expert Team</h2>
            <p>
              At Siva Renew, we are a diverse team of engineers, entrepreneurs, and customer advocates united by a shared mission to make clean energy accessible to everyone.
            </p>
            <p>
              With deep expertise in solar technology, project management, and customer service, we deliver solutions that truly make a difference.
            </p>
          </div>
        </div>
      </section>

      <section className="team-members-section">
        <div className="team-members-container">
          <h2>Leadership Team</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-card-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-card-overlay">
                    <div className="team-social-links">
                      <a href={member.social.linkedin} className="social-link linkedin" title="LinkedIn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                        </svg>
                      </a>
                      <a href={member.social.twitter} className="social-link twitter" title="Twitter">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.953 4.57a10 10 0 002.856-9.86 9.964 9.964 0 01-2.866.36c-1.395.195-2.464-.645-2.776-2.238m5.592 6.327a19.986 19.986 0 01-1.08 3.930 11.9 11.9 0 01-1.949 2.783c2.125-4.073 3.441-8.765 2.455-14.287M2.706 11.338C1.106 8.542 0 5.214 0 1.577 0 .947.026.322.075.707a10 10 0 002.85 9.86 9.964 9.964 0 002.766-2.237 19.965 19.965 0 001.08-3.93"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-card-content">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-values-section">
        <div className="team-values-wrap">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Excellence</h3>
              <p>We pursue the highest standards in everything we do, from product quality to customer service.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>We conduct our business with honesty, transparency, and strong ethical principles.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>We continuously innovate to deliver better solutions and stay ahead of market trends.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We are committed to building a greener future through renewable energy leadership.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TeamPage;

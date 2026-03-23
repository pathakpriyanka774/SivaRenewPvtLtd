import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/ContactPage.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailTo = "info@shiva-renew.com";
    const gmailSubject = formData.subject || "New enquiry from website";
    const gmailBody = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || "N/A"}`,
      "",
      "Message:",
      formData.message
    ].join("\n");

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailTo)}&su=${encodeURIComponent(gmailSubject)}&body=${encodeURIComponent(gmailBody)}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Phone",
      details: ["+91 9876 543 210", "+91 9876 543 211"],
      link: "tel:+919876543210"
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["info@sivarenew.com", "support@sivarenew.com"],
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=info@sivarenew.com"
    },
    {
      icon: "📍",
      title: "Address",
      details: ["Sector 63, H-block, Noida, Uttar Pradesh"],
      link: "#"
    },
    {
      icon: "🕐",
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sun: Closed"],
      link: "#"
    }
  ];

  return (
    <div className="contact-page">
      <Navbar />

      <section className="contact-banner">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80"
          alt="Contact us"
          className="contact-banner-image"
        />
        <div className="contact-banner-overlay">
          <div className="contact-banner-content">
            <h1>Get In Touch</h1>
            <p>We're here to help and answer any question you might have</p>
          </div>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="contact-info-container">
          <h2>Contact Information</h2>
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <a key={index} href={info.link} className="contact-info-card">
                <div className="contact-info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-form-section" id="contact-form">
        <div className="contact-form-container">
          <div clGassName="form-content">
            <h2>Send Us a Message</h2>
            <p>Have a question or want to discuss a project? Fill out the form below and we'll get back to you as soon as possible.</p>

            {submitted && (
              <div className="success-message">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Thank you for your message! We'll be in touch soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          <div className="map-container">
            <iframe
              title="Siva Renew Location"
              src="https://www.google.com/maps?q=H-Block%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh&output=embed"
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="contact-cta-section">
        <div className="contact-cta-wrap">
          <h2>Still Have Questions?</h2>
          <p>Our team is available 24/7 to support you. Don't hesitate to reach out!</p>
          <div className="cta-buttons">
            <a href="tel:+919876543210" className="cta-btn primary">Call Us Now</a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@shiva-renew.com"
              className="cta-btn secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactPage;

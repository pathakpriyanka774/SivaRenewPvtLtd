import React, { useEffect, useState } from "react";
import "../css/ContactPopup.css";

function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("contact-popup-seen");
    console.log("Popup seen status:", hasSeenPopup);

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        console.log("Timer triggered - showing popup");
        setIsOpen(true);
        sessionStorage.setItem("contact-popup-seen", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }

    return undefined;
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailTo = "info@sivarenew.com";
    const gmailSubject = "New callback request from Talk To Our Solar Expert";
    const gmailBody = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailTo)}&su=${encodeURIComponent(gmailSubject)}&body=${encodeURIComponent(gmailBody)}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");

    alert("Thanks! We will contact you shortly.");
    closePopup();
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="contact-popup-overlay" role="dialog" aria-modal="true" aria-label="Contact us quick form">
      <div className="contact-popup-card">
        <button className="contact-popup-close" onClick={closePopup} aria-label="Close contact form">
          x
        </button>

        <p className="contact-popup-tag">Quick Assistance</p>
        <h3 className="contact-popup-title">Talk To Our Solar Expert</h3>
        <p className="contact-popup-subtitle">Share your details and get a call back soon.</p>

        <form className="contact-popup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            required
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Request Callback"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPopup;

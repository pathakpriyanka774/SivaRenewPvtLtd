import React, { useState } from "react";
import "../css/contact.css";
import residential from "../assets/images/Residential.png";
import commercial from "../assets/images/gujrat.png";
import industrial from "../assets/images/industrialGujrat.png";
import jaipur from "../assets/images/jaipur.png";

function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company_name: '',
    project_type: '',
    location: '',
    monthly_bill: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/api/enquiries/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Solar consultation request submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company_name: '',
          project_type: '',
          location: '',
          monthly_bill: '',
          message: ''
        });
      } else {
        alert('Failed to submit request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting request. Please try again.');
    }
  };

return(
<section className="contact" id="contact">
   <h2><span className="highlight-black">Get Solar Consultation</span></h2>
  <div className="contact-container">
    
    <div className="consultation-column">
     
      
      <div className="image-collage">
        <div className="collage-item">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=300&h=200&fit=crop" 
            alt="Solar Panels"
            className="collage-img"
          />
        </div>
        <div className="collage-item">
          <img 
            src={jaipur}
            alt="Solar Installation"
            className="collage-img"
          />
        </div>
        <div className="collage-item">
          <img 
            src={commercial}
            className="collage-img"
          />
        </div>
        <div className="collage-item">
          <img 
            src={industrial}
            className="collage-img"
          />
        </div>
      
      </div>
       <div className="collage-item">
          <img 
            src={residential}
            alt="Solar Maintenance"
            className="collage-img"
          />
        </div>
    </div>

    <div className="form-column">
      
      <form onSubmit={handleSubmit}>
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
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input 
          type="text" 
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input 
          type="text" 
          name="company_name"
          placeholder="Company Name (Optional)"
          value={formData.company_name}
          onChange={handleChange}
        />

        <select 
          name="project_type"
          value={formData.project_type}
          onChange={handleChange}
          required
        >
          <option value="">Select Project Type</option>
          <option value="residential">Residential Solar</option>
          <option value="commercial">Commercial Solar</option>
          <option value="industrial">Industrial Solar</option>
        </select>

        <input 
          type="text" 
          name="location"
          placeholder="Location/City"
          value={formData.location}
          onChange={handleChange}
        />

        <input 
          type="number" 
          name="monthly_bill"
          placeholder="Monthly Electricity Bill (₹)"
          value={formData.monthly_bill}
          onChange={handleChange}
        />

        <textarea 
          name="message"
          placeholder="Tell us about your requirements..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</section>
)

}

export default Contact
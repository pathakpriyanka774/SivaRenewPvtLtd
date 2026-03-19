import React from "react";
import "../css/process.css";
import solarSaving from "../assets/images/solarSaving.png";

function Process() {
  return (
    <section className="process">
      <div className="process-container">
        <div className="process-header">
         <h2> <span className="highlight-black">Our Installation Process</span></h2>
          <p className="process-subtitle">
            Simple 5-step process to turn your home into a money-saving solar powerhouse!
          </p>
        </div>

        <div className="process-image-container">
          <img 
            src={solarSaving} 
            alt="Solar Savings Process" 
            className="solar-saving-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Process;
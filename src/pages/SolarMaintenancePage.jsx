import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/SolarMaintenance.css";

function SolarMaintenancePage() {
  return (
    <>
      <Navbar />

      <main className="service-detail solar-maintenance">

        {/* HERO */}
        <section className="service-hero">
          <div className="hero-content">
            <h1>Solar Maintenance Services</h1>
            <p>
              Simple maintenance to keep your solar system running smoothly and
              saving you money every day.
            </p>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="service-overview">
          <div className="container">
            <h2>Keep Your Solar Running Smoothly</h2>
            <p>
              Solar system lag gaya hai, but usko maintain karna bhi utna hi zaroori hai.
              Dust, wiring issues, ya low performance — hum sab handle karte hain so that
              aapko tension lene ki zarurat na pade.
            </p>

            <div className="simple-grid">
              <div className="simple-card">
                <h3>Regular Visits</h3>
                <p>
                  Hum time to time check karte hain taaki system hamesha sahi chale.
                </p>
              </div>

              <div className="simple-card">
                <h3>Panel Cleaning</h3>
                <p>
                  Dhool mitti hata ke output improve karte hain — simple but important.
                </p>
              </div>

              <div className="simple-card">
                <h3>Quick Fix</h3>
                <p>
                  Koi problem aaye toh fast support — no delay, no confusion.
                </p>
              </div>

              <div className="simple-card">
                <h3>Performance Tracking</h3>
                <p>
                  Aapko clear idea milega kitni saving ho rahi hai.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="service-benefits">
          <div className="container">
            <h2>Why Maintenance is Important</h2>

            <div className="simple-grid">
              <div className="simple-card">
                <h3>More Electricity Saving</h3>
                <p>
                  Clean aur maintained panels zyada power generate karte hain.
                </p>
              </div>

              <div className="simple-card">
                <h3>No Unexpected Issues</h3>
                <p>
                  Choti problems pehle hi solve ho jati hain.
                </p>
              </div>

              <div className="simple-card">
                <h3>Long Life</h3>
                <p>
                  Aapka system zyada saalon tak chalega without major repair.
                </p>
              </div>

              <div className="simple-card">
                <h3>Peace of Mind</h3>
                <p>
                  System ki tension hum lete hain, aap sirf savings enjoy karo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
       

        {/* CTA */}
        <section className="service-cta">
          <div className="container">
            <h2>Ready to Improve Your Solar Performance?</h2>
            <p>
              Let us take care of your solar system so you can enjoy maximum savings
              without any stress.
            </p>

            <div className="cta-buttons">
              <button className="primary-cta">Get Free Check-up</button>
              <button className="secondary-cta">View Plans</button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default SolarMaintenancePage;
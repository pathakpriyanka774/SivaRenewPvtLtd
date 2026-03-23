import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/SolarProducts.css";

function SolarProductsPage() {
  return (
    <>
      <Navbar />

      <main className="solar-products-page">
        <section className="solar-products-hero">
          <div className="solar-products-container">
            <p className="solar-products-kicker">Solar Product Portfolio</p>
            <h1>Reliable Components for High-Performance Solar Systems</h1>
            <p>
              A solar project performs only as well as the products used in it. We provide a
              complete stack of tested components, from generation and conversion to structure
              and electrical balance-of-system accessories.
            </p>
          </div>
        </section>

        <section className="solar-products-section">
          <div className="solar-products-container">
            <h2>Photovoltaic (PV) Panels</h2>
            <p>
              PV panels convert sunlight into direct current (DC) electricity and are the core of
              every solar installation. We focus on high-efficiency modules with strong mechanical
              strength, low degradation rates, and reliable long-term output in varying weather
              conditions.
            </p>
            <ul>
              <li>High conversion efficiency for better generation per square meter.</li>
              <li>Durable build quality for long service life and reduced maintenance risk.</li>
              <li>Performance consistency supported by certified manufacturing standards.</li>
            </ul>
          </div>
        </section>

        <section className="solar-products-section alt">
          <div className="solar-products-container">
            <h2>Solar Inverters</h2>
            <p>
              Inverters convert DC power from panels into usable alternating current (AC) power for
              homes, commercial facilities, and industries. They also play a key role in monitoring,
              protection, and grid interaction.
            </p>
            <ul>
              <li>Efficient DC-to-AC conversion to reduce system losses.</li>
              <li>Smart monitoring capabilities for performance tracking and diagnostics.</li>
              <li>Integrated safety features for stable and protected operation.</li>
            </ul>
          </div>
        </section>

        <section className="solar-products-section">
          <div className="solar-products-container">
            <h2>Mounting Structures</h2>
            <p>
              Mounting structures hold PV modules securely and at the correct orientation for
              maximum energy yield. A robust structure is essential for wind resistance, easy
              installation, and long-term system integrity.
            </p>
            <ul>
              <li>Engineered for rooftop and ground-mount applications.</li>
              <li>Corrosion-resistant materials suited for long outdoor exposure.</li>
              <li>Design flexibility to support different panel layouts and site conditions.</li>
            </ul>
          </div>
        </section>

        <section className="solar-products-section alt">
          <div className="solar-products-container">
            <h2>Electrical Accessories</h2>
            <p>
              Electrical accessories complete the system and ensure safe, efficient power flow
              across all components. This includes cables, connectors, and combiner solutions that
              are selected to match project voltage, current, and safety requirements.
            </p>
            <ul>
              <li><strong>Cables:</strong> UV-resistant and low-loss cables for reliable transmission.</li>
              <li><strong>Connectors:</strong> Secure and weather-resistant connections for dependable continuity.</li>
              <li><strong>Combiners:</strong> Organized string-level integration with protection and simplified maintenance.</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default SolarProductsPage;

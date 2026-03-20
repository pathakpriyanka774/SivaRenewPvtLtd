import React, { useState } from "react";
import "../css/calculator.css";

function Calculator() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [unitCost, setUnitCost] = useState("8");
  const [billAmount, setBillAmount] = useState("");
  const [consumptionUnits, setConsumptionUnits] = useState("");
  const [rooftopArea, setRooftopArea] = useState("");
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal", "Delhi", "Chandigarh"
  ];

  const customerCategories = [
    "Residential", "Commercial", "Industrial", "Institutional", "Government"
  ];

  const handleCalculate = () => {
    if (!selectedOption || !selectedState || !selectedCategory || !unitCost) {
      alert("Please fill all required fields");
      return;
    }

    let inputValue = 0;
    if (selectedOption === "bill") {
      inputValue = parseFloat(billAmount) || 0;
    } else if (selectedOption === "consumption") {
      inputValue = parseFloat(consumptionUnits) || 0;
    } else if (selectedOption === "area") {
      inputValue = parseFloat(rooftopArea) || 0;
    }

    if (inputValue <= 0) {
      alert("Please enter a valid value");
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      let solarCapacity = 0;
      
      if (selectedOption === "bill") {
        const units = inputValue / parseFloat(unitCost);
        solarCapacity = units / 120; // 120 units per kW
      } else if (selectedOption === "consumption") {
        solarCapacity = inputValue / 120;
      } else if (selectedOption === "area") {
        solarCapacity = inputValue * 0.1; // 10 kW per 100 sq ft
      }

      const savings = inputValue * 0.8; // 80% savings estimate
      const co2Reduction = solarCapacity * 1.5; // 1.5 tons CO2 per kW

      setResult({
        capacity: solarCapacity.toFixed(2),
        savings: savings.toFixed(0),
        co2Reduction: co2Reduction.toFixed(2)
      });
      setIsCalculating(false);
    }, 2000);
  };

  const resetCalculator = () => {
    setSelectedOption("");
    setSelectedState("");
    setSelectedCategory("");
    setUnitCost("8");
    setBillAmount("");
    setConsumptionUnits("");
    setRooftopArea("");
    setResult(null);
  };

  return (
    <section className="calculator" id="calculator">
      <div className="calculator-bg-animation">
        <div className="calculator-particle"></div>
        <div className="calculator-particle"></div>
        <div className="calculator-particle"></div>
        <div className="calculator-particle"></div>
      </div>
      
      <div className="calculator-container">
        <div className="calculator-header">
          <h2>Solar Calculator</h2>
        </div>

        <div className="calculator-card">
          {/* Section 1: Select Option */}
          <div className="calculator-section">
            <h3>1. Select any one option</h3>
            <div className="option-buttons">
              <button
                className={`option-btn ${selectedOption === "bill" ? "active" : ""}`}
                onClick={() => setSelectedOption("bill")}
              >
                Monthly Electricity Bill
              </button>
              <button
                className={`option-btn ${selectedOption === "consumption" ? "active" : ""}`}
                onClick={() => setSelectedOption("consumption")}
              >
                Monthly Electricity Consumption Units
              </button>
              <button
                className={`option-btn ${selectedOption === "area" ? "active" : ""}`}
                onClick={() => setSelectedOption("area")}
              >
                Total Area of the Rooftop
              </button>
            </div>

            {/* Input field based on selection */}
            {selectedOption && (
              <div className="input-section">
                {selectedOption === "bill" && (
                  <div className="input-group">
                    <input
                      type="number"
                      placeholder="Enter monthly electricity bill"
                      value={billAmount}
                      onChange={(e) => setBillAmount(e.target.value)}
                      className="calculator-input"
                    />
                    <span className="input-unit">Rs.</span>
                  </div>
                )}
                {selectedOption === "consumption" && (
                  <div className="input-group">
                    <input
                      type="number"
                      placeholder="Enter monthly consumption units"
                      value={consumptionUnits}
                      onChange={(e) => setConsumptionUnits(e.target.value)}
                      className="calculator-input"
                    />
                    <span className="input-unit">Units</span>
                  </div>
                )}
                {selectedOption === "area" && (
                  <div className="input-group">
                    <input
                      type="number"
                      placeholder="Enter rooftop area"
                      value={rooftopArea}
                      onChange={(e) => setRooftopArea(e.target.value)}
                      className="calculator-input"
                    />
                    <span className="input-unit">Sq. Ft.</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Section 2: State and Category */}
          <div className="calculator-section">
            <h3>2. Select State and Customer Category</h3>
            <div className="select-group">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="calculator-select"
              >
                <option value="">Select State</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="calculator-select"
              >
                <option value="">Select Category of Customer</option>
                {customerCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Section 3: Unit Cost */}
          <div className="calculator-section">
            <h3>3. What is your average Electricity Unit Cost? :</h3>
            <div className="unit-cost-group">
              <input
                type="number"
                value={unitCost}
                onChange={(e) => setUnitCost(e.target.value)}
                className="unit-cost-input"
              />
              <span className="unit-cost-label">Rs. / kWh</span>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="calculate-section">
            <button
              onClick={handleCalculate}
              className="calculate-btn"
              disabled={isCalculating}
            >
              {isCalculating ? "Calculating..." : "Calculate"}
            </button>
            
            {result && !isCalculating && (
              <button onClick={resetCalculator} className="reset-btn">
                Reset
              </button>
            )}
          </div>

          {/* Results */}
          {result && !isCalculating && (
            <div className="result-card">
              <div className="result-icon">☀️</div>
              <div className="result-content">
                <h3>Recommended Solar System</h3>
                <div className="result-details">
                  <div className="result-item">
                    <span className="result-label">Capacity:</span>
                    <span className="result-value">{result.capacity} kW</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">Estimated Savings:</span>
                    <span className="result-value">Rs. {result.savings}/month</span>
                  </div>
                  <div className="result-item">
                    <span className="result-label">CO₂ Reduction:</span>
                    <span className="result-value">{result.co2Reduction} tons/year</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Calculator;
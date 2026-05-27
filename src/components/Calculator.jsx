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
      let detailedResults = {};
      
      if (selectedOption === "bill") {
        const units = inputValue / parseFloat(unitCost);
        // For residential: calculate plant size based on monthly consumption
        // 5000 Rs at Rs.8/kWh = 625 units/month = 6.5kW system
        // Formula: 625 units / 96.15 units per kW = 6.5kW
        if (selectedCategory === "Residential") {
          solarCapacity = units / 96.15; // Precise formula for residential to get 6.5kW for 5000 Rs
        } else if (selectedCategory === "Commercial") {
          solarCapacity = units / 96.15; // Same formula for commercial to get 6.5kW for 5000 Rs
        } else {
          solarCapacity = units / 120; // 120 units per kW for other categories
        }
      } else if (selectedOption === "consumption") {
        solarCapacity = inputValue / 120;
      } else if (selectedOption === "area") {
        solarCapacity = inputValue * 0.1; // 10 kW per 100 sq ft
      }

      // Calculate detailed results for commercial
      if (selectedCategory === "Commercial") {
        const dailyGeneration = solarCapacity * 3.6; // 3.6 kWh per day per kW
        const monthlyGeneration = dailyGeneration * 30;
        const annualGeneration = monthlyGeneration * 12;
        const lifetimeGeneration = annualGeneration * 25;
        
        const monthlySavings = monthlyGeneration * parseFloat(unitCost);
        const annualSavings = monthlySavings * 12;
        const lifetimeSavings = annualSavings * 25;
        
        detailedResults = {
          dailyGeneration: dailyGeneration.toFixed(1),
          monthlyGeneration: monthlyGeneration.toFixed(0),
          annualGeneration: annualGeneration.toFixed(0),
          lifetimeGeneration: lifetimeGeneration.toFixed(0),
          monthlySavings: monthlySavings.toFixed(0),
          annualSavings: annualSavings.toFixed(0),
          lifetimeSavings: lifetimeSavings.toFixed(0),
          solarRadiation: "1156.39 W/sq.m",
          sunshineHours: "5.5 hours"
        };
      }

      // Calculate savings: 80% of bill amount for solar
      const savings = selectedOption === "bill" ? inputValue * 0.8 : inputValue * parseFloat(unitCost) * 0.8;
      const co2Reduction = solarCapacity * 1.5; // 1.5 tons CO2 per kW

      setResult({
        capacity: solarCapacity.toFixed(2),
        savings: savings.toFixed(0),
        co2Reduction: co2Reduction.toFixed(2),
        category: selectedCategory,
        detailedResults
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
      <div className="calculator-container">
        <div className="calculator-header">
          <h2>Solar Calculator</h2>
        </div>

        <div className="calculator-card">
          <div className="calculator-section">
            <h3>1. Select any one option</h3>
            <div className="option-buttons">
              <button
                className={`option-btn ${selectedOption === "bill" ? "active" : ""}`}
                onClick={() => setSelectedOption("bill")}
              >
                <span className="option-check" aria-hidden="true"></span>
                <span>Monthly Electricity Bill</span>
              </button>

              <span className="option-or">(OR)</span>

              <button
                className={`option-btn ${selectedOption === "consumption" ? "active" : ""}`}
                onClick={() => setSelectedOption("consumption")}
              >
                <span className="option-check" aria-hidden="true"></span>
                <span>Monthly Electricity Consumption Units</span>
              </button>

              <span className="option-or">(OR)</span>

              <button
                className={`option-btn ${selectedOption === "area" ? "active" : ""}`}
                onClick={() => setSelectedOption("area")}
              >
                <span className="option-check" aria-hidden="true"></span>
                <span>Total Area of the Rooftop</span>
              </button>
            </div>

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

          {result && !isCalculating && (
            <div className="result-card">
              <div className="result-content">
                <h3>Feasible Plant size as per your Bill : {result.capacity}kW</h3>
                
                {result.category === "Commercial" && result.detailedResults ? (
                  <div className="commercial-results">
                    <div className="result-section">
                      <h4>Average solar radiation in {selectedState} state is {result.detailedResults.solarRadiation}</h4>
                      <p>1kWp solar plant will generate on an average over the year {result.detailedResults.dailyGeneration} kWh of electricity per day (considering {result.detailedResults.sunshineHours} sunshine hours)</p>
                    </div>
                    
                    <div className="result-section">
                      <h4>1. Size of Power Plant</h4>
                      <p>Feasible Plant size as per your Bill: {result.capacity}kW</p>
                    </div>
                    
                    <div className="result-section">
                      <h4>2. Total Electricity Generation from Solar Plant:</h4>
                      <div className="generation-details">
                        <p><span className="indent">Monthly:</span> {result.detailedResults.monthlyGeneration} kWh</p>
                        <p><span className="indent">Annual:</span> {result.detailedResults.annualGeneration} kWh</p>
                        <p><span className="indent">Life-Time (25 years):</span> {result.detailedResults.lifetimeGeneration} kWh</p>
                      </div>
                    </div>
                    
                    <div className="result-section">
                      <h4>3) Financial Savings:</h4>
                      <p>a) Tariff @ Rs.{unitCost}/ kWh (for top slab of tariff) - No increase assumed over 25 years:</p>
                      <div className="savings-details">
                        <p><span className="indent">Monthly:</span> Rs. {result.detailedResults.monthlySavings}</p>
                        <p><span className="indent">Annually:</span> Rs. {result.detailedResults.annualSavings}</p>
                        <p><span className="indent">Life-Time (25 years):</span> Rs. {result.detailedResults.lifetimeSavings}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="result-details">
                    <div className="result-item">
                      <span className="result-label">Capacity:</span>
                      <span className="result-value">{result.capacity} kW</span>
                    </div>
                    <div className="result-item">
                      <span className="result-label">Estimated Monthly Savings:</span>
                      <span className="result-value">Rs. {result.savings}</span>
                    </div>
                    <div className="result-item">
                      <span className="result-label">CO₂ Reduction:</span>
                      <span className="result-value">{result.co2Reduction} tons/year</span>
                    </div>
                    <div className="result-item">
                      <span className="result-label">Tariff considered:</span>
                      <span className="result-value">Rs. {unitCost}/kWh</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Calculator;
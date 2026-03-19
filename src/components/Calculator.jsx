import React, { useState } from "react";
import "../css/calculator.css";

function Calculator() {
  const [bill, setBill] = useState("");
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateSolar = () => {
    if (!bill || bill <= 0) return;
    
    setIsCalculating(true);
    
    // Simulate calculation delay for animation
    setTimeout(() => {
      const unitPrice = 8;
      const units = bill / unitPrice;
      const solarSize = units / 120;
      
      setResult(solarSize.toFixed(2));
      setIsCalculating(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      calculateSolar();
    }
  };

  const resetCalculator = () => {
    setBill("");
    setResult(null);
  };

  return (
    <section className="calculator" id="calculator">
      <div className="calculator-bg-animation">
        <div className="calculator-particle"></div>
        <div className="calculator-particle"></div>
        <div className="calculator-particle"></div>
        <div className="calculator-particle"></div>
        <div className="calculator-particle"></div>
        <div className="calculator-particle"></div>
        <div className="calculator-particle"></div>
        <div className="calculator-particle"></div>
      </div>
      <div className="calculator-container">
        <div className="calculator-header">
          <h2>Solar Savings Calculator</h2>
          <p className="calculator-subtitle">
            Calculate your ideal solar plant size based on your monthly electricity bill
          </p>
        </div>

        <div className="calculator-card">
          <div className="input-group">
            <div className="input-wrapper">
              <input
                type="number"
                placeholder="Enter Monthly Electricity Bill"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                onKeyPress={handleKeyPress}
                className="calculator-input"
                disabled={isCalculating}
              />
              <span className="input-icon">₹</span>
            </div>
          </div>

          <div className="button-group">
            <button 
              onClick={calculateSolar} 
              className="calculate-btn"
              disabled={!bill || bill <= 0 || isCalculating}
            >
              {isCalculating ? (
                <span className="loading-spinner">
                  <span className="spinner"></span>
                  Calculating...
                </span>
              ) : (
                "Calculate Savings"
              )}
            </button>
            
            {bill && (
              <button 
                onClick={resetCalculator} 
                className="reset-btn"
                disabled={isCalculating}
              >
                Reset
              </button>
            )}
          </div>

          {result && !isCalculating && (
            <div className="result-card">
              <div className="result-icon">☀️</div>
              <div className="result-content">
                <h3>Recommended Solar Plant</h3>
                <div className="result-value">
                  <span className="value">{result}</span>
                  <span className="unit">KW</span>
                </div>
                <p className="result-description">
                  This system can significantly reduce your electricity bills
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="calculator-info">
          <div className="info-item">
            <div className="info-icon">💡</div>
            <div className="info-text">
              <strong>Did you know?</strong>
              A 1KW solar plant can save approximately ₹1,200 per month on average
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
import React, { useState } from 'react';
import '../styles/TaxCalculator.css';

const UKTaxCalculator = () => {
  const [income, setIncome] = useState(0);
  const [tax, setTax] = useState(0);
  const [netIncome, setNetIncome] = useState(0);
  const [monthlyNetIncome, setMonthlyNetIncome] = useState(0);
  const [weeklyNetIncome, setWeeklyNetIncome] = useState(0);

  const calculateTax = (income) => {
    let tax = 0;
    if (income > 150000) {
      tax += (income - 150000) * 0.45;
      income = 150000;
    }
    if (income > 50270) {
      tax += (income - 50270) * 0.40;
      income = 50270;
    }
    if (income > 12570) {
      tax += (income - 12570) * 0.20;
    }
    return tax;
  };

  const handleCalculate = () => {
    const calculatedTax = calculateTax(income);
    const calculatedNetIncome = income - calculatedTax;
    const calculatedMonthlyNetIncome = calculatedNetIncome / 12;
    const calculatedWeeklyNetIncome = calculatedNetIncome / 52;

    setTax(calculatedTax);
    setNetIncome(calculatedNetIncome);
    setMonthlyNetIncome(calculatedMonthlyNetIncome);
    setWeeklyNetIncome(calculatedWeeklyNetIncome);
  };

  return (
    <div className="tax-calculator">
      <h1>UK Personal Income Tax Calculator</h1>
      
      <div className="input-group">
        <label htmlFor="annualIncome">Annual Income (£):</label>
        <input
          id="annualIncome"
          type="number"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          placeholder="Enter annual income"
        />
      </div>
      
      <button className="calculate-button" onClick={handleCalculate}>
        Calculate Tax
      </button>
      
      <div className="result-section">
        <h2>Annual Breakdown:</h2>
        <p className="result-item">Gross Annual Income: <span>£{income.toFixed(2)}</span></p>
        <p className="result-item">Annual Tax to Pay: <span>£{tax.toFixed(2)}</span></p>
        <p className="result-item">Net Annual Income After Tax: <span>£{netIncome.toFixed(2)}</span></p>

        <h2>Monthly Breakdown:</h2>
        <p className="result-item">Net Monthly Income After Tax: <span>£{monthlyNetIncome.toFixed(2)}</span></p>

        <h2>Weekly Breakdown:</h2>
        <p className="result-item">Net Weekly Income After Tax: <span>£{weeklyNetIncome.toFixed(2)}</span></p>
      </div>
    </div>
  );
};

export default UKTaxCalculator;
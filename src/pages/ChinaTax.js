import React, { useState } from 'react';
import '../styles/TaxCalculator.css';


const ChinaTaxCalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [annualBonus, setAnnualBonus] = useState(0);
  const [monthlyTax, setMonthlyTax] = useState(0);
  const [annualTax, setAnnualTax] = useState(0);
  const [monthlyNetIncome, setMonthlyNetIncome] = useState(0);
  const [annualNetIncome, setAnnualNetIncome] = useState(0);


  const calculateMonthlyTax = (income) => {
    const taxableIncome = income - 5000; // Basic deduction
    let tax = 0;

    if (taxableIncome <= 0) return 0;

    if (taxableIncome <= 36000) {
      tax = taxableIncome * 0.03;
    } else if (taxableIncome <= 144000) {
      tax = taxableIncome * 0.10 - 2520;
    } else if (taxableIncome <= 300000) {
      tax = taxableIncome * 0.20 - 16920;
    } else if (taxableIncome <= 420000) {
      tax = taxableIncome * 0.25 - 31920;
    } else if (taxableIncome <= 660000) {
      tax = taxableIncome * 0.30 - 52920;
    } else if (taxableIncome <= 960000) {
      tax = taxableIncome * 0.35 - 85920;
    } else {
      tax = taxableIncome * 0.45 - 181920;
    }

    return tax;
  };

  const calculateBonusTax = (bonus) => {
    const monthlyBonus = bonus / 12;
    return calculateMonthlyTax(monthlyBonus) * 12;
  };

  const handleCalculate = () => {
    const calculatedMonthlyTax = calculateMonthlyTax(monthlyIncome);
    const calculatedMonthlyNetIncome = monthlyIncome - calculatedMonthlyTax;
    
    const annualIncome = monthlyIncome * 12;
    const calculatedAnnualTax = (calculatedMonthlyTax * 12) + calculateBonusTax(annualBonus);
    const calculatedAnnualNetIncome = annualIncome + annualBonus - calculatedAnnualTax;

    setMonthlyTax(calculatedMonthlyTax);
    setMonthlyNetIncome(calculatedMonthlyNetIncome);
    setAnnualTax(calculatedAnnualTax);
    setAnnualNetIncome(calculatedAnnualNetIncome);
  };

  return (
    <div className="tax-calculator">
      <h1>China Personal Income Tax Calculator</h1>
      
      <div className="input-group">
        <label htmlFor="monthlyIncome">Monthly Income (¥):</label>
        <input
          id="monthlyIncome"
          type="number"
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(Number(e.target.value))}
        />
      </div>
      
      <div className="input-group">
        <label htmlFor="annualBonus">Annual Bonus (¥):</label>
        <input
          id="annualBonus"
          type="number"
          value={annualBonus}
          onChange={(e) => setAnnualBonus(Number(e.target.value))}
        />
      </div>
      
      <button className="calculate-button" onClick={handleCalculate}>
        Calculate Tax
      </button>
      
      <div className="result-section">
        <h2>Monthly Breakdown:</h2>
        <p className="result-item">Gross Monthly Income: <span>¥{monthlyIncome.toFixed(2)}</span></p>
        <p className="result-item">Monthly Tax to Pay: <span>¥{monthlyTax.toFixed(2)}</span></p>
        <p className="result-item">Net Monthly Income After Tax: <span>¥{monthlyNetIncome.toFixed(2)}</span></p>
        
        <h2>Annual Breakdown:</h2>
        <p className="result-item">Gross Annual Income (including bonus): <span>¥{(monthlyIncome * 12 + annualBonus).toFixed(2)}</span></p>
        <p className="result-item">Annual Tax to Pay: <span>¥{annualTax.toFixed(2)}</span></p>
        <p className="result-item">Net Annual Income After Tax: <span>¥{annualNetIncome.toFixed(2)}</span></p>
      </div>
    </div>
  );
};

export default ChinaTaxCalculator;
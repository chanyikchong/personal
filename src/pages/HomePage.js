import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to the Tax Calculator</h1>
            <p>
                Our tax calculator provides accurate estimates for personal income tax in the UK and China. 
                Whether you're planning your finances or just curious about tax rates, we've got you covered.
            </p>
            <div className="calculator-links">
                <Link to="/uk-tax-calculator" className="calculator-link">UK Tax Calculator</Link>
                <Link to="/china-tax-calculator" className="calculator-link">China Tax Calculator</Link>
            </div>
            <div className="features">
                <h2>Features:</h2>
                <ul className="feature-list">
                    <li>Accurate tax calculations based on current rates</li>
                    <li>Easy-to-use interface</li>
                    <li>Breakdown of monthly and annual tax liabilities</li>
                    <li>Instant results</li>
                    <li>Mobile-friendly design</li>
                </ul>
            </div>
        </div>
    );
};

export default HomePage;
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css'; // General global styles if any

import Header from './components/Header'; // Adjust path if necessary
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UKTaxCalculator from './pages/UKTax';
import ChinaTaxCalculator from './pages/ChinaTax';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router basename="/tax-calculator">
            {/* Global Header */}
            <Header />
            {/* Define your routes */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/uk-tax-calculator" element={<UKTaxCalculator />} />
                <Route path="/china-tax-calculator" element={<ChinaTaxCalculator />} />
                {/* Add more routes here */}
            </Routes>
        </Router>
    </React.StrictMode>
);

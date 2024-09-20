import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleItemClick = (path) => {
        setDropdownVisible(false);
        navigate(path);
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="menu-icon" onClick={toggleDropdown}>
                    <span className="menu-line"></span>
                    <span className="menu-line"></span>
                    <span className="menu-line"></span>
                </div>
                <h1 className="header-title" onClick={() => navigate('/')}>Tax Calculator</h1>
            </div>

            {dropdownVisible && (
                <div className="dropdown-menu">
                    <ul>
                        <li onClick={() => handleItemClick('/')}>Home</li>
                        <li onClick={() => handleItemClick('/uk-tax-calculator')}>UK Tax Calculator</li>
                        <li onClick={() => handleItemClick('/china-tax-calculator')}>China Tax Calculator</li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
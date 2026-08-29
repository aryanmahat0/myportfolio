// components/Navigation.jsx
import React, { useState } from 'react';
import DeveloperLogo from './DeveloperLogo';

function Navigation({ onNavigate }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (sectionId) => {
        onNavigate(sectionId);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Brand / Logo Section */}
                <div className="nav-brand" onClick={() => handleNavClick('hero')} style={{ cursor: 'pointer' }}>
                    <DeveloperLogo width={42} height={42} />
                    <span className="brand-name">Aryan Mahato</span>
                </div>

                {/* Navigation Links */}
                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li><button onClick={() => handleNavClick('hero')}>Home</button></li>
                    <li><button onClick={() => handleNavClick('profile')}>Profile</button></li>
                    <li><button onClick={() => handleNavClick('about')}>About</button></li>
                    <li><button onClick={() => handleNavClick('projects')}>Projects</button></li>
                    <li><button onClick={() => handleNavClick('contact')}>Contact</button></li>
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>
        </nav>
    );
}

export default Navigation;
import React from 'react';


function Navigation() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navigation">
            <a href="#" className="nav-logo">Portfolio</a>
            <ul className="nav-links">
                <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a></li>
                <li><a href="#profile" onClick={(e) => { e.preventDefault(); scrollToSection('profile'); }}>Profile</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
                <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;
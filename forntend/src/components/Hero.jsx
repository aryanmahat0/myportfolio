// components/Hero.jsx
import React from 'react';

function Hero({ onNavigate, onToast }) {
    return (
        <section className="hero" id="hero">
            <div className="hero-content">
                <p className="hero-subtitle">Welcome to My Portfolio — where bugs fear me and coffee fuels me ☕💻</p>
                <h1 className="hero-title">Creative Developer</h1>
                <p className="hero-description">
                    Crafting elegant digital experiences with a blend of modern technology and timeless design principles.
                </p>
                <div className="hero-cta">
                    <button className="btn-primary" onClick={() => onNavigate('projects')}>
                        View Work
                    </button>
                    <a
                        href="/resume.pdf"
                        download="Aryan_Mahato_Resume.pdf"
                        className="btn-secondary"
                        onClick={() => onToast('Downloading Resume...', 'success')}
                    >
                        📄 Download CV
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
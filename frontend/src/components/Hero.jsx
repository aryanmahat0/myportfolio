import React from 'react';

function Hero() {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero" id="hero">
            <div className="hero-content">
                <p className="hero-subtitle">Welcome to My Portfolio — where bugs fear me and coffee fuels me ☕💻</p>
                <h1 className="hero-title">Creative Developer</h1>
                <p className="hero-description">
                    Crafting elegant digital experiences with a blend of modern technology and timeless design principles.
                </p>
                <div className="hero-cta">
                    <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollToContact(); }}>
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
// components/Profile.jsx
import React, { useState } from 'react';
import profileImg from '../assets/profile1.jpg';

function Profile({ onToast }) {
    const [isOpen, setIsOpen] = useState(false);

    const socialLinks = [
        { name: 'Instagram', url: 'https://www.instagram.com/__ary.xn__/' },
        { name: 'Facebook', url: 'https://www.facebook.com/aryana.mahato.2025' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aryan-mahato-71a96739b/' },
        { name: 'GitHub', url: 'https://github.com/aryanmahat0' }
    ];

    const copyEmail = () => {
        navigator.clipboard.writeText('mahatoaryan02@gmail.com');
        onToast('Email copied to clipboard!', 'success');
    };

    return (
        <>
            <section className="profile" id="profile">
                <div className="profile-container">
                    <div className="profile-image-wrapper">
                        <div className="profile-image" onClick={() => setIsOpen(true)} style={{ cursor: "pointer" }}>
                            <img src={profileImg} alt="Profile" />
                        </div>
                        <div className="profile-badge">
                            <span className="badge-icon">✦</span>
                        </div>
                    </div>

                    <div className="profile-content">
                        <h2 className="profile-name">Aryan Mahato</h2>
                        <p className="profile-title">Full Stack Developer & Creative Designer</p>
                        <p className="profile-bio">
                            I’m Aryan Mahato, an undergraduate Computer Engineering student at Kathmandu University...
                        </p>

                        <div className="profile-actions-bar">
                            <button className="btn-secondary copy-email-btn" onClick={copyEmail}>
                                📋 Copy Email Address
                            </button>
                        </div>

                        <div className="social-links">
                            <h3 className="social-heading">Connect With Me</h3>
                            <div className="social-grid">
                                {socialLinks.map((social) => (
                                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link">
                                        <span className="social-name">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {isOpen && (
                <div className="image-modal" onClick={() => setIsOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close modal">
                            ✕
                        </button>
                        <img src={profileImg} alt="Full View" />
                    </div>
                </div>
            )}
        </>
    );
}

export default Profile;
// WelcomeModal.jsx
import React, { useState, useEffect } from 'react';

function WelcomeModal({ onExplore, onContact }) {
    const [isOpen, setIsOpen] = useState(false);
    const [visitorName, setVisitorName] = useState('');
    const [greeted, setGreeted] = useState(false);

    useEffect(() => {
        // Show modal on first visit per session
        const hasVisited = sessionStorage.getItem('hasVisited');
        if (!hasVisited) {
            setIsOpen(true);
        }
    }, []);

    const handleClose = () => {
        sessionStorage.setItem('hasVisited', 'true');
        setIsOpen(false);
    };

    const handleAction = (actionFn) => {
        handleClose();
        if (actionFn) actionFn();
    };

    if (!isOpen) return null;

    return (
        <div className="welcome-modal-overlay" onClick={handleClose}>
            <div className="welcome-modal-card" onClick={(e) => e.stopPropagation()}>
                <button className="welcome-close-btn" onClick={handleClose}>✕</button>

                <div className="welcome-header">
                    <span className="welcome-badge">✦ Welcome ✦</span>
                    <h2>{greeted && visitorName ? `Greetings, ${visitorName}! 👋` : "Hello, Stranger! ☕✨"}</h2>
                </div>

                <p className="welcome-message">
                    Happy to have you in my digital workspace! Take a look around to explore my projects, skills, and journey as a developer.
                </p>

                {!greeted ? (
                    <div className="visitor-input-group">
                        <input
                            type="text"
                            placeholder="What's your name? (Optional)"
                            value={visitorName}
                            onChange={(e) => setVisitorName(e.target.value)}
                        />
                        <button
                            className="btn-accent"
                            onClick={() => setGreeted(true)}
                        >
                            Say Hi 👋
                        </button>
                    </div>
                ) : (
                    <p className="personalized-note">Great to meet you, {visitorName}! Enjoy exploring.</p>
                )}

                <div className="welcome-actions">
                    <button
                        className="btn-primary"
                        onClick={() => handleAction(onExplore)}
                    >
                        Explore Portfolio
                    </button>
                    <button
                        className="btn-secondary"
                        onClick={() => handleAction(onContact)}
                    >
                        Get In Touch
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WelcomeModal;

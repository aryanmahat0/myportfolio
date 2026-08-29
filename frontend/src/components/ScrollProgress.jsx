// components/ScrollProgress.jsx
import React, { useState, useEffect } from 'react';

function ScrollProgress() {
    const [progress, setProgress] = useState(0);
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentProgress = (window.scrollY / totalHeight) * 100;
            setProgress(currentProgress);
            setShowTopBtn(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
            {showTopBtn && (
                <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
                    ↑
                </button>
            )}
        </>
    );
}

export default ScrollProgress;
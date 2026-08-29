// components/Toast.jsx
import React, { useEffect } from 'react';

function Toast({ message, type = 'success', onClose, duration = 4000 }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [onClose, duration]);

    return (
        <div className={`toast-notification toast-${type}`}>
            <span className="toast-icon">
                {type === 'success' ? '✓' : '✕'}
            </span>
            <span className="toast-message">{message}</span>
            <button className="toast-close" onClick={onClose} aria-label="Close notification">
                ✕
            </button>
        </div>
    );
}

export default Toast;
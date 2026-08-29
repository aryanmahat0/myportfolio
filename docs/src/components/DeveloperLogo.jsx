// components/DeveloperLogo.jsx
import React from 'react';

function DeveloperLogo({ className = "nav-logo", width = 45, height = 45 }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Outer Decorative Hexagon / Frame */}
            <polygon
                points="100,10 178,55 178,145 100,190 22,145 22,55"
                stroke="#8b5e3c"
                strokeWidth="6"
                fill="#fbf8f3"
            />

            {/* Inner Accent Ring */}
            <polygon
                points="100,22 168,62 168,138 100,178 32,138 32,62"
                stroke="#c5a059"
                strokeWidth="3"
                strokeDasharray="8 4"
            />

            {/* Left Bracket - < */}
            <path
                d="M 55 80 L 38 100 L 55 120"
                stroke="#722f37"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Right Bracket - > */}
            <path
                d="M 145 80 L 162 100 L 145 120"
                stroke="#722f37"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Letter A */}
            <path
                d="M 72 135 L 90 65 L 108 135"
                stroke="#2c1810"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <line
                x1="78" y1="112" x2="102" y2="112"
                stroke="#c5a059"
                strokeWidth="6"
                strokeLinecap="round"
            />

            {/* Letter M */}
            <path
                d="M 108 135 L 108 65 L 124 105 L 140 65 L 140 135"
                stroke="#2c1810"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default DeveloperLogo;
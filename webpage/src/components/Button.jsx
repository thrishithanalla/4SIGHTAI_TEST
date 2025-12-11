import React from 'react';
import './HeaderNavigation.css'; // Shared styles

export const Button = ({ children, iconLeading, color = 'primary', size = 'md', onClick, ...props }) => {
    // Map props to classes
    const colorClass = color === 'secondary' ? 'custom-btn-secondary' : 'custom-btn-primary';
    const sizeClass = size === 'sm' ? 'custom-btn-sm' : '';

    return (
        <button
            className={`custom-btn ${colorClass} ${sizeClass}`}
            onClick={onClick}
            {...props}
        >
            {iconLeading && <i className={iconLeading} style={{ marginRight: '6px' }}></i>}
            {children}
        </button>
    );
};

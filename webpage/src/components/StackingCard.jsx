import React from 'react';
import { Link } from 'react-router-dom';
import './StackingScroll.css';

const StackingCard = ({ item, index }) => {
    // Determine link path based on item properties
    // If item.link is provided, use it. Otherwise construct based on id and type.
    const linkPath = item.link || (item.id ? `/products?id=${item.id}` : '#'); // Default fallback

    // Alternate layout for odd indices (0 = default/right, 1 = alternate/left)
    const isAlternate = index % 2 !== 0;

    return (
        <div className={`stacking-card ${isAlternate ? 'stacking-card-alternate' : ''}`}>
            <div className="stacking-card-content">
                <h2 className="stacking-card-title">{item.title}</h2>

                {item.label && (
                    <div className="stacking-summary-label">{item.label}</div>
                )}

                <p className="stacking-description">
                    {item.desc}
                    {/* Optional: Add extra text for visual balance if needed, controlled by a prop or just CSS truncated */}
                </p>

                {item.linkText !== false && (
                    <Link to={linkPath} className="read-more-link">
                        {item.linkText || 'READ MORE'}
                        <span>&rarr;</span>
                    </Link>
                )}
            </div>

            <div className="stacking-card-image">
                <img src={item.img} alt={item.alt || item.title} loading="lazy" />
            </div>
        </div>
    );
};

export default StackingCard;

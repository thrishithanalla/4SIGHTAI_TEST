import React from 'react';
import StackingCard from './StackingCard';
import './StackingScroll.css';

const StackingSection = ({ items }) => {
    return (
        <div className="stacking-scroll-container">
            {items.map((item, index) => (
                <div key={item.id || index} className="stacking-section">
                    <StackingCard item={item} index={index} />
                </div>
            ))}
            <div className="stacking-spacer"></div>
        </div>
    );
};

export default StackingSection;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeaderNavigation.css';

export const HeaderNavigationBase = ({ items, trailingContent }) => {
    const location = useLocation();

    // Helper to check if an item is active
    const isItemActive = (item) => {
        if (item.href === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(item.href);
    };

    const isSubItemActive = (subItem) => {
        // Simple check for query params if needed, or just exact path match
        // For query params like ?id=x, location.search is needed.
        // Assuming href includes query params for exact match:
        const currentFull = location.pathname + location.search;
        return currentFull === subItem.href || location.pathname === subItem.href;
    };

    // Find the currently active primary item to display its sub-items
    const activeItem = items.find(item => isItemActive(item));

    return (
        <div className="header-nav-container">
            {/* Primary Tier */}
            <div className="header-tier-primary">
                <Link to="/" className="header-logo">
                    <img src="/logo.png" alt="4SIGHT AI" style={{ height: '40px', width: 'auto' }} />
                </Link>

                <nav className="nav-items-primary">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            to={item.href}
                            className={`nav-link ${isItemActive(item) ? 'active' : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="header-trailing">
                    {trailingContent}
                </div>
            </div>

            {/* Secondary Tier - Render only if active item has sub-items */}
            {activeItem && activeItem.items && (
                <div className="header-tier-secondary">
                    <nav className="nav-items-secondary">
                        {activeItem.items.map((subItem, index) => (
                            <Link
                                key={index}
                                to={subItem.href}
                                className={`nav-link-secondary ${isSubItemActive(subItem) ? 'active' : ''}`}
                            >
                                {subItem.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
};

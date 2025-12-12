import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeaderNavigation.css';

export const HeaderNavigationBase = ({ items, trailingContent }) => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Helper to check if an item is active
    const isItemActive = (item) => {
        if (item.href === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(item.href);
    };

    const isSubItemActive = (subItem) => {
        const currentFull = location.pathname + location.search;
        return currentFull === subItem.href || location.pathname === subItem.href;
    };

    // Find the currently active primary item to display its sub-items
    const activeItem = items.find(item => isItemActive(item));

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="header-nav-container">
            {/* Primary Tier */}
            <div className="header-tier-primary">
                <Link to="/" className="header-logo" onClick={closeMobileMenu}>
                    4SIGHT AI
                </Link>

                {/* Desktop Nav */}
                <nav className="nav-items-primary desktop-only">
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

                <div className="header-right-group">
                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-menu-toggle"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle Navigation"
                    >
                        <i className={isMobileMenuOpen ? 'pi pi-times' : 'pi pi-bars'} style={{ fontSize: '1.5rem', color: '#344054' }} />
                    </button>

                    <div className="header-trailing desktop-only">
                        {trailingContent}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMobileMenuOpen && (
                <div className="mobile-nav-menu">
                    <nav className="mobile-nav-items">
                        {items.map((item, index) => (
                            <React.Fragment key={index}>
                                <Link
                                    to={item.href}
                                    className={`mobile-nav-link ${isItemActive(item) ? 'active' : ''}`}
                                    onClick={closeMobileMenu}
                                >
                                    {item.label}
                                </Link>
                                {/* Show sub-items in mobile menu if present */}
                                {item.items && (
                                    <div className="mobile-sub-nav">
                                        {item.items.map((subItem, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                to={subItem.href}
                                                className={`mobile-sub-link ${isSubItemActive(subItem) ? 'active' : ''}`}
                                                onClick={closeMobileMenu}
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </nav>
                </div>
            )}

            {/* Secondary Tier (Desktop Only) - Render only if active item has sub-items */}
            {activeItem && activeItem.items && !isMobileMenuOpen && (
                <div className="header-tier-secondary desktop-only">
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

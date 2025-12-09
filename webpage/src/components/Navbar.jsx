import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <nav>
                <Link to="/" className="logo">
                    <img src="/logo.png" className="logo-icon" alt="4Sight AI" />
                </Link>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
                    <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
                    <li><NavLink to="/products" onClick={() => setIsMenuOpen(false)}>Products</NavLink></li>
                    <li><NavLink to="/services" onClick={() => setIsMenuOpen(false)}>Services</NavLink></li>
                    <li><NavLink to="/events" onClick={() => setIsMenuOpen(false)}>Events</NavLink></li>
                    <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
                </ul>

                <button
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    aria-label="Toggle navigation menu"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </header>
    );
};

export default Navbar;

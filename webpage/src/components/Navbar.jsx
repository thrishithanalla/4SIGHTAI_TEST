import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

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

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <nav>
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="4sight AI" className="logo-icon" />

                </Link>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
                    <li><Link to="/" className={isActive('/')}>Home</Link></li>
                    <li><Link to="/about" className={isActive('/about')}>About</Link></li>
                    <li><Link to="/products" className={isActive('/products')}>Products</Link></li>
                    <li><Link to="/services" className={isActive('/services')}>Services</Link></li>
                    <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
                </ul>
                <button
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    id="menuToggle"
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

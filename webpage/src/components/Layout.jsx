import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


const Layout = () => {
    return (
        <>

            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            {/* Floating Contact Button */}
            <Link to="/contact" className="floating-contact" aria-label="Contact Us">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
            </Link>
        </>
    );
};

export default Layout;

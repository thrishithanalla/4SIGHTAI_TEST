import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import HeaderNavigationDualTierDemo from './HeaderNavigation';
import Footer from './Footer';


const Layout = () => {
    return (
        <>

            <HeaderNavigationDualTierDemo />
            <main>
                <Outlet />
            </main>
            <Footer />

        </>
    );
};

export default Layout;

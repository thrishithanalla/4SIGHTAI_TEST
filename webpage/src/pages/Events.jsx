import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                        <h1>Events</h1>
                        <p className="subheadline" style={{ fontSize: '1.3rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: 'var(--spacing-md)' }}>
                            Join us at our upcoming events and webinars
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Upcoming Events</h2>
                    </div>

                    <div style={{ textAlign: 'center', padding: 'var(--spacing-xl) 0' }}>
                        <div className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: 'var(--spacing-lg)' }}>
                            <h3>Stay Tuned!</h3>
                            <p style={{ margin: 'var(--spacing-md) 0', color: 'var(--gray)' }}>
                                We are currently planning our next series of events. Check back soon for updates on webinars, workshops, and industry conferences.
                            </p>
                            <Link to="/contact" className="btn btn-primary">Contact Us for Info</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Events;

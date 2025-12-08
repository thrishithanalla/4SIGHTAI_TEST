import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Services = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);

        // Check for hash to scroll to specific section if needed
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                        <h1>Our Services</h1>
                        <p className="subheadline" style={{ fontSize: '1.3rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: 'var(--spacing-md)' }}>
                            End-to-end Generative AI solutions guiding your enterprise from strategy to implementation
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>OUR SERVICES</h2>
                        <p>Comprehensive GenAI expertise at every stage of your transformation journey</p>
                    </div>

                    {/* Service 1: Advisory */}
                    <div className="card" style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <div className="service-grid">
                            <div className="card-image" style={{ height: '300px' }}>
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Advisory" loading="lazy" />
                            </div>
                            <div className="card-content">
                                <div className="service-tag">SERVICE 1</div>
                                <h3>GenAI Advisory</h3>
                                <p>Strategic guidance to help you navigate the landscape of Generative AI.</p>
                                <Link to="/services/genai-advisory" className="btn btn-primary">Learn More</Link>
                            </div>
                        </div>
                    </div>

                    {/* Service 2: Scoping */}
                    <div className="card" style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <div className="service-grid reverse">
                            <div className="card-content">
                                <div className="service-tag">SERVICE 2</div>
                                <h3>Project Scoping & Blueprint</h3>
                                <p>Detailed execution plans, technical architectures, and requirements.</p>
                                <Link to="/services/project-scoping" className="btn btn-primary">Learn More</Link>
                            </div>
                            <div className="card-image" style={{ height: '300px' }}>
                                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" alt="Scoping" loading="lazy" />
                            </div>
                        </div>
                    </div>

                    {/* Service 3: POC */}
                    <div className="card" style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <div className="service-grid">
                            <div className="card-image" style={{ height: '300px' }}>
                                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" alt="POC" loading="lazy" />
                            </div>
                            <div className="card-content">
                                <div className="service-tag">SERVICE 3</div>
                                <h3>Building GenAI POC</h3>
                                <p>Rapid prototypes to validate AI use cases before full investment.</p>
                                <Link to="/services/building-poc" className="btn btn-primary">Learn More</Link>
                            </div>
                        </div>
                    </div>

                    {/* Service 4: Consulting */}
                    <div className="card" style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <div className="service-grid reverse">
                            <div className="card-content">
                                <div className="service-tag">SERVICE 4</div>
                                <h3>GenAI Consulting</h3>
                                <p>End-to-end support for your AI transformation journey.</p>
                                <Link to="/services/genai-consulting" className="btn btn-primary">Learn More</Link>
                            </div>
                            <div className="card-image" style={{ height: '300px' }}>
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Consulting" loading="lazy" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>



            {/* CTA Section */}
            <section className="section section-dark">
                <div className="container">
                    <div style={{ textAlign: 'center', padding: 'var(--spacing-lg) 0' }}>
                        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>
                            Ready to Transform Your Business?
                        </h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto var(--spacing-md)', color: 'rgba(255, 255, 255, 0.9)' }}>
                            Let's discuss how our GenAI services can drive value for your organization.
                        </p>
                        <div className="cta-buttons" style={{ justifyContent: 'center' }}>
                            <Link to="/contact" className="btn btn-primary">Start Conversation</Link>
                            <Link to="/products" className="btn btn-outline">Explore Products</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;

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
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="webgl-background"></div>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                        <h1 className="explosive-text">Our Services</h1>
                        <p className="subheadline" style={{ fontSize: '1.3rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: 'var(--spacing-md)' }}>
                            End-to-end Generative AI solutions guiding your enterprise from strategy to implementation
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section" id="services">
                <div className="container">
                    <div className="section-header">
                        <h2>OUR SERVICES</h2>
                        <p>Comprehensive GenAI expertise at every stage of your transformation journey</p>
                    </div>

                    {/* Service 1: GenAI Advisory */}
                    <div className="product-card" id="genai-advisory">
                        <div className="product-content">
                            <div className="product-image">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                                    alt="GenAI Advisory"
                                    loading="lazy" />
                            </div>
                            <div className="product-text">
                                <h3>GenAI Advisory</h3>
                                <p>
                                    <strong>GenAI Advisory</strong> provides strategic guidance to help you navigate the landscape of Generative AI.
                                    We help you identify high-value use cases, assess organizational readiness, and develop a roadmap for adoption.
                                </p>
                                <Link to="/services/genai-advisory" className="btn btn-primary">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Service 2: Project Scoping & Blueprint */}
                    <div className="product-card" id="project-scoping">
                        <div className="product-content reverse">
                            <div className="product-text">
                                <h3>Project Scoping & Blueprint</h3>
                                <p>
                                    Our <strong>Project Scoping & Blueprint</strong> service delivers detailed execution plans, technical architectures, and requirements.
                                    We ensure that your AI initiatives are built on a solid foundation, minimizing risks and maximizing ROI.
                                </p>
                                <Link to="/services/project-scoping" className="btn btn-primary">
                                    Learn More
                                </Link>
                            </div>
                            <div className="product-image">
                                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                                    alt="Project Scoping & Blueprint"
                                    loading="lazy" />
                            </div>
                        </div>
                    </div>

                    {/* Service 3: Building GenAI POC */}
                    <div className="product-card" id="building-poc">
                        <div className="product-content">
                            <div className="product-image">
                                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                                    alt="Building GenAI POC"
                                    loading="lazy" />
                            </div>
                            <div className="product-text">
                                <h3>Building GenAI POC</h3>
                                <p>
                                    <strong>Building GenAI POC</strong> allows you to validate AI use cases before full investment.
                                    We develop rapid prototypes to demonstrate feasibility, performance, and value, helping you make informed decisions.
                                </p>
                                <Link to="/services/building-poc" className="btn btn-primary">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Service 4: GenAI Consulting */}
                    <div className="product-card" id="genai-consulting">
                        <div className="product-content reverse">
                            <div className="product-text">
                                <h3>GenAI Consulting</h3>
                                <p>
                                    Our <strong>GenAI Consulting</strong> service offers end-to-end support for your AI transformation journey.
                                    From implementation to optimization, our experts work alongside your team to ensure successful deployment and adoption.
                                </p>
                                <Link to="/services/genai-consulting" className="btn btn-primary">
                                    Learn More
                                </Link>
                            </div>
                            <div className="product-image">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                    alt="GenAI Consulting"
                                    loading="lazy" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="section section-dark">
                <div className="morphing-blob"></div>
                <div className="container">
                    <div style={{ textAlign: 'center', padding: 'var(--spacing-lg) 0' }}>
                        <h2 className="text-gradient explosive-text" style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>
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

import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Products = () => {
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
                        <h1 className="explosive-text">Our Products</h1>
                        <p className="subheadline" style={{ fontSize: '1.3rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: 'var(--spacing-md)' }}>
                            Transformative AI solutions designed to revolutionize your industry
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="section" id="products">
                <div className="container">
                    <div className="section-header">
                        <h2>OUR PRODUCTS</h2>
                        <p>Cutting-edge AI technologies tailored for diverse enterprise needs</p>
                    </div>

                    {/* Product 1: AI Envelop */}
                    <div className="product-card" id="ai-envelop">
                        <div className="product-content">
                            <div className="product-image">
                                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
                                    alt="AI Envelop - Enterprise AI Infrastructure"
                                    loading="lazy" />
                            </div>
                            <div className="product-text">
                                <h3>AI Envelop</h3>
                                <p>
                                    <strong>AI Envelop</strong> is our flagship enterprise AI infrastructure solution designed to seamlessly wrap around
                                    your existing systems and processes. Think of it as an intelligent layer that enhances every aspect of your operations
                                    without requiring a complete system overhaul.
                                </p>
                                <Link to="/products/ai-envelop" className="btn btn-primary">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Product 2: AI Co-pilot (Consulting) */}
                    <div className="product-card" id="ai-copilot-consulting">
                        <div className="product-content reverse">
                            <div className="product-text">
                                <h3>AI Co-pilot (Consulting)</h3>
                                <p>
                                    The <strong>AI Co-pilot for Consulting</strong> is a specialized tool designed to augment the capabilities of consulting
                                    professionals. It serves as an intelligent assistant that helps consultants deliver deeper insights, faster analysis, and
                                    more strategic recommendations to their clients.
                                </p>
                                <Link to="/products/ai-copilot-consulting" className="btn btn-primary">
                                    Learn More
                                </Link>
                            </div>
                            <div className="product-image">
                                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                                    alt="AI Co-pilot for Consulting"
                                    loading="lazy" />
                            </div>
                        </div>
                    </div>

                    {/* Product 3: Nutrition Co-Pilot */}
                    <div className="product-card" id="nutrition-copilot">
                        <div className="product-content">
                            <div className="product-image">
                                <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80"
                                    alt="Nutrition Co-Pilot - Healthcare AI"
                                    loading="lazy" />
                            </div>
                            <div className="product-text">
                                <h3>Nutrition Co-Pilot</h3>
                                <p>
                                    <strong>Nutrition Co-Pilot</strong> is an AI-powered wellness platform that revolutionizes how individuals and healthcare
                                    providers approach nutrition and health management. This intelligent system provides personalized dietary recommendations
                                    based on individual health profiles, goals, and preferences.
                                </p>
                                <Link to="/products/nutrition-copilot" className="btn btn-primary">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Product 4: News AI */}
                    <div className="product-card" id="news-ai">
                        <div className="product-content reverse">
                            <div className="product-text">
                                <h3>News AI</h3>
                                <p>
                                    <strong>News AI</strong> is an intelligent news aggregation and analysis platform that transforms how organizations and
                                    individuals consume information. It goes beyond simple news feeds to provide curated, analyzed, and contextualized news
                                    insights tailored to your specific interests and needs.
                                </p>
                                <Link to="/products/news-ai" className="btn btn-primary">
                                    Learn More
                                </Link>
                            </div>
                            <div className="product-image">
                                <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80"
                                    alt="News AI - Intelligent News Platform"
                                    loading="lazy" />
                            </div>
                        </div>
                    </div>

                    {/* Product 5: AI Co-pilot (Police) */}
                    <div className="product-card" id="ai-copilot-police">
                        <div className="product-content">
                            <div className="product-image">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                                    alt="AI Co-pilot for Police Department"
                                    loading="lazy" />
                            </div>
                            <div className="product-text">
                                <h3>AI Co-pilot (Police Department)</h3>
                                <p>
                                    The <strong>AI Co-pilot for Police Departments</strong> is a sophisticated public safety tool designed to enhance law
                                    enforcement capabilities while ensuring transparency and accountability. This system assists officers in data analysis,
                                    pattern recognition, resource allocation, and administrative tasks.
                                </p>
                                <Link to="/products/ai-copilot-police" className="btn btn-primary">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Product 6: Personal Finance Co-pilot */}
                    <div className="product-card" id="personal-finance-copilot">
                        <div className="product-content reverse">
                            <div className="product-text">
                                <h3>Personal Finance Co-pilot (Pocket FM)</h3>
                                <p>
                                    The <strong>Personal Finance Co-pilot</strong> is an innovative AI-powered financial advisor designed specifically for
                                    Pocket FM's user base. This intelligent assistant helps users make informed financial decisions, manage budgets, track
                                    expenses, and plan for their financial future—all through an intuitive audio-first interface.
                                </p>
                                <Link to="/products/personal-finance-copilot" className="btn btn-primary">
                                    Learn More
                                </Link>
                            </div>
                            <div className="product-image">
                                <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
                                    alt="Personal Finance Co-pilot"
                                    loading="lazy" />
                            </div>
                        </div>
                    </div>

                    {/* Product 7: UnderWorks */}
                    <div className="product-card" id="underworks">
                        <div className="product-content">
                            <div className="product-image">
                                <img src="https://images.unsplash.com/photo-1504711331083-9c895941bf81?w=800&q=80"
                                    alt="UnderWorks - Education AI Suite"
                                    loading="lazy" />
                            </div>
                            <div className="product-text">
                                <h3>UnderWorks</h3>
                                <p>
                                    <strong>UnderWorks</strong> is a comprehensive AI-powered educational platform that brings together three specialized
                                    co-pilots designed to transform the academic experience: Study Buddy, Lab Technician Co-pilot, and Campus Co-pilot.
                                </p>
                                <Link to="/products/underworks" className="btn btn-primary">
                                    Learn More
                                </Link>
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
                            Interested in Our Products?
                        </h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto var(--spacing-md)', color: 'rgba(255, 255, 255, 0.9)' }}>
                            Let's discuss how our AI solutions can transform your organization. Contact us for a personalized demo.
                        </p>
                        <div className="cta-buttons" style={{ justifyContent: 'center' }}>
                            <Link to="/contact" className="btn btn-primary">Request Demo</Link>
                            <Link to="/services" className="btn btn-outline">Explore Services</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;

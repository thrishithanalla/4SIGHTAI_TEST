import React from 'react';
import { Link } from 'react-router-dom';

const AIEnvelop = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '70vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                        <h1>AI Envelop</h1>
                        <p className="subheadline" style={{ fontSize: '1.4rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: 'var(--spacing-md)' }}>
                            Enterprise AI Infrastructure Solution
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: 'var(--spacing-md)', lineHeight: '1.6' }}>
                            Think of it as an intelligent layer that enhances every aspect of your operations without requiring a complete system overhaul.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Comprehensive Enterprise AI Infrastructure</h2>
                        <p>Transform your enterprise operations with seamless AI integration</p>
                    </div>

                    <div className="grid-2-cols" style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <div>
                            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
                                alt="AI Envelop - Enterprise AI Infrastructure"
                                loading="lazy"
                                style={{ width: '100%', borderRadius: 'var(--border-radius)' }} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>What is AI Envelop?</h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 'var(--spacing-md)' }}>
                                AI Envelop is our flagship enterprise AI infrastructure solution designed to seamlessly wrap around
                                your existing systems and processes. This comprehensive platform enables organizations to integrate AI capabilities across multiple touchpoints—from customer
                                service and data analysis to workflow automation and predictive analytics.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                                AI Envelop adapts to your unique business context, learning from your data and processes to provide increasingly sophisticated insights and automation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient">Key Features</h2>
                        <p>Advanced capabilities that drive enterprise transformation</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🔗</div>
                                <h3>Seamless Integration</h3>
                                <p>
                                    Seamlessly integrates with existing enterprise systems without requiring complete overhauls.
                                    Our modular architecture ensures compatibility with your current infrastructure.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>⚡</div>
                                <h3>Real-time Processing</h3>
                                <p>
                                    Advanced real-time data processing and analytics capabilities that provide instant insights
                                    and enable immediate decision-making across your organization.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🛡️</div>
                                <h3>Advanced Security</h3>
                                <p>
                                    Enterprise-grade security frameworks with advanced encryption, compliance monitoring,
                                    and robust governance protocols to protect your sensitive data.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>📈</div>
                                <h3>Scalable Architecture</h3>
                                <p>
                                    Built for growth with scalable infrastructure that supports increasing workloads and
                                    expanding AI capabilities as your business evolves.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Architecture Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Technical Architecture</h2>
                        <p>Built for enterprise-scale AI deployment</p>
                    </div>

                    <div style={{ background: 'var(--light-gray)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius)', marginBottom: 'var(--spacing-xl)' }}>
                        <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Core Components</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                            <div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Microservices Architecture</h4>
                                <p>Flexible deployment with independent, scalable services that can be updated and maintained separately.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>API-First Design</h4>
                                <p>Comprehensive API ecosystem enabling seamless third-party integrations and custom development.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Multi-Cloud Support</h4>
                                <p>Native support for AWS, Azure, and Google Cloud with hybrid deployment capabilities.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Real-time Streaming</h4>
                                <p>Advanced data streaming capabilities for real-time processing and instant insights delivery.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient">Use Cases</h2>
                        <p>Transforming industries across the enterprise landscape</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Customer Service Automation</h3>
                                <p>Intelligent customer service systems that provide instant responses, personalized recommendations, and seamless support experiences.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Predictive Maintenance</h3>
                                <p>AI-powered asset optimization that predicts maintenance needs, reduces downtime, and extends equipment lifespan.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Supply Chain Intelligence</h3>
                                <p>Advanced analytics for supply chain optimization, demand forecasting, and real-time inventory management.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Document Processing</h3>
                                <p>Automated document analysis, classification, and extraction that transforms unstructured data into actionable insights.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Business Intelligence</h3>
                                <p>Real-time business intelligence and reporting systems that provide instant access to critical performance metrics.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Workflow Automation</h3>
                                <p>Intelligent workflow automation that streamlines processes, reduces manual effort, and improves operational efficiency.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why AI Envelop is Essential</h2>
                        <p>Revolutionary impact on enterprise operations</p>
                    </div>

                    <div className="grid-2-cols">
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Enhanced User Experience</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                AI Envelop makes software applications more accessible and user-friendly, especially for those without specialized knowledge.
                                This natural interaction paradigm removes barriers to technology adoption and enables users of all skill levels to leverage sophisticated AI capabilities.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Increased Efficiency</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                Automating routine tasks and data processing reduces time and resource expenditure by up to 50%.
                                This allows your team to focus on high-value activities that require human creativity and judgment.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Competitive Edge</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                In a market where user experience is key, AI Envelop provides a significant advantage by modernizing and enhancing software capabilities.
                                Organizations using AI Envelop report improved customer satisfaction and higher retention rates.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Future-Readiness</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                As AI continues to shape the technological landscape, having an AI wrapper ensures that software remains relevant and cutting-edge.
                                AI Envelop positions your organization to quickly adopt new AI innovations as they emerge.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section section-dark">
                <div className="container">
                    <div style={{ textAlign: 'center', padding: 'var(--spacing-lg) 0' }}>
                        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>
                            Ready to Transform Your Enterprise?
                        </h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto var(--spacing-md)', color: 'rgba(255, 255, 255, 0.9)' }}>
                            Discover how AI Envelop can revolutionize your operations. Contact our experts for a personalized consultation.
                        </p>
                        <div className="cta-buttons" style={{ justifyContent: 'center' }}>
                            <Link to="/contact" className="btn btn-primary">Request Demo</Link>
                            <Link to="/products" className="btn btn-outline">View All Products</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AIEnvelop;

import React from 'react';
import { Link } from 'react-router-dom';

const AICopilotConsulting = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '70vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                        <h1>AI Co-pilot (Consulting)</h1>
                        <p className="subheadline" style={{ fontSize: '1.4rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: 'var(--spacing-md)' }}>
                            Intelligent Consulting Assistant
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: 'var(--spacing-md)', lineHeight: '1.6' }}>
                            Your AI-powered strategic partner that enhances decision-making, provides data-driven insights, and accelerates consulting outcomes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>AI-Powered Consulting Intelligence</h2>
                        <p>Transform consulting with intelligent automation and strategic insights</p>
                    </div>

                    <div className="grid-2-cols" style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <div>
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                                alt="AI Co-pilot Consulting - Intelligent Consulting Assistant"
                                loading="lazy"
                                style={{ width: '100%', borderRadius: 'var(--border-radius)' }} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>What is AI Co-pilot (Consulting)?</h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 'var(--spacing-md)' }}>
                                AI Co-pilot (Consulting) is an intelligent consulting assistant designed to augment human consultants
                                with AI-powered capabilities. This sophisticated platform combines advanced analytics, machine learning,
                                and natural language processing to provide consultants with unprecedented insights, automation, and strategic guidance.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                                Whether you're conducting market research, analyzing financial data, or developing strategic recommendations,
                                AI Co-pilot (Consulting) serves as your intelligent partner throughout the entire consulting lifecycle.
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
                        <p>Advanced capabilities that redefine consulting excellence</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>📊</div>
                                <h3>Data Analysis & Insights</h3>
                                <p>
                                    Advanced data processing and analysis capabilities that uncover hidden patterns, trends, and insights
                                    from complex datasets to inform strategic recommendations.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>💬</div>
                                <h3>Natural Language Processing</h3>
                                <p>
                                    Sophisticated NLP capabilities for processing unstructured data, generating reports, and facilitating
                                    natural communication between consultants and clients.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🎯</div>
                                <h3>Strategic Recommendations</h3>
                                <p>
                                    AI-driven strategic analysis that provides data-backed recommendations, risk assessments, and
                                    implementation roadmaps tailored to specific business contexts.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>⚡</div>
                                <h3>Automation & Efficiency</h3>
                                <p>
                                    Intelligent automation of routine consulting tasks, allowing consultants to focus on high-value
                                    strategic activities and client relationships.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consulting Workflow Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Consulting Workflow Integration</h2>
                        <p>Seamlessly integrated into every phase of the consulting process</p>
                    </div>

                    <div style={{ background: 'var(--light-gray)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius)', marginBottom: 'var(--spacing-xl)' }}>
                        <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>End-to-End Consulting Support</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🔍</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Discovery & Analysis</h4>
                                <p>Automated data collection, stakeholder interviews, and initial analysis to establish project scope and objectives.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>📈</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Market Research</h4>
                                <p>Comprehensive market analysis, competitive intelligence, and industry benchmarking with real-time data insights.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>💡</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Strategy Development</h4>
                                <p>AI-assisted strategy formulation, scenario planning, and recommendation development with risk assessment.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>📋</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Implementation Planning</h4>
                                <p>Detailed implementation roadmaps, resource planning, and change management strategies with timeline optimization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient">Consulting Use Cases</h2>
                        <p>Transforming consulting across industries and domains</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Management Consulting</h3>
                                <p>Strategic planning, organizational design, and operational efficiency improvements with data-driven insights and automated analysis.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Financial Advisory</h3>
                                <p>Financial modeling, risk assessment, and investment analysis with real-time market data and predictive analytics.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Technology Consulting</h3>
                                <p>Digital transformation strategies, technology assessments, and implementation planning with technical expertise augmentation.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>HR Consulting</h3>
                                <p>Talent management, organizational development, and change management with predictive analytics and employee insights.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Marketing Consulting</h3>
                                <p>Market research, customer segmentation, and campaign optimization with consumer behavior analysis and predictive modeling.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Operations Consulting</h3>
                                <p>Process optimization, supply chain analysis, and performance improvement with operational data analytics and automation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why AI Co-pilot (Consulting) Matters</h2>
                        <p>Elevating consulting to new levels of excellence</p>
                    </div>

                    <div className="grid-2-cols">
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Enhanced Decision Quality</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                AI Co-pilot (Consulting) processes vast amounts of data and considers multiple variables simultaneously,
                                leading to more comprehensive and accurate recommendations. This data-driven approach reduces bias and increases confidence in strategic decisions.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Accelerated Delivery</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                Automation of routine analysis and reporting tasks allows consultants to deliver projects faster while maintaining high quality.
                                This efficiency enables consultants to take on more complex engagements and provide more value to clients.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Competitive Advantage</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                Organizations using AI Co-pilot (Consulting) can offer more sophisticated services at competitive rates,
                                differentiating themselves in a crowded consulting market. The ability to process and analyze data at scale provides unique insights that competitors cannot match.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Scalable Expertise</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                AI Co-pilot (Consulting) makes expert-level consulting capabilities accessible to a broader range of consultants,
                                enabling firms to scale their services without proportional increases in staffing costs.
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
                            Elevate Your Consulting Practice
                        </h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto var(--spacing-md)', color: 'rgba(255, 255, 255, 0.9)' }}>
                            Discover how AI Co-pilot (Consulting) can transform your consulting approach. Contact our experts for a personalized demonstration.
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

export default AICopilotConsulting;

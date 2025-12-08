import React from 'react';
import { Link } from 'react-router-dom';

const GenAIAdvisory = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '70vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                        <h1>GenAI Advisory</h1>
                        <p className="subheadline" style={{ fontSize: '1.4rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: 'var(--spacing-md)' }}>
                            Strategic Generative AI Guidance
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: 'var(--spacing-md)', lineHeight: '1.6' }}>
                            Strategic guidance on integrating Generative AI into your business operations, identifying high-impact use cases and creating actionable roadmaps.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Expert Generative AI Strategy</h2>
                        <p>Transform your business with strategic AI integration</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
                        <div>
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                                alt="GenAI Advisory - Strategic Generative AI Guidance"
                                loading="lazy"
                                style={{ width: '100%', borderRadius: 'var(--border-radius)' }} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>What is GenAI Advisory?</h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 'var(--spacing-md)' }}>
                                GenAI Advisory is our comprehensive consulting service designed to help enterprises navigate the complex
                                landscape of Generative AI adoption. Our expert consultants combine deep technical knowledge with business
                                acumen to identify high-impact opportunities, assess organizational readiness, and develop strategic roadmaps
                                for successful AI integration.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                                From initial assessment to full-scale implementation, we provide end-to-end guidance to ensure your GenAI
                                initiatives deliver measurable business value and competitive advantage.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Components Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient">Service Components</h2>
                        <p>Comprehensive advisory framework for GenAI success</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🔍</div>
                                <h3>AI Readiness Assessment</h3>
                                <p>
                                    Comprehensive evaluation of your organization's current AI capabilities, data infrastructure,
                                    and cultural readiness for GenAI adoption.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🎯</div>
                                <h3>Use Case Identification</h3>
                                <p>
                                    Strategic analysis to identify high-impact GenAI applications specific to your industry,
                                    processes, and business objectives.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>📊</div>
                                <h3>ROI Analysis & Business Case</h3>
                                <p>
                                    Detailed financial modeling and business case development to quantify the value proposition
                                    and justify GenAI investments.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🗺️</div>
                                <h3>Strategic Roadmap Development</h3>
                                <p>
                                    Creation of phased implementation roadmaps with clear milestones, resource requirements,
                                    and success metrics for GenAI initiatives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advisory Process Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Advisory Process</h2>
                        <p>Structured approach to successful GenAI adoption</p>
                    </div>

                    <div style={{ background: 'var(--light-gray)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius)', marginBottom: 'var(--spacing-xl)' }}>
                        <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Phased Implementation Framework</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>1️⃣</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Discovery & Assessment</h4>
                                <p>Initial consultation to understand your business objectives, current capabilities, and GenAI aspirations.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>2️⃣</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Strategic Analysis</h4>
                                <p>Deep-dive analysis of your industry, competitive landscape, and potential GenAI applications.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>3️⃣</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Solution Design</h4>
                                <p>Development of customized GenAI strategies, use cases, and implementation approaches.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>4️⃣</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Roadmap & Execution</h4>
                                <p>Creation of detailed implementation plans with timelines, resources, and success metrics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Applications Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient">Industry Applications</h2>
                        <p>Tailored GenAI strategies across sectors</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Financial Services</h3>
                                <p>Risk assessment, algorithmic trading, personalized financial advice, and automated compliance reporting with GenAI-powered insights.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Healthcare & Life Sciences</h3>
                                <p>Drug discovery, personalized treatment plans, medical imaging analysis, and clinical trial optimization using GenAI technologies.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Manufacturing & Industry</h3>
                                <p>Predictive maintenance, quality control, supply chain optimization, and industrial automation with GenAI-driven intelligence.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Retail & E-commerce</h3>
                                <p>Personalized shopping experiences, inventory management, demand forecasting, and customer service automation.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Media & Entertainment</h3>
                                <p>Content creation, audience analysis, personalized recommendations, and automated content moderation systems.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Professional Services</h3>
                                <p>Legal research, contract analysis, consulting intelligence, and knowledge management with GenAI assistance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Choose Our GenAI Advisory?</h2>
                        <p>Expert guidance for successful AI transformation</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)' }}>
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Proven Track Record</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                Our consultants bring extensive experience from successful GenAI implementations across diverse industries.
                                We understand the challenges and opportunities of AI adoption and have developed proven methodologies for success.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Technical Excellence</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                Deep technical expertise combined with business acumen ensures that our recommendations are both
                                technologically sound and commercially viable.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Practical Approach</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                We focus on actionable insights and practical implementation rather than theoretical concepts.
                                Our roadmaps are designed for real-world execution with clear milestones and measurable outcomes.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Ongoing Support</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                Our relationship doesn't end with the delivery of recommendations. We provide ongoing support
                                throughout implementation and help you adapt strategies as the AI landscape evolves.
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
                            Start Your GenAI Journey
                        </h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto var(--spacing-md)', color: 'rgba(255, 255, 255, 0.9)' }}>
                            Ready to harness the power of Generative AI? Our experts are here to guide you every step of the way.
                        </p>
                        <div className="cta-buttons" style={{ justifyContent: 'center' }}>
                            <Link to="/contact" className="btn btn-primary">Schedule Consultation</Link>
                            <Link to="/services" className="btn btn-outline">View All Services</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GenAIAdvisory;

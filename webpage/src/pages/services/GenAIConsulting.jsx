import React from 'react';
import { Link } from 'react-router-dom';

const GenAIConsulting = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '70vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                        <h1>GenAI Consulting</h1>
                        <p className="subheadline" style={{ fontSize: '1.4rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: 'var(--spacing-md)' }}>
                            Strategic AI Implementation
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: 'var(--spacing-md)', lineHeight: '1.6' }}>
                            End-to-end Generative AI consulting services including strategy development, implementation, deployment, and ongoing support for enterprise AI transformation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Comprehensive AI Transformation</h2>
                        <p>From strategy to production deployment</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
                        <div>
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                                alt="GenAI Consulting - Strategic AI Implementation"
                                loading="lazy"
                                style={{ width: '100%', borderRadius: 'var(--border-radius)' }} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>What is GenAI Consulting?</h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 'var(--spacing-md)' }}>
                                GenAI Consulting represents our full-service approach to Generative AI implementation. We provide
                                comprehensive consulting services that guide enterprises through every phase of their AI transformation
                                journey, from initial strategy development to production deployment and ongoing optimization.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                                Our experienced consultants combine deep technical expertise with business acumen to ensure that
                                your GenAI initiatives not only deliver cutting-edge capabilities but also drive measurable business
                                value and competitive advantage.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Components Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient">Consulting Services</h2>
                        <p>End-to-end AI implementation support</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🎯</div>
                                <h3>AI Strategy Development</h3>
                                <p>
                                    Comprehensive AI strategy formulation including use case identification, ROI analysis,
                                    technology roadmap, and organizational readiness assessment.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>⚙️</div>
                                <h3>Technical Implementation</h3>
                                <p>
                                    Full-stack AI implementation including model development, data pipeline construction,
                                    integration with existing systems, and production deployment.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>👥</div>
                                <h3>Change Management</h3>
                                <p>
                                    Organizational change management including training programs, adoption strategies,
                                    and cultural transformation to ensure successful AI integration.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>📊</div>
                                <h3>Performance Monitoring</h3>
                                <p>
                                    Ongoing performance monitoring, optimization, and maintenance services to ensure
                                    sustained AI system effectiveness and continuous improvement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consulting Process Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Consulting Process</h2>
                        <p>Structured methodology for successful AI implementation</p>
                    </div>

                    <div style={{ background: 'var(--light-gray)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius)', marginBottom: 'var(--spacing-xl)' }}>
                        <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Enterprise AI Transformation Framework</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🔍</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Assessment & Planning</h4>
                                <p>Comprehensive assessment of current capabilities, identification of AI opportunities, and development of strategic roadmap.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🏗️</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Design & Architecture</h4>
                                <p>Technical architecture design, data strategy development, and integration planning for scalable AI solutions.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🚀</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Implementation & Deployment</h4>
                                <p>Agile development, rigorous testing, and production deployment with comprehensive quality assurance processes.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🔄</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Optimization & Support</h4>
                                <p>Continuous monitoring, performance optimization, user training, and ongoing support for sustained success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Expertise Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient">Industry Expertise</h2>
                        <p>Tailored consulting for diverse sectors</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Financial Services</h3>
                                <p>Regulatory compliance, risk management, algorithmic trading, personalized wealth management, and fraud detection systems.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Healthcare & Life Sciences</h3>
                                <p>Clinical decision support, drug discovery, personalized medicine, medical imaging analysis, and healthcare administration.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Manufacturing & Industry</h3>
                                <p>Predictive maintenance, quality control, supply chain optimization, industrial automation, and smart manufacturing.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Retail & E-commerce</h3>
                                <p>Personalized recommendations, inventory optimization, dynamic pricing, customer service automation, and market analysis.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Technology & Software</h3>
                                <p>Code generation, automated testing, user experience design, product development acceleration, and technical documentation.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Professional Services</h3>
                                <p>Legal research automation, contract analysis, consulting intelligence, knowledge management, and business process automation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Choose Our GenAI Consulting?</h2>
                        <p>Expert guidance for enterprise AI success</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)' }}>
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Proven Track Record</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                Extensive experience across industries with successful AI implementations that deliver measurable
                                business outcomes and competitive advantages.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Full-Service Support</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                Comprehensive consulting services covering every aspect of AI implementation, from strategy
                                to ongoing optimization, ensuring complete project success.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Technical Excellence</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                Deep technical expertise combined with practical implementation experience ensures robust,
                                scalable, and maintainable AI solutions.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Business Alignment</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                Strong focus on business value ensures that AI initiatives align with organizational objectives,
                                deliver ROI, and support long-term strategic goals.
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
                            Transform Your Business with AI
                        </h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto var(--spacing-md)', color: 'rgba(255, 255, 255, 0.9)' }}>
                            Ready to harness the power of Generative AI? Our consulting experts are here to guide your enterprise AI transformation.
                        </p>
                        <div className="cta-buttons" style={{ justifyContent: 'center' }}>
                            <Link to="/contact" className="btn btn-primary">Start Consulting</Link>
                            <Link to="/services" className="btn btn-outline">View All Services</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GenAIConsulting;

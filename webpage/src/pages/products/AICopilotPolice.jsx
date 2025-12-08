import React from 'react';
import { Link } from 'react-router-dom';

const AICopilotPolice = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '70vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                        <h1>AI Co-pilot (Police)</h1>
                        <p className="subheadline" style={{ fontSize: '1.4rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: 'var(--spacing-md)' }}>
                            Law Enforcement AI Assistant
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: 'var(--spacing-md)', lineHeight: '1.6' }}>
                            Intelligent AI assistant designed to support police operations with data analysis, pattern recognition, and evidence-based decision-making.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>AI-Powered Law Enforcement Support</h2>
                        <p>Enhancing public safety through intelligent technology</p>
                    </div>

                    <div className="grid-2-cols" style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <div>
                            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                                alt="AI Co-pilot Police - Law Enforcement AI Assistant"
                                loading="lazy"
                                style={{ width: '100%', borderRadius: 'var(--border-radius)' }} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>What is AI Co-pilot (Police)?</h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 'var(--spacing-md)' }}>
                                AI Co-pilot (Police) is a specialized AI assistant designed specifically for law enforcement agencies.
                                This intelligent system combines advanced data analytics, pattern recognition, and predictive modeling
                                to support police officers in their daily operations, investigations, and decision-making processes.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                                Built with a focus on public safety and ethical AI principles, AI Co-pilot (Police) serves as a
                                reliable partner that enhances officer capabilities while maintaining human judgment and accountability
                                in all critical decisions.
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
                        <p>Advanced capabilities for modern law enforcement</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🔍</div>
                                <h3>Crime Pattern Analysis</h3>
                                <p>
                                    Advanced pattern recognition algorithms that identify crime trends, hotspots, and predictive
                                    patterns to optimize resource allocation and preventive measures.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>📊</div>
                                <h3>Real-time Intelligence</h3>
                                <p>
                                    Real-time data processing and analysis from multiple sources including surveillance systems,
                                    public records, and community reports for immediate situational awareness.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🎯</div>
                                <h3>Risk Assessment</h3>
                                <p>
                                    Intelligent risk assessment tools that evaluate threat levels, prioritize responses, and
                                    provide decision support for high-stakes situations.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>📋</div>
                                <h3>Investigation Support</h3>
                                <p>
                                    Automated evidence correlation, witness statement analysis, and case file organization
                                    to accelerate investigations and improve case resolution rates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Law Enforcement Applications Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Applications in Law Enforcement</h2>
                        <p>Supporting police operations across multiple domains</p>
                    </div>

                    <div style={{ background: 'var(--light-gray)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius)', marginBottom: 'var(--spacing-xl)' }}>
                        <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Comprehensive Police Support System</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                            <div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Patrol Optimization</h4>
                                <p>Dynamic patrol route optimization based on real-time crime data, historical patterns, and community needs for maximum preventive impact.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Emergency Response</h4>
                                <p>Intelligent prioritization of emergency calls and optimal resource deployment based on incident severity, location, and response times.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Community Policing</h4>
                                <p>Data-driven insights for community engagement strategies, identifying at-risk areas, and developing targeted intervention programs.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Traffic Management</h4>
                                <p>Real-time traffic analysis, accident prediction, and automated citation processing to improve road safety and traffic flow.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient">Law Enforcement Use Cases</h2>
                        <p>Transforming police operations and public safety</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Criminal Investigation</h3>
                                <p>Advanced case analysis with evidence correlation, suspect profiling, and investigative lead generation using machine learning algorithms.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Crime Prevention</h3>
                                <p>Predictive policing models that identify potential crime hotspots and enable proactive deployment of preventive resources.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Resource Management</h3>
                                <p>Optimal allocation of police personnel, vehicles, and equipment based on real-time demand patterns and historical data.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Public Safety Monitoring</h3>
                                <p>Continuous monitoring of public spaces with automated anomaly detection and immediate alert generation for potential threats.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Intelligence Analysis</h3>
                                <p>Comprehensive intelligence gathering and analysis from multiple sources with automated report generation and threat assessment.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Administrative Support</h3>
                                <p>Automated report writing, case file management, and administrative task optimization to allow officers to focus on field work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why AI Co-pilot (Police) Matters</h2>
                        <p>Advancing public safety through intelligent technology</p>
                    </div>

                    <div className="grid-2-cols">
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Enhanced Officer Safety</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                AI Co-pilot (Police) provides officers with real-time situational awareness and risk assessment,
                                enabling them to make informed decisions that prioritize personal safety and public protection.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Improved Response Times</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                Intelligent call prioritization and resource optimization significantly reduce response times
                                to emergencies, potentially saving lives and preventing crime escalation.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Data-Driven Policing</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                Evidence-based decision-making replaces intuition with data-driven insights, leading to more
                                effective policing strategies and better allocation of limited resources.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Community Trust</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                Transparent and accountable AI systems help build community trust by ensuring fair and
                                unbiased application of law enforcement resources and decision-making.
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
                            Enhance Public Safety
                        </h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto var(--spacing-md)', color: 'rgba(255, 255, 255, 0.9)' }}>
                            Discover how AI Co-pilot (Police) can transform your law enforcement operations. Contact our experts for a secure demonstration.
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

export default AICopilotPolice;

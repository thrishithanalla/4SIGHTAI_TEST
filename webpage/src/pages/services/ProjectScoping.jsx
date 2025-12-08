import React from 'react';
import { Link } from 'react-router-dom';

const ProjectScoping = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '70vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                        <h1>Project Scoping & Blueprint</h1>
                        <p className="subheadline" style={{ fontSize: '1.4rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: 'var(--spacing-md)' }}>
                            AI Project Planning Excellence
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: 'var(--spacing-md)', lineHeight: '1.6' }}>
                            Comprehensive scoping and blueprinting services for successful AI implementations, ensuring clear objectives, realistic timelines, and measurable outcomes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Strategic AI Project Planning</h2>
                        <p>Foundation for successful AI implementation</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
                        <div>
                            <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80"
                                alt="Project Scoping & Blueprint - AI Project Planning"
                                loading="lazy"
                                style={{ width: '100%', borderRadius: 'var(--border-radius)' }} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>What is Project Scoping & Blueprint?</h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 'var(--spacing-md)' }}>
                                Project Scoping & Blueprint is our comprehensive planning service that transforms AI aspirations into
                                actionable, well-defined projects. We conduct thorough analysis of your requirements, constraints, and
                                objectives to create detailed technical and business blueprints that serve as the foundation for successful
                                AI implementations.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                                Our systematic approach ensures that every aspect of your AI project is carefully considered, from
                                technical architecture and data requirements to business processes and success metrics, minimizing
                                risks and maximizing the likelihood of successful outcomes.
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
                        <p>Comprehensive planning framework for AI projects</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🎯</div>
                                <h3>Requirements Analysis</h3>
                                <p>
                                    Detailed analysis of business requirements, technical constraints, and success criteria
                                    to establish clear project objectives and scope boundaries.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>📊</div>
                                <h3>Technical Architecture Design</h3>
                                <p>
                                    Comprehensive technical blueprint including data architecture, AI model specifications,
                                    integration points, and infrastructure requirements.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>⏱️</div>
                                <h3>Project Timeline & Milestones</h3>
                                <p>
                                    Realistic project timelines with clearly defined milestones, dependencies, and critical
                                    path analysis for effective project management.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>💰</div>
                                <h3>Resource & Budget Planning</h3>
                                <p>
                                    Detailed resource allocation plans and budget estimates including personnel, technology,
                                    and infrastructure costs for the entire project lifecycle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Planning Process Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Planning Process</h2>
                        <p>Systematic approach to project success</p>
                    </div>

                    <div style={{ background: 'var(--light-gray)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius)', marginBottom: 'var(--spacing-xl)' }}>
                        <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Comprehensive Project Planning Framework</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🔍</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Discovery & Analysis</h4>
                                <p>Deep understanding of your business context, current capabilities, and AI objectives through stakeholder interviews and data assessment.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>📋</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Requirements Definition</h4>
                                <p>Clear articulation of functional and non-functional requirements, success metrics, and acceptance criteria for the AI solution.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🏗️</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Solution Architecture</h4>
                                <p>Design of technical architecture, data pipelines, AI models, and integration patterns that meet your specific requirements.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>📅</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Implementation Planning</h4>
                                <p>Detailed project plan with timelines, resource allocation, risk mitigation strategies, and quality assurance processes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deliverables Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient">Key Deliverables</h2>
                        <p>Comprehensive documentation for project success</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Project Charter</h3>
                                <p>Formal project documentation defining scope, objectives, stakeholders, and success criteria with executive sponsorship.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Technical Blueprint</h3>
                                <p>Detailed technical specifications including architecture diagrams, data models, API specifications, and integration requirements.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Risk Assessment</h3>
                                <p>Comprehensive risk analysis with mitigation strategies, contingency plans, and risk monitoring frameworks.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Implementation Roadmap</h3>
                                <p>Phased implementation plan with detailed timelines, resource requirements, and success metrics for each project phase.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Success Metrics Framework</h3>
                                <p>Comprehensive measurement framework defining KPIs, success criteria, and evaluation methodologies for project outcomes.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Change Management Plan</h3>
                                <p>Organizational change management strategy including training plans, communication strategies, and adoption frameworks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Choose Our Scoping Services?</h2>
                        <p>Expert planning for AI project success</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)' }}>
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Risk Mitigation</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                Thorough planning identifies potential risks and challenges early, allowing for proactive mitigation
                                strategies that prevent costly delays and project failures.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Resource Optimization</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                Accurate resource planning ensures optimal allocation of budget, personnel, and technology,
                                maximizing ROI and minimizing waste.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Stakeholder Alignment</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                Clear project documentation and communication plans ensure all stakeholders understand objectives,
                                roles, and expectations from the outset.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Scalable Foundation</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                Well-designed blueprints provide a solid foundation for future scaling and expansion,
                                ensuring long-term success and adaptability.
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
                            Plan Your AI Success
                        </h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto var(--spacing-md)', color: 'rgba(255, 255, 255, 0.9)' }}>
                            Don't leave your AI project's success to chance. Let our experts create a comprehensive blueprint for your implementation.
                        </p>
                        <div className="cta-buttons" style={{ justifyContent: 'center' }}>
                            <Link to="/contact" className="btn btn-primary">Start Project Planning</Link>
                            <Link to="/services" className="btn btn-outline">View All Services</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectScoping;

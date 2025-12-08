import React, { useEffect } from 'react';

const About = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '60vh' }}>
                <div className="morphing-blob"></div>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                        <h1 className="explosive-text">About 4sight AI</h1>
                        <p className="subheadline" style={{ fontSize: '1.3rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: 'var(--spacing-md)' }}>
                            Pioneering the future of enterprise intelligence through cutting-edge Generative AI solutions
                        </p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="section" id="about">
                <div className="container">
                    <div className="section-header">
                        <h2 className="explosive-text">Who We Are</h2>
                    </div>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div className="grid-2-cols" style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <div className="card-3d-effect">
                                <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80"
                                    alt="4sight AI Team and Innovation"
                                    style={{ borderRadius: 'var(--border-radius)', boxShadow: 'var(--boxShadow)' }}
                                    loading="lazy" />
                            </div>
                            <div>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--gray)' }}>
                                    Welcome to <strong>4sight AI</strong>, a Bangalore-based AI innovation firm at the forefront of the Generative AI revolution.
                                    We specialize in transforming enterprises across diverse industries—including technology, healthcare, education, and public services—through
                                    intelligent automation and cutting-edge AI solutions.
                                </p>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--gray)', marginTop: 'var(--spacing-sm)' }}>
                                    Our mission is to empower organizations to harness the full potential of AI, driving operational efficiency, enhancing decision-making,
                                    and unlocking new possibilities for innovation.
                                </p>
                            </div>
                        </div>

                        <div style={{ background: 'var(--light-gray)', padding: 'var(--spacing-lg)', borderRadius: 'var(--border-radius)', borderLeft: '4px solid var(--secondary-cyan)' }}>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--gray)' }}>
                                With a portfolio spanning <strong>seven industries</strong>, we have successfully deployed AI solutions across multiple sectors,
                                with several more projects in active development and blueprinting phases. Our team has invested over <strong>10,000 research hours</strong>
                                into understanding the nuances of enterprise AI adoption, resulting in solutions that deliver up to <strong>60% productivity increases</strong>
                                for our clients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="section section-dark" id="vision">
                <div className="morphing-blob"></div>
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient explosive-text">Our Vision</h2>
                        <p>Shaping the intelligent enterprise of tomorrow</p>
                    </div>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <div className="grid-2-cols">
                            <div>
                                <blockquote style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.8, padding: 'var(--spacing-md)', borderLeft: '4px solid var(--secondary-cyan)', background: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--border-radius)' }}>
                                    "In a world where the utility of Artificial Intelligence is increasingly indisputable, we envision a future where AI is not just
                                    a tool but an integral partner in every enterprise operation."
                                </blockquote>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.8)', marginTop: 'var(--spacing-md)' }}>
                                    We see a landscape where businesses seamlessly integrate AI across all operations, from customer engagement to supply chain optimization,
                                    from strategic planning to real-time decision-making.
                                </p>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255, 255, 255, 0.8)', marginTop: 'var(--spacing-sm)' }}>
                                    Our vision extends beyond narrow AI applications to the realm of <strong>Artificial General Intelligence (AGI)</strong>, where systems
                                    can adapt, learn, and innovate alongside human teams, unlocking unprecedented levels of efficiency and creativity.
                                </p>
                            </div>
                            <div className="card-3d-effect">
                                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                                    alt="Future of AI Technology"
                                    style={{ borderRadius: 'var(--border-radius)', boxShadow: 'var(--boxShadow)' }}
                                    loading="lazy" />
                            </div>
                        </div>

                        <div style={{ marginTop: 'var(--spacing-lg)', padding: 'var(--spacing-lg)', background: 'rgba(0, 229, 255, 0.05)', borderRadius: 'var(--border-radius)', backdropFilter: 'blur(10px)' }}>
                            <h3 style={{ color: 'var(--white)', textAlign: 'center', marginBottom: 'var(--spacing-md)' }} className="explosive-text">Key Pillars of Our Vision</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-md)' }}>
                                <div className="card-3d-effect" style={{ textAlign: 'center', padding: 'var(--spacing-md)' }}>
                                    <div className="morphing-icon" style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🎯</div>
                                    <h4 style={{ color: 'var(--secondary-cyan)', marginBottom: 'var(--spacing-xs)' }}>Strategic Integration</h4>
                                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>AI embedded in every business process and decision point</p>
                                </div>
                                <div className="card-3d-effect" style={{ textAlign: 'center', padding: 'var(--spacing-md)' }}>
                                    <div className="morphing-icon" style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🚀</div>
                                    <h4 style={{ color: 'var(--secondary-cyan)', marginBottom: 'var(--spacing-xs)' }}>Continuous Innovation</h4>
                                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>Always evolving with the latest AI advancements</p>
                                </div>
                                <div className="card-3d-effect" style={{ textAlign: 'center', padding: 'var(--spacing-md)' }}>
                                    <div className="morphing-icon" style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🤝</div>
                                    <h4 style={{ color: 'var(--secondary-cyan)', marginBottom: 'var(--spacing-xs)' }}>Human-AI Collaboration</h4>
                                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>Enhancing human capabilities, not replacing them</p>
                                </div>
                                <div className="card-3d-effect" style={{ textAlign: 'center', padding: 'var(--spacing-md)' }}>
                                    <div className="morphing-icon" style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🌐</div>
                                    <h4 style={{ color: 'var(--secondary-cyan)', marginBottom: 'var(--spacing-xs)' }}>Universal Accessibility</h4>
                                    <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>AI solutions accessible to organizations of all sizes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="section" id="approach">
                <div className="floating-particles"></div>
                <div className="container">
                    <div className="section-header">
                        <h2 className="explosive-text">Our Approach</h2>
                        <p>A systematic methodology for AI transformation</p>
                    </div>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--gray)', textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--spacing-lg)' }}>
                            At 4sight AI, we believe in a methodical, phased approach to AI adoption. We understand that successful AI transformation
                            requires more than just technology—it demands strategic planning, organizational alignment, and continuous evolution.
                        </p>

                        {/* Timeline/Process Steps */}
                        <div style={{ position: 'relative', padding: 'var(--spacing-lg) 0' }}>
                            {/* Phase 1 */}
                            <div className="grid-2-cols mobile-order-reset" style={{ marginBottom: 'var(--spacing-xl)' }}>
                                <div className="card card-3d-effect" style={{ order: 1 }}>
                                    <div className="card-image">
                                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                                            alt="AI Audit and Analysis"
                                            loading="lazy" />
                                    </div>
                                    <div className="card-content">
                                        <div style={{ display: 'inline-block', background: 'var(--gradient-primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: 600, marginBottom: 'var(--spacing-sm)' }}>
                                            Phase 1
                                        </div>
                                        <h3>Comprehensive AI Audit</h3>
                                        <p>
                                            We begin by conducting a thorough assessment of your current operations, identifying opportunities where AI can
                                            deliver maximum value. This includes analyzing workflows, data infrastructure, pain points, and strategic objectives.
                                        </p>
                                        <ul style={{ marginTop: 'var(--spacing-sm)', paddingLeft: '1.5rem', color: 'var(--gray)' }}>
                                            <li>Process mapping and bottleneck identification</li>
                                            <li>Data readiness assessment</li>
                                            <li>Use case prioritization matrix</li>
                                            <li>ROI projections and feasibility analysis</li>
                                        </ul>
                                    </div>
                                </div>
                                <div style={{ order: 2, textAlign: 'center' }}>
                                    <div className="morphing-icon" style={{ fontSize: '5rem', color: 'var(--secondary-cyan)' }}>📊</div>
                                </div>
                            </div>

                            {/* Phase 2 */}
                            <div className="grid-2-cols mobile-order-reset" style={{ marginBottom: 'var(--spacing-xl)' }}>
                                <div style={{ order: 2, textAlign: 'center' }}>
                                    <div className="morphing-icon" style={{ fontSize: '5rem', color: 'var(--secondary-cyan)' }}>🔄</div>
                                </div>
                                <div className="card card-3d-effect" style={{ order: 1 }}>
                                    <div className="card-image">
                                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                                            alt="AI Transition Planning"
                                            loading="lazy" />
                                    </div>
                                    <div className="card-content">
                                        <div style={{ display: 'inline-block', background: 'var(--gradient-primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: 600, marginBottom: 'var(--spacing-sm)' }}>
                                            Phase 2
                                        </div>
                                        <h3>Strategic AI Transition</h3>
                                        <p>
                                            Based on audit findings, we design a customized AI roadmap that aligns with your business goals. We develop
                                            proof-of-concepts (POCs) to validate approaches before full-scale implementation.
                                        </p>
                                        <ul style={{ marginTop: 'var(--spacing-sm)', paddingLeft: '1.5rem', color: 'var(--gray)' }}>
                                            <li>AI architecture design and technology selection</li>
                                            <li>Rapid POC development and validation</li>
                                            <li>Change management and training programs</li>
                                            <li>Integration with existing systems</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Phase 3 */}
                            <div className="grid-2-cols mobile-order-reset" style={{ marginBottom: 'var(--spacing-xl)' }}>
                                <div className="card card-3d-effect" style={{ order: 1 }}>
                                    <div className="card-image">
                                        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                                            alt="Full Scale Automation"
                                            loading="lazy" />
                                    </div>
                                    <div className="card-content">
                                        <div style={{ display: 'inline-block', background: 'var(--gradient-primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: 600, marginBottom: 'var(--spacing-sm)' }}>
                                            Phase 3
                                        </div>
                                        <h3>Full-Scale Automation</h3>
                                        <p>
                                            With validated POCs, we scale AI solutions across your organization, implementing robust automation that
                                            transforms operations while maintaining human oversight and control.
                                        </p>
                                        <ul style={{ marginTop: 'var(--spacing-sm)', paddingLeft: '1.5rem', color: 'var(--gray)' }}>
                                            <li>Enterprise-wide deployment and scaling</li>
                                            <li>Performance monitoring and optimization</li>
                                            <li>Continuous improvement cycles</li>
                                            <li>Knowledge transfer and capability building</li>
                                        </ul>
                                    </div>
                                </div>
                                <div style={{ order: 2, textAlign: 'center' }}>
                                    <div className="morphing-icon" style={{ fontSize: '5rem', color: 'var(--secondary-cyan)' }}>⚡</div>
                                </div>
                            </div>

                            {/* Phase 4 */}
                            <div className="grid-2-cols mobile-order-reset">
                                <div style={{ order: 2, textAlign: 'center' }}>
                                    <div className="morphing-icon" style={{ fontSize: '5rem', color: 'var(--secondary-cyan)' }}>🧠</div>
                                </div>
                                <div className="card card-3d-effect" style={{ order: 1 }}>
                                    <div className="card-image">
                                        <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80"
                                            alt="AGI Integration"
                                            loading="lazy" />
                                    </div>
                                    <div className="card-content">
                                        <div style={{ display: 'inline-block', background: 'var(--gradient-primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: 600, marginBottom: 'var(--spacing-sm)' }}>
                                            Phase 4
                                        </div>
                                        <h3>AGI Evolution</h3>
                                        <p>
                                            The final phase envisions the integration of more advanced AI systems capable of general intelligence,
                                            adapting to new challenges and continuously learning from your unique business context.
                                        </p>
                                        <ul style={{ marginTop: 'var(--spacing-sm)', paddingLeft: '1.5rem', color: 'var(--gray)' }}>
                                            <li>Advanced model fine-tuning and customization</li>
                                            <li>Autonomous decision-making frameworks</li>
                                            <li>Cross-functional AI orchestration</li>
                                            <li>Future-proofing and technology evolution</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient explosive-text">Why Choose 4sight AI</h2>
                        <p>What sets us apart in the AI landscape</p>
                    </div>
                    <div className="card-grid">
                        <div className="card card-dark morphing-border">
                            <div className="card-content">
                                <div className="morphing-icon" style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🎓</div>
                                <h3>Deep Expertise</h3>
                                <p>
                                    Over 10,000 research hours invested in understanding AI applications across industries, ensuring you benefit
                                    from proven methodologies and best practices.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark morphing-border">
                            <div className="card-content">
                                <div className="morphing-icon" style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>📈</div>
                                <h3>Proven Results</h3>
                                <p>
                                    Our solutions have delivered up to 60% productivity increases for clients, with successful deployments
                                    across 7 industries and multiple ongoing projects.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark morphing-border">
                            <div className="card-content">
                                <div className="morphing-icon" style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🔧</div>
                                <h3>End-to-End Support</h3>
                                <p>
                                    From initial audit to full-scale deployment and beyond, we provide comprehensive support at every stage
                                    of your AI transformation journey.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark morphing-border">
                            <div className="card-content">
                                <div className="morphing-icon" style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🌟</div>
                                <h3>Innovation Focus</h3>
                                <p>
                                    We stay at the cutting edge of Generative AI developments, ensuring your solutions leverage the latest
                                    advancements in the field.
                                </p>
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
                            Ready to Transform Your Enterprise?
                        </h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto var(--spacing-md)', color: 'rgba(255, 255, 255, 0.9)' }}>
                            Join leading organizations that have already embarked on their AI transformation journey with 4sight AI.
                            Let's discuss how we can accelerate your digital evolution.
                        </p>
                        <div className="cta-buttons" style={{ justifyContent: 'center' }}>
                            <a href="/contact" className="btn btn-primary">Start Your AI Journey</a>
                            <a href="/services" className="btn btn-outline">Explore Our Services</a>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default About;

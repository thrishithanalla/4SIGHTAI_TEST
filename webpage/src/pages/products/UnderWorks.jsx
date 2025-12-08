import React from 'react';
import { Link } from 'react-router-dom';

const UnderWorks = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '70vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                        <h1>UnderWorks</h1>
                        <p className="subheadline" style={{ fontSize: '1.4rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: 'var(--spacing-md)' }}>
                            AI Development Platform
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: 'var(--spacing-md)', lineHeight: '1.6' }}>
                            Advanced AI development platform featuring cutting-edge solutions and emerging technologies currently in development.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Next-Generation AI Development</h2>
                        <p>Innovative AI solutions shaping the future</p>
                    </div>

                    <div className="grid-2-cols" style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <div>
                            <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80"
                                alt="UnderWorks - AI Development Platform"
                                loading="lazy"
                                style={{ width: '100%', borderRadius: 'var(--border-radius)' }} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>What is UnderWorks?</h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 'var(--spacing-md)' }}>
                                UnderWorks represents our cutting-edge AI development platform where innovation meets implementation.
                                This advanced ecosystem combines bleeding-edge AI technologies, experimental approaches, and forward-thinking
                                solutions that push the boundaries of what's possible with artificial intelligence.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                                Currently in active development, UnderWorks serves as our research and development hub for next-generation
                                AI capabilities that will define the future of enterprise intelligence and human-AI collaboration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Development Focus Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient">Development Focus Areas</h2>
                        <p>Exploring the frontiers of AI innovation</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🧠</div>
                                <h3>Advanced AGI Research</h3>
                                <p>
                                    Exploring artificial general intelligence frameworks and architectures that can adapt to multiple domains
                                    and learn from diverse data sources with minimal supervision.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🔗</div>
                                <h3>Neural Architecture Search</h3>
                                <p>
                                    Automated discovery and optimization of neural network architectures using evolutionary algorithms
                                    and reinforcement learning for superior performance and efficiency.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🌐</div>
                                <h3>Multi-Modal AI Systems</h3>
                                <p>
                                    Integration of multiple data modalities including text, images, audio, and video for comprehensive
                                    understanding and more nuanced AI decision-making.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>⚡</div>
                                <h3>Edge AI Optimization</h3>
                                <p>
                                    Development of lightweight AI models optimized for edge computing devices, enabling intelligent
                                    processing at the network periphery with minimal latency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Innovation Pipeline Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Innovation Pipeline</h2>
                        <p>From concept to commercialization</p>
                    </div>

                    <div style={{ background: 'var(--light-gray)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius)', marginBottom: 'var(--spacing-xl)' }}>
                        <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Research & Development Stages</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🔬</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Research Phase</h4>
                                <p>Fundamental research into novel AI algorithms, architectures, and theoretical frameworks that challenge current paradigms.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>⚗️</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Prototyping</h4>
                                <p>Rapid prototyping and proof-of-concept development to validate theoretical approaches and demonstrate feasibility.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🧪</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Testing & Validation</h4>
                                <p>Rigorous testing, benchmarking, and validation against industry standards and real-world performance metrics.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🚀</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Commercialization</h4>
                                <p>Product development, scaling, and market introduction of validated AI innovations ready for enterprise deployment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emerging Technologies Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient">Emerging Technologies</h2>
                        <p>Exploring the next frontier of AI capabilities</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Quantum-Enhanced AI</h3>
                                <p>Integration of quantum computing principles with traditional AI algorithms for exponential performance improvements in complex optimization problems.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Neuromorphic Computing</h3>
                                <p>Brain-inspired computing architectures that mimic neural structures for more efficient, adaptive, and energy-conscious AI processing.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Autonomous AI Systems</h3>
                                <p>Self-evolving AI systems capable of independent learning, adaptation, and optimization without human intervention or supervision.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>AI-Human Symbiosis</h3>
                                <p>Seamless integration of AI capabilities with human cognition, creating augmented intelligence systems that enhance human potential.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Consciousness Modeling</h3>
                                <p>Advanced research into artificial consciousness, self-awareness, and emotional intelligence in AI systems.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Universal AI Interfaces</h3>
                                <p>Development of universal communication protocols enabling seamless interaction between different AI systems and human operators.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>The Future of AI Development</h2>
                        <p>Pushing the boundaries of artificial intelligence</p>
                    </div>

                    <div className="grid-2-cols">
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Innovation First Approach</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                UnderWorks embodies our commitment to pushing the boundaries of AI innovation. We believe that true breakthroughs
                                come from exploring uncharted territories and challenging established paradigms. Our development philosophy
                                prioritizes fundamental research alongside practical applications.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Collaborative Ecosystem</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                We actively collaborate with leading research institutions, industry partners, and the global AI community
                                to accelerate innovation and ensure that our developments benefit society as a whole.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Responsible AI Development</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                Ethical considerations and responsible AI development are core to everything we do at UnderWorks.
                                We prioritize transparency, fairness, and safety in all our research and development activities.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Open Innovation</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                Through open-source contributions, research publications, and collaborative partnerships, we share our
                                findings and methodologies with the broader AI community to accelerate collective progress.
                            </p>
                        </div>
                    </div>
                </div>
            </section >

            {/* CTA Section */}
            < section className="section section-dark" >
                <div className="container">
                    <div style={{ textAlign: 'center', padding: 'var(--spacing-lg) 0' }}>
                        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>
                            Join Our Innovation Journey
                        </h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto var(--spacing-md)', color: 'rgba(255, 255, 255, 0.9)' }}>
                            Be among the first to experience our cutting-edge AI developments. Contact our team to learn about collaboration opportunities.
                        </p>
                        <div className="cta-buttons" style={{ justifyContent: 'center' }}>
                            <Link to="/contact" className="btn btn-primary">Get Involved</Link>
                            <Link to="/products" className="btn btn-outline">View Current Products</Link>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default UnderWorks;

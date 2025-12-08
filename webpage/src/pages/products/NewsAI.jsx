import React from 'react';
import { Link } from 'react-router-dom';

const NewsAI = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '70vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                        <h1>News AI</h1>
                        <p className="subheadline" style={{ fontSize: '1.4rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: 'var(--spacing-md)' }}>
                            Intelligent News Platform
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: 'var(--spacing-md)', lineHeight: '1.6' }}>
                            Intelligent news aggregation and analysis platform that curates, summarizes, and delivers personalized news insights in real-time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Intelligent News Intelligence</h2>
                        <p>Transform news consumption with AI-powered insights</p>
                    </div>

                    <div className="grid-2-cols" style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <div>
                            <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80"
                                alt="News AI - Intelligent News Platform"
                                loading="lazy"
                                style={{ width: '100%', borderRadius: 'var(--border-radius)' }} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>What is News AI?</h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 'var(--spacing-md)' }}>
                                News AI is an advanced intelligent news platform that revolutionizes how individuals and organizations consume,
                                analyze, and act on news content. This sophisticated AI system combines natural language processing, machine learning,
                                and real-time data processing to deliver personalized, actionable news insights.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                                Whether you're a busy executive, researcher, investor, or media professional, News AI serves as your intelligent
                                companion in navigating the complex world of information overload.
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
                        <p>Advanced capabilities for intelligent news consumption</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🎯</div>
                                <h3>Personalized Curation</h3>
                                <p>
                                    AI-driven news curation that learns your preferences, interests, and reading patterns to deliver
                                    highly relevant content tailored to your specific needs.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>⚡</div>
                                <h3>Real-time Analysis</h3>
                                <p>
                                    Instant analysis and summarization of breaking news with sentiment analysis, trend identification,
                                    and impact assessment in real-time.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🔍</div>
                                <h3>Deep Content Analysis</h3>
                                <p>
                                    Advanced NLP algorithms that extract key insights, identify bias, cross-reference sources,
                                    and provide context-rich understanding of news events.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>📊</div>
                                <h3>Trend Intelligence</h3>
                                <p>
                                    Predictive analytics and trend forecasting that identify emerging patterns, predict outcomes,
                                    and provide strategic insights for decision-making.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Intelligence Engine Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>News Intelligence Engine</h2>
                        <p>Powered by advanced AI and real-time processing</p>
                    </div>

                    <div style={{ background: 'var(--light-gray)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius)', marginBottom: 'var(--spacing-xl)' }}>
                        <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Core Capabilities</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                            <div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Multi-Source Aggregation</h4>
                                <p>Comprehensive news aggregation from thousands of global sources with automatic duplicate detection and source verification.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Intelligent Summarization</h4>
                                <p>AI-powered summarization that extracts key facts, quotes, and context while maintaining journalistic integrity and accuracy.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Sentiment Analysis</h4>
                                <p>Advanced sentiment analysis with contextual understanding, emotional tone detection, and public opinion tracking.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Fact-Checking Integration</h4>
                                <p>Automated fact-checking against reliable databases with credibility scoring and misinformation detection.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient">Professional Applications</h2>
                        <p>Transforming news consumption across industries</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Executive Briefing</h3>
                                <p>Daily executive summaries with strategic insights, competitive intelligence, and market-moving news tailored for C-suite decision-making.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Investment Research</h3>
                                <p>Real-time market news analysis, earnings impact assessment, and investment opportunity identification with predictive analytics.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Media Monitoring</h3>
                                <p>Brand reputation tracking, crisis management alerts, and competitive media analysis with sentiment and trend monitoring.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Academic Research</h3>
                                <p>Research-focused news aggregation with academic relevance scoring, citation tracking, and interdisciplinary connection mapping.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Policy Analysis</h3>
                                <p>Government and regulatory news monitoring with policy impact assessment, stakeholder analysis, and legislative tracking.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Industry Intelligence</h3>
                                <p>Sector-specific news analysis with competitive positioning, market trend identification, and strategic opportunity alerts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Benefits Section */}
            < section className="section" >
                <div className="container">
                    <div className="section-header">
                        <h2>Why News AI Matters</h2>
                        <p>Revolutionizing information consumption and decision-making</p>
                    </div>

                    <div className="grid-2-cols">
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Information Overload Solution</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                In an era of information overload, News AI cuts through the noise to deliver only the most relevant,
                                high-impact news that matters to you. This focused approach saves time and ensures you never miss critical developments.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Enhanced Decision Quality</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                By providing context, analysis, and predictive insights alongside news, News AI enables more informed
                                and strategic decision-making across all levels of an organization.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Real-time Competitive Advantage</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                Real-time processing and instant alerts provide a significant competitive advantage, enabling organizations
                                to respond to market changes, regulatory developments, and industry shifts before competitors.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Scalable Intelligence</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                News AI scales effortlessly from individual users to enterprise deployments, providing consistent,
                                high-quality intelligence regardless of organizational size or complexity.
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
                            Stay Ahead of the News
                        </h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto var(--spacing-md)', color: 'rgba(255, 255, 255, 0.9)' }}>
                            Discover how News AI can transform your information consumption. Contact our experts for a personalized demonstration.
                        </p>
                        <div className="cta-buttons" style={{ justifyContent: 'center' }}>
                            <Link to="/contact" className="btn btn-primary">Request Demo</Link>
                            <Link to="/products" className="btn btn-outline">View All Products</Link>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default NewsAI;

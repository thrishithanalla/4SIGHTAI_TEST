import React from 'react';
import { Link } from 'react-router-dom';

const PersonalFinanceCopilot = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '70vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                        <h1>Personal Finance Co-Pilot</h1>
                        <p className="subheadline" style={{ fontSize: '1.4rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: 'var(--spacing-md)' }}>
                            AI-Powered Financial Guidance
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: 'var(--spacing-md)', lineHeight: '1.6' }}>
                            Intelligent personal finance assistant providing personalized financial planning, investment recommendations, and wealth management insights.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Intelligent Financial Intelligence</h2>
                        <p>Transform your financial future with AI-powered guidance</p>
                    </div>

                    <div className="grid-2-cols" style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <div>
                            <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
                                alt="Personal Finance Co-Pilot - AI-Powered Financial Guidance"
                                loading="lazy"
                                style={{ width: '100%', borderRadius: 'var(--border-radius)' }} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>What is Personal Finance Co-Pilot?</h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 'var(--spacing-md)' }}>
                                Personal Finance Co-Pilot is an advanced AI-powered financial assistant designed to democratize
                                access to sophisticated financial planning and investment strategies. This intelligent platform
                                combines machine learning, financial analytics, and behavioral economics to provide personalized
                                financial guidance that adapts to your unique circumstances and goals.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                                Whether you're saving for retirement, planning major purchases, or optimizing your investment portfolio,
                                Personal Finance Co-Pilot serves as your intelligent financial partner, making complex financial concepts
                                accessible and actionable.
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
                        <p>Advanced capabilities for intelligent financial management</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🎯</div>
                                <h3>Personalized Financial Planning</h3>
                                <p>
                                    AI-driven financial planning tailored to your income, expenses, goals, risk tolerance, and
                                    life stage for optimal wealth accumulation and protection.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>📊</div>
                                <h3>Investment Intelligence</h3>
                                <p>
                                    Advanced portfolio analysis, asset allocation recommendations, and market timing insights
                                    based on historical data, economic indicators, and predictive modeling.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>💰</div>
                                <h3>Expense Optimization</h3>
                                <p>
                                    Intelligent expense tracking and categorization with automated savings recommendations,
                                    budget optimization, and spending pattern analysis.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🔮</div>
                                <h3>Financial Forecasting</h3>
                                <p>
                                    Predictive financial modeling that forecasts future cash flows, retirement readiness,
                                    and long-term wealth accumulation based on current trajectories.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Financial Intelligence Engine Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Financial Intelligence Engine</h2>
                        <p>Powered by advanced AI and financial analytics</p>
                    </div>

                    <div style={{ background: 'var(--light-gray)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius)', marginBottom: 'var(--spacing-xl)' }}>
                        <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Core Capabilities</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                            <div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Risk Assessment</h4>
                                <p>Comprehensive risk profiling and tolerance analysis with dynamic portfolio rebalancing recommendations based on market conditions.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Tax Optimization</h4>
                                <p>Intelligent tax planning and optimization strategies including deduction identification, tax-loss harvesting, and retirement account recommendations.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Goal Tracking</h4>
                                <p>Automated progress tracking for financial goals with milestone alerts, adjustment recommendations, and achievement probability calculations.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Market Intelligence</h4>
                                <p>Real-time market analysis with sentiment tracking, economic indicator monitoring, and automated alerts for significant market events.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient">Financial Applications</h2>
                        <p>Transforming personal finance across life stages</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Retirement Planning</h3>
                                <p>Comprehensive retirement analysis with savings projections, Social Security optimization, and withdrawal strategies for sustainable retirement income.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Investment Management</h3>
                                <p>Automated portfolio management with rebalancing, dividend reinvestment, and tax-efficient investment strategies tailored to your risk profile.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Debt Management</h3>
                                <p>Intelligent debt consolidation and payoff strategies with interest rate analysis, payment optimization, and debt elimination roadmaps.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Education Funding</h3>
                                <p>College savings planning with 529 plan optimization, scholarship matching, and education cost inflation projections for future planning.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Estate Planning</h3>
                                <p>Integrated estate planning with inheritance projections, beneficiary optimization, and wealth transfer strategy recommendations.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Tax Planning</h3>
                                <p>Year-round tax planning with deduction identification, tax bracket optimization, and year-end tax strategy recommendations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Personal Finance Co-Pilot Matters</h2>
                        <p>Empowering financial confidence and wealth building</p>
                    </div>

                    <div className="grid-2-cols">
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Democratized Expertise</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                Personal Finance Co-Pilot makes sophisticated financial planning accessible to everyone,
                                not just high-net-worth individuals. Advanced algorithms provide the same level of analysis
                                that previously required expensive financial advisors.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Behavioral Finance Integration</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                Understanding of behavioral biases and emotional decision-making helps overcome common
                                financial pitfalls, leading to more rational and successful financial behaviors.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Continuous Optimization</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                The AI continuously learns from your financial patterns and market conditions, providing
                                increasingly personalized and accurate recommendations over time.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Proactive Financial Health</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                Early warning systems and predictive analytics help identify potential financial issues
                                before they become problems, enabling proactive rather than reactive financial management.
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
                            Take Control of Your Finances
                        </h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto var(--spacing-md)', color: 'rgba(255, 255, 255, 0.9)' }}>
                            Discover how Personal Finance Co-Pilot can transform your financial future. Start your journey to financial freedom today.
                        </p>
                        <div className="cta-buttons" style={{ justifyContent: 'center' }}>
                            <Link to="/contact" className="btn btn-primary">Get Started</Link>
                            <Link to="/products" className="btn btn-outline">View All Products</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PersonalFinanceCopilot;

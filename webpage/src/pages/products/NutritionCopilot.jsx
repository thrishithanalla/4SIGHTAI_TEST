import React from 'react';
import { Link } from 'react-router-dom';

const NutritionCopilot = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '70vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                        <h1>Nutrition Co-Pilot</h1>
                        <p className="subheadline" style={{ fontSize: '1.4rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: 'var(--spacing-md)' }}>
                            AI-Powered Nutrition Guidance
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: 'var(--spacing-md)', lineHeight: '1.6' }}>
                            Intelligent nutrition guidance that provides personalized dietary recommendations and health insights for wellness enterprises.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Intelligent Nutrition Intelligence</h2>
                        <p>Transform wellness with AI-powered nutrition guidance</p>
                    </div>

                    <div className="grid-2-cols" style={{ marginBottom: 'var(--spacing-xl)' }}>
                        <div>
                            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                                alt="Nutrition Co-Pilot - AI-Powered Nutrition Guidance"
                                loading="lazy"
                                style={{ width: '100%', borderRadius: 'var(--border-radius)' }} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>What is Nutrition Co-Pilot?</h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 'var(--spacing-md)' }}>
                                Nutrition Co-Pilot is an advanced AI-powered nutrition guidance system designed specifically for wellness enterprises.
                                This intelligent platform combines cutting-edge machine learning, nutritional science, and personalized medicine
                                to provide comprehensive dietary recommendations and health insights.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                                Whether you're a nutritionist, wellness coach, or healthcare provider, Nutrition Co-Pilot serves as your intelligent
                                partner in delivering personalized nutrition plans that optimize health outcomes and client satisfaction.
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
                        <p>Advanced capabilities for personalized nutrition guidance</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🎯</div>
                                <h3>Personalized Recommendations</h3>
                                <p>
                                    AI-driven dietary recommendations tailored to individual health profiles, preferences, goals, and
                                    medical conditions for optimal nutrition outcomes.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>📊</div>
                                <h3>Health Data Integration</h3>
                                <p>
                                    Seamless integration with wearable devices, health apps, and medical records to provide comprehensive
                                    health insights and nutrition correlations.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🧠</div>
                                <h3>Machine Learning Insights</h3>
                                <p>
                                    Advanced ML algorithms that learn from nutritional outcomes, adapt recommendations over time,
                                    and predict health trends based on dietary patterns.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>📱</div>
                                <h3>Multi-Platform Access</h3>
                                <p>
                                    Accessible across web, mobile, and desktop platforms with real-time synchronization and
                                    collaborative features for healthcare teams.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nutrition Intelligence Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Nutrition Intelligence Engine</h2>
                        <p>Powered by advanced AI and nutritional science</p>
                    </div>

                    <div style={{ background: 'var(--light-gray)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius)', marginBottom: 'var(--spacing-xl)' }}>
                        <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Core Capabilities</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                            <div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Nutrient Analysis</h4>
                                <p>Comprehensive analysis of macronutrients, micronutrients, and nutritional density with real-time tracking and optimization.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Meal Planning</h4>
                                <p>Intelligent meal planning algorithms that consider dietary restrictions, preferences, and health goals for optimal nutrition.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Health Correlations</h4>
                                <p>Advanced correlation analysis between dietary patterns and health outcomes, enabling predictive nutrition interventions.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Progress Tracking</h4>
                                <p>Comprehensive progress monitoring with biometric correlations, goal achievement tracking, and adaptive recommendations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient">Wellness Applications</h2>
                        <p>Transforming nutrition guidance across wellness domains</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Weight Management</h3>
                                <p>Personalized weight loss or gain plans with sustainable dietary recommendations, progress tracking, and metabolic optimization.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Sports Nutrition</h3>
                                <p>Athlete-specific nutrition plans optimizing performance, recovery, and body composition for competitive and recreational athletes.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Medical Nutrition Therapy</h3>
                                <p>Therapeutic nutrition plans for managing chronic conditions like diabetes, hypertension, and gastrointestinal disorders.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Preventive Wellness</h3>
                                <p>Proactive nutrition strategies for disease prevention, immune system support, and long-term health optimization.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Maternal & Child Nutrition</h3>
                                <p>Specialized nutrition guidance for pregnancy, lactation, infant feeding, and pediatric nutritional development.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Senior Nutrition</h3>
                                <p>Age-appropriate nutrition plans addressing sarcopenia, bone health, cognitive function, and chronic disease management.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Nutrition Co-Pilot Matters</h2>
                        <p>Revolutionizing nutrition guidance and wellness outcomes</p>
                    </div>

                    <div className="grid-2-cols">
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Personalized Precision</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                Nutrition Co-Pilot analyzes individual genetic factors, medical history, lifestyle, and preferences to create
                                truly personalized nutrition plans. This precision approach leads to better adherence and superior health outcomes.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Evidence-Based Intelligence</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                Built on the latest nutritional science and continuously updated with new research, Nutrition Co-Pilot ensures
                                that recommendations are always current and backed by scientific evidence.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Scalable Expertise</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                Nutrition Co-Pilot makes expert-level nutritional guidance accessible to wellness practitioners of all experience levels,
                                enabling them to provide sophisticated nutrition services at scale.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Continuous Learning</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                The AI continuously learns from user outcomes and feedback, improving recommendations over time and adapting
                                to new nutritional research and individual response patterns.
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
                            Transform Nutrition Guidance
                        </h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto var(--spacing-md)', color: 'rgba(255, 255, 255, 0.9)' }}>
                            Discover how Nutrition Co-Pilot can revolutionize your wellness practice. Contact our experts for a personalized demonstration.
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

export default NutritionCopilot;

import React from 'react';
import { Link } from 'react-router-dom';

const BuildingPOC = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '70vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                        <h1>Building GenAI POC</h1>
                        <p className="subheadline" style={{ fontSize: '1.4rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: 'var(--spacing-md)' }}>
                            Proof of Concept Development
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: 'var(--spacing-md)', lineHeight: '1.6' }}>
                            Rapid development and validation of Generative AI proof-of-concepts with agile prototyping and iterative testing to demonstrate feasibility and value.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Accelerate AI Innovation</h2>
                        <p>From concept to validated solution in weeks, not months</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
                        <div>
                            <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80"
                                alt="Building GenAI POC - Proof of Concept Development"
                                loading="lazy"
                                style={{ width: '100%', borderRadius: 'var(--border-radius)' }} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>What is Building GenAI POC?</h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 'var(--spacing-md)' }}>
                                Building GenAI POC is our specialized service for rapidly developing and validating Generative AI
                                proof-of-concepts. We combine agile development methodologies with deep AI expertise to transform
                                theoretical AI applications into tangible, working prototypes that demonstrate real business value.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                                Our iterative approach ensures that each POC is not just technically feasible, but also aligned
                                with your business objectives, user needs, and scalability requirements, providing a clear path
                                to production deployment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Components Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient">POC Development Framework</h2>
                        <p>Structured approach to rapid AI prototyping</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🎯</div>
                                <h3>Rapid Prototyping</h3>
                                <p>
                                    Agile development of functional AI prototypes using pre-trained models, custom fine-tuning,
                                    and rapid iteration cycles to validate core hypotheses quickly.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>📊</div>
                                <h3>Data Preparation & Integration</h3>
                                <p>
                                    Comprehensive data pipeline development, quality assessment, and integration with existing
                                    systems to ensure robust and reliable AI model performance.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🧪</div>
                                <h3>Iterative Testing & Validation</h3>
                                <p>
                                    Rigorous testing protocols with performance metrics, user acceptance testing, and continuous
                                    validation against predefined success criteria.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>📈</div>
                                <h3>Performance Optimization</h3>
                                <p>
                                    Model optimization, scalability testing, and performance tuning to ensure production-ready
                                    solutions that meet latency, accuracy, and cost requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* POC Process Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our POC Development Process</h2>
                        <p>Agile methodology for rapid AI innovation</p>
                    </div>

                    <div style={{ background: 'var(--light-gray)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius)', marginBottom: 'var(--spacing-xl)' }}>
                        <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Accelerated Innovation Framework</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>1️⃣</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Concept Validation</h4>
                                <p>Initial assessment of AI use case feasibility, data availability, and technical requirements through expert consultation.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>2️⃣</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Sprint Planning</h4>
                                <p>Agile sprint planning with defined deliverables, timelines, and success metrics for each development iteration.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>3️⃣</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Rapid Development</h4>
                                <p>Intensive development sprints focusing on core functionality, model training, and integration with minimal viable features.</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>4️⃣</div>
                                <h4 style={{ color: 'var(--primary-navy)' }}>Testing & Iteration</h4>
                                <p>User testing, performance evaluation, and iterative improvements based on feedback and validation results.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Stack Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient">Technology & Tools</h2>
                        <p>Cutting-edge AI technologies for rapid prototyping</p>
                    </div>

                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Large Language Models</h3>
                                <p>GPT-series, BERT, T5, and custom fine-tuned models for natural language processing and generation tasks.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Computer Vision</h3>
                                <p>YOLO, Detectron2, and Vision Transformers for image recognition, object detection, and visual understanding.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Machine Learning Frameworks</h3>
                                <p>TensorFlow, PyTorch, and Hugging Face Transformers for rapid model development and deployment.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Cloud AI Platforms</h3>
                                <p>AWS SageMaker, Google Vertex AI, and Azure Machine Learning for scalable model training and inference.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>MLOps Tools</h3>
                                <p>MLflow, Kubeflow, and custom CI/CD pipelines for model versioning, monitoring, and automated deployment.</p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <h3>Data Processing</h3>
                                <p>Apache Spark, Dask, and custom ETL pipelines for large-scale data processing and feature engineering.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Choose Our POC Development?</h2>
                        <p>Accelerate your AI journey with proven expertise</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)' }}>
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Risk Mitigation</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                POC development allows you to validate AI concepts before committing significant resources,
                                reducing the risk of failed implementations and ensuring ROI on AI investments.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Faster Time-to-Value</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                Our accelerated development process delivers working prototypes in weeks rather than months,
                                enabling faster decision-making and competitive advantage.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Technical Excellence</h3>
                            <p style={{ lineHeight: '1.8', marginBottom: 'var(--spacing-lg)' }}>
                                Deep expertise in AI technologies combined with practical implementation experience ensures
                                that your POC is built on solid technical foundations.
                            </p>

                            <h3 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Scalable Solutions</h3>
                            <p style={{ lineHeight: '1.8' }}>
                                POC designs consider scalability from the outset, providing a clear path from prototype
                                to production deployment without requiring complete redevelopment.
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
                            Validate Your AI Vision
                        </h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto var(--spacing-md)', color: 'rgba(255, 255, 255, 0.9)' }}>
                            Ready to transform your AI concepts into reality? Let's build a proof-of-concept that demonstrates tangible value.
                        </p>
                        <div className="cta-buttons" style={{ justifyContent: 'center' }}>
                            <Link to="/contact" className="btn btn-primary">Start POC Development</Link>
                            <Link to="/services" className="btn btn-outline">View All Services</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BuildingPOC;

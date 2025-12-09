import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CanvasBackground from '../components/CanvasBackground';
import useScrollAnimations from '../hooks/useScrollAnimations';

const Home = () => {
    useScrollAnimations();

    // Services Carousel State
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

    // Products Carousel State
    const [currentProductIndex, setCurrentProductIndex] = useState(0);

    const products = [
        {
            id: 'ai-envelop',
            title: 'AI Envelop',
            desc: 'Comprehensive AI infrastructure solution designed to wrap around your existing systems, enabling seamless AI integration and intelligent automation.',
            img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
            alt: 'AI Envelop - Enterprise AI Infrastructure',
            delay: 'fade-in'
        },
        {
            id: 'ai-copilot-consulting',
            title: 'AI Co-pilot (Consulting)',
            desc: 'Specialized intelligent assistant that helps consultants deliver deeper insights, faster analysis, and strategic recommendations.',
            img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
            alt: 'AI Co-pilot for Consulting',
            delay: 'fade-in fade-in-delay-1'
        },
        {
            id: 'nutrition-copilot',
            title: 'Nutrition Co-Pilot',
            desc: 'AI-powered wellness platform that provides personalized dietary recommendations and health insights for wellness enterprises.',
            img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
            alt: 'Nutrition Co-Pilot',
            delay: 'fade-in fade-in-delay-2'
        },
        {
            id: 'news-ai',
            title: 'News AI',
            desc: 'Intelligent news aggregation platform providing curated, analyzed, and contextualized insights tailored to specific interests.',
            img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
            alt: 'News AI Platform',
            delay: 'fade-in fade-in-delay-3'
        },
        {
            id: 'ai-copilot-police',
            title: 'AI Co-pilot (Police)',
            desc: 'Sophisticated public safety tool assisting law enforcement with data analysis, pattern recognition, and resource allocation.',
            img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
            alt: 'AI Co-pilot for Police',
            delay: 'fade-in'
        },
        {
            id: 'personal-finance-copilot',
            title: 'Personal Finance Co-pilot',
            desc: 'AI-powered financial advisor for Pocket FM users, helping manage budgets, track expenses, and plan financial futures.',
            img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
            alt: 'Personal Finance Co-pilot',
            delay: 'fade-in fade-in-delay-1'
        },
        {
            id: 'underworks',
            title: 'UnderWorks',
            desc: 'Comprehensive AI-powered educational platform with specialized co-pilots: Study Buddy, Lab Technician, and Campus Co-pilot.',
            img: 'https://images.unsplash.com/photo-1504711331083-9c895941bf81?w=800&q=80',
            alt: 'UnderWorks Education Platform',
            delay: 'fade-in fade-in-delay-2'
        }
    ];

    const services = [
        {
            id: 'advisory',
            title: 'GenAI Advisory',
            desc: 'Strategic guidance on integrating Generative AI into your business operations, identifying high-impact use cases and creating actionable roadmaps.',
            img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
            alt: 'AI Robot Strategy Consulting',
            delay: ''
        },
        {
            id: 'scoping',
            title: 'Project Scoping & Blueprint',
            desc: 'Detailed project planning and architecture design for GenAI implementations, ensuring alignment with business objectives and technical feasibility.',
            img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
            alt: 'AI Robot Project Planning',
            delay: 'fade-in-delay-1'
        },
        {
            id: 'poc',
            title: 'Building GenAI POC',
            desc: 'Rapid development of proof-of-concept solutions to validate AI use cases and demonstrate value before full-scale implementation.',
            img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
            alt: 'AI Robot Development',
            delay: 'fade-in-delay-2'
        },
        {
            id: 'consulting',
            title: 'GenAI Consulting',
            desc: 'Comprehensive consulting services covering all aspects of GenAI adoption, from strategy to implementation and ongoing optimization.',
            img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
            alt: 'AI Robot Consulting Team',
            delay: 'fade-in-delay-3'
        }
    ];

    // Responsive Carousel Logic
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 900) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(3);
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-Swipe for Mobile
    useEffect(() => {
        let interval;
        if (itemsPerPage === 1) {
            interval = setInterval(() => {
                // Products Auto-Swipe
                setCurrentProductIndex(prev => (prev >= products.length - 1 ? 0 : prev + 1));

                // Services Auto-Swipe
                setCurrentServiceIndex(prev => (prev >= services.length - 1 ? 0 : prev + 1));
            }, 3000); // 3 seconds interval
        }
        return () => clearInterval(interval);
    }, [itemsPerPage, products.length, services.length]);

    const handleServiceNext = () => {
        if (currentServiceIndex < services.length - itemsPerPage) {
            setCurrentServiceIndex(prev => prev + 1);
        }
    };

    const handleServicePrev = () => {
        if (currentServiceIndex > 0) {
            setCurrentServiceIndex(prev => prev - 1);
        }
    };

    const handleProductNext = () => {
        if (currentProductIndex < products.length - itemsPerPage) {
            setCurrentProductIndex(prev => prev + 1);
        }
    };

    const handleProductPrev = () => {
        if (currentProductIndex > 0) {
            setCurrentProductIndex(prev => prev - 1);
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                {/* Animated Canvas Background */}
                <CanvasBackground />

                {/* WebGL Background */}
                <div className="webgl-background" id="webglBackground"></div>

                {/* Morphing Blob */}
                <div className="morphing-blob" id="heroBlob">
                    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="blobFilter">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob" />
                                <feComposite in="SourceGraphic" in2="blob" operator="atop" />
                            </filter>
                        </defs>
                        <path id="blobPath" d="M200,200 Q250,150 300,200 T400,200 Q450,250 400,300 T300,300 Q250,350 200,300 T100,300 Q50,250 100,200 T200,200" fill="url(#blobGradient)" filter="url(#blobFilter)" />
                        <defs>
                            <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#00e5ff', stopOpacity: 0.8 }} />
                                <stop offset="50%" style={{ stopColor: '#007bff', stopOpacity: 0.6 }} />
                                <stop offset="100%" style={{ stopColor: '#00e5ff', stopOpacity: 0.4 }} />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <p className="tagline">Empowering Enterprises to harness the power of AI</p>
                            <h1 className="explosive-text" id="heroTitle">Welcome to 4sight AI</h1>
                            <p className="subheadline">Where the future of enterprise technology begins</p>
                            <div className="cta-buttons">
                                <Link to="/products" className="btn btn-primary" data-cursor-text="Discover our AI solutions">Explore Products</Link>
                                <Link to="/contact" className="btn btn-outline" data-cursor-text="Get in touch with our team">Contact Sales</Link>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=90"
                                alt="AI Robot Technology - Futuristic Robot Assistant"
                                loading="eager" />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Preview Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>About 4sight AI</h2>
                        <p>Pioneering the future of enterprise intelligence</p>
                    </div>
                    <div className="card-grid">
                        <div className="card fade-in" data-cursor-text="Discover our AI mission">
                            <div className="card-image">
                                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
                                    alt="AI Robot Network"
                                    loading="lazy" />
                                {/* Animated SVG Icon */}
                                <div className="card-icon">
                                    <svg className="animated-svg morphing-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#00e5ff" strokeWidth="2" className="svg-circle" />
                                        <path d="M30 50 L45 35 L70 60 L85 45" stroke="#00e5ff" strokeWidth="3" fill="none" className="svg-path" />
                                    </svg>
                                </div>
                                {/* 3D Hover Effect */}
                                <div className="card-3d-effect" id="card3d-1"></div>
                            </div>
                            <div className="card-content">
                                <h3>Our Mission</h3>
                                <p>We are a Bangalore-based AI innovation firm dedicated to transforming enterprises through cutting-edge Generative AI solutions. Our focus spans multiple industries including technology, healthcare, education, and public services.</p>
                                <Link to="/about" className="btn btn-primary" data-cursor-text="Learn about our mission">Learn More</Link>
                            </div>
                        </div>
                        <div className="card fade-in fade-in-delay-1" data-cursor-text="Explore our AI vision">
                            <div className="card-image">
                                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                                    alt="AI Robot Innovation"
                                    loading="lazy" />
                                {/* Animated SVG Icon */}
                                <div className="card-icon">
                                    <svg className="animated-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="50,10 90,90 10,90" fill="none" stroke="#00e5ff" strokeWidth="2" className="svg-triangle" />
                                        <circle cx="50" cy="50" r="15" fill="#00e5ff" opacity="0.5" className="svg-dot" />
                                    </svg>
                                </div>
                            </div>
                            <div className="card-content">
                                <h3>Our Vision</h3>
                                <p>In a world where the utility of Artificial Intelligence is increasingly indisputable, we envision seamless integration of AI across all enterprise operations, driving unprecedented efficiency and innovation.</p>
                                <Link to="/about" className="btn btn-primary" data-cursor-text="Explore our vision for the future">Read Our Vision</Link>
                            </div>
                        </div>
                        <div className="card fade-in fade-in-delay-2" data-cursor-text="Learn our AI approach">
                            <div className="card-image">
                                <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80"
                                    alt="AI Robot Team Collaboration"
                                    loading="lazy" />
                                {/* Animated SVG Icon */}
                                <div className="card-icon">
                                    <svg className="animated-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="20" y="20" width="60" height="60" fill="none" stroke="#00e5ff" strokeWidth="2" className="svg-rect" />
                                        <line x1="35" y1="35" x2="65" y2="65" stroke="#00e5ff" strokeWidth="2" className="svg-line" />
                                        <line x1="65" y1="35" x2="35" y2="65" stroke="#00e5ff" strokeWidth="2" className="svg-line" />
                                    </svg>
                                </div>
                            </div>
                            <div className="card-content">
                                <h3>Our Approach</h3>
                                <p>We begin with comprehensive audits to identify AI opportunities, then guide enterprises through strategic transition phases, culminating in full-scale automation and AGI integration.</p>
                                <Link to="/about" className="btn btn-primary" data-cursor-text="Discover our proven approach">Discover Our Process</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient">Featured Products</h2>
                        <p>Transformative AI solutions tailored for your industry</p>
                    </div>

                    <div className="content-carousel-wrapper">
                        {/* Navigation Buttons */}
                        <button
                            className={`carousel-nav-btn prev ${currentProductIndex === 0 ? 'disabled' : ''}`}
                            onClick={handleProductPrev}
                            disabled={currentProductIndex === 0}
                            aria-label="Previous Product"
                        >
                            &#10094;
                        </button>

                        <div className="content-carousel-container">
                            <div
                                className="content-carousel-track"
                                style={{ transform: `translateX(-${currentProductIndex * (100 / itemsPerPage)}%)` }}
                            >
                                {products.map((product, index) => (
                                    <div key={product.id} className={`card card-dark carousel-card-item ${product.delay ? product.delay : 'fade-in'}`}>
                                        <div className="card-image">
                                            <img src={product.img} alt={product.alt} loading="lazy" />
                                        </div>
                                        <div className="card-content">
                                            <h3>{product.title}</h3>
                                            <p>{product.desc}</p>
                                            <Link to={`/products?id=${product.id}`} className="btn btn-primary">Learn More</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            className={`carousel-nav-btn next ${currentProductIndex >= products.length - itemsPerPage ? 'disabled' : ''}`}
                            onClick={handleProductNext}
                            disabled={currentProductIndex >= products.length - itemsPerPage}
                            aria-label="Next Product"
                        >
                            &#10095;
                        </button>
                    </div>

                    <div className="text-center mt-3" style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <Link to="/products" className="btn btn-outline">View All Products</Link>
                    </div>
                </div>
            </section>

            {/* Services Preview Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Services</h2>
                        <p>End-to-end Generative AI solutions for enterprise transformation</p>
                    </div>
                    <div className="content-carousel-wrapper">
                        {/* Navigation Buttons */}
                        <button
                            className={`carousel-nav-btn prev ${currentServiceIndex === 0 ? 'disabled' : ''}`}
                            onClick={handleServicePrev}
                            disabled={currentServiceIndex === 0}
                            aria-label="Previous Service"
                        >
                            &#10094;
                        </button>

                        <div className="content-carousel-container">
                            <div
                                className="content-carousel-track"
                                style={{ transform: `translateX(-${currentServiceIndex * (100 / itemsPerPage)}%)` }}
                            >
                                {services.map((service, index) => (
                                    <div key={service.id} className={`card carousel-card-item fade-in ${service.delay}`}>
                                        <div className="card-image">
                                            <img src={service.img} alt={service.alt} loading="lazy" />
                                        </div>
                                        <div className="card-content">
                                            <h3>{service.title}</h3>
                                            <p>{service.desc}</p>
                                            <Link to={`/services?id=${service.id}`} className="btn btn-primary">Explore Service</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            className={`carousel-nav-btn next ${currentServiceIndex >= services.length - itemsPerPage ? 'disabled' : ''}`}
                            onClick={handleServiceNext}
                            disabled={currentServiceIndex >= services.length - itemsPerPage}
                            aria-label="Next Service"
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient">Our Impact</h2>
                        <p>Delivering measurable results across industries</p>
                    </div>
                    <div className="stats">
                        <div className="stat-item premium-stat" data-index="0">
                            <span className="stat-number" data-target="7">0</span>
                            <span className="stat-label">Industries</span>
                            <div className="stat-sparkle">✨</div>
                        </div>
                        <div className="stat-item premium-stat" data-index="1">
                            <span className="stat-number" data-target="2">0</span>
                            <span className="stat-label">Deployments</span>
                            <div className="stat-sparkle">⚡</div>
                        </div>
                        <div className="stat-item premium-stat" data-index="2">
                            <span className="stat-number" data-target="3">0</span>
                            <span className="stat-label">In Works</span>
                            <div className="stat-sparkle">🔥</div>
                        </div>
                        <div className="stat-item premium-stat" data-index="3">
                            <span className="stat-number" data-target="2">0</span>
                            <span className="stat-label">In Blueprinting</span>
                            <div className="stat-sparkle">🚀</div>
                        </div>
                        <div className="stat-item premium-stat" data-index="4">
                            <span className="stat-number" data-target="1">0</span>
                            <span className="stat-label">In Discussions</span>
                            <div className="stat-sparkle">💡</div>
                        </div>
                        <div className="stat-item premium-stat" data-index="5">
                            <span className="stat-number" data-target="10000">0</span>
                            <span className="stat-label">Research Hours</span>
                            <div className="stat-sparkle">🧠</div>
                        </div>
                        <div className="stat-item premium-stat" data-index="6">
                            <span className="stat-number" data-target="60">0</span>
                            <span className="stat-label">AI Productivity Increase (%)</span>
                            <div className="stat-sparkle">📈</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Teaser Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>The Future Is Now</h2>
                    </div>
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <blockquote style={{
                            fontSize: '1.3rem',
                            fontStyle: 'italic',
                            color: 'var(--gray)',
                            lineHeight: 1.8,
                            padding: 'var(--spacing-md)',
                            borderLeft: '4px solid var(--secondary-cyan)',
                            background: 'var(--light-gray)',
                            borderRadius: 'var(--border-radius)'
                        }}>
                            "In a world where the utility of Artificial Intelligence is increasingly indisputable, we see a future where every enterprise operation is enhanced by intelligent automation, where AGI seamlessly integrates with human expertise to unlock unprecedented innovation and efficiency."
                        </blockquote>
                        <p style={{ marginTop: 'var(--spacing-md)', fontSize: 'var(--font-size-large)', color: 'var(--gray)' }}>
                            At 4sight AI, we're not just building tools—we're architecting the intelligent enterprise of tomorrow.
                        </p>
                        <div className="mt-2" style={{ marginTop: '2rem' }}>
                            <Link to="/about" className="btn btn-primary">Explore Our Vision</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section section-dark">
                <div className="container">
                    <div style={{ textAlign: 'center', padding: 'var(--spacing-lg) 0' }}>
                        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>
                            Let's Build the Future Together
                        </h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto var(--spacing-md)', color: 'rgba(255, 255, 255, 0.9)' }}>
                            Ready to transform your enterprise with cutting-edge AI solutions? Our team of experts is here to guide you every step of the way.
                        </p>
                        <div className="cta-buttons" style={{ justifyContent: 'center' }}>
                            <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
                            <Link to="/services" className="btn btn-outline">Explore Services</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;

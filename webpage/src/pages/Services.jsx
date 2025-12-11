import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const servicesData = [
    {
        id: 'genai-advisory',
        title: 'GenAI Advisory',
        desc: 'Strategic guidance to help you navigate the landscape of Generative AI. We work with your leadership to identify high-impact use cases, assess organizational readiness, and develop a roadmap for sustainable AI adoption.',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        alt: 'Advisory',
        route: '/services/genai-advisory'
    },
    {
        id: 'project-scoping',
        title: 'Project Scoping & Blueprint',
        desc: 'Detailed execution plans, technical architectures, and requirements gathered to ensure your AI initiative starts on solid ground. We deliver comprehensive blueprints that minimize risk and clarify resource needs.',
        img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
        alt: 'Scoping',
        route: '/services/project-scoping'
    },
    {
        id: 'building-poc',
        title: 'Building GenAI POC',
        desc: 'Rapid prototypes to validate AI use cases before full investment. Our agile POC development process allows you to demonstrate value, test assumptions, and gather user feedback quickly.',
        img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
        alt: 'POC',
        route: '/services/building-poc'
    },
    {
        id: 'genai-consulting',
        title: 'GenAI Consulting',
        desc: 'End-to-end support for your AI transformation journey. From model selection and fine-tuning to integration and change management, our consultants ensure your GenAI solutions deliver real business value.',
        img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
        alt: 'Consulting',
        route: '/services/genai-consulting'
    }
];

const Services = () => {
    const location = useLocation();

    useEffect(() => {
        // Handle hash navigation with delayed scroll to ensure rendering is complete
        if (location.hash) {
            const id = location.hash.substring(1);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div style={{ paddingTop: '2rem', minHeight: '80vh', backgroundColor: '#f8fafc' }}>
            {/* Hero Section */}
            {/* Simple Header */}
            <div className="container" style={{ textAlign: 'center', paddingTop: '3rem', paddingBottom: '1rem' }}>
                <h1 style={{
                    color: '#3b82f6',
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    display: 'none'
                }}>OUR SERVICES</h1>
                <p style={{
                    fontSize: '1.25rem',
                    color: '#64748b',
                    maxWidth: '800px',
                    margin: '0 auto',
                    fontWeight: '500'
                }}>
                    Comprehensive GenAI expertise at every stage of your transformation journey
                </p>
            </div>

            <div className="container" style={{ paddingBottom: '4rem' }}>
                <div className="services-list" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3rem',
                    marginTop: '2rem',
                    maxWidth: '1050px',
                    margin: '2rem auto 0 auto'
                }}>
                    {servicesData.map((service, index) => {
                        return (
                            <div
                                key={service.id}
                                id={service.id}
                                className="unified-card-section"
                                style={{
                                    scrollMarginTop: '160px' // CRITICAL: This offsets the header height
                                }}
                            >
                                <div className="unified-card-container" style={{
                                    backgroundColor: '#fff',
                                    borderRadius: '24px',
                                    padding: '2.5rem',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                                }}>
                                    <div className="unified-layout-grid" style={{
                                        display: 'grid',
                                        gridTemplateColumns: index % 2 === 1 ? '1fr 40%' : '40% 1fr',
                                        gap: '3rem',
                                        alignItems: 'center'
                                    }}>
                                        {/* Image Side */}
                                        <div className="unified-img-wrapper" style={{
                                            borderRadius: '20px',
                                            overflow: 'hidden',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                                            order: index % 2 === 1 ? 2 : 1
                                        }}>
                                            <img
                                                src={service.img}
                                                alt={service.alt}
                                                style={{ width: '100%', height: 'auto', display: 'block' }}
                                            />
                                        </div>

                                        {/* Content Side */}
                                        <div className="unified-content" style={{
                                            textAlign: 'left',
                                            order: index % 2 === 1 ? 1 : 2
                                        }}>
                                            <h2 style={{
                                                color: '#3b82f6',
                                                fontSize: '2rem',
                                                marginBottom: '1rem',
                                                fontWeight: 'bold',
                                            }}>
                                                {service.title}
                                            </h2>
                                            <p style={{
                                                fontSize: '1rem',
                                                lineHeight: '1.7',
                                                color: '#64748b',
                                                marginBottom: '2rem'
                                            }}>
                                                {service.desc}
                                            </p>
                                            <Link
                                                to={service.route}
                                                style={{
                                                    display: 'inline-block',
                                                    backgroundColor: '#eff6ff',
                                                    color: '#1e3a8a',
                                                    padding: '12px 28px',
                                                    fontSize: '0.875rem',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em',
                                                    borderRadius: '6px',
                                                    textDecoration: 'none',
                                                    transition: 'all 0.2s ease'
                                                }}
                                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#dbeafe'}
                                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#eff6ff'}
                                            >
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Responsive Styles */}
            <style>{`
                @media (max-width: 960px) {
                    .unified-layout-grid {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                    }
                    .unified-img-wrapper {
                        order: -1 !important;
                    }
                    .unified-content {
                        order: 1 !important;
                        text-align: left;
                    }
                    .hero .explosive-text {
                        font-size: 2.5rem !important;
                    }
                }

                @media (max-width: 600px) {
                    .container {
                        padding-left: 1rem !important;
                        padding-right: 1rem !important;
                    }
                    .unified-card-container {
                        padding: 1.5rem !important;
                        border-radius: 16px !important;
                    }
                    .unified-layout-grid {
                        gap: 1.5rem !important;
                    }
                    .unified-content h2 {
                        font-size: 1.5rem !important;
                        margin-bottom: 0.75rem !important;
                    }
                    .unified-content p {
                        font-size: 0.95rem !important;
                        margin-bottom: 1.5rem !important;
                    }
                    .services-list {
                        gap: 2rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Services;

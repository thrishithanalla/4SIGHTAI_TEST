import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const productsData = [
    {
        id: 'ai-envelop',
        title: 'AI Envelop',
        desc: 'AI Envelop is our flagship enterprise AI infrastructure solution designed to seamlessly wrap around your existing systems and processes. Think of it as an intelligent layer that enhances every aspect of your operations without requiring a complete system overhaul.',
        img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
        alt: 'AI Envelop - Enterprise AI Infrastructure',
        route: '/products/ai-envelop'
    },
    {
        id: 'ai-copilot-consulting',
        title: 'AI Co-pilot (Consulting)',
        desc: 'The AI Co-pilot for Consulting is a specialized tool designed to augment the capabilities of consulting professionals. It serves as an intelligent assistant that helps consultants deliver deeper insights, faster analysis, and more strategic recommendations to their clients.',
        img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
        alt: 'AI Co-pilot for Consulting',
        route: '/products/ai-copilot-consulting'
    },
    {
        id: 'nutrition-copilot',
        title: 'Nutrition Co-Pilot',
        desc: 'Nutrition Co-Pilot is an AI-powered wellness platform that revolutionizes how individuals and healthcare providers approach nutrition and health management. This intelligent system provides personalized dietary recommendations based on individual health profiles, goals, and preferences.',
        img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
        alt: 'Nutrition Co-Pilot - Healthcare AI',
        route: '/products/nutrition-copilot'
    },
    {
        id: 'news-ai',
        title: 'News AI',
        desc: 'News AI is an intelligent news aggregation and analysis platform that transforms how organizations and individuals consume information. It goes beyond simple news feeds to provide curated, analyzed, and contextualized news insights tailored to your specific interests and needs.',
        img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
        alt: 'News AI - Intelligent News Platform',
        route: '/products/news-ai'
    },
    {
        id: 'ai-copilot-police',
        title: 'AI Co-pilot (Police Department)',
        desc: 'The AI Co-pilot for Police Departments is a sophisticated public safety tool designed to enhance law enforcement capabilities while ensuring transparency and accountability. This system assists officers in data analysis, pattern recognition, resource allocation, and administrative tasks.',
        img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
        alt: 'AI Co-pilot for Police Department',
        route: '/products/ai-copilot-police'
    },
    {
        id: 'personal-finance-copilot',
        title: 'Personal Finance Co-pilot',
        desc: "The Personal Finance Co-pilot is an innovative AI-powered financial advisor designed specifically for Pocket FM's user base. This intelligent assistant helps users make informed financial decisions, manage budgets, track expenses, and plan for their financial future.",
        img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
        alt: 'Personal Finance Co-pilot',
        route: '/products/personal-finance-copilot'
    },
    {
        id: 'underworks',
        title: 'UnderWorks',
        desc: 'UnderWorks is a comprehensive AI-powered educational platform that brings together three specialized co-pilots designed to transform the academic experience: Study Buddy, Lab Technician Co-pilot, and Campus Co-pilot.',
        img: 'https://images.unsplash.com/photo-1504711331083-9c895941bf81?w=800&q=80',
        alt: 'UnderWorks - Education AI Suite',
        route: '/products/underworks'
    }
];

const Products = () => {
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
            {/* Simple Header */}
            <div className="container" style={{ textAlign: 'center', paddingTop: '3rem', paddingBottom: '1rem' }}>
                <h1 style={{
                    color: '#3b82f6',
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    display: 'none'
                }}>OUR PRODUCTS</h1>
                <p style={{
                    fontSize: '1.25rem',
                    color: '#64748b',
                    maxWidth: '800px',
                    margin: '0 auto',
                    fontWeight: '500'
                }}>
                    Cutting-edge AI technologies tailored for diverse enterprise needs
                </p>
            </div>

            <div className="container" style={{ paddingBottom: '4rem' }}>
                <div className="products-list" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3rem',
                    marginTop: '2rem',
                    maxWidth: '1050px',
                    margin: '2rem auto 0 auto'
                }}>
                    {productsData.map((product, index) => {
                        return (
                            <div
                                key={product.id}
                                id={product.id}
                                className="unified-card-section"
                                style={{
                                    scrollMarginTop: '160px'
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
                                                src={product.img}
                                                alt={product.alt}
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
                                                {product.title}
                                            </h2>
                                            <p style={{
                                                fontSize: '1rem',
                                                lineHeight: '1.7',
                                                color: '#64748b',
                                                marginBottom: '2rem'
                                            }}>
                                                {product.desc}
                                            </p>
                                            <Link
                                                to={product.route}
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
                }
            `}</style>
        </div>
    );
};

export default Products;

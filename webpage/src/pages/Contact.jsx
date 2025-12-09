import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        privacy: false
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.privacy) {
            setStatus({ type: 'error', message: 'Please agree to the Terms & Conditions to proceed.' });
            return;
        }

        setStatus({ type: 'info', message: 'Sending...' });

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                setFormData({ name: '', email: '', phone: '', message: '', privacy: false });
            } else {
                setStatus({ type: 'error', message: data.message || 'Failed to send message.' });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus({ type: 'error', message: 'Network error. Please try again later.' });
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '50vh' }}>
                <div className="morphing-blob"></div>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                        <h1 className="explosive-text">Get In Touch</h1>
                        <p className="subheadline" style={{ fontSize: '1.3rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: 'var(--spacing-md)' }}>
                            Let's discuss how 4sight AI can transform your enterprise with cutting-edge AI solutions
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section">
                <div className="container">
                    <div className="grid-2-cols" style={{ alignItems: 'start' }}>

                        {/* Contact Form */}
                        <div className="card">
                            <div className="floating-particles"></div>
                            <div className="card-content">
                                <h2 className="morphing-text" style={{ marginBottom: 'var(--spacing-md)' }}>Send Us a Message</h2>
                                <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                                    Fill out the form below and our team will get back to you within 24 hours.
                                </p>

                                <form id="contactForm" noValidate onSubmit={handleSubmit}>
                                    {/* Row 1: Name and Email */}
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="John Doe"
                                                required
                                                aria-required="true"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="john.doe@company.com"
                                                required
                                                aria-required="true"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Row 2: Phone only (simplified) */}
                                    <div className="form-row">
                                        <div className="form-group" style={{ width: '100%' }}>
                                            <label htmlFor="phone">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Message Field (Full Width) */}
                                    <div className="form-group">
                                        <label htmlFor="message">Ask us anything *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us about your project, goals, and how we can help..."
                                            required
                                            aria-required="true"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>

                                    {/* Privacy and Terms */}
                                    <div className="form-group">
                                        <label className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                id="privacy"
                                                name="privacy"
                                                required
                                                aria-required="true"
                                                checked={formData.privacy}
                                                onChange={handleChange}
                                            />
                                            <span className="checkmark"></span>
                                            I agree to the <a href="/terms" target="_blank" style={{ color: 'var(--dark-gray)', fontWeight: 'bold' }}>Terms & Conditions</a> and <a href="/terms?section=privacy" target="_blank" style={{ color: 'var(--dark-gray)', fontWeight: 'bold' }}>Privacy Policy</a> *
                                        </label>
                                    </div>

                                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={!formData.privacy}>
                                        Send Message
                                    </button>

                                    {status.message && (
                                        <div id="formStatus" style={{
                                            display: 'block',
                                            marginTop: 'var(--spacing-md)',
                                            padding: 'var(--spacing-md)',
                                            background: status.type === 'success' ? '#d4edda' : (status.type === 'error' ? '#f8d7da' : '#e2e3e5'),
                                            color: status.type === 'success' ? '#155724' : (status.type === 'error' ? '#721c24' : '#383d41'),
                                            borderRadius: 'var(--border-radius-small)',
                                            border: `1px solid ${status.type === 'success' ? '#c3e6cb' : (status.type === 'error' ? '#f5c6cb' : '#d6d8db')}`
                                        }}>
                                            {status.message}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>

                        {/* Contact Information & Map */}
                        <div>
                            {/* Contact Info Card */}
                            <div className="card" style={{ marginBottom: 'var(--spacing-md)' }}>
                                <div className="card-content">
                                    <h3 className="morphing-text" style={{ marginBottom: 'var(--spacing-md)' }}>Contact Information</h3>

                                    <div style={{ marginBottom: 'var(--spacing-md)' }}>
                                        <div style={{ display: 'flex', alignItems: 'start', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                                            <span className="morphing-icon">📍</span>
                                            <div>
                                                <h4 style={{ color: 'var(--primary-navy)', marginBottom: '0.25rem' }}>Location</h4>
                                                <p style={{ margin: 0, color: 'var(--gray)' }}>
                                                    Bangalore, Karnataka<br />
                                                    India
                                                </p>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'start', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                                            <span className="morphing-icon">📧</span>
                                            <div>
                                                <h4 style={{ color: 'var(--primary-navy)', marginBottom: '0.25rem' }}>Email</h4>
                                                <p style={{ margin: 0 }}>
                                                    <a href="mailto:contact@4sightai.com" style={{ color: 'var(--gray)' }}>contact@4sightai.com</a><br />
                                                    <a href="mailto:sales@4sightai.com" style={{ color: 'var(--gray)' }}>sales@4sightai.com</a>
                                                </p>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'start', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                                            <span className="morphing-icon">📞</span>
                                            <div>
                                                <h4 style={{ color: 'var(--primary-navy)', marginBottom: '0.25rem' }}>Phone</h4>
                                                <p style={{ margin: 0, color: 'var(--gray)' }}>
                                                    +91 (800) 123-4567<br />
                                                    <span style={{ fontSize: '0.9rem' }}>Mon-Fri 9:00 AM - 6:00 PM IST</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-sm)', color: 'var(--primary-navy)' }}>
                                        Follow Us
                                    </h4>
                                    <div className="social-links" style={{ justifyContent: 'flex-start' }}>
                                        <a href="https://linkedin.com/company/4sight-ai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                        </a>
                                        <a href="https://twitter.com/4sightai" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                        </a>
                                        <a href="https://github.com/4sightai" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* AI-themed Image */}
                            <div className="card">
                                <div className="card-image" style={{ height: '300px' }}>
                                    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                                        alt="4sight AI Office - AI Technology Hub"
                                        loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Contact Us Section */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2 className="text-gradient">Why Contact 4sight AI?</h2>
                        <p>What you can expect when you reach out to us</p>
                    </div>
                    <div className="card-grid">
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>⚡</div>
                                <h3>Rapid Response</h3>
                                <p>
                                    We respond to all inquiries within 24 hours. For urgent matters, we'll connect you with the right expert
                                    even faster.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🎯</div>
                                <h3>Tailored Solutions</h3>
                                <p>
                                    We don't believe in one-size-fits-all. Every consultation begins with understanding your unique needs
                                    and challenges.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🧠</div>
                                <h3>Expert Guidance</h3>
                                <p>
                                    Connect directly with AI experts who have 10,000+ hours of research and real-world implementation
                                    experience.
                                </p>
                            </div>
                        </div>
                        <div className="card card-dark">
                            <div className="card-content">
                                <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🤝</div>
                                <h3>No Obligation</h3>
                                <p>
                                    Initial consultations are always free. We're here to help you understand AI's potential for your
                                    business with no strings attached.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="morphing-text">Frequently Asked Questions</h2>
                    </div>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ marginBottom: 'var(--spacing-md)', padding: 'var(--spacing-md)', background: 'var(--light-gray)', borderRadius: 'var(--border-radius)', borderLeft: '4px solid var(--secondary-cyan)' }}>
                            <h4 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-xs)' }}>
                                How quickly will I hear back after submitting the form?
                            </h4>
                            <p style={{ margin: 0, color: 'var(--gray)' }}>
                                We aim to respond to all inquiries within 24 hours on business days. For urgent matters, you can also
                                reach us directly via phone during business hours.
                            </p>
                        </div>
                        <div style={{ marginBottom: 'var(--spacing-md)', padding: 'var(--spacing-md)', background: 'var(--light-gray)', borderRadius: 'var(--border-radius)', borderLeft: '4px solid var(--secondary-cyan)' }}>
                            <h4 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-xs)' }}>
                                Do you offer free consultations?
                            </h4>
                            <p style={{ margin: 0, color: 'var(--gray)' }}>
                                Yes! We offer complimentary initial consultations to understand your needs and explore how AI can benefit
                                your organization. This typically involves a 30-60 minute discovery call with our experts.
                            </p>
                        </div>
                        <div style={{ marginBottom: 'var(--spacing-md)', padding: 'var(--spacing-md)', background: 'var(--light-gray)', borderRadius: 'var(--border-radius)', borderLeft: '4px solid var(--secondary-cyan)' }}>
                            <h4 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-xs)' }}>
                                What information should I prepare before contacting you?
                            </h4>
                            <p style={{ margin: 0, color: 'var(--gray)' }}>
                                It's helpful to have a general understanding of your business challenges, goals, and any specific AI use
                                cases you're interested in. However, don't worry if you're just starting to explore AI—we're here to guide you!
                            </p>
                        </div>
                        <div style={{ marginBottom: 'var(--spacing-md)', padding: 'var(--spacing-md)', background: 'var(--light-gray)', borderRadius: 'var(--border-radius)', borderLeft: '4px solid var(--secondary-cyan)' }}>
                            <h4 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-xs)' }}>
                                Do you work with companies outside of India?
                            </h4>
                            <p style={{ margin: 0, color: 'var(--gray)' }}>
                                While we're based in Bangalore, India, we work with clients globally. Our services are available remotely,
                                and we have experience working across different time zones and industries worldwide.
                            </p>
                        </div>
                        <div style={{ padding: 'var(--spacing-md)', background: 'var(--light-gray)', borderRadius: 'var(--border-radius)', borderLeft: '4px solid var(--secondary-cyan)' }}>
                            <h4 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-xs)' }}>
                                What's the typical timeline for AI implementation?
                            </h4>
                            <p style={{ margin: 0, color: 'var(--gray)' }}>
                                Timelines vary significantly based on project scope. A proof-of-concept can be completed in 4-8 weeks,
                                while full-scale implementations may take 3-6 months or more. We'll provide a detailed timeline after
                                understanding your specific requirements.
                            </p>
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
                            Ready to Start Your AI Journey?
                        </h2>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto var(--spacing-md)', color: 'rgba(255, 255, 255, 0.9)' }}>
                            Don't wait to harness the power of AI. Reach out today and let's explore how 4sight AI can transform
                            your enterprise together.
                        </p>
                        <a href="#contactForm" className="btn btn-primary morphing-icon" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('name').focus();
                            document.getElementById('name').scrollIntoView({ behavior: 'smooth' });
                        }}>
                            Fill Out the Form Above
                        </a>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Contact;

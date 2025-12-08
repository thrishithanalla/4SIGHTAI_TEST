import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Terms = () => {
    const location = useLocation();

    useEffect(() => {
        // Check for query param 'section'
        const params = new URLSearchParams(location.search);
        const section = params.get('section');
        if (section) {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <section className="hero" style={{ minHeight: '40vh' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                        <h1>Terms & Conditions</h1>
                        <p className="subheadline" style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.9)', marginTop: 'var(--spacing-md)' }}>
                            Last Updated: January 2025
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                        {/* Introduction */}
                        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--gray)' }}>
                                Welcome to 4sight AI. By accessing or using our website, products, and services, you agree to be bound by these
                                Terms and Conditions. Please read them carefully before using our services.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>1. Acceptance of Terms</h2>
                            <p style={{ lineHeight: 1.8, color: 'var(--gray)' }}>
                                By accessing and using the 4sight AI website and services, you accept and agree to be bound by the terms and
                                provisions of this agreement. If you do not agree to these terms, please do not use our services.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>2. Services Description</h2>
                            <p style={{ lineHeight: 1.8, color: 'var(--gray)', marginBottom: 'var(--spacing-sm)' }}>
                                4sight AI provides Generative AI consulting, advisory, development, and implementation services. Our services include:
                            </p>
                            <ul style={{ paddingLeft: '2rem', lineHeight: 1.8, color: 'var(--gray)' }}>
                                <li>GenAI Advisory and strategic consulting</li>
                                <li>AI project scoping and blueprint development</li>
                                <li>Proof-of-concept (POC) development</li>
                                <li>Full-scale AI implementation and integration</li>
                                <li>AI products including AI Envelop, AI Co-pilots, and specialized solutions</li>
                            </ul>
                            <p style={{ lineHeight: 1.8, color: 'var(--gray)', marginTop: 'var(--spacing-sm)' }}>
                                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
                            </p>
                        </div>

                        {/* Section 3 */}
                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>3. Client Obligations</h2>
                            <p style={{ lineHeight: 1.8, color: 'var(--gray)', marginBottom: 'var(--spacing-sm)' }}>
                                Clients engaging with 4sight AI agree to:
                            </p>
                            <ul style={{ paddingLeft: '2rem', lineHeight: 1.8, color: 'var(--gray)' }}>
                                <li>Provide accurate and complete information as required for service delivery</li>
                                <li>Grant necessary access to systems, data, and personnel as agreed upon</li>
                                <li>Maintain confidentiality of any proprietary methodologies or tools shared by 4sight AI</li>
                                <li>Comply with all applicable laws and regulations in their use of our services</li>
                                <li>Make timely payments as per agreed terms</li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>4. Intellectual Property Rights</h2>
                            <p style={{ lineHeight: 1.8, color: 'var(--gray)' }}>
                                All intellectual property rights in our services, including but not limited to software, methodologies, frameworks,
                                documentation, and deliverables (unless specifically created for and assigned to the client under a separate agreement),
                                remain the exclusive property of 4sight AI. Clients are granted a limited, non-exclusive license to use deliverables
                                for their internal business purposes only.
                            </p>
                            <p style={{ lineHeight: 1.8, color: 'var(--gray)', marginTop: 'var(--spacing-sm)' }}>
                                Any custom developments, models, or solutions created specifically for a client under a contracted engagement will be
                                addressed in the project-specific Statement of Work (SOW).
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>5. Confidentiality</h2>
                            <p style={{ lineHeight: 1.8, color: 'var(--gray)' }}>
                                Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during
                                the course of the engagement. This obligation survives the termination of the services agreement. Confidential
                                information does not include information that is publicly available, independently developed, or rightfully obtained
                                from third parties.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>6. Payment Terms</h2>
                            <p style={{ lineHeight: 1.8, color: 'var(--gray)' }}>
                                Payment terms are specified in individual service agreements or Statements of Work. Unless otherwise specified:
                            </p>
                            <ul style={{ paddingLeft: '2rem', lineHeight: 1.8, color: 'var(--gray)' }}>
                                <li>Invoices are payable within 30 days of receipt</li>
                                <li>Late payments may incur interest charges at the rate of 1.5% per month or the maximum allowed by law</li>
                                <li>4sight AI reserves the right to suspend services for non-payment</li>
                                <li>All fees are non-refundable unless explicitly stated otherwise</li>
                            </ul>
                        </div>

                        {/* Section 7 */}
                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>7. Limitation of Liability</h2>
                            <p style={{ lineHeight: 1.8, color: 'var(--gray)' }}>
                                To the maximum extent permitted by law, 4sight AI shall not be liable for any indirect, incidental, special,
                                consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly,
                                or any loss of data, use, goodwill, or other intangible losses resulting from:
                            </p>
                            <ul style={{ paddingLeft: '2rem', lineHeight: 1.8, color: 'var(--gray)' }}>
                                <li>Your use or inability to use our services</li>
                                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                                <li>Any interruption or cessation of transmission to or from our services</li>
                                <li>Any bugs, viruses, or the like that may be transmitted to or through our services by any third party</li>
                            </ul>
                            <p style={{ lineHeight: 1.8, color: 'var(--gray)', marginTop: 'var(--spacing-sm)' }}>
                                In no event shall 4sight AI's total liability exceed the amount paid by the client for the specific service
                                that gave rise to the claim in the 12 months preceding the claim.
                            </p>
                        </div>

                        {/* Section 8 */}
                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>8. Warranties and Disclaimers</h2>
                            <p style={{ lineHeight: 1.8, color: 'var(--gray)' }}>
                                While 4sight AI strives to provide high-quality services, we provide our services "as is" and "as available"
                                without warranties of any kind, either express or implied. We do not warrant that:
                            </p>
                            <ul style={{ paddingLeft: '2rem', lineHeight: 1.8, color: 'var(--gray)' }}>
                                <li>Our services will meet your specific requirements</li>
                                <li>Our services will be uninterrupted, timely, secure, or error-free</li>
                                <li>The results obtained from the use of our services will be accurate or reliable</li>
                                <li>Any errors in software or deliverables will be corrected (unless covered by a separate warranty agreement)</li>
                            </ul>
                        </div>

                        {/* Section 9 */}
                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>9. Termination</h2>
                            <p style={{ lineHeight: 1.8, color: 'var(--gray)' }}>
                                Either party may terminate services under the following conditions:
                            </p>
                            <ul style={{ paddingLeft: '2rem', lineHeight: 1.8, color: 'var(--gray)' }}>
                                <li>With 30 days written notice for ongoing consulting or advisory engagements</li>
                                <li>Immediately if the other party materially breaches these terms</li>
                                <li>Immediately if the other party becomes insolvent or subject to bankruptcy proceedings</li>
                            </ul>
                            <p style={{ lineHeight: 1.8, color: 'var(--gray)', marginTop: 'var(--spacing-sm)' }}>
                                Upon termination, the client remains responsible for payment for all services rendered up to the termination date.
                            </p>
                        </div>

                        {/* Section 10 */}
                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>10. Governing Law</h2>
                            <p style={{ lineHeight: 1.8, color: 'var(--gray)' }}>
                                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes
                                arising from these terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.
                            </p>
                        </div>

                        {/* Section 11 */}
                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>11. Changes to Terms</h2>
                            <p style={{ lineHeight: 1.8, color: 'var(--gray)' }}>
                                4sight AI reserves the right to modify these Terms and Conditions at any time. We will notify users of any
                                material changes by posting the updated terms on this page with a new "Last Updated" date. Your continued use
                                of our services after such modifications constitutes acceptance of the updated terms.
                            </p>
                        </div>

                        {/* Section 12 */}
                        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                            <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>12. Contact Information</h2>
                            <p style={{ lineHeight: 1.8, color: 'var(--gray)' }}>
                                For questions about these Terms and Conditions, please contact us at:
                            </p>
                            <div style={{ marginTop: 'var(--spacing-sm)', padding: 'var(--spacing-md)', background: 'var(--light-gray)', borderRadius: 'var(--border-radius)' }}>
                                <p style={{ margin: '0.25rem 0', color: 'var(--gray)' }}><strong>Email:</strong> legal@4sightai.com</p>
                                <p style={{ margin: '0.25rem 0', color: 'var(--gray)' }}><strong>Address:</strong> 4sight AI, Bangalore, Karnataka, India</p>
                            </div>
                        </div>

                        {/* Privacy Policy Section */}
                        <div id="privacy" style={{ borderTop: '2px solid var(--light-gray)', paddingTop: 'var(--spacing-xl)', marginTop: 'var(--spacing-xl)' }}>
                            <h1 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-lg)' }}>Privacy Policy</h1>

                            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--gray)' }}>
                                    At 4sight AI, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use,
                                    disclose, and safeguard your information when you visit our website or use our services.
                                </p>
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                                <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Information We Collect</h2>
                                <p style={{ lineHeight: 1.8, color: 'var(--gray)', marginBottom: 'var(--spacing-sm)' }}>
                                    We may collect the following types of information:
                                </p>
                                <h4 style={{ color: 'var(--primary-navy)', marginTop: 'var(--spacing-md)', marginBottom: 'var(--spacing-xs)' }}>
                                    Personal Information
                                </h4>
                                <ul style={{ paddingLeft: '2rem', lineHeight: 1.8, color: 'var(--gray)' }}>
                                    <li>Name, email address, phone number, and company information</li>
                                    <li>Professional details and job title</li>
                                    <li>Communication preferences</li>
                                    <li>Information provided in contact forms, inquiries, or service requests</li>
                                </ul>
                                <h4 style={{ color: 'var(--primary-navy)', marginTop: 'var(--spacing-md)', marginBottom: 'var(--spacing-xs)' }}>
                                    Technical Information
                                </h4>
                                <ul style={{ paddingLeft: '2rem', lineHeight: 1.8, color: 'var(--gray)' }}>
                                    <li>IP address, browser type, and operating system</li>
                                    <li>Pages visited, time spent on pages, and navigation patterns</li>
                                    <li>Referring website and exit pages</li>
                                    <li>Device information and screen resolution</li>
                                </ul>
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                                <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>How We Use Your Information</h2>
                                <p style={{ lineHeight: 1.8, color: 'var(--gray)', marginBottom: 'var(--spacing-sm)' }}>
                                    We use the collected information for the following purposes:
                                </p>
                                <ul style={{ paddingLeft: '2rem', lineHeight: 1.8, color: 'var(--gray)' }}>
                                    <li>To provide, maintain, and improve our services</li>
                                    <li>To respond to your inquiries and provide customer support</li>
                                    <li>To send you service-related communications and updates</li>
                                    <li>To analyze website usage and improve user experience</li>
                                    <li>To comply with legal obligations and protect our rights</li>
                                    <li>To send marketing communications (only with your consent)</li>
                                </ul>
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                                <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Data Security</h2>
                                <p style={{ lineHeight: 1.8, color: 'var(--gray)' }}>
                                    We implement appropriate technical and organizational security measures to protect your personal information
                                    against unauthorized access, alteration, disclosure, or destruction. These measures include:
                                </p>
                                <ul style={{ paddingLeft: '2rem', lineHeight: 1.8, color: 'var(--gray)' }}>
                                    <li>Encryption of data in transit and at rest</li>
                                    <li>Regular security assessments and updates</li>
                                    <li>Access controls and authentication mechanisms</li>
                                    <li>Employee training on data protection and confidentiality</li>
                                </ul>
                                <p style={{ lineHeight: 1.8, color: 'var(--gray)', marginTop: 'var(--spacing-sm)' }}>
                                    However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot
                                    guarantee absolute security.
                                </p>
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                                <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Data Sharing and Disclosure</h2>
                                <p style={{ lineHeight: 1.8, color: 'var(--gray)' }}>
                                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in
                                    the following circumstances:
                                </p>
                                <ul style={{ paddingLeft: '2rem', lineHeight: 1.8, color: 'var(--gray)' }}>
                                    <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our website or
                                        conducting our business, subject to confidentiality agreements</li>
                                    <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                                    <li><strong>Protection:</strong> To protect the rights, property, or safety of 4sight AI, our users, or others</li>
                                </ul>
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                                <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Your Rights</h2>
                                <p style={{ lineHeight: 1.8, color: 'var(--gray)', marginBottom: 'var(--spacing-sm)' }}>
                                    You have the following rights regarding your personal information:
                                </p>
                                <ul style={{ paddingLeft: '2rem', lineHeight: 1.8, color: 'var(--gray)' }}>
                                    <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                                    <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                                    <li><strong>Data Portability:</strong> Request transfer of your data to another service provider</li>
                                </ul>
                                <p style={{ lineHeight: 1.8, color: 'var(--gray)', marginTop: 'var(--spacing-sm)' }}>
                                    To exercise any of these rights, please contact us at privacy@4sightai.com.
                                </p>
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                                <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Cookies and Tracking Technologies</h2>
                                <p style={{ lineHeight: 1.8, color: 'var(--gray)' }}>
                                    We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic,
                                    and understand user preferences. You can control cookie settings through your browser preferences. Note that
                                    disabling cookies may affect website functionality.
                                </p>
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                                <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Data Retention</h2>
                                <p style={{ lineHeight: 1.8, color: 'var(--gray)' }}>
                                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
                                    Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your
                                    information, we securely delete or anonymize it.
                                </p>
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                                <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Children's Privacy</h2>
                                <p style={{ lineHeight: 1.8, color: 'var(--gray)' }}>
                                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information
                                    from children. If you believe we have collected information from a child, please contact us immediately.
                                </p>
                            </div>

                            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                                <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Changes to Privacy Policy</h2>
                                <p style={{ lineHeight: 1.8, color: 'var(--gray)' }}>
                                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the
                                    updated policy on this page with a new "Last Updated" date. We encourage you to review this Privacy Policy
                                    periodically.
                                </p>
                            </div>

                            <div>
                                <h2 style={{ color: 'var(--primary-navy)', marginBottom: 'var(--spacing-md)' }}>Contact Us About Privacy</h2>
                                <p style={{ lineHeight: 1.8, color: 'var(--gray)' }}>
                                    If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                                </p>
                                <div style={{ marginTop: 'var(--spacing-sm)', padding: 'var(--spacing-md)', background: 'var(--light-gray)', borderRadius: 'var(--border-radius)' }}>
                                    <p style={{ margin: '0.25rem 0', color: 'var(--gray)' }}><strong>Email:</strong> privacy@4sightai.com</p>
                                    <p style={{ margin: '0.25rem 0', color: 'var(--gray)' }}><strong>Address:</strong> 4sight AI, Bangalore, Karnataka, India</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Terms;

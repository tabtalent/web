
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import './styles.css'; 
import headerLogo from './assets/logo_tab.png'; 
import linkedinLogo from './assets/linkedin_logo.png'; 
import bannerImage from './assets/banner_tab.png'; 
import twitterLogo from './assets/twitter_logo.png';

const TermsOfUse = () => {
    return (
        <div>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={headerLogo} alt="TAB Talent" style={{ height: '40px' }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/apply">Apply</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Banner Image */}
            <div className="banner" style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover' }}></div>

            {/* Terms of Use Content with Fade-In Effect */}
            <motion.div
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}   
                transition={{ duration: 1 }}     
                className="container mt-4" style={{ maxWidth: '800px', lineHeight: '1.6' }}
            >
                <div className="privacy-card">
                <h2 className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold' }}>terms of use.</h2>
                    <div className="privacy-card-body">
                        <p>Welcome to TAB Talent! These Terms of Use govern your access to and use of our website located at <strong>www.tabtalent.com</strong>. By accessing or using the website, you acknowledge that you have read, understood, and agree to be bound by these terms.</p>

                        <h5>Acceptance of Terms</h5>
                        <p>By using our website, you agree to comply with and be bound by these Terms of Use. If you do not agree with any part of these terms, you must not use our website.</p>

                        <h5>User Responsibilities</h5>
                        <ul>
                            <li>You agree to use the website in accordance with all applicable local, state, national, and international laws.</li>
                            <li>You will not use the website for any unlawful purpose or in a manner that could damage, disable, overburden, or impair the website.</li>
                            <li>You agree not to impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity.</li>
                        </ul>

                        <h5>Intellectual Property</h5>
                        <p>All content on the website, including text, graphics, logos, and images, is the property of TAB Talent or licensed to us. No part of our website may be reproduced, modified, distributed, or used without our prior written consent.</p>

                        <h5>Account Terms</h5>
                        <p>If you create an account on our website, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your account.</p>

                        <h5>Disclaimer of Warranties</h5>
                        <p>The website is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the website's operation or content. You agree that your use of the website is at your own risk.</p>

                        <h5>Limitation of Liability</h5>
                        <p>In no event shall TAB Talent, its affiliates, or their licensors be liable for any indirect, incidental, punitive, or consequential damages arising from your use of or inability to use the website.</p>

                        <h5>Governing Law</h5>
                        <p>These Terms of Use shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law principles.</p>

                        <h5>Changes to This Terms of Use</h5>
                        <p>We may revise these Terms of Use at any time by updating this page. You are encouraged to review this page periodically for the latest information on our Terms of Use.</p>

                        <h5>Contact Us</h5>
                        <p>If you have any questions about these Terms of Use, please contact us:</p>
                        <p>Email: <a href="mailto:support@tabtalent.com">support@tabtalent.com</a></p>
                    </div>
                </div>
            </motion.div>

            {/* Footer Section with LinkedIn Logo */}
            <footer className="text-center mt-5 bg-dark text-white py-3 d-flex justify-content-between align-items-center px-3">
                <p className="mb-0">&copy; 2025 - TAB Talent</p>
                <p className="nav-item mb-0">
                    <Link className="nav-link text-white" to="/privacy-policy">Privacy Policy</Link>
                </p>
                <p className="nav-item mb-0">
                    <Link className="nav-link text-white" to="/terms-of-use">Terms of Use</Link>
                </p>
                <div className="d-flex align-items-center">
                    <a href="https://www.linkedin.com/company/tabtalent" target="_blank" rel="noopener noreferrer" className="ml-2">
                        <img src={linkedinLogo} alt="LinkedIn" style={{ width: '40px', height: '40px', marginLeft: '10px' }} />
                    </a>
                    <a href="https://x.com/TAB_Talent" target="_blank" rel="noopener noreferrer" className="ml-2">
                        <img src={twitterLogo} alt="X" style={{ width: '40px', height: '40px', marginLeft: '10px' }} />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default TermsOfUse;
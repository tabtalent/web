import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import './styles.css'; 
import headerLogo from './assets/logo_tab.png'; 
import linkedinLogo from './assets/linkedin_logo.png'; 
import bannerImage from './assets/banner_tab.png'; 
import twitterLogo from './assets/twitter_logo.png';

const CookiePolicy = () => {
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

            {/* Cookie Policy Content with Fade-In Effect */}
            <motion.div
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}   
                transition={{ duration: 1 }}     
                className="container mt-4" style={{ maxWidth: '800px', lineHeight: '1.6' }}
            >
                <div className="privacy-card">
                <h2 className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold' }}>cookies policy.</h2>
                    <div className="privacy-card-body">
                        <p>This Cookies Policy explains how TAB Talent uses cookies and similar technologies to recognize you when you visit our website at <strong>www.tabtalent.com</strong>. It explains what these technologies are, why we use them, and your rights to control our use of them.</p>

                        <h5>What Are Cookies?</h5>
                        <p>Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser.</p>

                        <h5>How TAB Talent Uses Cookies</h5>
                        <p>When you use and access our website, we may place a number of cookies files in your web browser. We use cookies for the following purposes:</p>
                        <ul>
                            <li><strong>Essential Cookies:</strong> We use cookies to remember information that changes the way the service behaves or looks.</li>
                            <li><strong>Account-Related Cookies:</strong> We use cookies to manage the signup process and general administration.</li>
                            <li><strong>Analytics Cookies:</strong> We use cookies to help us analyze how our visitors use the website.</li>
                            <li><strong>Advertising Cookies:</strong> We use cookies to display advertisements that are relevant to you and your interests.</li>
                        </ul>

                        <h5>Your Choices Regarding Cookies</h5>
                        <p>If you prefer to avoid the use of cookies on the website, you must first disable the use of cookies in your browser and then delete the cookies saved in your browser associated with this website.</p>

                        <h5>How to Disable Cookies</h5>
                        <p>You can generally activate or refuse cookies by adjusting the settings of your browser. The procedures for managing cookies vary from browser to browser. You can learn more about cookies and how to manage them by visiting the help pages of your respective browsers:</p>
                        <ul>
                            <li><a href="https://support.google.com/accounts/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                            <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                            <li><a href="https://support.microsoft.com/en-us/help/4468242/microsoft-edge-browsing-data-and-privacy" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                            <li><a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer">Safari</a></li>
                        </ul>

                        <h5>Further Information About Cookies</h5>
                        <p>For further information about cookies, please visit:</p>
                        <ul>
                            <li><a href="http://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer">AllAboutCookies</a></li>
                            <li><a href="http://www.networkadvertising.org/" target="_blank" rel="noopener noreferrer">Network Advertising Initiative</a></li>
                        </ul>

                        <h5>Changes to This Cookie Policy</h5>
                        <p>We may update our Cookie Policy from time to time. We encourage you to review this Cookie Policy periodically for any changes.</p>

                        <h5>Contact Us</h5>
                        <p>If you have any questions about our Cookie Policy, please contact us:</p>
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

export default CookiePolicy;
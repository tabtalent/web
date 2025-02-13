import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion for fade effect
import './styles.css'; // Importing the styles
import headerLogo from './assets/logo_tab.png'; // Import the header logo
import linkedinLogo from './assets/linkedin_logo.png'; // Import the LinkedIn logo
import bannerImage from './assets/banner_tab.png'; // Import the banner image
import twitterLogo from './assets/twitter_logo.png'// import twitter logo


const PrivacyPolicy = () => {
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

            {/* Privacy Policy Content with Fade-In Effect */}
            <motion.div
                initial={{ opacity: 0, y: 20 }} // Start off-screen and hidden
                animate={{ opacity: 1, y: 0 }}   // Animate to full visibility and original position
                transition={{ duration: 1 }}      // Duration for fade-in
                className="container mt-4" style={{ maxWidth: '800px', lineHeight: '1.6' }}
            >
                <div className="privacy-card">
                    <h2 className="mb-4" style={{ textAlign: 'center', fontWeight:'bold' }}>privacy policy.</h2>
                    <div className="privacy-card-body">
                        <p>
                            The <strong>www.tabtalent.com</strong> website is owned by TAB Talent, which is a data controller of your personal data.
                        </p>
                        <p>
                            We have adopted this Privacy Policy to explain how we process the information collected by <strong>www.tabtalent.com</strong> and to provide the reasons why we collect certain personal data about you. Therefore, you must read this Privacy Policy before using the <strong>www.tabtalent.com</strong> website.
                        </p>
                        <p>
                            We take care of your personal data and are committed to guaranteeing its confidentiality and security.
                        </p>
                        <h5>Personal Information We Collect:</h5>
                        <p>
                            When you visit the <strong>www.tabtalent.com</strong>, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the installed cookies on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products you view, what websites or search terms referred you to the Site, and how you interact with the Site. We refer to this automatically collected information as “Device Information.” Moreover, we might collect the personal data you provide to us (including but not limited to Name, Surname, Address, payment information, etc.) during registration to fulfill the agreement.
                        </p>
                        <p>For more detailed information about our use of cookies, please see our <Link to="/cookies-policy">Cookies Policy</Link>.</p>
                        <h5>Why Do We Process Your Data?</h5>
                        <p>
                            Our top priority is customer data security, and, as such, we may process only minimal user data, only as much as it is absolutely necessary to maintain the website. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage. This statistical information is not aggregated in such a way that it would identify any particular user of the system.
                        </p>
                        <p>
                            You can visit the website without telling us who you are or revealing any information by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the website’s features, or you wish to receive our newsletter or provide other details by filling out a form, you may provide personal data to us, such as your email, first name, last name, city of residence, organization, and telephone number. You can choose not to provide us with your personal data, but then you may not be able to take advantage of some of the website’s features. For example, you won’t be able to receive our Newsletter or contact us directly from the website. Users who are uncertain about what information is mandatory are welcome to contact us at support@tabtalent.com.
                        </p>
                        <h5>Your Rights:</h5>
                        <p>If you are a European resident, you have the following rights related to your personal data:</p>
                        <ul>
                            <li>The right to be informed.</li>
                            <li>The right of access.</li>
                            <li>The right to rectification.</li>
                            <li>The right to erasure.</li>
                            <li>The right to restrict processing.</li>
                            <li>The right to data portability.</li>
                            <li>The right to object.</li>
                            <li>Rights in relation to automated decision-making and profiling.</li>
                        </ul>
                        <p>
                            If you would like to exercise these rights, please contact us using the contact information provided below.
                        </p>
                        <h5>Links to Other Websites:</h5>
                        <p>
                            Our website may contain links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for the privacy practices of such other websites or third parties. We encourage you to be aware when you leave our website and read the privacy statements of each website that may collect personal information.
                        </p>
                        <h5>Information Security:</h5>
                        <p>
                            We secure the information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We keep reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and personal data disclosure in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.
                        </p>
                        <h5>Legal Disclosure:</h5>
                        <p>
                            We will disclose any information we collect, use, or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety, or the safety of others, investigate fraud, or respond to a government request.
                        </p>
                        <h5>Contact Information:</h5>
                        <p>
                            If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email to support@tabtalent.com.
                        </p>
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

export default PrivacyPolicy;
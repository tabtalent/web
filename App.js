import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CookieConsent from './components/CookieConsent'; // Import the CookieConsent component
import CookiesPolicy from './CookiesPolicy'; // Adjust the path as necessary
import './styles.css'; // Your general styles
import 'react-phone-input-2/lib/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Apply from './Apply'; // Import the Apply component
import PrivacyPolicy from './PrivacyPolicy'; // Import the Privacy Policy component
import TermsOfUse from './TermsOfUse'; // Import Terms of Use component
import { ClipLoader } from 'react-spinners';
import headerLogo from './assets/logo_tab.png'; // Updated header logo reference
import linkedinLogo from './assets/linkedin_logo.png'; // Import the LinkedIn logo
import twitterLogo from './assets/twitter_logo.png'; // Import the Twitter logo
import PhoneInput from 'react-phone-input-2'; // Import PhoneInput
import bannerImage from './assets/banner_tab.png'
import mockup0 from './assets/mockup0.png'; import mockup1 from './assets/mockup1.png';import mockup2 from './assets/mockup2.png';
import contentPhoto5 from './assets/content_photo_5.jpg'; // Presentation image
import { motion } from 'framer-motion'; // Import Framer Motion
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop component
import RemoteWorker from './assets/remote_work.jpg'; // Image for remote hiring section
import applyBgImage from '/Users/tomiboggio/professional_website/frontend/src/assets/apply_bg.jpg'; // Update the path according to your project structure
import CoreValuesAndCulture from './CoreValuesAndCulture'; // Ensure the name matches your file


// FadeInSection Component
const FadeInSection = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const DOMRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Show on entering the viewport
                } else {
                    setIsVisible(false); // Hide on leaving the viewport
                }
            });
        });

        observer.observe(DOMRef.current); // Start observing
        return () => observer.disconnect(); // Clean up the observer
    }, []);

    return (
        <motion.div
            ref={DOMRef}
            initial={{ opacity: 0, y: 20 }} // Start off-screen
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }} // Animate to original position
            transition={{ duration: 1 }} // Duration for the fade
        >
            {children}
        </motion.div>
    );
};

function Home() {
    const [contactName, setContactName] = useState('');
    const [companyName, setCompanyName] = useState(''); // Separate state to track company name
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [contactMessage, setContactMessage] = useState('');
    const [isContactLoading, setIsContactLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const servicesRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setIsContactLoading(true);
    
        const contactData = {
            name: contactName,
            company: companyName, // Include company name
            email: contactEmail,
            phone: contactPhone,
            message: contactMessage,
        };
    
        try {
            const response = await fetch('/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contactData),
            });
            
            const data = await response.json();
            alert(data.message);
    
            // Reset form fields after submission
            setContactName('');
            setCompanyName(''); // Reset company name
            setContactEmail('');
            setContactPhone('');
            setContactMessage('');
    
            // Set submitted state to true to display the thank you message
            setIsSubmitted(true); // This will trigger the display of the thank-you note
        } catch (error) {
            console.error("Error sending message:", error);
            alert("An error occurred while sending your message.");
        } finally {
            setIsContactLoading(false);
        }
    };

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={headerLogo} alt="TAB Talent" style={{ height: '40px' }} />
                    </Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button className="nav-link text-white" onClick={() => scrollToSection(servicesRef)}>Services</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-white" onClick={() => scrollToSection(contactRef)}>Contact</button>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/apply">Apply</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/core-values-and-culture">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Banner Image */}
            <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}></div>

            {/* Presentation Section */}
            <section className="section">
                <FadeInSection>
                        <div className="container d-flex align-items-center" style={{ justifyContent: 'space-between' }}>
                            <div className="col-md-6 mb-4">
                                <img src={contentPhoto5} alt="Presentation" className="img-fluid rounded-image" style={{boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'}} />
                            </div>
                            <div className="col-md-6 mb-4" style={{ textAlign: 'right' }}>
                                <h2 style={{ fontWeight: 'bold', color: '#5e17eb'}}>TAB Talent is an exclusive network of the premier talent in artificial intelligence, data science, machine learning, and related fields.</h2>
                                <h5 style={{ fontWeight: 'bold'}} >Our curated pool of experts is designed to meet the high demands of the rapidly evolving AI landscape, ensuring your team has the talent it needs to succeed.</h5>
                            </div>
                        </div>
                </FadeInSection>
            </section>

            {/* Our Services Section */}
            <section id='services' className="services-section" ref={servicesRef}>
                <FadeInSection>
                    <div className="container d-flex align-items-center mb-5" style={{ justifyContent: 'space-between' }}>
                        <div style={{ flex: 1, padding: '20px' }}>
                            <h2 style={{ textAlign: 'right', fontWeight: 'bold', color: '#00bf63' }}>services.</h2>
                            <h5 style={{ textAlign: 'right', fontWeight: 'bold'}}>
                                We specialize in helping businesses scale their teams effectively by providing quick access to top-tier talent.
                            </h5>
                        </div>
                        <div className="d-flex flex-column" style={{ flex: 2 }}>
                        <div className="card mb-3" style={{ border: 'none', marginBottom: '20px', transition: 'transform 0.3s ease', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                            <img src={mockup0} alt="Permanent Placement" className="card-img-top" style={{ width: '40px', height: '40px', margin: '15px auto 0' }} />
                            <div className="card-body">
                                    <h5 className="card-title">Permanent Placement</h5>
                                    <p className="card-text">Our permanent placement service enables you to onboard top talent from the market to become immediate members of your team.</p>
                                </div>
                            </div>
                            <div className="card mb-3" style={{ border: 'none', marginBottom: '20px', transition: 'transform 0.3s ease', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                            <img src={mockup1} alt="Permanent Placement" className="card-img-top" style={{ width: '40px', height: '40px', margin: '15px auto 0' }} />
                            <div className="card-body">
                                    <h5 className="card-title">Contract-to-Hire</h5>
                                    <p className="card-text">This flexible service lets you quickly bring exceptional talent on board, with the option to convert them to full-time roles once you’re ready for a long-term commitment.</p>
                                </div>
                            </div>
                            <div className="card mb-3" style={{ border: 'none', marginBottom: '20px', transition: 'transform 0.3s ease', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                            <img src={mockup2} alt="Permanent Placement" className="card-img-top" style={{ width: '40px', height: '40px', margin: '15px auto 0' }} />
                            <div className="card-body">
                                    <h5 className="card-title">Staff Augmentation</h5>
                                    <p className="card-text">Our staff augmentation service provides access to top-tier talent on short notice, particularly useful when your long-term hiring needs are uncertain.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </section>


            {/* Hire Remote Section */}
            <section className="section">
                <FadeInSection>
                    <div className="container d-flex align-items-center mb-5" style={{ justifyContent: 'space-between' }}>
                        <div className="col-md-6 mb-4">
                            <img src={RemoteWorker} alt="Remote Team" className="img-fluid rounded-image" style={{boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'}}></img>
                        </div>
                        <div className="col-md-6 mb-4" style={{ paddingLeft: '20px', textAlign: 'left' }}>
                            <h2 className="mb-4" style={{ fontWeight: 'bold', color: '#333'}}> hire anywhere.</h2>
                            <p>
                                In today’s fast-paced world, hiring remotely opens the door to an expansive pool of talent.
                                At TAB Talent, we specialize in connecting you with exceptional professionals from North America, LATAM, and EMEA—empowering you to craft the perfect team for your goals.
                            </p>
                            <p>
                                Our streamlined process simplifies integrating remote talent into your projects. 
                                Whether you’re enhancing your local workforce or expanding into new regions, we’re here to help you every step of the way, ensuring seamless collaboration and project success.
                            </p>
                            <p>
                                Discover how our expertise in remote hiring can elevate your business to new heights. 
                                Let’s work together to find the talent that drives your success!
                            </p>
                            <div className="text-center">
                                <button className="btn btn-success btn-lg" style={{ backgroundColor: '#00bf63', borderColor: '#00bf63' }} onClick={() => scrollToSection(contactRef)}>Start hiring!</button>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </section>

            
            {/* Enhanced "Apply Now" Section with Fade-In Effect */}
            <section className="elevate-section">
                <FadeInSection>
                    <div className="container d-flex align-items-center mb-5">
                        <div style={{ flex: 1, padding: '20px', textAlign: 'right' }}>
                            <h2 style={{ fontWeight: 'bold', color: "#5e17eb" }}>elevate your career.</h2>
                            <h5 style={{fontWeight:'bold'}}>
                                Join a network of leading companies collaborating with the top talent the AI space. 
                                Submit your resume and we will reach out to you when we find a perfect match.
                            </h5>
                        </div>
                        <div className="d-flex flex-column" style={{ flex: 2 }}>
                            <div className="card mb-3" style={{ border: 'none' }}>
                                <div style={{
                                    backgroundImage: `url(${applyBgImage})`, // Use the imported image
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '400px', // Adjust height as needed
                                    width: '500px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                                    color: '#ffffff',
                                    textAlign: 'center',
                                    padding: '20px'
                                }}>
                                    <div style={{borderRadius: '10px', padding: '20px', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
                                    <h2 style={{ fontWeight: 'bold', textAlign: 'left', color: '#ffffff' }}>join our talent pool.</h2>
                                        <div className="button-container" style={{ textAlign: 'left', marginTop: '20px' }}>
                                            <Link 
                                                to="/apply" 
                                                className="btn btn-primary btn-lg" 
                                                style={{ backgroundColor: '#5e17eb', borderColor: '#5e17eb' }}
                                            >
                                                Apply Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </section>

            {/* Contact Section with Fade-In Effect */}
            <section id="contact" className="contact-section" ref={contactRef}>
                <FadeInSection>
                    {isSubmitted ? (
                        <div className="text-center">
                            <h2>thank you.</h2>
                            <h5>We appreciate your interest and will get back to you soon!</h5>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '40px' }}>
                            <h1 className="mb-4" style={{ color:'#5e17eb', fontWeight:'bold' }}>ready to get started?</h1>
                            <div className="contact-card" style={{ maxWidth: '600px', width: '100%', textAlign: 'left', padding: '20px' }}>
                                <h5 className="card-text" style={{ fontWeight: 'bold' }}>
                                    We can help you accelerate your business through finding the best talent in the AI space.
                                </h5>
                                <form onSubmit={handleContactSubmit}>
                                    <div className="form-group row" style={{ marginBottom: '1rem' }}>
                                        <label htmlFor="name" className="col-sm-4 col-form-label">Name</label>
                                        <div className="col-sm-8">
                                            <input type="text" value={contactName} onChange={(e) => setContactName(e.target.value)} className="form-control" style={{ width: '100%' }} required />
                                        </div>
                                    </div>
                                    <div className="form-group row" style={{ marginBottom: '1rem' }}>
                                        <label htmlFor="companyName" className="col-sm-4 col-form-label">Company Name</label>
                                        <div className="col-sm-8">
                                            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="form-control" style={{ width: '100%' }} required />
                                        </div>
                                    </div>
                                    <div className="form-group row" style={{ marginBottom: '1rem' }}>
                                        <label htmlFor="email" className="col-sm-4 col-form-label">Email</label>
                                        <div className="col-sm-8">
                                            <input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} className="form-control" style={{ width: '100%' }} required />
                                        </div>
                                    </div>
                                    <div className="form-group row" style={{ marginBottom: '1rem' }}>
                                        <label htmlFor="phone" className="col-sm-4 col-form-label">Phone Number</label>
                                        <div className="col-sm-8">
                                            <PhoneInput country={'us'} value={contactPhone} onChange={setContactPhone} required inputStyle={{ width: '100%' }} />
                                        </div>
                                    </div>
                                    <div className="form-group row" style={{ marginBottom: '1rem' }}>
                                        <label htmlFor="message" className="col-sm-4 col-form-label">Message</label>
                                        <div className="col-sm-8">
                                            <textarea value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} className="form-control" rows="4" required style={{ width: '100%', resize:'none'}}></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-success btn-lg" style={{ backgroundColor: '#00bf63', borderColor: '#00bf63' }} disabled={isContactLoading}>
                                        {isContactLoading ? <ClipLoader color="#ffffff" size={20} /> : "send message."}
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </FadeInSection>           
            </section>

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
}

// Wrap the App component with Router
export default function AppWrapper() {
    return (
        <Router>
            <ScrollToTop />
            <div>
                <CookieConsent />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/apply" element={<Apply />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/cookies-policy" element={<CookiesPolicy />} />
                    <Route path="/terms-of-use" element={<TermsOfUse />} />
                    <Route path="/core-values-and-culture" element={<CoreValuesAndCulture />} /> {/* Add route */}
                </Routes>
            </div>
        </Router>
    );
}
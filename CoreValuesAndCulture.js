import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import './styles.css'; 
import headerLogo from './assets/logo_tab.png'; 
import linkedinLogo from './assets/linkedin_logo.png'; 
import bannerImage from './assets/banner_tab.png'; 
import twitterLogo from './assets/twitter_logo.png';
import FadeInSection from './components/FadeInSection'; // Adjust the path based on your file structure
import tab1 from "./assets/tab_1.jpg"; import tab2 from "./assets/tab_2.jpg"; import tab3 from "./assets/tab_3.jpg"; import tab4 from "./assets/tab_4.jpg";


const CoreValuesAndCulture = () => {
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


            {/* The TAB Way Section */}
            <section className="section" style={{background: "#f5f5f5f5"}}>
                <FadeInSection>
                <h1 className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold', color: '#00bf63', margin: "60px 0 30px" }}>our culture.</h1>
                <h4 className='container'style={{ textAlign:'justify', fontWeight:'bold', color: '#5e17eb'}}>At TAB Talent, we cultivate a culture of excellence, empowerment, and results-driven performance. We take ownership of our responsibilities, ensuring that our actions align with our commitment to success. 
                    Attention to detail is paramount, and we consistently go the extra mile to deliver work that we are proud of.</h4>
                <p className='container'style={{ textAlign:'justify', fontWeight:'bold', color: '#333', marginTop:'30px'}}>Our passion for innovation propels us to create exceptional outcomes, and we thrive on the challenges presented in the fast-evolving AI landscape. Regardless of the circumstances, we approach every situation with calm determination and resilience, 
                    ensuring that our focus remains steadfast as we pursue our goals.</p>   
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card new-approach-card">
                                    <img 
                                        src={tab1} 
                                        alt="Adaptive Methodology" 
                                        className="img-fluid full-width-image" 
                                    />
                                    <div className="card-body">
                                        <h4 className="text-center">adaptive methodology.</h4>
                                        <p style={{textAlign:'justify'}}>
                                            We are flexible in our techniques, adapting to the unique needs of each client. Our practices come from a blend of invaluable experiences and the best industry standards available.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card new-approach-card">
                                    <img 
                                        src={tab4} 
                                        alt="Collaborative Work Ethic" 
                                        className="img-fluid full-width-image" 
                                    />
                                    <div className="card-body">
                                        <h4 className="text-center">collaborative work ethic.</h4>
                                        <p style={{textAlign:'justify'}}>Our team spans across regions, allowing us to select experts with specific skills.
                                            Effective communication is essential, and we prioritize clarity and regular updates.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card new-approach-card">
                                    <img 
                                        src={tab3} 
                                        alt="People-Centric Culture" 
                                        className="img-fluid full-width-image" 
                                    />
                                    <div className="card-body">
                                        <h4 className="text-center">people-centric culture.</h4>
                                        <p style={{textAlign:'justify'}}>Our environment empowers individuals to take ownership of their work.
                                            We trust our team to manage their schedule and focus on results rather than methods.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card new-approach-card">
                                    <img 
                                        src={tab2} 
                                        alt="Commitment to Excellence" 
                                        className="img-fluid full-width-image" 
                                    />
                                    <div className="card-body">
                                        <h4 className="text-center">commitment to excellence.</h4>
                                        <p style={{textAlign:'justify'}}>Our dedication to quality drives us to deliver exceptional outcomes. We take pride in our work 
                                            and uphold leadership principles at every level throughout our organization.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </section>


            {/* Core Values Section with a 3x3 Grid Layout */}
            <FadeInSection>
            <h1 className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold', color: '#5e17eb', margin: "60px 0 30px" }}>our values.</h1>
            <div className="container mt-4">
                <div className="core-values-grid">
                    <div className="core-value" >
                        <h3>01</h3>
                        <h4>always get it done.</h4>
                        <p>Our primary focus is the success of our clients. We always push forward to achieve the best outcomes for both.</p>
                    </div>
                    <div className="core-value">
                        <h3>02</h3>
                        <h4>win as a team.</h4>
                        <p>If the team fails, everyone fails. We only win when our clients are successful.</p>
                    </div>
                    <div className="core-value">
                        <h3>03</h3>
                        <h4>take extreme ownership.</h4>
                        <p>We empower decentralized leadership and autonomy, enabling informed decisions by those closest to the details.</p>
                    </div>
                    <div className="core-value">
                        <h3>04</h3>
                        <h4>continous improvement.</h4>
                        <p>We embrace new challenges and hold each other accountable to grow.</p>
                    </div>
                    <div className="core-value">
                        <h3>05</h3>
                        <h4>be humble and honest.</h4>
                        <p>We give clear and honest feedback, embracing ownership of our mistakes.</p>
                    </div>
                    <div className="core-value">
                        <h3>06</h3>
                        <h4>enjoy the ride.</h4>
                        <p>Hard days aren't bad days. We support each other while solving tough problems and growing.</p>
                    </div>
                </div>
            </div>
            </FadeInSection>
            

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

export default CoreValuesAndCulture;
            
import { ClipLoader } from 'react-spinners';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';
import './styles.css';
import bannerImage from './assets/banner_tab.png';
import headerLogo from './assets/logo_tab.png';
import linkedinLogo from './assets/linkedin_logo.png';
import contentImage from './assets/content_photo_4.jpg';
import FadeInSection from './components/FadeInSection'; // Import the FadeInSection
import twitterLogo from './assets/twitter_logo.png'; // import twitter logo
import Select from 'react-select';
import { countries } from 'country-data'; // Keep this import

const countryOptions = countries.all.map(country => ({
    value: country.alpha2, // Change as necessary based on the data structure
    label: country.name     // Full country name
}));

const Apply = () => {
    const [resume, setResume] = useState(null);
    const [applicantPreferredName, setApplicantPreferredName] = useState('');
    const [applicantFullName, setApplicantFullName] = useState('');
    const [applicantEmail, setApplicantEmail] = useState('');
    const [applicantPhone, setApplicantPhone] = useState('');
    const [applicantLinkedIn, setApplicantLinkedIn] = useState('');
    const [applicantPosition, setApplicantPosition] = useState('');
    const [applicantGender, setApplicantGender] = useState('');
    const [applicantCountry, setApplicantCountry] = useState('');
    const [applicantConsent, setApplicantConsent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleResumeChange = (e) => {
        setResume(e.target.files[0]);
    };

    const handleSubmitApplication = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData();
        formData.append('resume', resume);
        formData.append('preferredName', applicantPreferredName);
        formData.append('fullname', applicantFullName);
        formData.append('email', applicantEmail);
        formData.append('phone', applicantPhone);
        formData.append('linkedin', applicantLinkedIn);
        formData.append('position', applicantPosition);
        formData.append('gender', applicantGender);
        formData.append('country', applicantCountry);
        formData.append('consent', applicantConsent);

        try {
            const response = await fetch('/submit_application', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            alert(data.message);
            // Reset the form
            setResume(null);
            setApplicantPreferredName('');
            setApplicantFullName('');
            setApplicantEmail('');
            setApplicantPhone('');
            setApplicantLinkedIn('');
            setApplicantPosition('');
            setApplicantGender('');
            setApplicantCountry('');
            setApplicantConsent(false);
            setIsSubmitted(true);
        } catch (error) {
            console.error("Error submitting application:", error);
            alert("An error occurred while submitting your application.");
        } finally {
            setIsLoading(false);
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
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/core-values-and-culture">About Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Banner Image */}
            <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}></div>


            {/* Apply Page Content with Fade-In Effect */}
                        <section className="section">
                            <FadeInSection>
                                 <h1 className="mb-4" style={{ textAlign: 'right', fontWeight: 'bold', color: '#333', margin: "60px 0 30px" }}>it's more than just a job.</h1>
                                    <div className="container d-flex align-items-center" style={{ justifyContent: 'space-between' }}>
                                        <div className="col-md-6 mb-4">
                                            <img src={contentImage} alt="Career in AI" className="img-fluid rounded-image" style={{boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',}} />
                                        </div>
                                        <div className="col-md-6 mb-4" style={{ textAlign: 'left' }}>
                                            <h2 className="mb-4" style={{ fontWeight: 'bold', color: '#00bf63', textAlign: 'left'}}>start your career in AI now.</h2>
                                            <p className="card-text">
                                                Are you ready to take the leap into one of the most exciting and in-demand fields in technology? 
                                                Join our talent pool and embark on a transformative journey in the world of Artificial Intelligence.
                                            </p>
                                            <p className="card-text">
                                                At TAB Talent, we believe in connecting exceptional individuals with leading companies that are 
                                                shaping the future. Whether you're a seasoned professional or just starting out, we provide 
                                                opportunities that align with your skills and aspirations.
                                            </p>
                                            <p className="card-text">
                                                By submitting your application, you're not just sharing your resume; you're taking a step 
                                                towards unlocking your potential in a rapidly evolving industry. Our dedicated team is here to 
                                                support you every step of the way, ensuring your career path is aligned with innovative projects 
                                                and amazing companies.
                                            </p>
                                            <p className="card-text">
                                                Don't wait any longer – your future in AI starts here! Apply now and discover the incredible 
                                                opportunities that await you!
                                            </p>
                                        </div>
                                    </div>
                            </FadeInSection>
                        </section>

            {/* Form Section */}
            <FadeInSection>
                <section id='contact' className="contact-section" style={{ textAlign: 'center' }}>
                    {isSubmitted ? (
                        <div className="text-center">
                            <h2>thank you.</h2>
                            <h5>We appreciate your interest and will get back to you soon!</h5>
                            <Link to="/" className="btn btn-success mt-3" style={{ backgroundColor: '#00bf63', borderColor: '#00bf63' }}>
                                Back to Home
                            </Link>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '40px' }}>
                            <h1 className="mb-4" style={{color: '#5e17eb', fontWeight:'bold' }}>join our talent pool.</h1>
                            <div className="contact-card" style={{ maxWidth: '600px', width: '100%', textAlign: 'left', padding: '20px' }}>
                                <h5>Submit your resume and we will reach out to you when we find a perfect match!</h5>
                                <form onSubmit={handleSubmitApplication}>
                                    <div className="form-group row" style={{ marginBottom: '1rem' }}>
                                        <label htmlFor="preferredName" className="col-sm-4 col-form-label">Preferred Name</label>
                                        <div className="col-sm-8">
                                            <input type="text" value={applicantPreferredName} onChange={(e) => setApplicantPreferredName(e.target.value)} className="form-control" style={{ width: '100%' }} required />
                                        </div>
                                    </div>
                                    <div className="form-group row" style={{ marginBottom: '1rem' }}>
                                        <label htmlFor="fullname" className="col-sm-4 col-form-label">Full Legal Name</label>
                                        <div className="col-sm-8">
                                            <input type="text" value={applicantFullName} onChange={(e) => setApplicantFullName(e.target.value)} className="form-control" style={{ width: '100%' }} required />
                                        </div>
                                    </div>
                                    <div className="form-group row" style={{ marginBottom: '1rem' }}>
                                        <label htmlFor="email" className="col-sm-4 col-form-label">Email Address</label>
                                        <div className="col-sm-8">
                                            <input type="email" value={applicantEmail} onChange={(e) => setApplicantEmail(e.target.value)} className="form-control" style={{ width: '100%' }} required />
                                        </div>
                                    </div>
                                    <div className="form-group row" style={{ marginBottom: '1rem' }}>
                                        <label htmlFor="phone" className="col-sm-4 col-form-label">Phone Number</label>
                                        <div className="col-sm-8">
                                            <PhoneInput country={'us'} value={applicantPhone} onChange={setApplicantPhone} required inputStyle={{ width: '100%' }} />
                                        </div>
                                    </div>
                                    <div className="form-group row" style={{ marginBottom: '1rem' }}>
                                        <label htmlFor="linkedin" className="col-sm-4 col-form-label">LinkedIn Profile</label>
                                        <div className="col-sm-8">
                                            <input type="url" value={applicantLinkedIn} onChange={(e) => setApplicantLinkedIn(e.target.value)} className="form-control" style={{ width: '100%' }} required />
                                        </div>
                                    </div>
                                    <div className="form-group row" style={{ marginBottom: '1rem' }}>
                                        <label htmlFor="position" className="col-sm-4 col-form-label">Position Applied For</label>
                                        <div className="col-sm-8">
                                            <select value={applicantPosition} onChange={(e) => setApplicantPosition(e.target.value)} className="form-control" style={{ width: '100%' }} required>
                                                <option value="">Select a position...</option>
                                                <option value="developer">Developer</option>
                                                <option value="designer">Designer</option>
                                                <option value="manager">Manager</option>
                                                <option value="data">Data</option>
                                                <option value="project">Product/Project Management</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row" style={{ marginBottom: '1rem' }}>
                                        <label htmlFor="gender" className="col-sm-4 col-form-label">Gender</label>
                                        <div className="col-sm-8">
                                            <select value={applicantGender} onChange={(e) => setApplicantGender(e.target.value)} className="form-control" style={{ width: '100%' }} required>
                                                <option value="">Select your gender...</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="non-binary">Non-binary</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row" style={{ marginBottom: '1rem' }}>
                                        <label htmlFor="country" className="col-sm-4 col-form-label">Country of Residence</label>
                                        <div className="col-sm-8">
                                            <Select options={countryOptions} onChange={(option) => setApplicantCountry(option.value)} required />
                                        </div>
                                    </div>
                                    <div className="form-group row" style={{ marginBottom: '1rem' }}>
                                        <label htmlFor="resume" className="col-sm-4 col-form-label">Upload Your Resume</label>
                                        <div className="col-sm-8">
                                            <input type="file" name="resume" className="form-control-file" required onChange={handleResumeChange} />
                                        </div>
                                    </div>
                                    <div className="form-group form-check row">
                                        <div className="col-sm-8 offset-sm-4">
                                            <input type="checkbox" className="form-check-input" id="consent" checked={applicantConsent} onChange={(e) => setApplicantConsent(e.target.checked)} required />
                                            <label className="form-check-label" htmlFor="consent">
                                                I consent to my data being treated according to GDPR. 
                                                <a href="https://gdpr.eu/" target="_blank" rel="noopener noreferrer">Learn more about GDPR</a>
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-success btn-lg" style={{ backgroundColor: '#00bf63', borderColor: '#00bf63' }} disabled={isLoading}>
                                        {isLoading ? <ClipLoader color="#ffffff" size={20} /> : "submit application."}
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </section>
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

export default Apply;
import React, { useEffect, useState } from 'react';

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        if (!cookiesAccepted) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setShowBanner(false);
    };

    const declineCookies = () => {
        localStorage.setItem('cookiesAccepted', 'false');
        setShowBanner(false);
    };

    if (!showBanner) return null; // Do not render if banner should not be shown

    return (
        <div className="cookie-banner">
            <p>This site uses cookies to enhance your experience. 
                <a href="/cookies-policy">Learn more</a>.
            </p>
            <button onClick={acceptCookies}>Accept</button>
            <button onClick={declineCookies}>Decline</button>
        </div>
    );
};

export default CookieConsent;
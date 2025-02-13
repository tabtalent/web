// FadeInSection.js
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const FadeInSection = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const DOMRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            });
        });

        observer.observe(DOMRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <motion.div
            ref={DOMRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInSection;
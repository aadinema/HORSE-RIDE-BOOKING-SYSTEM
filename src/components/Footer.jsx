// src/components/Footer.jsx
import React ,{useEffect}from 'react';
import { gsap } from 'gsap';

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      ".footer-content",
      { opacity: 0 },
      { duration: 1, opacity: 1, ease: "power1.inOut" }
    );
  }, []);

  return (
    <footer className="bg-black text-teal-600 p-4 bottom-0 left-0 w-full">
      <div className="container mx-auto text-center footer-content">
        <p>&copy; 2024 Horse Ride Booking. All rights reserved.</p>
        <p>
          <a href="/terms" className="hover:underline">Terms of Service</a> | <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

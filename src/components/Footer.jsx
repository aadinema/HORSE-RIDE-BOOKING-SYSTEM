// src/components/Footer.jsx
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/terms" className="hover:underline">
            Terms of service
          </NavLink>{" "}
          |{" "}
          <NavLink to="/privacy" className=" hover:underline">
            Privacy Policy
          </NavLink>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

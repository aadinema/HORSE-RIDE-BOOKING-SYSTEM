// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".nav-link",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out", stagger: 0.5, delay: 1 }
    );
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-teal-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="md:text-2xl font-bold text-l ">Horse Ride Booking</h1>
        <button
          className="md:hidden block text-teal-500 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6 ml-40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
        <nav className={`w-full md:w-auto ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col items-end md:flex-row md:space-x-4 space-y-2 md:space-y-0 text-center">
            <li>
              <NavLink to="/" className="nav-link block px-3 py-2 hover:underline">Home</NavLink>
            </li>
            <li>
              <NavLink to="/booking" className="nav-link block px-3 py-2 hover:underline">Book Now</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link block px-3 py-2 hover:underline">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/terms" className="nav-link block px-3 py-2 hover:underline">Terms</NavLink>
            </li>
            <li>
              <NavLink to="/privacy" className="nav-link block px-3 py-2 hover:underline">Privacy</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

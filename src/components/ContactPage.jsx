// src/components/ContactPage.jsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const ContactPage = () => {
  useEffect(() => {
    gsap.fromTo(
      ".contact-form",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out", delay:1, }
    );
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <form className="contact-form bg-slate-950 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
          <input
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
          <input
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
          <textarea
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600 hover:bg-teal-900"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;

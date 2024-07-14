// src/components/PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl text-left">
      <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
      <p className="mb-4">
        We are committed to protecting your privacy. This privacy policy explains how we collect, use, and share your personal information.
      </p>

      <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
      <p className="mb-4">
        We collect information you provide directly to us, such as when you book a ride or contact us for support. This may include your name, email, phone number, and payment information.
      </p>

      <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
      <p className="mb-4">
        We use your information to process your bookings, provide customer support, and improve our services. We may also use your information to send you promotional materials and updates.
      </p>

      <h2 className="text-xl font-semibold mb-4">4. Sharing Your Information</h2>
      <p className="mb-4">
        We do not share your personal information with third parties except as necessary to provide our services or as required by law.
      </p>

      <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
      <p className="mb-4">
        We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.
      </p>

      <h2 className="text-xl font-semibold mb-4">6. Your Choices</h2>
      <p className="mb-4">
        You have the right to access, update, and delete your personal information. You may also opt out of receiving promotional communications from us.
      </p>

      <h2 className="text-xl font-semibold mb-4">7. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this privacy policy from time to time. Any changes will be posted on our website.
      </p>

      <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
      <p>
        If you have any questions about this privacy policy, please contact us at support@horseridebooking.com.
      </p>
    </div>
  </div>
);

export default PrivacyPolicy;

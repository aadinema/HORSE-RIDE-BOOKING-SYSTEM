// src/components/TermsAndConditions.jsx
import React from 'react';

const TermsAndConditions = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl text-left">
      <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
      <p className="mb-4">
        Welcome to our horse ride booking system. By using our services, you agree to comply with and be bound by the following terms and conditions.
      </p>

      <h2 className="text-xl font-semibold mb-4">2. Booking and Payment</h2>
      <p className="mb-4">
        All bookings must be made in advance and paid in full at the time of booking. We accept major credit cards and online payments.
      </p>

      <h2 className="text-xl font-semibold mb-4">3. Cancellations and Refunds</h2>
      <p className="mb-4">
        Cancellations made at least 24 hours before the scheduled ride will receive a full refund. No refunds will be given for cancellations made within 24 hours of the ride.
      </p>

      <h2 className="text-xl font-semibold mb-4">4. Liability</h2>
      <p className="mb-4">
        We are not responsible for any injuries or accidents that occur during the ride. Riders participate at their own risk.
      </p>

      <h2 className="text-xl font-semibold mb-4">5. Privacy Policy</h2>
      <p className="mb-4">
        We are committed to protecting your privacy. Please review our privacy policy for more information on how we handle your personal data.
      </p>

      <h2 className="text-xl font-semibold mb-4">6. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to change these terms and conditions at any time. Any changes will be posted on our website.
      </p>

      <h2 className="text-xl font-semibold mb-4">7. Contact Us</h2>
      <p>
        If you have any questions about these terms and conditions, please contact us at support@horseridebooking.com.
      </p>
    </div>
  </div>
);

export default TermsAndConditions;

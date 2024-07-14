// src/components/BookingConfirmation.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { generateCalendarInvite } from '../utils/calendarInvite';

const BookingConfirmation = () => {
  const booking = useSelector(state => state.booking);

  React.useEffect(() => {
    if (booking) {
      generateCalendarInvite(booking);
    }
  }, [booking]);

  return (
    booking && (
      <div className=" flex items-center justify-center m-40 mb h-full">
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center text-black">
          <h2 className="text-2xl font-bold mb-4">Thank you for your booking!</h2>
          <p className="text-lg mb-4">You have successfully booked {booking.horse}.</p>
          <p className="text-lg mb-4">A calendar invite has been sent to {booking.email}.</p>
        </div>
      </div>
    )
  );
};

export default BookingConfirmation;

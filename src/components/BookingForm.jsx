// src/components/BookingForm.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bookHorse } from "../actions/bookingActions";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    horse: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookHorse(formData));
    navigate("/confirmation");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4 text-white text-l">
      <h1 className="text-3xl font-bold mb-6">Book Your Horse Ride</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-slate-950 hover:bg-slate-900 p-6 rounded-lg shadow-lg shadow-red-500/50 text-white"
      >
        <label className="block mb-4">
          <span className="">Horse</span>
          <select
            name="horse"
            onChange={handleChange}
            className="form-select mt-1 block w-full rounded-xl p-1 text-black"
            required
          >
            <option value="" className="text-black font-semibold">Select a horse</option>
            <option value="Thunder" className="text-black font-semibold">Black Forest</option>
            <option value="Lightning" className="text-black font-semibold">Blazer</option>
            <option value="Blaze" className="text-black font-semibold">Caspian</option>
            <option value="Storm" className="text-black font-semibold">Camarillo White Horse</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="">Date</span>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-xl p-1 text-black"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="">Time</span>
          <input
            type="time"
            name="time"
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-xl p-1 text-black" 
            required
          />
        </label>
        <label className="block mb-4">
          <span className="">Name</span>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-xl p-1"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="">Email</span>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-xl p-1"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="">Phone</span>
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-xl p-1"
            required
          />
        </label>
        <button
          type="submit"
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

// src/main.jsx or src/App.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import LandingPage from './components/LandingPage.jsx';
import BookingForm from './components/BookingForm.jsx';
import BookingConfirmation from './components/BookingConfirmation.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Terms from './components/TermsAndConditions.jsx';
import Privacy from './components/PrivacyPolicy.jsx';
import Contact from './components/ContactPage.jsx';
import './index.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/confirmation" element={<BookingConfirmation />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </Provider>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

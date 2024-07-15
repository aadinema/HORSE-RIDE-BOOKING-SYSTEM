// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import LandingPage from './components/LandingPage';
import BookingForm from './components/BookingForm';
import BookingConfirmation from './components/BookingConfirmation';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactPage from './components/ContactPage';

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <main className="flex-grow">
        <LandingPage/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/confirmation" element={<BookingConfirmation />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </Provider>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import Footer from './components/Footer';
import { submitAPI } from './API/API';
import './App.css';

function App() {
  const [successfulForm, setSuccessfulForm] = useState(false);
  const navigate = useNavigate();

  const [bookingDetails, setBookingDetails] = useState('');
  
  const submitForm = (formDetails) => {
    setBookingDetails(formDetails);
    const response = submitAPI(formDetails);
    setSuccessfulForm(response);
  };

  useEffect(() => {
    if(successfulForm) {
      setSuccessfulForm(false);
      navigate('/confirmedbooking');
    };
  }, [successfulForm, navigate]);

  return (
    <>
      <Nav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage onSubmit={submitForm} />} />
          <Route path="/confirmedbooking" element={<ConfirmedBooking bookingDetails={bookingDetails} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

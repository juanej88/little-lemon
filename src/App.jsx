import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  const handleSubmit = (formDetails) => {
    console.log('Form Submitted Successfully!');
  };

  return (
    <>
      <Nav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage onSubmit={handleSubmit} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

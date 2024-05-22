import React from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './App.css';
import Booking from './components/booking.js';
import About from './components/about.js';
import Testmonials from './components/testmonials.js';
import Highlights from './components/highlights.js';

function App() {
  return (
    <div className="container">
      <Nav />
      <Booking />
      <Highlights />
      <Testmonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;
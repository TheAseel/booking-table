import React from 'react';
import Header from "./components/Header";
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav'
import './App.css'; 

function App() {
  return (
    <div className="container">  
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
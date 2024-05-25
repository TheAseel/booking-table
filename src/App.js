import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import About from './components/about';
import Testimonals from './components/testmonials';
import Footer from './components/Footer';



function App() {
  return (
 
    <div>
      <Nav/>
      <Main/>
      <Menu/>
      <About/>
      <Testimonals/>
      <Footer/>
    </div>
  );
}

export default App;

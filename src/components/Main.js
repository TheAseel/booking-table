import React from 'react';
import Hero from './assets/hero';
import Highlights from './assets/highlights';
import Testmonials from './assets/testmonials';
import About from './assets/about';
function Main () {
    return (
     <div className='Main'>
     <Hero/>
     <Highlights/>
     <Testmonials/>
     <About/>
     </div>
     
    );
  }

  export default Main;
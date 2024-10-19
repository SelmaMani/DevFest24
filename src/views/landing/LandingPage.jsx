import React from 'react';
import Navbar from './NavBar';
import Hero from './Hero';
import About from './About';
import CallToAction from './CallToAction';
import Footer from './Footer/Footer';

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full ">
     <Hero/>
     <About/>
      <CallToAction/>
      <Footer/>
      
      
    </div>
  );
}

export default LandingPage;

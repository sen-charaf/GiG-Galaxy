import HeaderHomePage from '../components/Navbar homepage';
import HomePage from '../components/HomePage';
import OurService from '../components/OurService';
import WhyUs from '../components/WhyUs';
import Proposition from '../components/Proposition';
import Footer from '../components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import React from 'react';
import OurTeam from '../components/OurTeam';
function LandingPage() {
  React.useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  });
  return (
    <>
      <HeaderHomePage />
      <HomePage/>
      <OurService />
      <WhyUs />
      <Proposition />
      <OurTeam />
      <Footer />
    </>
  )
}

export default LandingPage
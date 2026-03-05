import React from 'react'
// import Banner from '../components/home/Banner'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
// import CallToAction from '../components/home/CallToAction'
import Footer from '../components/home/Footer'
import HowItWorks from '../components/home/HowItWorks'
import HealthCTA from '../components/home/HealthCTA'
import WhyMedWise from '../components/home/WhyMedWise'
import FAQ from '../components/home/FAQ'


const Home = () => {
  return (
    <div id="home">
      <Hero />

      <div id="about">
        <WhyMedWise />
        <HowItWorks />
        <Features />
      </div>

      <HealthCTA />
      <FAQ />

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Home

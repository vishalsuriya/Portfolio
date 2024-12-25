import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import Hero2 from '../Components/Hero2';
import AboutContent from '../Components/AboutContent';
function About() {
  return (
    <div>
      <Navbar />
      <Hero2 heading="ABOUT." text="Im a friendly FullStack Developer."/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
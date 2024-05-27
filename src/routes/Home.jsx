import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import Hero2 from '../Components/Hero2';
import Work from '../Components/Work';
import MySkills from '../Components/MySkills';
import AboutContent from '../Components/AboutContent';
import Form from '../Components/Form';
function home() {
  const color = 'black';
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero2 heading = "PROJECTS." text="Some of my recent works"/>
      <Work />
      <Hero2 heading = "My Skills."/>
      <MySkills/>
      <Hero2 heading="ABOUT ME." text="Im a friendly SoftWare Developer."/>
      <AboutContent />
      <Hero2 heading="CONTACT." text="Lets have a chat"/>
      <Form />
      <Footer />
    </div>
  )
}

export default home
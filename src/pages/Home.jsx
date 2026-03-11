import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Features from '../components/Features.jsx'
import Services from '../components/Services.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Programs from '../components/Programs.jsx'
import Trainers from '../components/Trainers.jsx'
import Transformation from '../components/Transformation.jsx'
import Pricing from "../components/Pricing.jsx";
import Contact from '../components/Contact.jsx'
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <Features />

      <section id="services">
        <Services />
      </section>

      <Testimonials />

      <Programs />

      <Trainers />

      <Transformation />

      <Pricing />

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  )
}

export default Home
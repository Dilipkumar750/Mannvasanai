import React from 'react'
import Hero from './Hero'
import Swipe from './Swipe';
import Banner from './Banner';
import Testmonial from './Testmonial';
import AboutUs from './About';
import Work from './Work';
import Menu from './Menu';
import Contact from './Contact';
import Sepeciality from './Sepeciality';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Swipe/>
      <Testmonial/>
      <AboutUs/>
      <Banner/>
      <Work/>
      <Menu/>
      <Sepeciality/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Intro from '../components/Landing_Intro';
import NewDrops from '../components/Landing_NewDrops';
import '../Styles/Landingpage.css'

const Landing = () => {
  return (
    <div>
        <Header />
        <Intro/>
        <NewDrops/>
        <Footer/>
    </div>
  )
}

export default Landing
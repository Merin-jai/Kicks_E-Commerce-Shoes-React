import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Intro from '../components/Landing_Intro';
import '../Styles/Landingpage.css'

const Landing = () => {
  return (
    <div>
        <Header />
        <Intro/>
        <Footer/>
    </div>
  )
}

export default Landing
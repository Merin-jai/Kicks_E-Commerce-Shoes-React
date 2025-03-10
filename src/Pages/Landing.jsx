import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Intro from '../components/Landing_Intro';
import NewDrops from '../components/Landing_NewDrops';
import Categories from '../components/Landing_Categories';
import Reviews from '../components/Landing_reviews';
import '../Styles/Landingpage.css'

const Landing = () => {
  return (
    <div>
        <Header />
        <Intro/>
        <NewDrops prop=""/>
        <Categories/>
        <Reviews/>
        <Footer/>
    </div>
  )
}

export default Landing
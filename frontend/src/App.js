import React, { Component } from 'react';
import { Route } from 'react-router-dom'
// CSS imports are below
import './assets/styles/css/bootstrap.min.css'
import './assets/styles/css/fontawesome.min.css'
import './assets/styles/css/hamburgers.min.css'
import './assets/styles/main.scss'
// Javascript components are below
import Header from './components/Header/Header'
import HeaderSpacer from './components/Header/HeaderSpacer'
import HeroDisplay from './components/LandingPage/HeroDisplay/HeroDisplay';
import Footer from './components/Footer/Footer';
import RecommendedSection from './components/LandingPage/RecommendedSection/RecommendedSection';
import FlightsPage from './components/FlightsPage/FlightsPage';
import Banner from './components/LandingPage/ChoiceBanner/Banner'
import TestPage from './components/TestPage/TestPage'
const App = () => {
  const getLocation = () =>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      console.log("Geolocation is not supported by this browser.");

    }
  }
  
  const showPosition = (position) => {
    console.log("position.coords.latitude",position.coords.latitude);
    console.log("position.coords.longitude",position.coords.longitude);
  }
  getLocation();
  return (
    <div className="app">
      <Route path='/' component={Header}/>
      <Route path='/' component={HeaderSpacer}/>
      <Route exact path={['/', '/tab/flights', '/tab/hotels', '/tab/cars', '/tab/cruises']} component={HeroDisplay}/>
      <Route exact path={['/', '/tab/flights', '/tab/hotels', '/tab/cars', '/tab/cruises']} component={RecommendedSection}/>
      <Route exact path={['/', '/tab/flights', '/tab/hotels', '/tab/cars', '/tab/cruises']} component={Banner}/>
      <Route exact path='/flights' component={FlightsPage}/>
      <Route exact path='/test-page' component={TestPage}/>  
      <Route path='/' component={Footer}/>
    </div>
  );
}

export default App;

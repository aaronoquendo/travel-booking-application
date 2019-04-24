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

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path='/' component={Header}/>
        <Route path='/' component={HeaderSpacer}/>
        <Route exact path={['/', '/tab/flights', '/tab/hotels', '/tab/cars', '/tab/cruises']} component={HeroDisplay}/>
        <Route exact path={['/', '/tab/flights', '/tab/hotels', '/tab/cars', '/tab/cruises']} component={RecommendedSection}/>
        <Route exact path={['/', '/tab/flights', '/tab/hotels', '/tab/cars', '/tab/cruises']} component={Banner}/>
        <Route exact path='/flights' component={FlightsPage}/>
        <Route path='/' component={Footer}/>
      </div>
    );
  }
}

export default App;

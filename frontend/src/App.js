import React, { Component } from 'react';
import './assets/styles/css/bootstrap.min.css'
import './assets/styles/css/fontawesome.min.css'
import './assets/styles/main.scss'

import Header from './components/Header/Header'
import HeroDisplay from './components/HeroDisplay/HeroDisplay';
import Footer from './components/Footer/Footer';
import RecommendedSection from './components/RecommendedSection/RecommendedSection';
import Banner from './components/Misc/Banner'
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <HeroDisplay />

        <RecommendedSection />
        <Banner />
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './assets/styles/css/bootstrap.min.css'
import './assets/styles/css/fontawesome.min.css'
import './assets/styles/main.scss'

import Header from './components/Header/Header'
import HeroDisplay from './components/HeroDisplay/HeroDisplay';
import Footer from './components/Footer/Footer';
import RecommendedSection from './components/RecommendedSection/RecommendedSection';
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <HeroDisplay />
        <RecommendedSection />
        <Footer />
      </div>
    );
  }
}

export default App;

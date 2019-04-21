import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HotelForm from './DealFinder/HotelForm'
import FlightHotelForm from './DealFinder/FlightHotelForm'
import FlightForm from './DealFinder/FlightForm'
import CarForm from './DealFinder/CarForm'
import CruiseForm from './DealFinder/CruiseForm'
class HeroDisplay extends Component {
  render() {
    return (
      <div className="hero-display">
        <div className="display-wrapper"></div>
        <div className="container hero-display-container">
          <div className="row">
            <div className="category-form col-override col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <Route exact path='/' component={FlightForm} />
              <Route exact path='/tab/flights' component={FlightForm} />
              <Route exact path='/tab/hotels' component={HotelForm} />
              <Route exact path='/tab/flight-hotel' component={FlightHotelForm} />
              <Route exact path='/tab/cars' component={CarForm} />
              <Route exact path='/tab/cruises' component={CruiseForm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroDisplay;

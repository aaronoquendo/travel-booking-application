import React, { Component } from 'react'
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
        <div className="container hero-display-container">
          <div className="row">
            <div className="category-form col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
              <Route exact path='/' component={HotelForm} />
              <Route exact path='/tab/hotels' component={HotelForm} />
              <Route exact path='/tab/flights' component={FlightForm} />
              <Route exact path='/tab/flight-hotel' component={FlightHotelForm} />
              <Route exact path='/tab/cars' component={CarForm} />
              <Route exact path='/tab/cruises' component={CruiseForm} />
            </div>

            <div className="right-ad col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroDisplay;

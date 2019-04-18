import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HotelForm extends Component {
  render() {
    return (
  
    <div className="category-form-container">
      <h1>Save more on your next hotel</h1>
      <h3>Thousands of deals made every day</h3>
      <div className="deal-tabs">
        <Link className="tab tab-first" to="/tab/hotels" style={{background: 'white'}}>Hotels</Link>
        <Link className="tab" to="/tab/flights">Flights</Link>
        <Link className="tab" to="/tab/flight-hotel">Flight + Hotel</Link>
        <Link className="tab" to="/tab/cars">Cars</Link>
        <Link className="tab" to="/tab/cruises">Cruises</Link>
      </div>
      <div className="deal-form hotel-form">
        <div className="container">
          <div className="form-container">
            <input type="text" className="form-control" placeholder="Where to?" />

            <input type="text" className="form-control" placeholder="Check-in - Check-out" />
            <select className="custom-select">
              <option selected value="1">1 Room</option>
              <option value="2">2 Rooms</option>
              <option value="3">3 Rooms</option>
              <option value="4">4 Rooms</option>
              <option value="5">5 Rooms</option>
              <option value="6">6 Rooms</option>
              <option value="7">7 Rooms</option>
              <option value="8">8 Rooms</option>
              <option value="9">9 Rooms</option>
              <option value="9">10+ Rooms</option>
            </select>
            <button className="search-btn">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default HotelForm;
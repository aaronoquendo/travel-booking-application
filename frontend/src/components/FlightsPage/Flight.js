import React, { Component } from 'react'

class Flight extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="flight-container">
        <div className="flight-time-and-locations">
          <div className="trip flight-depart">
            <div className="airline-logo">
              <img src="https://www.skyscanner.net/images/airlines/small/NK.png" alt=""/>
            </div>
            <div className="flight-details">
              <div className="flight-start-time-and-location">
                <span className="start-time">8:35 AM</span>
                <span className="location">LGA</span>
              </div>
              <div className="flight-length">
                <span className="flight-length-and-numOfStops">12h 25m</span>
                <ul className="flight-icon">
                  <li></li>
                </ul>
                <span className="flight-numOfStops">1 stop ORD</span>
              </div>
              <div className="flight-end-time-and-location">
                <span className="end-time">6:00 PM</span>
                <span className="location">LAX</span>
              </div>
            </div>
          </div>
          {/* <div className="trip flight-return">

          </div> */}
        </div>
        <div className="flight-price">
          <span className="numOfDeals">7 Deals from</span>
          <h2 className="price">$736</h2>
          <div className="select-btn-wrapper">
            <button type="submit" class="select-btn" aria-label="Search flights" formaction="/flights/details" >
              Select
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Flight;
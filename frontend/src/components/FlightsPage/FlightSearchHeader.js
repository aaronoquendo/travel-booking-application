import React, { Component } from 'react'

class FlightSearchHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="flight-search-header">

        <div className="search-btn-container">
          <button className="search-btn"><i class="fas fa-search"></i></button>
        </div>

        <div className="search-details">
          <div className="flight-locations">
            <span className="depart-place">New York (JFK)</span>
            <span className="spacer">-</span>
            <span className="destination-place">Los Angeles (LAX)</span>
          </div>
          <div className="travelers-cabinClass">
            <span className="num-of-travelers">1 adult</span>
            <span className="spacer">|</span>
            <span className="cabin-class">Economy</span>
          </div>
        </div>
        <div className="search-dates">
            <div className="search-date">
              <button className="search-btn">
                <i class="fas fa-caret-left"></i>
              </button>
              <input type="text" value="Fri, Apr 26"/>
              <button className="search-btn">
                <i class="fas fa-caret-right"></i>
              </button>
            </div>
            <div className="search-date">
              <button className="search-btn">
                <i class="fas fa-caret-left"></i>
              </button>
              <input type="text" value="Mon, Apr 29"/>
              <button className="search-btn">
                <i class="fas fa-caret-right"></i>
              </button>
            </div>
          </div>
      </div>
    )
  }
}

export default FlightSearchHeader;
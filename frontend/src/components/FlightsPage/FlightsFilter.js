import React, { Component } from 'react'

class FlightsFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="flights-filter">
        <div className="price-alert">
          <button className="price-alert-btn">
            <span><i class="fas fa-bell"></i></span><span className="btn-text">Get Price Alerts</span>
          </button>
        </div>
        <div className="flight-settings">
          <div className="setting stops-setting">
            <div className="setting-header">
              <span className="header-text">Stops</span><span className="header-icon"><i class="fas fa-angle-up"></i></span>
            </div>
            <div className="setting-content">
            
            </div>
          </div>
          <div className="setting departure-setting">
            <div className="setting-header">
              <span className="header-text">Departure times</span><span className="header-icon"><i class="fas fa-angle-up"></i></span>
            </div>
            <div className="setting-content">
            
            </div>
          </div>
          <div className="setting trip-duration-setting">
            <div className="setting-header">
              <span className="header-text">Trips duration</span><span className="header-icon"><i class="fas fa-angle-up"></i></span>
            </div>
            <div className="setting-content">
            
            </div>
          </div>
          <div className="setting airlineType-setting">
            <div className="setting-header">
              <span className="header-text">Airlines</span><span className="header-icon"><i class="fas fa-angle-up"></i></span>
            </div>
            <div className="setting-content">
            
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FlightsFilter;
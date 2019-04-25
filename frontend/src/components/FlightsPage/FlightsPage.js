import React, { Component } from 'react'
import FlightsFilter from './FlightsFilter'
import Flights from './Flights'
import FlightSearchHeader from './FlightSearchHeader'

class FlightsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      from: '',
      to: '',
      numOfPassengers: ''
    }
  }

  render() {
    return (
      <div className="category-form-container">
        <div className="container">
          <div className="row ">
            <div className="content">
              <FlightSearchHeader />
              <div id="flights-row" className="row">
                <FlightsFilter/>
                <Flights/>
              </div>
            </div>



            <div className="right-ads">
              Here is where some flight ads will be displayed
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FlightsPage;
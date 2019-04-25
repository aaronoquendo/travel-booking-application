import React, { Component } from 'react'
import FlightsSorter from './FlightsSorter'
import Flight from './Flight'
class Flights extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.renderFlights = this.renderFlights.bind(this)
  }
  renderFlights () {
    const flights = [1,2,3,4,5,6,7,8,9,10]

    return flights.map( (flight) => <Flight/>)
  }
  render() {
    return (
      <div className="flights-results">
          <FlightsSorter />
          {this.renderFlights()}
          
      </div>
    )
  }
}

export default Flights;
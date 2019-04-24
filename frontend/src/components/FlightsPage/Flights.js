import React, { Component } from 'react'
import FlightsSorter from './FlightsSorter'
import Flight from './Flight'
class Flights extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="flights-results">
          <FlightsSorter />
          <Flight/>
      </div>
    )
  }
}

export default Flights;
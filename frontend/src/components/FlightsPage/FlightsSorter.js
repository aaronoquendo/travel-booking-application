import React, { Component } from 'react'

class FlightsSorter extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="flight-sorter">
        <div className="search-results-and-sortBy">
        <p>464 results</p>
        <div className="sortBy-input">
          <label for="sort-select">Sort by</label>
          <select id="sort-select">
              <option class="fqs-score" value="fqsscore">Best</option>
              <option value="price">Cheapest first</option>
              <option value="duration">Fastest first</option>
              <option value="outbound_departure_time">Outbound: Departure time</option>
              <option value="return_departure_time">Return: Departure time</option>
              <option value="airlines">Airline</option>
              <option value="stops">Stops</option>
            </select>
          </div>
        </div>
        
      </div>
    )
  }
}

export default FlightsSorter;
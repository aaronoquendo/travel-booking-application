import React, { Component } from 'react';

class FlightsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      from: '',
      to: '',
      numOfPassengers: ''
    };
  }

  render() {
    return (
      <div className="category-form-container">
      
        <div className="container">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              Hello this is the filter section
            </div>
            <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
              Hello this is the flights section
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FlightsPage;
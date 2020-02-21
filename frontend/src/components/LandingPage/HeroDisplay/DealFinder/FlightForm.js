import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class FlightForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      from: '',
      to: '',
      numOfPassengers: ''
    };
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleStartDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleEndDateChange(date) {
    this.setState({
      endDate: date
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  // searchFlights () {
  //   location.href = '/flights'
  // }

  getResults = async (event) => {
    event.preventDefault()
    console.log("hello");
    const response = await fetch('http://localhost:5000/api/create-session', { method: 'POST' });
    const sessionKey = await response;
    await console.log("sessionKey",sessionKey); 
  }

  render() {
    return (
      <div className="category-form-container">
        <h1>Looking to save on your flight?</h1>
        <h3>We compare thousands of deals to get you there</h3>
        <div className="deal-form flight-form">
          <div className="container">
            <form>
              <div class="trip-type">
                <label class="trip-type-label-first">
                  <input type="radio" class="trip-type-input" name="trip-type-selector" id="" value="on" />
                  <div class="radio-circle"></div>
                  <span>Roundtrip</span>
                </label>
                <label class="">
                  <input type="radio" class="trip-type-input" name="trip-type-selector" id="" value="on" />
                  <div class="radio-circle"></div>
                  <span>One way</span>
                </label>
                <label class="">
                  <input type="radio" class="" name="trip-type-selector" id="" value="on" />
                  <div class="radio-circle"></div>
                  <span>Multi-city</span>
                </label>
              </div>
              <div class="container inner-input-container">

                <div className="row row-override">
                  <div class="from-and-to-input-container col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="row row-override">
                    <div class="from-input-container col-override col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <div class="from-input">
                        <label class="" htmlFor="">From</label>
                          <input type="text" class="" id="" placeholder="Country, city or airport"
                            name="from"
                            value={this.state.from} 
                            onChange={this.handleInputChange} 
                          />
                          <div id="" role="listbox" class=""></div>
                      </div>
                      <label class="">
                        <input 
                        type="checkbox" 
                        class="" 
                        name="originFlexible" 
                        tabindex="2" 

                        />
                        <span class="checkbox-span">Add nearby airports</span>
                      </label>
                    </div>

                    <div class="to-input-container col-override col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <div class="to-input">
                        <label class="" for="fsc-destination-search">To</label>
                        <div aria-haspopup="listbox" aria-owns="react-autowhatever-fsc-destination-search" aria-expanded="false" class="">
                          <input type="text" class="" aria-invalid="false" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-fsc-destination-search" id="fsc-destination-search" placeholder="Country, city or airport" 
                          name="to"
                          value={this.state.to} 
                          onChange={this.handleInputChange} 
                          
                          />
                          <div id="" role="listbox" class=""></div>
                        </div>
                      </div>
                      <label class="">
                        <input type="checkbox" class="" name="destinationFlexible" tabindex="2" value="on" />
                
                        <span class="BpkCheckbox_bpk-checkbox__label__3g2HI BpkCheckbox_bpk-checkbox__label--small__bboOf">Add nearby airports</span>
                      </label>
                    </div>
                    </div>



                  </div>


                  <div class="depart-return-container col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                    <div class="depart col-override col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <label class="" for="depart-fsc-datepicker-button">Depart</label>
                      <DatePicker 
                        selected={this.state.startDate}
                        onChange={this.handleStartDateChange}
                      />
                    </div>
                    <div class="return col-override col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <label class="" for="return-fsc-datepicker-button">Return</label>
                      <DatePicker 
                        selected={this.state.endDate}
                        onChange={this.handleEndDateChange}
                      />
                    </div>

                    <div className="non-stop-flights-container">
                      <label class="">
                        <input type="checkbox" class="" name="directOnly" value="on" />
                        <span class="">Non-stop flights only</span>
                      </label>
                    </div>

                  </div>

                  <div class="num-passengers-container col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                      <label class="" htmlFor="">Cabin Class &amp; Travelers</label>
                      <select value={this.state.numOfPassengers} onChange={this.handleInputChange}>
                        <option value="1">1 adult, Economy</option>
                        <option value="2">2 adult, Economy</option>
                        <option value="3">3 adult, Economy</option>
                        <option value="4">4 adult, Economy</option>
                        <option value="5">5 adult, Economy</option>
                        <option value="6">6 adult, Economy</option>
                        <option value="7">7 adult, Economy</option>
                        <option value="4">8 adult, Economy</option>
                      </select>

                  </div>
                
                </div>
              </div>

              <div className="search-btn-wrapper">
                <button type="submit" class="search-btn" aria-label="Search flights" onClick={this.getResults} >
                  Search for flights
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default FlightForm;
import React, { Component } from 'react';
import unirest from 'unirest';
import './TestPage.scss'
class TestPage extends Component {

  componentDidMount(){
    this.getQuotes()
  }

getQuotes = async () => {

    let request = await unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-09-01?inboundpartialdate=2019-12-01")
    .header("X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "5dae32ec17mshe744a3d9926963dp124febjsn7a8c86da9063")
    .end(async (result) => {
      console.log(result.body,"yoooo")
      console.log(result.status, result.headers, result.body);
    
    })

    console.log("my request",request)
    



}


  render() {
  
    return (
      <div className="TestPage">
        I am the test page
      </div>
    );
  }
}

export default TestPage;


const express = require('express');
module.exports = () => {
  const app = express.Router();
  const unirest = require('unirest');
  const XRapidAPIHost = 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
  const XRapidAPIKey = 'e3b6d93627mshf46cd80f5e8dd0cp1eab8cjsnd7d532b2c154';

  //Session Creator
  app.post('/api/create-session', (req, res) => {
    unirest.post("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0")
    .header("X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "4a3469379cmshfaa5b11bfaeb1cap1727a0jsnb4435547aec4")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .send("inboundDate=2019-09-10")
    .send("cabinClass=business")
    .send("children=0")
    .send("infants=0")
    .send("country=US")
    .send("currency=USD")
    .send("locale=en-US")
    .send("originPlace=SFO-sky")
    .send("destinationPlace=LHR-sky")
    .send("outboundDate=2019-09-01")
    .send("adults=1")
    .end( async (result) =>{
      // res.set('Content-Type', 'application/json');
      console.log(result).headers.location;
      // res.json(result.headers.location);
      const {location} = await result.headers

      // unirest.get(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/${location}?pageIndex=0&pageSize=10`)
      // .header("X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
      // .header("X-RapidAPI-Key", "5dae32ec17mshe744a3d9926963dp124febjsn7a8c86da9063")
      // .end(function (result) {
      //   // res.status(200).send(result);
      //   console.log(result.status, result.headers, result.body);
      // });



    });

  });

    //Poll session results
    app.get('/api/poll-session-results/:sessionkey', (req, res) => {
      // const { sessionkey } = req.params;
      unirest.get(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/${result.headers.location}?pageIndex=0&pageSize=10`)
      .header("X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
      .header("X-RapidAPI-Key", "5dae32ec17mshe744a3d9926963dp124febjsn7a8c86da9063")
      .end(function (result) {
        res.status(200).send(result.body);
        console.log(result.status, result.headers, result.body);
      });
    
    });


  //Localisation Routes
  app.get('/api/quotes', (req, res) => {
    unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-12-01?inboundpartialdate=2019-12-01")
    .header("X-RapidAPI-Host", XRapidAPIHost)
    .header("X-RapidAPI-Key", XRapidAPIKey)
    .end(async (result) => {
      res.status(200).send(result.body);
    });
  
  });
  
  app.get('/api/markets', (req, res) => {
    unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US")
    .header("X-RapidAPI-Host", XRapidAPIHost)
    .header("X-RapidAPI-Key", XRapidAPIKey)
    .end(function (result) {
      res.status(200).send(result.body);
    });
  
  });
  
  app.get('/api/currencies', (req, res) => {
    unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies")
    .header("X-RapidAPI-Host", XRapidAPIHost)
    .header("X-RapidAPI-Key", XRapidAPIKey)
    .end(function (result) {
      res.status(200).send(result.body);
    });
  });

  // List of Places
  app.get('/api/locales', (req, res) => {
    unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/locales")
    .header("X-RapidAPI-Host", XRapidAPIHost)
    .header("X-RapidAPI-Key", XRapidAPIKey)
    .end(function (result) {
      res.status(200).send(result.body);
    });
  });

  // List of Places
  app.get('/api/locales', (req, res) => {
    unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=new+york")
    .header("X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "5dae32ec17mshe744a3d9926963dp124febjsn7a8c86da9063")
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
    });
  });




  // Quotes
  app.get('/api/quotes', (req, res) => {
    unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/JFK-sky/DPS-sky/2019-09-01?inboundpartialdate=2019-08-02")
    .header("X-RapidAPI-Host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "5dae32ec17mshe744a3d9926963dp124febjsn7a8c86da9063")
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
    });
  });


  return app;
};


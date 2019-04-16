import React, { Component } from 'react';
import './assets/styles/css/bootstrap.min.css'
import './assets/styles/css/fontawesome.min.css'
import './assets/styles/main.scss'

import Header from './components/Header/Header'
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
      </div>
    );
  }
}

export default App;

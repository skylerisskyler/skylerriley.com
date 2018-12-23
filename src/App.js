import React, { Component } from 'react';

import './App.css';

import { Navbar } from './Navbar'
import { Landing } from './Landing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import dna from './images/dna.svg.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={dna} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dungrawala Lab</h1>
        </header>
        <p className="App-intro">Dr. Huzefa Dungrawala</p>
      </div>
    );
  }
}

export default App;

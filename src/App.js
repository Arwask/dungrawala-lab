import React, { Component } from 'react';
import dna from './images/dna.svg.png';
import './App.css';
import Nav from './Nav/Nav';
import lab from './images/logo-edited.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="headerImg">
          <Nav />
          <img src={lab} alt="lab setup" className="navImg" />
        </div>
        <header className="App-header">
          <h1 className="App-title">Welcome to Dungrawala Lab</h1>
        </header>
        <p className="App-intro">Dr. Huzefa Dungrawala</p>
      </div>
    );
  }
}
export default App;

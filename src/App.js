// @flow

import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to MagicCityReact.com</h2>
        </div>
        <p className="App-intro">
          Full site and details coming soon, until then join us here:
          <p>
            <a href ="https://facebook.com/MagicCityReact">Facebook</a>
          </p>
          <p>
            <a href ="https://twitter.com/MagicCityReact">Twitter</a>
          </p>
          <p>
            <a href ="https://discord.gg/2ykvzUc">Discord</a>
          </p>
          <p>
            <a href ="https://instagram.com/MagicCityReact">Instagram</a>
          </p>
          <p>
            <a href ="https://Github.com/MagicCityReact">GitHub</a>
          </p>
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import FetchComponent from './FetchComponent';
import CounterComponent from './CounterComponent';
import TitleChangerComponent from './TitleChangerComponent';
import './App.css';

class App extends Component {
  state = { a: true };
  render() {
    return (
      <div className="App">
        <FetchComponent />
        <CounterComponent />
        <TitleChangerComponent />
      </div>
    );
  }
}

export default App;

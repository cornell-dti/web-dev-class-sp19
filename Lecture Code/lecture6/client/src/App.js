import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    foundTaco: false,
    randomTaco: {},
    helloData: {},
    postData: {},
  };
  componentDidMount = () => {

    //first line does a get request on the api, which returns a PROMISE
    fetch('http://taco-randomizer.herokuapp.com/random/', {method: 'GET'})

    // the promise must be turned into a json
        .then(response => response.json())

        // which can then be added to the state
        .then(responseJSON => this.setState(
            {foundTaco: true, randomTaco: responseJSON}));
    //first line does a get request on the api, which returns a PROMISE
    fetch('/api/hello', {method: 'GET'})

    // the promise must be turned into a json
        .then(response => response.json())

        // which can then be added to the state
        .then(responseJSON => this.setState({helloData: responseJSON}));
  };

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              {this.state.helloData.express}
              {this.state.foundTaco ? this.state.randomTaco.condiment.url : ""}
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class FetchComponent extends Component {
  state = {
    foundTaco: false,
    randomTaco: {},
  }

  //when the component is ready to render, start the fetch statement
  componentDidMount = () => {

    //first line does a get request on the api, which returns a PROMISE
    fetch('http://taco-randomizer.herokuapp.com/random/', { method: 'GET' })

      // the promise must be turned into a json
      .then(response => response.json())

      // which can then be added to the state
      .then(responseJSON => this.setState({ foundTaco: true, randomTaco: responseJSON }));

  }

  render() {
    const { foundTaco, randomTaco } = this.state;
    return (
      <div>
        <h1>Randomly Generated Taco Ingredients</h1>
        {foundTaco && (
          <div>
            <p>Condiment: {randomTaco.condiment.name}</p>
            <p>Mixin: {randomTaco.mixin.name}</p>
            <p>Base layer: {randomTaco.base_layer.name}</p>
            <p>Seasoning: {randomTaco.seasoning.name}</p>
            <p>Shell: {randomTaco.shell.name}</p>
          </div>
        )}
      </div>
    );
  }
}

export default FetchComponent;

import React, { Component } from 'react';

export default class BrokenComponent extends Component {
  state = { name: 'Random User' };

  sayHelloToSamInstead() {
    this.state = { name: 'Sam' };
  }

  render() {
    const { name } = this.state;

    /// BROKEN: Why isn't Sam greeted? Check the example code to see the difference.
    /// You can also try to prettify the component, but that's completely optional.

    return (
      <div>
        <div>
          {'Hello '}
          {name}
          .
        </div>
        <button type="button" onClick={this.sayHelloToSamInstead}>Say Hello to Sam instead</button>
      </div>
    );
  }
}

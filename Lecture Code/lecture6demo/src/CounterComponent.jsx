import React, { Component } from 'react';

export default class CounterComponent extends Component {
  state = { counter: 0 };

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(prevState => ({ counter: prevState.counter + 1 })),
      100,
    );
  }

  componentWillUnmount() {
    /*
     * Without the following line, there can be a warning like the following:
     *
     * Warning: Can't perform a React state update on an unmounted component.
     * This is a no-op, but it indicates a memory leak in your application.
     * To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
     */
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>Refreshing Counter</h1>
        <div>{this.state.counter}</div>
      </div>
    );
  }
}

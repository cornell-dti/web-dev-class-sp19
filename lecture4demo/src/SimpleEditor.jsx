import React, { Component } from 'react';

export default class SimpleEditor extends Component {
  state = { name: '' };

  changeName = (e) => {
    const name = e.currentTarget.value;
    this.setState({ name });
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <div>{name}</div>
        <input type="text" placeholder="type your name" value={name} onChange={this.changeName} />
      </div>
    );
  }
}

import React, { Component } from 'react';
import styles from './App.module.css'

export default class SimpleEditor extends Component {
  state = { name: '' };

  changeName = (e) => {
    const name = e.currentTarget.value;
    this.setState({ name });
  };

  hello = ({name}) => { return <p> Hello, {name} </p>}

  render() {
    const { name } = this.state;
    return (
      <div>
        <div>{(name) ? this.hello({name}) : ""}</div>
        <input
          className={styles.InputBox}
          type="text"
          placeholder="Type your name..."
          value={name}
          onChange={this.changeName} />
      </div>
    );
  }
}

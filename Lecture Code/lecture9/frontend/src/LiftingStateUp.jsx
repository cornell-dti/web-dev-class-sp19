import React, { Component } from 'react';

const List = ({ messages }) => <div>{messages.map(msg => <div>{msg}</div>)}</div>;

export class MessageAdder extends Component {
  state = { newMessage: '' };

  onNewMessageChange = (e) => this.setState({ newMessage: e.currentTarget.value });
  buttonOnClick = () => {
    this.props.onAdd(this.state.newMessage);
    this.setState({ newMessage: '' });
  };

  render() {
    return (
      <div>
        <h4>Adder</h4>
        <div>
          <input value={this.state.newMessage} onChange={this.onNewMessageChange} />
          <button onClick={this.buttonOnClick}>Submit</button>
        </div>
      </div>
    );
  }
}

export default class LiftingStateUp extends Component {
  state = { messages: [] };

  onAdd = (msg) => this.setState(({ messages }) => ({ messages: [...messages, msg] }));

  render() {
    return (
      <div>
        <h3>Lifting State Up</h3>
        <List messages={this.state.messages} />
        <MessageAdder onAdd={this.onAdd} />
      </div>
    );
  }
}

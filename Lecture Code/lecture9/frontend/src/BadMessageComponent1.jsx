import React, { Component } from 'react';

export default class BadMessageComponent extends Component {
  state = { messages: [], newMessage: '' };

  onNewMessageChange = (e) => this.setState({ newMessage: e.currentTarget.value });

  onSubmitNew = () => this.setState(({ messages, newMessage }) => ({
    messages: [...messages, newMessage], newMessage: ''
  }));

  render() {
    return (
      <div>
        <h3>Bad Message Component 1</h3>
        <div>{this.state.messages.map(msg => <div>{msg}</div>)}</div>
        <div>
          <h4>Adder</h4>
          <div>
            <input value={this.state.newMessage} onChange={this.onNewMessageChange} />
            <button onClick={this.onSubmitNew}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

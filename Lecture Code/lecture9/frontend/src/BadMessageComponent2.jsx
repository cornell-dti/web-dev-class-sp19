import React, { Component } from 'react';

class List extends Component {
  state = { messageList: [] };
  addMessage = (msg) => this.setState(({ messageList }) => ({ messageList: [...messageList, msg] }));
  render() {
    return <div>{this.state.messageList.map(msg => <div>{msg}</div>)}</div>;
  }
}

class Adder extends Component {
  state = { newMessage: '' };
  onNewMessageChange = (e) => this.setState({ newMessage: e.currentTarget.value });
  onSubmitNew = () => {
    this.props.listRef.current.addMessage(this.state.newMessage);
    this.setState({ newMessage: '' });
  };
  render() {
    return (
      <div>
        <h4>Adder</h4>
        <div>
          <input value={this.state.newMessage} onChange={this.onNewMessageChange} />
          <button onClick={this.onSubmitNew}>Submit</button>
        </div>
      </div>
    );
  }
}

export default class BadMessageComponent2 extends Component {
  listRef = React.createRef();
  render() {
    return (
      <div>
        <h3>Bad Message Component 2</h3>
        <List ref={this.listRef} />
        <Adder listRef={this.listRef} />
      </div>
    )
  }
}

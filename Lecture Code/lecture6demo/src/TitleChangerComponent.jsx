import React, { Component } from 'react';

export default class TitleChangerComponent extends Component {
  state = { text: '' };

  componentDidUpdate() {
    document.title = this.state.text;
  }

  onTextChange = (e) => this.setState({ text: e.currentTarget.value });

  render() {
    return (
      <div>
        <h1>Title Changer</h1>
        <input type="text" value={this.state.text} onChange={this.onTextChange} />
      </div>
    );
  }
}

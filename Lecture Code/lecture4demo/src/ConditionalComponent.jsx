import React, { Component } from 'react';

export default class ConditionalComponent extends Component {
  //state can be set without a constructor
  state = { display: true };

  changeDisplayState = (e) => {
    this.setState({ display: !this.state.display });
  }

  render() {
    return (
      //if the state's display attribute is true, then the div in the brackets will be displayed
      //the button changes the display attribute in the state (nothing new, we saw this last week)
      <div>
        {this.state.display && <div>The display attribute of the state is currently true!</div>}
        <button onClick={this.changeDisplayState}>Show/hide component</button>
      </div>
    )
  }
}

import React, { Component } from 'react';

export default class ConditionalComponent extends Component {
  // state can be set without a constructor
  state = { display: true };

  changeDisplayState = (e) => {
    this.setState({ display: !this.state.display });
  };

  render() {
    return (
      // if the state's display attribute is true, then the div in the brackets will be displayed
      // the button changes the display attribute in the state (nothing new, we saw this last week)

      /*
       * Explanation for line 30:
       *
       * If this.state.display is true, due to the short-circuiting behavior, the <div>...</div>
       * expression will be retured.
       * In general, true && expr will be evaluated to expr.
       *
       * If this.state.display is false, due to the short-circuiting behavior, false will be
       * directly returned without even evaluating the <div>...</div> part. Since React does not
       * render the boolean 'false', indeed nothing will show up.
       * In general, false && expr will be evaluated to false, without even trying to evaluate expr.
       */

      <div>
        {this.state.display && <div>The display attribute of the state is currently true!</div>}
        <button onClick={this.changeDisplayState}>Show/hide component</button>
      </div>
    )
  }
}

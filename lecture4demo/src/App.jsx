import React, { Component } from 'react';
import SimpleApp from './SimpleApp';
import DataDrivenApp from './DataDrivenApp';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>Simple</h3>
          <SimpleApp />
        </div>
        <div>
          <h3>Data Driven</h3>
          <DataDrivenApp />
        </div>
        {/* */}
      </div>
    )
  }
}

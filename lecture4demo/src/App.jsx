import React, { Component } from 'react';
import SimpleApp from './SimpleApp';
import DataDrivenApp from './DataDrivenApp';
import ContactCardAdder from './ContactCardAdder';

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
        <div>
          <h3>Simple Editor</h3>
          <div>TODO</div>
        </div>
        <div>
          <h3>Complex Editor</h3>
          <ContactCardAdder />
        </div>
        {/* coding challenge: connect data driven app with contact card adder */}
      </div>
    )
  }
}

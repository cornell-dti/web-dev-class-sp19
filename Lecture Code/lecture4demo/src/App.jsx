import React, { Component } from 'react';
import SimpleApp from './SimpleApp';
import DataDrivenApp from './DataDrivenApp';
import ContactCardAdder from './ContactCardAdder';
import SimpleEditor from './SimpleEditor';
import styles from './App.module.css'
import FunctionalComponentExamples from './FunctionalComponentExamples';

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div>
          <h3 style={{ marginTop: '0', paddingTop: '1em' }}>Simple</h3>
          <SimpleApp />
        </div>
        <div>
          <h3>Data Driven</h3>
          <DataDrivenApp />
        </div>
        <div>
          <h3>Simple Editor</h3>
          <SimpleEditor />
        </div>
        <div>
          <h3>Complex Editor</h3>
          <ContactCardAdder />
        </div>
        <div>
          <h3>Functional Components</h3>
          <FunctionalComponentExamples />
        </div>
        {/* coding challenge: connect data driven app with contact card adder */}
      </div>
    )
  }
}

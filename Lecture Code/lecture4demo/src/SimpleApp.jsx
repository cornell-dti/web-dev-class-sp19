import React, { Component } from 'react';
import styles from './App.module.css';

export default class SimpleApp extends Component {
  render() {
    // when using jsx in multiline, remember to add parenthesis to help the parser!
    return (
      <div>
        <div className={styles.ContactCard}>
          <h4>Justin Tran</h4>
          <p>jtt65@cornell.edu</p>
        </div>
        <div className={styles.ContactCard}>
          <h4>Aram Baghdassarian</h4>
          <p>acb352@cornell.edu</p>
        </div>
      </div>
    );
  }
}
